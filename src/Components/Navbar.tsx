import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu,setMenu] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  return (
    <>
      <nav className="border-b border-gray-600 bg-blue-1000">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => {setMenu('home')}}>
            <img src="./todo.png" className="h-8 rounded-full"/>
            <span className="self-center text-xl font-mono font-semibold whitespace-nowrap hov dark:text-white"><span className='text-blue-500 font-serif font-bold'>T</span>ask<span className='text-blue-500 font-serif font-bold'>E</span>ase</span>
          </Link>
          <div className="flex md:order-2">
            
            <button type="button" onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isSearchOpen ? 'block' : 'hidden'}`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-center rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link to="/" className={`block p-2 font-sm rounded-md hover:text-amber-500 transition-all duration-300 ${(menu == 'home'? `bg-gradient-to-t from-violet-600 to-violet-950 text-white` : `text-white`)}`} onClick={() => {setMenu('home')}} aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about"  className={`block p-2 font-sm rounded-md hover:text-amber-500 transition-all duration-300 ${(menu == 'about'? `bg-gradient-to-t from-violet-600 to-violet-950 text-white` : `text-white`)}`} onClick={() => {setMenu('about')}}>About Me</Link>
              </li>
              <li>
                <Link to="/features"  className={`block p-2 font-sm rounded-md hover:text-amber-500 transition-all duration-300 ${(menu == 'feature'? `bg-gradient-to-t from-violet-600 to-violet-950 text-white` : `text-white`)}`} onClick={() => {setMenu('feature')}}>Features</Link>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
