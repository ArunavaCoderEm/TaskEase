import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
// import { useState } from "react";
// import { Todo } from "./Model";

export default function Page() : React.ReactNode {

  // const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}
