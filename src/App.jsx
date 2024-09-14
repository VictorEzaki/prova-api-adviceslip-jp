import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ApiAdvices from './pages/ApiAdvices'
import About from './pages/About'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ApiAdvices' element={<ApiAdvices />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}
