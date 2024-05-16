import { Link } from 'react-router-dom'

export default function About() {
  return (
  <section className="text-white body-font">
    <h1 className='text-center bg-clip-text font-extrabold text-3xl bg-gradient-to-r from-blue-400 to-blue-700 text-transparent tracking-20 mt-10'>About Me</h1>
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full shav" alt="hero" src="./me.png"/>
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hello ! I am <span className='ml-[2px] text-blue-500 font-semibold'>Arunava Dutta</span></h1>
        <div className="grid lg:grid-cols-2 gap-5 sm:grid-cols-1">
        <p className="mb-8 leading-relaxed text-left">I have a genuine passion for coding, finding joy and fulfillment in the process of creating software solutions. My proficiency spans various programming languages including <span className='ml-[2px] text-blue-500 font-semibold'>Python</span>, <span className='ml-[2px] text-blue-500 font-semibold'>C</span>, and <span className='ml-[2px] text-blue-500 font-semibold'>C++</span>, allowing me to delve deep into problem-solving and algorithmic challenges. Additionally, I possess a strong command of web development technologies such as <span className='ml-[2px] text-blue-500 font-semibold'>HTML</span>, <span className='ml-[2px] text-blue-500 font-semibold'>CSS</span>, and <span className='ml-[2px] text-blue-500 font-semibold'>Javascript</span>, enabling me to craft engaging and dynamic web experiences.</p>
        <p className="mb-8 leading-relaxed text-left">I am strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick. My journey in development has been enriched by my exploration of modern frameworks like <span className='ml-[2px] text-blue-500 font-semibold mr-1'>Vite + React</span>,<span className='ml-[2px] text-blue-500 font-semibold'>Typescript</span>, <span className='ml-[2px] text-blue-500 font-semibold'>Tailwind CSS</span>, and <span className='ml-[2px] text-blue-500 font-semibold'>Bootstrap</span>. These tools not only enhance my productivity but also empower me to bring my ideas to life in a more efficient and effective manner. Working with <span className='ml-[2px] text-blue-500 font-semibold'>APIs</span> has also become so fun for me.</p>
        </div>
        <div className="flex justify-center">
          <Link to="https://godard.vercel.app/" target='_blank' className="inline-flex text-black bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Portfolio</Link>
          <Link to="https://github.com/ArunavaCoderEm" target='_blank' className="ml-4 inline-flex text-blue-400 bg-white border-0 py-2 px-6 transition-all duration-300 focus:outline-none hover:bg-gray-500 rounded text-lg">Gtihub</Link>
        </div>
      </div>
    </div>
  </section>
  )
}
