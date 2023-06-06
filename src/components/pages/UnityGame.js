import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./UnityGame.css";

function UnityGame() {
  const { unityProvider } = useUnityContext({
    codeUrl: "/build/8LevelBuild.wasm",
    frameworkUrl: "/build/8LevelBuild.framework.js",
    dataUrl: "/build/8LevelBuild.data",
    loaderUrl: "/build/8LevelBuild.loader.js",
  });

  return <Unity unityProvider={unityProvider} className="Platformer" />;
}

export default UnityGame;
