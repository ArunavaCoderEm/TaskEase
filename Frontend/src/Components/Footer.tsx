import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
        <div className="bg-gradient-to-r mt-5 absolute w-full bottom-0 from-blue-700 to-blue-500 py-2">
            <h1 className="text-center text-xl text-blue-900 font-semibold">Made with Vite+React, Typescript, Tailwind & 💙 by <Link to={"https://godard.vercel.app"} className="text-blue-300">GODARD</Link></h1>
        </div>
    </>
  )
}
