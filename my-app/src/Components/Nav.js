import React from 'react'
import { useState } from 'react'
import logo from './Assets/Images/logo-bookmark.svg'

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex items-center justify-between py-8">
        <p className="font-[rubik] text-xl pl-4"><img src={logo} alt="logo" className="scale-[1.1]"/></p>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 pr-6 scale-[0.75]"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-[4.5px] w-8  bg-black"></span>
            <span className="block h-[4.5px] w-8  bg-black"></span>
            <span className="block h-[4.5px] w-8  bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <hr className="bg-[#9194a1] w-[80vw]"/>
              <li className=" uppercase text-white font-['rubik'] text-2xl">
                <a href="/about">F E A T U R E S</a>
              </li>
              <hr className="bg-[#9194a1] w-[80vw]"/>
              <li className="  uppercase text-white font-['rubik'] text-2xl">
                <a href="/portfolio">P R I C I N G</a>
              </li>
              <hr className="bg-[#9194a1] w-[80vw]"/>
              <li className="  uppercase text-white font-['rubik'] text-2xl">
                <a href="/contact">C O N T A C T</a>
              </li>
              <hr className="bg-[#9194a1] w-[80vw]"/>
              <button className="border-2 border-white text-2xl text-white px-[30vw] py-2 rounded-lg top-2 relative font-['rubik'] font-bold">
              L O G I N
             </button>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact" className="pr-4">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: hsl(229, 31%, 21%);
        opacity: 0.5
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    );
}

export default Nav