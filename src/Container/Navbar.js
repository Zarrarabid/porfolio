import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../Assets/VDriveLogo-01.png"
import { Helmet } from "react-helmet";


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const sideMenuRef = useRef(null);
  const navigate = useNavigate()
  const [selectedMenu, setSelectedMenu] = useState("")

  const Menus = [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Pricing",
      path: "/pricing"
    },
    {
      label: "Services",
      path: "/services"
    },
    {
      label: "Contact Us",
      path: "/contact_us"
    },
    {
      label: "Terms & Conditions",
      path: "/term_and_condition"
    },
  ]

  useEffect(() => {
    if (window?.location?.href?.includes("pricing")) {
      setSelectedMenu("Pricing")
    }
    else if (window?.location?.href?.includes("services")) {
      setSelectedMenu("Services")
    }
    else if (window?.location?.href?.includes("contact_us")) {
      setSelectedMenu("Contact Us")
    }
    else if (window?.location?.href?.includes("term_and_condition")) {
      setSelectedMenu("Terms & Conditions")
    }
    else {
      setSelectedMenu("Home")
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  const [isToggled, setToggle] = useState(false)

  useEffect(() => {
    if (isToggled) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isToggled])
  return (
    <>

      <div className=" fixed top-0 left-0 z-50 grid w-full h-16 grid-cols-1 px-8 bg-white border-t border-gray-200 md:grid-cols-2 shadow dark:bg-white dark:border-black backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="items-center justify-center hidden text-gray-500 dark:text-gray-400 me-auto md:flex">
          <button
            className="flex mr-2 overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#9EC6F3] text-black shadow hover:bg-[#9EC6F3]/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-[#9EC6F3] hover:ring-offset-2"
          >
            <span
              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
            ></span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <span className="ml-1 text-black">Home</span>
            </div>

          </button>
          <button
            className="flex mr-2 overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#9EC6F3] text-black shadow hover:bg-[#9EC6F3]/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-[#9EC6F3] hover:ring-offset-2"
          >
            <span
              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
            ></span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
              </svg>
              <span className="ml-1 text-black">Projects</span>
            </div>

          </button>
          <button
            className="flex mr-2 overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#9EC6F3] text-black shadow hover:bg-[#9EC6F3]/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-[#9EC6F3] hover:ring-offset-2"
          >
            <span
              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
            ></span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
              </svg>
              <span className="ml-1 text-black">Experience</span>
            </div>

          </button>

        </div>
        <div className="flex items-center justify-center mx-auto md:hidden">
          {/* dark:bg-gray-600 dark:hover:bg-gray-800 */}
          <button data-tooltip-target="tooltip-microphone" type="button" className="relative group p-2.5 group bg-[#A294F9] rounded-full hover:bg-[#CDC1FF] me-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" transition-all duration-300 w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <div
              className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full mb-2 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div
                className="bg-black/85 backdrop-blur-md text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10"
              >
                Home
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1"
                >
                  <div
                    className="border-4 border-transparent border-t-black/85"
                  ></div>
                </div>
              </div>
            </div>
          </button>
          <button data-tooltip-target="tooltip-microphone" type="button" className="relative group p-2.5 group bg-gray-100 rounded-full hover:bg-gray-200 me-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" transition-all duration-300 w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
              <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
            </svg>
            <div
              className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full mb-2 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div
                className="bg-black/85 backdrop-blur-md text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10"
              >
                Projects
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1"
                >
                  <div
                    className="border-4 border-transparent border-t-black/85"
                  ></div>
                </div>
              </div>
            </div>
          </button>
          <button data-tooltip-target="tooltip-microphone" type="button" className="relative group p-2.5 group bg-gray-100 rounded-full hover:bg-gray-200 me-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" transition-all duration-300 w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
              <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
            </svg>

            <div
              className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full mb-2 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div
                className="bg-black/85 backdrop-blur-md text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10"
              >
                Experience
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1"
                >
                  <div
                    className="border-4 border-transparent border-t-black/85"
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="items-center justify-center hidden ms-auto md:flex">
          <button data-tooltip-target="tooltip-information" type="button" className="cursor-pointer p-2.5 pr-0 group rounded-full">
            <img className='w-8 h-9' src='https://cdn-icons-png.flaticon.com/128/317/317215.png' />
          </button>
          <button data-tooltip-target="tooltip-information" type="button" className="cursor-pointer p-2.5 group rounded-full">
            <img className='w-8 h-8' src='https://cdn-icons-png.flaticon.com/128/555/555417.png' />
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              type="checkbox"
              checked={isToggled}
              onChange={() => setToggle(!isToggled)}
            />
            <div
              className="w-16 h-9 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-8 before:w-8 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-sm shadow-gray-400 peer-checked:shadow-sm peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
            >
            </div>
          </label>
          <div id="tooltip-information" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
            Show information
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
      {/* <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
       
        <div className="lg:hidden">
          <button
            onClick={() => {
              setToggleMenu(true);
            }}
            className="navbar-burger flex items-center text-blue-600 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {Menus?.map((menu, index) => {
            return (
              <>
                <li
                  onClick={() => {
                    navigate(menu?.path)
                    setSelectedMenu(menu?.label)

                  }}
                >
                  <a className={`text-sm cursor-pointer ${selectedMenu == menu?.label ? "text-blue-600 font-bold" : "text-gray-400"} hover:text-gray-500`}>
                    {menu?.label}
                  </a>
                </li>
                {index != Menus?.length - 1 &&
                  <li
                    className="text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 current-fill"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </li>}
              </>
            )
          })}
        </ul>
        <a
          href="https://api.whatsapp.com/send?phone=971508460229"
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
        >
          Book Now
        </a>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${toggleMenu ? "" : "hidden"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          ref={sideMenuRef}
          className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
        >
          <div className="flex items-center mb-8">
            <a onClick={() => navigate("/")} className="mr-auto text-3xl font-bold leading-none cursor-pointer" >
              <img width={120} height={100} src={logo} />
            </a>
            <button
              onClick={() => setToggleMenu(false)}
              className="navbar-close"
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {Menus?.map((menu, index) => {
                return (
                  <>
                    <li
                      onClick={() => {
                        navigate(menu?.path)
                        setSelectedMenu(menu?.label)
                      }}
                    >
                      <a className={`block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded ${selectedMenu == menu?.label ? "text-blue-600 font-bold" : "text-gray-400"}`}>
                        {menu?.label}
                      </a>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                href="https://api.whatsapp.com/send?phone=971508460229"
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
              >
                Book Now
              </a>
            </div>
          </div>
        </nav>
      </div> */}
    </>
  );
}

export default Navbar;
