import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./UnityGame.css";

function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/8LevelBuild.loader.js",
    dataUrl: "/build/8LevelBuild.data",
    frameworkUrl: "/build/8LevelBuild.framework.js",
    codeUrl: "/build/8LevelBuild.wasm",
  });

  return (
    <>
      <Unity unityProvider={unityProvider} className="Platformer" />
    </>
  );
}

export default UnityGame;
