import React from "react"
import "../styles/DownloadBody.css"

export default function News() {
  return (
    <main>
      <div className="download-background">
        <div className="download-container">
          <center>
            <img className="title-download" src="/logo.png" alt="Logo" />
            <h2>If you have any Problems, Questions or Suggestions please tell us about it!</h2>
            <h3>
              Email:{" "}
              <a id="mail" href="mailto:sysoutinfo@gmail.com">
                sysoutinfo@gmail.com
              </a>
            </h3>
          </center>
        </div>
      </div>
    </main>
  )
}
