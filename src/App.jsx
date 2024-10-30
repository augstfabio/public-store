
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Clothes from './pages/Clothes'
import Diverse from './pages/Diverse'
import Electronics from './pages/Electronics'
import Furniture from './pages/Furniture'
import Footer from './components/Footer'
import ControlPanel from './pages/ControlPanel'
import Done from './pages/Done'
import ScrollToTop from './tools/ScrollToTop'
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/diverse' element={<Diverse />}></Route>
          <Route path='/electronics' element={<Electronics />}></Route>
          <Route path='/furniture' element={<Furniture/>}></Route>
          <Route path='/clothes' element={<Clothes />}></Route>
          <Route path='/control-panel' element={<ControlPanel/>}></Route>
          <Route path='/control-panel/done' element={<Done/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
