import { React, useState } from "react"

import "../styles/DownloadBody.css"

export const Download = () => {
  const [download, setDownload] = useState("windows")

  return (
    <main>
      <div className="download-background">
        <div className="download-container">
          <img className="title-download" src="/logo.png" alt="" />
          <div className="download-selector">
            <button
              onClick={() => setDownload("windows")}
              className={download === "windows" ? "download-selector-button-current" : "download-selector-button"}
            >
              Windows
            </button>
            <button
              onClick={() => setDownload("macos")}
              className={download === "macos" ? "download-selector-button-current" : "download-selector-button"}
            >
              macOS
            </button>
            <button
              onClick={() => setDownload("linux")}
              className={download === "linux" ? "download-selector-button-current" : "download-selector-button"}
            >
              Linux
            </button>
          </div>
          <div className="download">
            {download === "windows" ? (
              <div>
                <p className="download-title">Download for Windows</p>
                <div>
                  <a href="/dangerous-digestion-setup.exe" target="_blank" download>
                    <button className="download-button">64-bit</button>
                  </a>
                  <a href="/dangerous-digestion-setup.exe" target="_blank" download>
                    <button className="download-button">32-bit</button>
                  </a>
                </div>
              </div>
            ) : download === "macos" ? (
              <div>
                <p className="download-title">Download for macOS</p>
                <div>
                  <h2>Releasing soon</h2>
                </div>
              </div>
            ) : (
              <div>
                <p className="download-title">Download for Linux</p>
                <div>
                  <h2>Releasing soon</h2>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </main>
  )
}
