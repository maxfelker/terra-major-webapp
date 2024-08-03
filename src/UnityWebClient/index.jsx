import { Fragment, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from './styles.module.css';

function generatePath(suffix) {
  const version = localStorage.getItem('build-version');
  const buildDir = localStorage.getItem('build-base-url');

  return `${buildDir}/${version}/${version}.${suffix}`;
}

function generateConfig() {

  return {
    loaderUrl: generatePath('loader.js'),
    dataUrl: generatePath('data'),
    frameworkUrl: generatePath('framework.js'),
    codeUrl: generatePath('wasm'),
  }
}

export default function UnityWebClient() {
  const config = generateConfig();
  const { unityProvider, loadingProgression, isLoaded, sendMessage } = useUnityContext(config);

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useEffect(
    function () {
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);

      return function () {
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );

  useEffect(() => {
    const initGame = async () => {
      const token = sessionStorage.getItem('unity-client-token');
      if(isLoaded && token) {
        const baseUrl = localStorage.getItem('apiBaseUrl');
        const clientConfig = {
          baseUrl,
          token
        }
        sendMessage("Core", "InitClient", JSON.stringify(clientConfig))
      }
    };
    initGame();
  }, [isLoaded, sendMessage]);

  return (
    <Fragment>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        devicePixelRatio={devicePixelRatio}
        className={styles.unityClient}
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </Fragment>
  );
}
