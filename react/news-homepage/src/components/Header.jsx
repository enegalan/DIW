import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 pt-24 font-[Inter] mb-72 md:mb-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <img src="assets/images/logo.svg" alt="" />
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="block text-[#5d5f79] hover:text-[#f15e50]"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h12a1 1 0 010 2H4a1 1 0 010-2zm0 5h12a1 1 0 010 2H4a1 1 0 010-2zm0 5h12a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 3.5a.5.5 0 01.5-.5h12a.5.5 0 010 1H3.5a.5.5 0 01-.5-.5zM3 8.5a.5.5 0 01.5-.5h12a.5.5 0 010 1H3.5a.5.5 0 01-.5-.5zM3 13.5a.5.5 0 01.5-.5h12a.5.5 0 010 1H3.5a.5.5 0 01-.5-.5z"
                  />
                )}
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div
                className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 transition-opacity"
                onClick={toggleMobileMenu}
              ></div>
            )}
            <nav className={`top-0 md:hidden bg-white fixed p-10 right-0 h-full w-1/2 transition-transform transform ${isMobileMenuOpen ? 'block translate-x-0' : 'hidden -translate-x-full'}`}>
              <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-[#5d5f79] hover:text-[#f15e50]">
              <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
              <g>
                <g>
                  <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
                    512,452.922 315.076,256 		"/>
                </g>
              </g>
              </svg>
              </button>
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="text-[#5d5f79] hover:text-[#f15e50]">Home</a></li>
                <li><a href="#" className="text-[#5d5f79] hover:text-[#f15e50]">New</a></li>
                <li><a href="#" className="text-[#5d5f79] hover:text-[#f15e50]">Popular</a></li>
                <li><a href="#" className="text-[#5d5f79] hover:text-[#f15e50]">Trending</a></li>
              </ul>
            </nav>

          </div>
          <nav className="md:flex md:block hidden">
            <ul className="flex space-x-4 gap-[20px]">
              <li><a href="#" className="text-[#5d5f79] hover:text-[#f15e50]">Home</a></li>
              <li><a href="#" className="text-[#5d5f79] hover:text-[#f15e50]">New</a></li>
              <li><a href="#" className="text-[#5d5f79] hover:text-[#f15e50]">Popular</a></li>
              <li><a href="#" className="text-[#5d5f79] hover:text-[#f15e50]">Trending</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
