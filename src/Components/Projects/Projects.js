import React, { useContext } from 'react'
import gifImage from "../../Assets/PROJECTS.gif"
import { useTranslation } from 'react-i18next';
import MyContext from '../../Container/Context';

function Projects() {
    const {
        setToggle,
        isToggled
    } = useContext(MyContext);

    const { t } = useTranslation();
    const projectsArr = [
        {
            coverImg: "https://i.pinimg.com/736x/e4/16/4d/e4164dc76ed75a89a2ece0bea0ca1cec.jpg",
            name: "Adnote",
            des: "App that allows you to create and organize your notes seamlessly with search filter.",
            link: "https://adnote.vercel.app/"
        },
        {
            coverImg: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/5f1cf06e-289e-4b00-9fea-ef97aa96f365/bd3e14c9-24c6-49ff-99d1-8e502c1a64fe.png",
            name: "CharGenie",
            des: "A Character Generator App with extensive customization options, users can select from various hairstyles, facial features, background, and accessories.",
            link: "https://char-genie.vercel.app/"
        },
        {
            coverImg: "https://images.ctfassets.net/eut50lk49cau/4SpFS6ffwJSvF3Riv5xtAQ/8b04948e3a4798041857aa34420befc4/colors-in-email-marketing.png",
            name: "ColorMind",
            des: "ColorMind is a web app that helps users receive color recommendations based on a context.",
            link: "https://v49-tier2-team-12.vercel.app/"
        },
        {
            coverImg: "https://bakerhomeenergy.com/app/uploads/2022/06/how-long-does-a-solar-panel-installation-take.jpg",
            name: "Sunergy",
            des: "This Project helps Los Angeles residents book requests to install solar panels at there home.",
            link: "https://solar-app-six.vercel.app/"
        },
        {
            coverImg: "https://doctorcall.co.uk/wp-content/uploads/2023/05/TfL-website-hero-banner-1920-x-1871.png",
            name: "VDrive Dubai",
            des: "A cutting-edge App to streamline the hiring process for drivers, ensuring a seamless user experience through advanced technology.",
            link: "https://www.vdrivedubai.ae/"
        },
        {
            coverImg: "https://i.ibb.co/dPbxB9b/5948029.jpg",
            name: "YumYum",
            des: "This project is a multi-restaurant food ordering website, similar to Glovo, where users can browse and purchase meals from various restaurants all in one place.",
            link: "https://v50-tier2-team-11-three.vercel.app/"
        },
    ]
    return (
        <div
            style={{
                overflow: "hidden"
            }}
        >
            <main
                style={{
                    backgroundImage: isToggled ? "linear-gradient(135deg, #16213E 0%, #1A1A2E 100%)" : ""
                }}
                className={`relative px-8 pt-8 pb-16 min-h-screen flex flex-col justify-center ${isToggled ? "" : "bg-slate-50"} bg-slate-50 overflow-hidden`}>
                <div className='w-full flex justify-center'>
                    <div data-aos="zoom-out-up" data-aos-duration="1000" className='h-full w-72 '>
                        <img src={gifImage} />
                    </div>
                </div>
                <h1
                    className={`animate-flip-up animate-duration-1000 text-center mt-3 mb-3 text-2xl font-bold ${isToggled ? "text-gray-100" : "text-black"} md:text-4xl`}>
                    {t("Projects")}
                </h1>
                <p
                    className={`${isToggled ? "text-gray-100" : "text-black"} text-center`}>
                    {t("Brilliant ideas need a spark! Fueled by bold moves and relentless grit. Why? Because...")}
                </p>
                <p
                    className={`${isToggled ? "text-gray-100" : "text-black"} text-center mb-10`}>
                    "{t("THE SECRET TO SUCCESS IS...")}<br></br>
                    {t("UNSTOPPABLE CONSISTENCY!")}"
                </p>

                <section
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                    {projectsArr?.map((item, index) => (
                        <div
                            key={index}
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
                                    <img src={item?.coverImg}
                                        alt="Product" className="h-full w-72 object-cover" />
                                </div>

                                <div
                                    className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 "
                                >
                                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">{item?.name}</h3>

                                    <p className="mt-4 text-sm sm:text-base">
                                        {t(item?.des)}
                                    </p>

                                    <div className="mt-3 font-bold flex ">
                                        <svg
                                            onClick={() => {
                                                let a = document.createElement("a");
                                                a.href = `${item?.link}`;
                                                a.target = "_blank";
                                                a.click();
                                            }}
                                            class="h-8 cursor-pointer hover:scale-110 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}



                </section>


            </main>

        </div>
    )
}

export default Projects