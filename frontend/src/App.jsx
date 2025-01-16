import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import Card from './pages/Card'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './componnents/Navbar'
import Footer from './componnents/Footer'
import SearchBar from './componnents/SearchBar'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     
       <Navbar/>
       <SearchBar/>
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/card' element={<Card/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
