import React from "react"
import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
  loaderUrl: "build/HTML.loader.js",
  dataUrl: "build/HTML.data.gz",
  frameworkUrl: "build/HTML.framework.js.gz",
  codeUrl: "build/HTML.wasm.gz",
})

export default function Game() {
  return (
    <div>
      <Unity unityContext={unityContext} />
    </div>
  )
}
