import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-gradient-to-r p-2 from-blue-700 to-blue-500 w-[100%] mt-[80px] bottom-0">
          <p className="text-white font-semibold text-center">Made with Vite+React, Typescript, Tailwind & 💙 by <Link to={"https://godard.vercel.app"} className="text-blue-300">GODARD</Link></p>
      </footer>

    </>
  )
}
