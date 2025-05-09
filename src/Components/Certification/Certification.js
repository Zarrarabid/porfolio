import React, { useContext } from 'react'
import gifImage from "../../Assets/Cert.gif"
import { useTranslation } from 'react-i18next';
import MyContext from '../../Container/Context';

function Certification() {
    const {
        setToggle,
        isToggled
    } = useContext(MyContext);

    const { t } = useTranslation();
    const experienceArr = [
        {
            coverImg: "https://cdn-bgp.bluestacks.com/BGP/us/gametiles_com.udemy.android.jpg",
            name: "Essentials of UI/UX",
            link: "https://www.udemy.com/certificate/UC-b2a595e5-fb5b-4420-8618-27c951a0e671/"
        },
        {
            coverImg: "https://cdn-bgp.bluestacks.com/BGP/us/gametiles_com.udemy.android.jpg",
            name: "Graphic Designing Bootcamp",
            link: "https://www.udemy.com/certificate/UC-eb7cc155-37a6-4ecc-8bf4-0954316b96de/"
        },
        {
            coverImg: "https://cdn-bgp.bluestacks.com/BGP/us/gametiles_com.udemy.android.jpg",
            name: "Hands on React.js from Beginner to Expert",
            link: "https://www.udemy.com/certificate/UC-6c4c6856-b69e-45d0-baf4-db9dd480f3d6/"
        },
        {
            coverImg: "https://cdn-bgp.bluestacks.com/BGP/us/gametiles_com.udemy.android.jpg",
            name: "React.js AI Chatbot build with ChatGPT, Gemini and DeepSeek",
            link: "https://www.udemy.com/certificate/UC-f04b2a26-d5e9-4b68-bd00-779c1f77e984/"
        },
        {
            coverImg: "https://devopscube.com/content/images/2025/03/coursera-1-1.png",
            name: "Build a full Stack App using React and Express",
            link: "https://www.coursera.org/account/accomplishments/verify/CLSMENVDASNG?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
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
                className={`relative px-8 pt-8 pb-16 min-h-screen flex flex-col justify-center ${isToggled ? "" : "bg-slate-50"} overflow-hidden`}>
                <div className='w-full flex justify-center'>
                    <div data-aos="zoom-out-up" data-aos-duration="1000" className='h-full w-72 '>
                        <img src={gifImage} />
                    </div>
                </div>
                <h1
                    className={`animate-flip-up animate-duration-1000 text-center mt-3 mb-3 text-2xl font-bold ${isToggled ? "text-gray-100" : "text-black"} md:text-4xl`}>
                    {t("Certifications")}
                </h1>
                <p
                    className={`${isToggled ? "text-gray-100" : "text-black"} text-center`}>
                    {t("Level up your skills and unleash your potential! Each certification is a badge of honor on your journey to greatness")}
                </p>
                <section
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                    {experienceArr?.map((item, index) => (
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

export default Certification