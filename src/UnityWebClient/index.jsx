import { Fragment, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from './styles.module.css';

function generatePath(suffix) {
  const version = import.meta.env.VITE_BUILD_VERSION;
  const buildDir = import.meta.env.VITE_BUILD_BASE_URL;

  return `${buildDir}/${version}_web.${suffix}`;
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
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext(config);

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

