import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    <Header />
    <Home />
    <Footer />
    <BrowserRouter>
      
    </BrowserRouter>
    </>
  )
}

export default App
