import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from "./Page/Home"
import About from "./Page/About"
import Contact from "./Page/contact"
import Service from "./Page/service"
const App = () => {
  return (
    <>
    {/* <Header/>
    <Footer/> */}
    <Navbar/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/contact"element={<Contact/>}
      <Route path="/service"element={<Service/>}

       
      
    </Routes>
    </>
  )
}
export default App

