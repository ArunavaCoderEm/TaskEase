import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

export default function Page() : React.ReactNode {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}
