import React from "react"
import "./styles/app.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from "./components/Home"
import { Download } from "./components/Download"
import News from "./components/News"
import Support from "./components/Support"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import Game from "./components/Game"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </Router>
  )
}
