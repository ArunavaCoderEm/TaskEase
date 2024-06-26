import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { existData } from '../Dataassets/Primary';

export default function Navbar () : React.ReactNode {

  const navi = useNavigate();

  const disp = useDispatch();

  const logged:boolean = useSelector((state:any) => state.logged);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menu,setMenu] = useState<string>('home');

  const usern: string | null = (sessionStorage.getItem("name"));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setMenu("home");  
    sessionStorage.clear();
    disp(existData.logout());
    setTimeout(() => {
      navi('/login');
    }, 1000);
  };



  return (
    <>
      <nav className="bg-gradient-to-b from-blue-500 to-blue-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex ml-10 items-center space-x-3 rtl:space-x-reverse" onClick={() => {setMenu('home')}}>
            <img src="./todo0.png" className="h-8 shab rounded-full"/>
            <span className="self-center text-xl font-mono font-semibold whitespace-nowrap hov dark:text-white"><span className='text-blue-300 font-serif font-bold'>T</span>ask<span className='text-blue-300 font-serif font-bold'>E</span>ase</span>
          </Link>
          <div className="flex md:order-2">
            
            <button type="button" onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`m-1 justify-end items-end w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-center rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link to="/" className={`block p-2 font-sm rounded-md hover:text-blue-300 transition-all duration-300 ${(menu == 'home'? `bg-gradient-to-t from-blue-500 to-blue-800 text-white shab` : `text-white`)}`} onClick={() => {setMenu('home')}} aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about"  className={`block p-2 font-sm rounded-md hover:text-blue-300 transition-all duration-300 ${(menu == 'about'? `bg-gradient-to-t from-blue-500 to-blue-800 text-white shab` : `text-white`)}`} onClick={() => {setMenu('about')}}>About Me</Link>
              </li>
              <li>
                <Link to="/features"  className={`block p-2 font-sm rounded-md hover:text-blue-300 transition-all duration-300 ${(menu == 'feature'? `bg-gradient-to-t from-blue-500 to-blue-800 text-white shab` : `text-white`)}`} onClick={() => {setMenu('feature')}}>Features</Link>
              </li>              
            </ul>
          {! logged && <>
          <Link to='/signup' className='p-2 bg-gradient-to-b from-blue-400 px-2 shab to-blue-600 block right-0 mx-10 rounded-md text-center font-thin text-white' onClick={() => {setMenu('none')}}>
            Sign in
          </Link>
          <Link to='/login' className='p-2 bg-gradient-to-b from-blue-400 px-2 sm:mx-10 lg:mx-0 shab to-blue-600 block right-0 rounded-md text-center font-thin text-white' onClick={() => {setMenu('none')}}>
            Log in
          </Link>
            </>
          }
          { logged &&
          <>
          <h2 className='text-center text-xl lg:ml-8 bg-blue-900 px-2 py-1 mt-1 mx-auto text-white rounded-md'>{usern}</h2>
          <button 
          className='p-2 mx-auto lg:mx-10 bg-gradient-to-b from-blue-400 px-2 sm:mx-10 shab to-blue-600 block rounded-md text-center font-thin text-white' onClick={handleLogout}>
            Log out
          </button>
          </>
          }
          </div>
        </div>
      </nav>
    </>
  );
}
