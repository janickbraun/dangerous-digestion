import React from "react"

import "../styles/Body.css"

export const Home = () => {
  return (
    <main>
      <div className="scene-img">
        <div className="scene-container1">
          <div>
            <img className="scene-logo" src="/logo.png" alt="" />
          </div>
          <div>
            <button onClick={() => (window.location.href = "/download")} className="scene-play-button">
              PLAY NOW FOR FREE
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
