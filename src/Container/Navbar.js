import React, { useEffect, useRef, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import MyContext from "./Context";


function Navbar({ setContactpath }) {
  const {
    pathname
  } = useLocation()
  const {
    setToggle,
    isToggled
  } = useContext(MyContext);
  const { t, i18n } = useTranslation();
  const [languageIs, setLanguageIs] = useState(sessionStorage?.getItem("userLanguage") || "en")
  const changeLanguage = (lng) => {
    sessionStorage.setItem("userLanguage", lng)
    setLanguageIs(lng)
    i18n.changeLanguage(lng);
    window.location.reload();
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  const sideMenuRef = useRef(null);
  const navigate = useNavigate()
  const [selectedMenu, setSelectedMenu] = useState("")


  useEffect(() => {
    if (pathname == "/projects") {
      setSelectedMenu("Projects")
    }
    else if (pathname?.includes("experience")) {
      setSelectedMenu("Experience")
    }
    else if (pathname?.includes("certifications")) {
      setSelectedMenu("Certifications")
    }
    else if (pathname?.includes("contact_me")) {
      setSelectedMenu("Contact Me")
    }
    else {
      setSelectedMenu("Home")
    }

  }, [])




  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuArr = [
    {
      name: "Home",
      path: "/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" transition-all duration-300 w-5 h-5 text-white">
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" transition-all duration-300 w-5 h-5 text-white">
        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
      </svg>
    },
    {
      name: "Experience",
      path: "/experience",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" transition-all duration-300 w-5 h-5 text-white">
        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
      </svg>
    },
    {
      name: "Certification",
      path: "/certifications",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" transition-all duration-300 w-5 h-5 text-white">
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
      </svg>
    },
  ]


  // const toggletheme = (themeIs) => {
  //   if (themeIs) {
  //     document.querySelector(".bgSection").classList.add('light')
  //   }
  //   else {
  //     document.querySelector(".bgSection").classList.remove('dark')
  //   }
  // }

  return (
    <>
      <div
        style={{
          border: "none",
        }}
        className={` fixed top-0 left-0 z-50 grid w-full h-16 grid-cols-1 px-8 ${isToggled ? "bg-[#1A1A2E] shadow-white/15" : "bg-white"} border-t border-gray-200 md:grid-cols-2 shadow backdrop-filter backdrop-blur-sm bg-opacity-10"`}>
        <div className="items-center justify-center hidden text-gray-500 dark:text-gray-400 me-auto md:flex">
          <nav className="header-links contents font-semibold text-base lg:text-lg">
            <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
              {menuArr?.map((menu, index) => (
                <li
                  key={index}
                  className={`${menu?.name == "Home" ? "pr-3 xl:pr-6 xl:py-2" : "p-3 xl:px-6 xl:py-2"} ${selectedMenu == menu?.name ? "active" : ""}`}>
                  <button
                    onClick={() => {
                      navigate(menu?.path)
                      setSelectedMenu(menu?.name)
                      if (menu?.path?.includes("/contact_me")) {
                        setContactpath(true)
                      }
                      else {
                        setContactpath(false)
                      }
                    }}>
                    <span className={`${isToggled ? "text-white" : "text-black"}`}>{t(menu?.name)}</span>
                  </button>
                </li>
              ))}

            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-center mx-auto md:hidden">
          {/* dark:bg-gray-600 dark:hover:bg-gray-800 */}
          {menuArr?.map((menu, index) => (
            <button
              onClick={() => {
                navigate(menu?.path)
                setSelectedMenu(menu?.name)
                if (menu?.path?.includes("/contact_me")) {
                  setContactpath(true)
                }
                else {
                  setContactpath(false)
                }
              }}
              key={index}
              type="button"
              className={`p-2.5 bg-[#FF8282] rounded-full me-4 ${selectedMenu == menu?.name ? "outline-none ring-4 ring-[#FF6363]" : ""}`}>
              {menu?.icon}
            </button>
          ))}
          <div className=" relative" ref={dropdownRef}>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              id="moreOptionsDropdownButton"
              data-dropdown-toggle="moreOptionsDropdown"
              type="button"
              className="p-2.5 bg-[#FF8282] rounded-full me-4 focus:outline-none focus:ring-4 focus:ring-[#FF6363]">
              <svg
                className="w-5 h-5 transition-all duration-300 text-white"
                width="24" height="24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 4 15"
              >
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <span className="sr-only">Show options</span>
            </button>
            <div
              id="moreOptionsDropdown"
              className={`w-[173px] z-10 ${toggleMenu ? 'absolute top-12 right-5' : 'hidden'} ring-1 ring-[#FF6363] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 `}
            >
              <ul className="py-0 text-sm">
                <li className="px-2.5 flex justify-center">
                  <button
                    onClick={() => changeLanguage("jp")}
                    data-tooltip-target="tooltip-information" type="button" className="cursor-pointer p-2.5 pl-0 group rounded-full">
                    <img className={`w-8 h-9 ${languageIs == "jp" ? "opacity-100" : "opacity-45"}`} src='https://cdn-icons-png.flaticon.com/128/317/317215.png' />
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    data-tooltip-target="tooltip-information" type="button" className="cursor-pointer p-2.5 group rounded-full">
                    <img className={`w-8 h-8 ${languageIs == "en" ? "opacity-100" : "opacity-45"}`} src='https://cdn-icons-png.flaticon.com/128/555/555417.png' />
                  </button>
                  <label className="relative inline-flex items-center cursor-pointer ">
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

                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="items-center justify-center hidden ms-auto md:flex">
          <button
            onClick={() => changeLanguage("jp")}
            data-tooltip-target="tooltip-information" type="button" className="cursor-pointer p-2.5 pr-0 group rounded-full">
            <img className={`w-8 h-9 ${languageIs == "jp" ? "opacity-100" : "opacity-45"}`} src='https://cdn-icons-png.flaticon.com/128/317/317215.png' />
          </button>
          <button
            onClick={() => changeLanguage("en")}
            data-tooltip-target="tooltip-information" type="button" className="cursor-pointer p-2.5 group rounded-full">
            <img className={`w-8 h-8 ${languageIs == "en" ? "opacity-100" : "opacity-45"}`} src='https://cdn-icons-png.flaticon.com/128/555/555417.png' />
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              type="checkbox"
              checked={isToggled}
              onChange={() => {
                setToggle(!isToggled)
              }}
            />
            <div
              className={`w-16 h-9 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-8 before:w-8 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-sm shadow-gray-400 peer-checked:shadow-sm ${isToggled ? "peer-checked:bg-[#526D82]" : " peer-checked:bg-[#383838]"} peer-checked:shadow-gray-700 after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[2px] after:right-1 after:translate-y-full after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0`}
            >
            </div>
          </label>

        </div>
      </div>

    </>
  );
}

export default Navbar;
