import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Gallery from './components/Gallery'
import Tentang from './components/Tentang'
import Penghargaan from './components/Penghargaan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Tentang />
      <Features />
      {/* <Chatbot /> */}
      <Gallery />
      <Penghargaan />
      <Footer />
    </div>
  )
}

export default App
