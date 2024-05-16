import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import About from "./Pages/About";
import Features from "./Pages/Features";
import Footer from "./Components/Footer";

export default function Page() : React.ReactNode {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/features' element={<Features/>} />
      </Routes>
      <Footer/>
    </>
  )
}
