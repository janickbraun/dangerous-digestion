import React from "react"

import "../styles/Header.css"

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div onClick={() => (window.location.href = "/")} className="logo">
          <img className="logo-name-img" src="/logo.png" alt="logo" />
        </div>
        <div className="nav-item-container">
          <button onClick={() => (window.location.href = "/news")} className="nav-item">
            <p>News</p>
          </button>
          <button onClick={() => (window.location.href = "/support")} className="nav-item">
            <p>Support</p>
          </button>
        </div>
      </nav>
    </header>
  )
}
