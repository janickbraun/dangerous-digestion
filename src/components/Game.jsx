import React from "react"
import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
  loaderUrl: "build/HTML.loader.js",
  dataUrl: "build/HTML.data",
  frameworkUrl: "build/HTML.framework.js",
  codeUrl: "build/HTML.wasm",
})

export default function Game() {
  return (
    <div>
      <Unity unityContext={unityContext} />
    </div>
  )
}
