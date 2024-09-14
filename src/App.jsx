import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ApiAdvices from './pages/ApiAdvices'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Collaborators from './pages/Collaborators'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ApiAdvices' element={<ApiAdvices />} />
        <Route path='/Collaborators' element={<Collaborators />} />
      </Routes>
      <Footer />
    </>
  )
}
