import React from "react"

import "../styles/Body.css"

export const Home = () => {
  return (
    <main>
      <div className="scene-img">
        <div className="scene-container1">
          <div>
            <center>
              <img className="scene-logo" src="/logo.png" alt="Logo" />
            </center>
          </div>
          <div>
            <center>
              <p style={{ fontSize: "2rem" }}>
                Dangerous Digestion is a video game
                <br />
                where you play as a character
                <br />
                which has been eaten by a human.
                <br /> You have to survive every digestion organ in the body,
                <br />
                and you have to answer some questions about those
                <br />
                or you will die.
                <br /> <br />
                Good luck!
              </p>
            </center>
          </div>
          <div>
            <center>
              <button onClick={() => (window.location.href = "/download")} className="scene-play-button">
                PLAY NOW FOR FREE
              </button>
            </center>
          </div>
        </div>
      </div>
    </main>
  )
}
