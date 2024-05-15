
export default function Updatemodal({update}:any) {
  return (
    <div className="absolute top-[100px] left-0 right-0 rounded-md mx-auto w-screen h-screen backdrop-blur-lg bg-white/30 z-[10]">
      <h1 className="absolute cursor-pointer bg-blue-700 p-1 px-2 hover:text-red-500 duration-300 transition-all w-10 text-center rounded-full font-semibold text-white text-3xl right-10 my-5" onClick={() => {
        update()
      }}>X</h1>
      <h1 className="text-center font-extrabold text-4xl bg-clip-text bg-gradient-to-r text-transparent tsha from-blue-500 to-blue-900 mt-24 mb-10">Update your task details</h1>
      <form className="my-10">
       <input
            className="block text-blue-700 font-semibold text-xl mx-auto shab ring-0 outline-none border-none text-center placeholder:text-blue-700 p-3 rounded-md sm:w-full lg:w-3/5 md:w-4/5" placeholder="Enter Task Here ..." type="text" required />
            <textarea 
            className="block mt-5 text-blue-700 font-semibold text-xl mx-auto shab ring-0 outline-none border-none text-center placeholder:text-blue-700 p-3 rounded-md sm:w-full lg:w-3/5 md:w-4/5" placeholder="Enter Task Description Here ..." required>
            </textarea>
            <button type="submit" className="relative m-5 items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 mx-auto block transition-all duration-150 ease-in-out hover:pl-10 rounded-md hover:pr-6 shav bg-blue-200 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-b
            from-blue-500 to-blue-800 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Update Task</span>
          </button>
        </form>
    </div>
  )
}
