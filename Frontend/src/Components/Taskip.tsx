import React, { useState, useRef, useEffect } from "react";
import Tododisplay from '../Components/Tododisplay';
import Updatemodal from "../Components/Updatemodal"
import axios from "axios";
import Model from '../Model'
import Alert from "./Alert";
  
let id:string | null = sessionStorage.getItem("id");
let toupdate: Model[] = []; 


export default function Taskip(): React.ReactNode {

  const [input , setInput] = useState<string>("");
  const [task , setDesc] = useState<string>("");
  const [val , setval] = useState<number>(0);
  const [modal , setmodal] = useState<boolean>(false);
  const [alert , setalert] = useState<boolean>(false);
  const [data , setData] = useState<any[]>([]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [altit, setaltit] = useState<string>("");
  const [aldesc, setaldesc] = useState<string>("");


  const datasetRef = useRef<any>([]);

  const posttask = async (h:string, d:string, p:number) => {
    const data = {
        todohead : h,
        tododesc : d,
        todoprio : p,
        id : id
    }
    await axios.post("https://taskeaseserver.vercel.app/users/data/todoadd",data).then((res:any) => {
        console.log(res);
    });
  }

  const getdata = async () => {
    if(id) {
      await axios.get(`https://taskeaseserver.vercel.app/users/data/todoget/${id}`).then((res:any) => {
        setData(res.data.iddata)
      });
    }
    else {
      setaltit("Try sign in again")
      setaldesc("Data Can't be fetched")
      setalert(true)
      setTimeout(() => {
        setalert(false);
      }, 2000);
    }
  }


  const handleSubmit = (e: any): any => {
    e.preventDefault();
    const newTask = { input, task, val }; 
    if (!initialized) {
      datasetRef.current.push(newTask);
      setData(datasetRef.current)
      setInitialized(true);
    } else {
      datasetRef.current = [...datasetRef.current, newTask]; 
      setData(datasetRef.current)
    }
    if(id) {
      posttask(input, task, val);
      setaltit("Task Added")
      setaldesc("Successfully")
      setalert(true)
      setTimeout(() => {
        setalert(false);
      }, 2000);
    }
    else {
      setalert(true)
      setaltit("Try sign in")
      setaldesc("Task not added")
      setTimeout(() => {
        setalert(false);
      }, 2000);
    }
    setInput("");
    setDesc("");
    setval(0);
  }

  const deletetask = async (deid:any) => {
    setaltit("Task Completed")
    setaldesc("Successfully")
    setalert(true)
    await axios.delete(`https://taskeaseserver.vercel.app/users/data/tododelete/${deid}`, {
      data : {id : id}
    }).then((res:any) => {
      console.log(res)
      
      setTimeout(() => {
        setalert(false);
      }, 2000);
    });
  }

  const togmodal = () => {
    setmodal( ! modal)
  }

  const updatefunc =  (value:any) => {
    toupdate = data[value];
  }


  useEffect(() => {
    getdata();
  },[handleSubmit, updatefunc, posttask])

  return (
    <>
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 mb-[22px] w-4/5 m-auto my-10 shav p-2 rounded-md justify-center">
        <h1 className="text-center bg-clip-text font-extrabold text-3xl bg-gradient-to-r from-blue-400 to-blue-700 text-transparent tracking-20">TaskEase</h1>
        <form onSubmit={handleSubmit} className="m-auto my-5 justify-center align-middle items-center">
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="block text-blue-700 font-semibold text-xl mx-auto shab ring-0 outline-none border-none text-center placeholder:text-blue-700 p-3 rounded-md sm:w-full lg:w-3/5 md:w-4/5" placeholder="Enter Task Here ..." type="text" required />
            <textarea 
            value={task}
            onChange={(e) => setDesc(e.target.value)}
            className="block mt-5 text-blue-700 font-semibold text-xl mx-auto shab ring-0 outline-none border-none text-center placeholder:text-blue-700 p-3 rounded-md sm:w-full lg:w-3/5 md:w-4/5" placeholder="Enter Task Description Here ..." required>
            </textarea>
            <h2 className="text-center font-semibold text-md my-2 tracking-2">Priority Of Task</h2>
            <select value={val} onChange={(e) => setval(Number(e.target.value))} className="h-10 text-white p-2 bg-gradient-to-b from-blue-200 to-blue-600 shab font-semibold px-3 m-1 rounded-md block mx-auto">
              <option value={0} className="bg-blue-400 text-blue-900 font-semibold" disabled>Choose Below</option>
              <option value={1} className="bg-blue-400 text-blue-900 font-semibold">Low Priority</option>
              <option value={2} className="bg-blue-400 text-blue-900 font-semibold">Medium Priority</option>
              <option value={3} className="bg-blue-400 text-blue-900 font-semibold">High Priority</option>
            </select>
            <button type="submit" className="relative m-5 items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 mx-auto block transition-all duration-150 ease-in-out hover:pl-10 rounded-md hover:pr-6 shav bg-blue-200 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-b
            from-blue-500 to-blue-800 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Add Task</span>
          </button>
        </form>
    </div>
    <div>
      <h2 className="text-center font-extrabold text-4xl bg-clip-text bg-gradient-to-r text-transparent tsha from-blue-200 to-blue-700 my-5">Your Tasks Here</h2>
      <hr className="w-64 mx-auto h-1 mb-10 rounded border-0 bg-gradient-to-l from-blue-600 to-blue-200" />
      { alert && 
         <Alert title={altit} desc={aldesc}/>
      }
      {! data.length && 
          <h2 className="text-white text-center text-xl">⛔ No Tasks Added Yet ⛔</h2>
      }
    <div className="lg:m-5 md:m-3 sm:m-1 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
      <>
      {datasetRef.current && ! modal && data.map((taskData:any, index:number) => {
          return (
            <>
            <div key={index} className="m-2 mx-auto w-80"> 
              <Tododisplay head={taskData.todohead} desc={taskData.tododesc} val={taskData.todoprio} id={taskData._id} whadel ={deletetask} update={togmodal} updateId={index} updatecard={updatefunc} />
            </div>
            </>
          );
        })}
      </>
      </div>
    </div>
    {modal && 
    <div className="todoup">
      <>
        <Updatemodal update={togmodal} updatearr = {toupdate} />
      </>
    </div>
    }
    </>
  )
}
