export default function Taskip() : React.ReactNode {
  return (
    <div className="bg-gradient-to-b from-violet-200 to-violet-400 w-4/5 m-auto my-10 shav p-2 rounded-md justify-center">
        <h1 className="text-center bg-clip-text font-extrabold text-3xl bg-gradient-to-r from-violet-400 to-violet-700 text-transparent">TaskEase</h1>
        <div className="m-auto my-5 justify-center align-middle items-center">
            <input className="block text-violet-700 font-semibold text-xl mx-auto shab ring-0 outline-none border-none text-center placeholder:text-violet-700 p-3 rounded-md w-3/5" placeholder="Enter Task Here ..." type="text" />
            <button className="relative mx-auto block my-5 shav bg-gradient-to-b from-violet-500 to-violet-800 rounded-md p-2 text-thin text-white transition-all duration-200 cursor-pointer">Add Task</button>
        </div>
    </div>
  )
}
