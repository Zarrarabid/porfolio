import React, { useState } from 'react'
import { Tilt } from '@jdion/tilt-react'
import imageprofile from "../../Assets/image-modified.png"
import reactIcon from "../../Assets/React.png"
import MUIIcon from "../../Assets/MUI.png"
import NextjsIcon from "../../Assets/NextJS.png"
import JavaScriptIcon from "../../Assets/js-svgrepo-com (1).svg"
import TypeScriptIcon from "../../Assets/typescript.svg"
import TailwindCssIcon from "../../Assets/Tailwind CSS.png"
import CssIcon from "../../Assets/CSS3.png"
import HtmlIcon from "../../Assets/HTML5.png"
import nodeJS from "../../Assets/nodeJS.png"
import Redux from "../../Assets/Redux.png"
import Mongodb from "../../Assets/Mongodb.png"
import gitIcon from "../../Assets/git.png"
import GithubIcon from "../../Assets/GitHub (1).png"
import VSCode from "../../Assets/Visual Studio Code (VS Code).png"
import DatabaseIcon from "../../Assets/D3.js.png"
import UIUXIcon from "../../Assets/Realm.png"
import { TypeAnimation } from 'react-type-animation';
import Tech from "../../Assets/Tech.gif"
import WMI from "../../Assets/WMI.gif"
import JSBUFF from "../../Assets/JSBUFF.gif"
import STACK from "../../Assets/STACK.gif"
import { useTranslation } from 'react-i18next'


function Home() {
    const { t } = useTranslation();
    const [textColor, setTextColor] = useState('red');
    const icons = [
        { src: HtmlIcon, alt: "HTML icon", animation: "animate-bounce" },
        { src: CssIcon, alt: "CSS icon", animation: "animate-pulse" },
        { src: JavaScriptIcon, alt: "JavaScript icon", animation: "animate-bounce" },
        { src: TypeScriptIcon, alt: "TypeScript icon", animation: "animate-pulse" },
        { src: reactIcon, alt: "React icon", animation: "animate-bounce" },
        { src: NextjsIcon, alt: "Next.js icon", animation: "animate-pulse" },
        { src: MUIIcon, alt: "MUI icon", animation: "animate-bounce" },
        { src: TailwindCssIcon, alt: "Tailwind CSS icon", animation: "animate-pulse" },
        { src: nodeJS, alt: "Node.js icon", animation: "animate-bounce" },
        { src: Redux, alt: "Redux icon", animation: "animate-pulse" },
        { src: Mongodb, alt: "MongoDB icon", animation: "animate-bounce" },
        { src: gitIcon, alt: "gitIcon icon", animation: "animate-pulse" },
        { src: GithubIcon, alt: "GithubIcon icon", animation: "animate-bounce" },
        { src: VSCode, alt: "VSCode icon", animation: "animate-pulse" },
    ];

    const devStack = [
        {
            name: "HTML/CSS", category: "front_end"
        },
        {
            name: "React", category: "front_end"
        },
        {
            name: "JavaScript / TypeScript", category: "front_end"
        },
        {
            name: "Redux / Zustand", category: "front_end"
        },
        {
            name: "Next Js", category: "front_end"
        },
        {
            name: "Tailwind Css", category: "UI/UX"
        },
        {
            name: "Bootstrap", category: "UI/UX"
        },
        {
            name: "Material UI", category: "UI/UX"
        },
        {
            name: "React Bootstrap", category: "UI/UX"
        },
        {
            name: "Styled Components", category: "UI/UX"
        },
        {
            name: "Node Js", category: "Back End & DB"
        },
        {
            name: "Express", category: "Back End & DB"
        },
        {
            name: "Mongodb", category: "Back End & DB"
        },
        {
            name: "MySQL", category: "Back End & DB"
        },
    ]
    return (
        <div
            style={{
                overflow: "hidden"
            }}
        >

            <section
                style={{
                    backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
                }}
                className=" min-h-[100vh] h-full flex flex-col justify-center">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                    <div className=" mr-auto place-self-center lg:col-span-7">
                        <h1
                            className="animate-fade-down max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
                            {t("Hello")},
                        </h1>
                        <h1
                            style={{ color: textColor }}
                            className="animate-fade-down h-[60px] lg:h-[100px] max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            {/* <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    'I am',
                                    1000,
                                    'I am Zarrar Abid',
                                    1000,
                                    () => setTextColor('#FF6363'),
                                    'I am a Developer',
                                    1000,
                                    () => setTextColor('#FF6363'),
                                    'I am an Engineer',
                                    1000,
                                    () => setTextColor('#9FB3DF'),
                                    'I am a Programmer',
                                    1000,
                                    () => setTextColor('#3674B5'),
                                    'I am an avid learner',
                                    1000,
                                    () => setTextColor('#727D73'),
                                ]}
                                speed={40}
                                style={{ fontSize: '1em' }}
                                repeat={Infinity}
                            /> */}
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    t("I am"),
                                    1000,
                                    t("I am Zarrar Abid"), // Call t directly for translation
                                    1000,
                                    () => setTextColor('#FF6363'),
                                    t("I am a Developer"), // Call t directly
                                    1000,
                                    () => setTextColor('#FF6363'),
                                    t("I am an Engineer"), // Call t directly
                                    1000,
                                    () => setTextColor('#9FB3DF'),
                                    t("I am a Programmer"), // Call t directly
                                    1000,
                                    () => setTextColor('#3674B5'),
                                    t("I am an avid learner"), // Call t directly
                                    1000,
                                    () => setTextColor('#727D73'),
                                ]}
                                speed={40}
                                style={{ fontSize: '1em' }}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="animate-fade-right animate-duration-[1000ms] max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800">{t("I am dedicated to crafting exceptional user experiences by leveraging the latest cutting-edge technologies. My focus is on building robust, secure, and accessible websites that are not only interactive but also enjoyable to use. With a strong grasp of back-end technologies, I seamlessly integrate them into my workflow, ensuring a cohesive and efficient development process. My meticulous attention to detail guarantees that every product I deliver aligns perfectly with the design vision, creating a delightful experience for users.")}</p>
                        <div className='flex flex-col items-center sm:flex-row'>
                            <a
                                href="../../Assets/Copy of Zarrar Hussain Abid.pdf"
                                download="Resume"
                                className="animate-flip-up mb-3 relative mr-3 cursor-pointer py-3 px-8 text-center font-barlow inline-flex justify-center uppercase text-black rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline-offset-4 overflow-hidden"
                            >
                                <span className="relative z-20 uppercase">{t("Download Resume")}</span>

                                <span
                                    className="absolute left-[-75%] top-0 h-full w-[50%] bg-[#00FF9C]/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
                                ></span>

                                <span
                                    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#3674B5] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
                                ></span>
                                <span
                                    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#3674B5] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
                                ></span>
                                <span
                                    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#3674B5] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
                                ></span>
                                <span
                                    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#3674B5] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
                                ></span>
                            </a>

                            <a
                                className="mb-3 animate-flip-up font-s relative mr-3 cursor-pointer py-3 px-8 text-center font-barlow inline-flex justify-center uppercase text-black rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
                            >
                                <span className="relative z-20 uppercase">{t("Send Me a message")}</span>

                                <span
                                    className="absolute left-[-75%] top-0 h-full w-[50%] bg-[#00FF9C]/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
                                ></span>

                                <span
                                    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#3674B5] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
                                ></span>
                                <span
                                    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#3674B5] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
                                ></span>
                                <span
                                    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#3674B5] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
                                ></span>
                                <span
                                    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#3674B5] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
                                ></span>
                            </a>
                        </div>
                    </div>
                    <div className="animate-fade-left animate-duration-[1000ms] lg:mt-20 mb-20 lg:col-span-5 flex justify-center order-first lg:order-last ">
                        <Tilt >
                            <div className="relative h-full w-full flex items-center justify-center">
                                <div className="sm:h-[400px] sm:w-[400px] profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                                    <button className="profile_item left-[45px] -top-[4px] sm:left-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%"
                                                }}
                                                src={MUIIcon}
                                                alt="profile pic"
                                            />
                                        </span>
                                    </button>

                                    <button className="profile_item right-[45px] -top-[4px] sm:right-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%"
                                                }}
                                                src={NextjsIcon}
                                                alt="profile pic"
                                            />
                                        </span>
                                    </button>

                                    <button className="profile_item -left-4 top-20 sm:top-27 sm:-left-3 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%"
                                                }}
                                                src={JavaScriptIcon}
                                                alt="profile pic"
                                            />
                                        </span>

                                    </button>

                                    <button className="profile_item -right-4 top-20 sm:top-27 sm:-right-3  absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%"
                                                }}
                                                src={TypeScriptIcon}
                                                alt="profile pic"
                                            />
                                        </span>
                                    </button>

                                    <button className="profile_item bottom-8 -left-0 sm:bottom-20 sm:left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%"
                                                }}
                                                src={TailwindCssIcon}
                                                alt="profile pic"
                                            />
                                        </span>
                                    </button>

                                    <button className="profile_item bottom-8 -right-0 sm:bottom-20 sm:right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%"
                                                }}
                                                src={HtmlIcon}
                                                alt="profile pic"
                                            />
                                        </span>
                                    </button>

                                    <button className="profile_item right-[40%] sm:right-[42%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%"
                                                }}
                                                src={reactIcon}
                                                alt="profile pic"
                                            />
                                        </span>
                                    </button>

                                    <button className="profile_item w-[200px] h-[200px] sm:w-full sm:h-full p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                                        <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%"
                                                }}
                                                src={imageprofile}
                                                alt="profile pic"
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </section>

            <section
                style={{
                    backgroundImage: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)"
                }}
                className="h-full  py-20">
                <div className="max-w-screen-xl px-4 py-8 mx-auto ">
                    <div className='w-full flex justify-center'>
                        <div data-aos="zoom-out-up" data-aos-duration="1000" className='h-full w-96 '>
                            <img src={Tech} />
                        </div>
                    </div>
                    <h1
                        // style={{ color: textColor, }}
                        className=" text-center my-8 text-2xl font-bold text-black md:text-4xl mb-16">
                        🌟 {t("Technologies I Use")}
                    </h1>
                    <div className='flex flex-wrap gap-20 justify-center'>
                        {icons.map((icon, index) => (
                            <span key={index}>
                                <img
                                    className={icon.animation}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                    }}
                                    src={icon.src}
                                    alt={icon.alt}
                                />
                            </span>
                        ))}
                    </div>
                </div>
            </section >

            <section
                style={{
                    backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
                }}
                className='h-full'
            >
                <div className='px-3 w-full flex flex-col justify-center items-center'>
                    <div data-aos="zoom-out-up" data-aos-duration="1000" className='h-full w-80 sm:w-96 '>
                        <img src={JSBUFF} />
                    </div>
                    <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-black">{t("You Got It! I am a Javascript Buff")}</h2>
                </div>
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-800 sm:text-lg ">
                        <h2 className="mb-4 text-center lg:text-left text-4xl tracking-tight font-extrabold text-black">{t("What is Javascript")}</h2>
                        <p className="mb-4">{t("JavaScript, or JS, is the dynamic force behind most websites, bringing interactivity and flair to the web. With over 97% of sites harnessing its power, it’s essential for creating engaging user experiences—from animations to responsive applications. Unleash your creativity with JS!")}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img data-aos="fade-up" className="w-full rounded-lg" src="https://images.unsplash.com/photo-1732017968601-f46d9badf229?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="office content 1" />
                        <img data-aos="fade-down" className="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="office content 2" />
                    </div>
                </div>
            </section>


            <section
                style={{
                    backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
                }}
                className='h-full pt-20 pb-32'
            >

                <div className='px-4 flex flex-col justify-center items-center'>
                    <div data-aos="zoom-out-up" data-aos-duration="3000" className=' flex justify-center h-52 w-52 '>
                        <img src={WMI} />
                    </div>
                    <h1
                        className=" text-center my-8 text-2xl font-bold text-black md:text-4xl mb-16">
                        🕵️‍♂️ {t("Who is Zarrar Abid?")}
                    </h1>
                    <Tilt>
                        <div
                            data-aos="zoom-in-up"
                            className=" flex w-full sm:w-[550px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                        >
                            <div className="group relative">
                                <h3
                                    className="group-hover:text-red-500 mt-3 text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800"
                                >
                                    <a href="#"
                                    ><span className="absolute inset-0 max-w-xs"></span>{t("Hi, Hello, Assalam U Alaikum...")}</a>
                                </h3>
                                <div
                                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                >
                                    <pre className="sm:text-2xl  my-5 text-sm ">
                                        {`{
  "name": "Zarrar Abid",
  "age": "25",
  "gender": "male",
  "country": "PAKISTAN"
}`
                                        }
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>

            </section>

            <section
                style={{
                    backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
                }}
                className="text-black bg-white">
                <div className="max-w-6xl mx-auto px-5 py-24 ">
                    <div className='w-full flex justify-center mb-10'>
                        <div data-aos="zoom-out-up" data-aos-duration="1000" className='h-full w-96 '>
                            <img src={STACK} />
                        </div>
                    </div>
                    <div className="text-center mb-20">
                        <h1 className=" title-font  mb-4 text-2xl md:text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none ">
                            💻 {t("A Glimpse into My Toolkit")}
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            {t("In this section, I’ll share the powerful tools and technologies that fuel my development journey. From frameworks to databases, each component is carefully chosen to enhance productivity and creativity. Get ready to explore the building blocks of my projects!")}
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col lg:flex-row align-middle sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                        <div className="p-10 pl-5 w-full lg:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div data-aos="zoom-in-up" className="pattern-dots-md gray-light">
                                <Tilt>
                                    <div
                                        className="min-w-[246px] min-h-[365px] rounded translate-x-6 -translate-y-6 flex w-full flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                                    >
                                        <div className="group relative">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-2 flex-shrink-0 p-2">
                                                <img
                                                    src={reactIcon}
                                                    alt='front_icon'
                                                />
                                            </div>
                                            <div className="flex-grow ">
                                                <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                                    Front End
                                                </h2>
                                                <div
                                                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                                >
                                                    <div className="w-full">
                                                        <ol className="space-y-5">
                                                            {devStack?.filter((categ) => categ.category == "front_end")?.map((item, index) => (
                                                                <li key={index} className="text-body-color dark:text-dark-6 flex text-base">
                                                                    {item?.name}
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>

                            </div>
                        </div>
                        <div className="p-10 pl-5 w-full lg:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div data-aos="zoom-in-up" className="pattern-dots-md gray-light">
                                <Tilt>
                                    <div
                                        className="min-w-[246px] min-h-[365px] rounded translate-x-6 -translate-y-6 flex w-full flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                                    >
                                        <div className="group relative">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-2 flex-shrink-0 p-2">
                                                <img
                                                    src={UIUXIcon}
                                                    alt='UI/UX_icon'
                                                />
                                            </div>
                                            <div className="flex-grow ">
                                                <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                                    UI/UX
                                                </h2>
                                                <div
                                                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                                >
                                                    <div className="w-full">
                                                        <ol className="space-y-5">
                                                            {devStack?.filter((categ) => categ.category == "UI/UX")?.map((item, index) => (
                                                                <li key={index} className="text-body-color dark:text-dark-6 flex text-base">
                                                                    {item?.name}
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>

                            </div>
                        </div>
                        <div className="p-10 pl-5 w-full lg:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div data-aos="zoom-in-up" className="pattern-dots-lg gray-light">
                                <Tilt>
                                    <div
                                        className="min-w-[246px] min-h-[365px] rounded translate-x-6 -translate-y-6 flex w-full flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                                    >
                                        <div className="group relative">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-2 flex-shrink-0 p-2">
                                                <img
                                                    src={DatabaseIcon}
                                                    alt='DB_icon'
                                                />
                                            </div>
                                            <div className="flex-grow ">
                                                <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                                    Back End & DB
                                                </h2>
                                                <div
                                                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                                >
                                                    <div className="w-full">
                                                        <ol className="space-y-5">
                                                            {devStack?.filter((categ) => categ.category == "Back End & DB")?.map((item, index) => (
                                                                <li key={index} className="text-body-color dark:text-dark-6 flex text-base">
                                                                    {item?.name}
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home