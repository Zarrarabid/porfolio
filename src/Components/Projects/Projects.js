import React from 'react'
import gifImage from "../../Assets/PROJECTS.gif"

function Projects() {
    return (
        <div
            style={{
                overflow: "hidden"
            }}
        >
            <main className="relative px-8 pt-8 pb-16 min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div className='w-full flex justify-center'>
                    <div data-aos="zoom-out-up" data-aos-duration="1000" className='h-full w-72 '>
                        <img src={gifImage} />
                    </div>
                </div>
                <h1
                    className="animate-flip-up animate-duration-1000 text-center mt-3 mb-3 text-2xl font-bold text-black md:text-4xl ">
                    Projects
                </h1>
                <p
                    className=" text-center ">
                    Brilliant ideas need a spark! Fueled by bold moves and relentless grit. Why? Because...
                </p>
                <p
                    className=" text-center mb-10">
                    "THE SECRET TO SUCCESS IS... <br></br>
                    UNSTOPPABLE CONSISTENCY!"
                </p>

                <section
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                    <div
                        className="
                h-96 rounded flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]
                group relative "
                    >
                        <div
                            className="relative flex h-full w-60 transform items-end transition-transform "
                        >
                            <div
                                className="h-full !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 "
                            >
                                <img src="https://i.pinimg.com/736x/e4/16/4d/e4164dc76ed75a89a2ece0bea0ca1cec.jpg"
                                    alt="Product" className="h-full w-72 object-cover" />
                            </div>

                            <div
                                className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 "
                            >
                                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Adnote</h3>

                                <p className="mt-4 text-sm sm:text-base">
                                    App that allows you to create and organize your notes seamlessly with search filter.
                                </p>

                                <div className="mt-3 font-bold flex ">
                                    <svg
                                        onClick={() => {
                                            let a = document.createElement("a");
                                            a.href = "https://adnote.vercel.app/";
                                            a.click();
                                        }}
                                        class="h-8 cursor-pointer hover:scale-110 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
                h-96 rounded flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]
                group relative "
                    >
                        <div
                            className="relative flex h-full w-60 transform items-end transition-transform "
                        >
                            <div
                                className="h-full !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 "
                            >
                                <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/5f1cf06e-289e-4b00-9fea-ef97aa96f365/bd3e14c9-24c6-49ff-99d1-8e502c1a64fe.png"
                                    alt="Product" className="h-full w-72 object-cover" />
                            </div>

                            <div
                                className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 "
                            >
                                <h3 className="mt-4 text-xl font-medium sm:text-2xl">CharGenie</h3>

                                <p className="mt-4 text-sm sm:text-base">
                                    A Character Generator App with extensive customization options, users can select from various hairstyles, facial features, background, and accessories
                                </p>

                                <div className="mt-3 font-bold flex ">
                                    <svg
                                        onClick={() => {
                                            let a = document.createElement("a");
                                            a.href = "https://char-genie.vercel.app/";
                                            a.click();
                                        }}
                                        class="h-8 cursor-pointer hover:scale-110 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
                h-96 rounded flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]
                group relative "
                    >
                        <div
                            className="relative flex h-full w-60 transform items-end transition-transform "
                        >
                            <div
                                className="h-full !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 "
                            >
                                <img src="https://images.ctfassets.net/eut50lk49cau/4SpFS6ffwJSvF3Riv5xtAQ/8b04948e3a4798041857aa34420befc4/colors-in-email-marketing.png"
                                    alt="Product" className="h-full w-72 object-cover" />
                            </div>

                            <div
                                className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 "
                            >
                                <h3 className="mt-4 text-xl font-medium sm:text-2xl">ColorMind</h3>

                                <p className="mt-4 text-sm sm:text-base">
                                    ColorMind is a web app that helps users receive color recommendations based on a context.
                                </p>

                                <div className="mt-3 font-bold flex ">
                                    <svg
                                        onClick={() => {
                                            let a = document.createElement("a");
                                            a.href = "https://v49-tier2-team-12.vercel.app/";
                                            a.click();
                                        }}
                                        class="h-8 cursor-pointer hover:scale-110 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
                h-96 rounded flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]
                group relative "
                    >
                        <div
                            className="relative flex h-full w-60 transform items-end transition-transform "
                        >
                            <div
                                className="h-full !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 "
                            >
                                <img src="https://bakerhomeenergy.com/app/uploads/2022/06/how-long-does-a-solar-panel-installation-take.jpg"
                                    alt="Product" className="h-full w-72 object-cover" />
                            </div>

                            <div
                                className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 "
                            >
                                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Sunergy</h3>

                                <p className="mt-4 text-sm sm:text-base">
                                    This Project helps Los Angeles residents book requests to install solar panels at there home.
                                </p>

                                <div className="mt-3 font-bold flex ">
                                    <svg
                                        onClick={() => {
                                            let a = document.createElement("a");
                                            a.href = "https://solar-app-six.vercel.app/";
                                            a.click();
                                        }}
                                        class="h-8 cursor-pointer hover:scale-110 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
                h-96 rounded flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]
                group relative "
                    >
                        <div
                            className="relative flex h-full w-60 transform items-end transition-transform "
                        >
                            <div
                                className="h-full !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 "
                            >
                                <img src="https://doctorcall.co.uk/wp-content/uploads/2023/05/TfL-website-hero-banner-1920-x-1871.png"
                                    alt="Product" className="h-full w-72 object-cover" />
                            </div>

                            <div
                                className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 "
                            >
                                <h3 className="mt-4 text-xl font-medium sm:text-2xl">VDrive Dubai</h3>

                                <p className="mt-4 text-sm sm:text-base">
                                    I am excited to present my latest project, a cutting-edge platform designed to streamline the process of hiring a driver. By leveraging advanced technology, we ensure a seamless user experience.
                                </p>

                                <div className="mt-3 font-bold flex ">
                                    <svg
                                        onClick={() => {
                                            let a = document.createElement("a");
                                            a.href = "https://www.vdrivedubai.ae/";
                                            a.click();
                                        }}
                                        class="h-8 cursor-pointer hover:scale-110 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
                h-96 rounded flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]
                group relative "
                    >
                        <div
                            className="relative flex h-full w-60 transform items-end transition-transform "
                        >
                            <div
                                className="h-full !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 "
                            >
                                <img src="https://i.ibb.co/dPbxB9b/5948029.jpg"
                                    alt="Product" className="h-full w-72 object-cover" />
                            </div>

                            <div
                                className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 "
                            >
                                <h3 className="mt-4 text-xl font-medium sm:text-2xl">YumYum</h3>

                                <p className="mt-4 text-sm sm:text-base">
                                    This project is a multi-restaurant food ordering website, similar to Glovo, where users ican browse and purchase meals from various restaurants all in one place.
                                </p>

                                <div className="mt-3 font-bold flex ">
                                    <svg
                                        onClick={() => {
                                            let a = document.createElement("a");
                                            a.href = "https://v50-tier2-team-11-three.vercel.app/";
                                            a.click();
                                        }}
                                        class="h-8 cursor-pointer hover:scale-110 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>


            </main>

        </div>
    )
}

export default Projects