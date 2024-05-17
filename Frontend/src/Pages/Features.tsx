

export default function Features() {
  return (
    <>
        <h1 className='text-center bg-clip-text font-extrabold text-3xl bg-gradient-to-r from-blue-400 to-blue-700 text-transparent tracking-20 mt-10'>TaskEase Features</h1>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center shav h-full w-full" src="./ss1.png"/>
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-300 mt-5">Feature 1</h2>
                    <p className="text-base leading-relaxed mt-2 text-slate-500">You can prioritize your tasks by considering their color coding. Red denotes the most urgent tasks, green signifies those of lesser urgency, and blue indicates tasks of very low priority. This approach will assist you in categorizing your tasks and executing them accordingly.</p>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="./ss2.png"/>
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-300 mt-5">Feature 2</h2>
                    <p className="text-base leading-relaxed mt-2 text-slate-500">Through the dropdown menu, you can assign priority levels to your tasks based on color codes. Red signifies high urgency, green indicates moderate urgency, and blue represents low urgency. This enables you to manage your time efficiently, addressing tasks according to their importance.</p>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="./ss3.png"/>
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-300 mt-5">Feature 3</h2>
                    <p className="text-base leading-relaxed mt-2 text-slate-500">Even after creation, you can adjust task headers, descriptions, and priority orders as needed. This flexibility allows for fine-tuning and updating tasks to better align with changing requirements or priorities, enhancing overall efficiency and organization. </p>
                </div>
                </div>
            </div>
            <p className="text-base lg:m-5 sm:m-2 leading-relaxed text-center">You also get a signup and login feature that saves your creation, deletion, updation on your tasks by you in the databse.</p>

            <h1 className="text-white font-bold text-center my-3">Coming Soon</h1>
            <hr className="w-60 mx-auto bg-slate-500" />
            <ul className="m-5 my-5 text-slate-500">
                <li className="my-3 sm:text-left lg:text-center">1. Date feature will be added.</li>
                <li className="sm:text-left lg:text-center">2. Mail notifications with respect to date will be added soon.</li>
            </ul>
        </section>
    </>
  )
}
