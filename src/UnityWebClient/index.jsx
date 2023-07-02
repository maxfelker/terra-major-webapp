import { Fragment, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from './styles.module.css';
import { createUnityClientToken } from './service.unity-client';

function generatePath(suffix) {
  const version = import.meta.env.VITE_BUILD_VERSION;
  const buildDir = import.meta.env.VITE_BUILD_BASE_URL;

  return `${buildDir}/${version}.${suffix}`;
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
    const fetchTokenAndPassToUnity = async () => {
      const response = await createUnityClientToken();
      if (isLoaded && response.token) {
          sendMessage("Core", "SetUnityClientJWT", response.token);
      } else {
        console.error('Failed to fetch JWT token');
      }
    };

    fetchTokenAndPassToUnity();
  }, [isLoaded, unityProvider, sendMessage]);

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
