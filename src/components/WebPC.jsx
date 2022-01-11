import React from "react"

export default function WebPC() {
  return (
    <div>
      <center>
        <iframe title="game1" src="https://itch.io/embed/1348943" height="167" width="55%" frameborder="0">
          <a href="https://karottenkopf.itch.io/dangerous-digestion">Dangerous Digestion by Janick</a>
        </iframe>
      </center>
      <br />
      <center>
        <iframe
          title="game2"
          id="webgl_iframe"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          allowfullscreen=""
          allowvr=""
          mozallowfullscreen="true"
          src="https://play.unity3dusercontent.com/webgl/5fb2bfe5-ed44-4f03-bedd-a455313715c1?screenshot=false&embedType=embed"
          width="55%"
          height="640"
          onmousewheel=""
          webkitallowfullscreen="true"
        ></iframe>
      </center>
    </div>
  )
}
