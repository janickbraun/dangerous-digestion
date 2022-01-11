import React from "react"
import "./styles/app.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from "./components/Home"
import { Download } from "./components/Download"
import News from "./components/News"
import Support from "./components/Support"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import WebPC from "./components/WebPC"
import WebMobile from "./components/WebMobile.jsx"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        <Route path="/web-pc" element={<WebPC />} />
        <Route path="/web-mobile" element={<WebMobile />} />
      </Routes>
      <Footer />
    </Router>
  )
}
