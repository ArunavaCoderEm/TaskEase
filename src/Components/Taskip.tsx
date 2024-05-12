export default function Taskip() : React.ReactNode {

  const handleSubmit = (e : any) : any  => {
    e.preventDefault();
  }

  return (
    <div className="bg-gradient-to-b from-violet-200 to-violet-400 w-4/5 m-auto my-10 shav p-2 rounded-md justify-center">
        <h1 className="text-center bg-clip-text font-extrabold text-3xl bg-gradient-to-r from-violet-400 to-violet-700 text-transparent tracking-20">TaskEase</h1>
        <form onSubmit={handleSubmit} className="m-auto my-5 justify-center align-middle items-center">
            <input className="block text-violet-700 font-semibold text-xl mx-auto shab ring-0 outline-none border-none text-center placeholder:text-violet-700 p-3 rounded-md sm:w-full lg:w-3/5 md:w-4/5" placeholder="Enter Task Here ..." type="text" />
            <button type="submit" className="relative m-5 items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 mx-auto block transition-all duration-150 ease-in-out hover:pl-10 rounded-md hover:pr-6 shav bg-violet-200 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-b
            from-violet-500 to-violet-800 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Add Task</span>
          </button>
          <h2 className="text-center font-semibold text-md my-2 tracking-2">Priority Of Task</h2>
          <select className="h-10 text-white p-2 bg-gradient-to-b from-violet-200 to-violet-600 shab font-semibold px-3 m-1 rounded-md block mx-auto">
            <option className="bg-violet-400 text-violet-900 font-semibold" disabled selected>Choose Below</option>
            <option className="bg-violet-400 text-violet-900 font-semibold">Low Priority</option>
            <option className="bg-violet-400 text-violet-900 font-semibold">Medium Priority</option>
            <option className="bg-violet-400 text-violet-900 font-semibold">High Priority</option>
          </select>
        </form>
    </div>
  )
}