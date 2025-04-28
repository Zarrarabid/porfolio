import React from 'react'
import { Tilt } from '@jdion/tilt-react'
import gifImage from "../../Assets/Animation - 1745488964416.gif"
import { useTranslation } from 'react-i18next';

function Expereince() {
    const { t } = useTranslation();

    return (
        <div
            style={{
                overflow: "hidden"
            }}
        >
            <main className="relative px-8 py-16 min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div data-aos="zoom-out-up" data-aos-duration="3000" className=' flex justify-center w-full h-full'>
                    <img src={gifImage} />
                </div>
                <h1
                    className="animate-flip-up animate-duration-1000 text-center mt-8 mb-3 text-2xl font-bold text-black md:text-4xl ">
                    {t("Work History")}
                </h1>
                <p
                    // style={{ color: textColor, }}
                    className=" text-center ">
                    {t("In the school of life, practical work is the ultimate curriculum.")}
                </p>
                <div className="w-full max-w-screen-xl px-4 py-8 mx-auto md:px-6 ">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                        <div className="w-full">
                            <div className="hidden sm:block space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                                <div data-aos="zoom-out-left" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                        </svg>
                                    </div>
                                    <div className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]'>
                                        <Tilt>
                                            <div
                                                className=" rounded translate-x-6 -translate-y-6 flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                                            >
                                                <div className="group relative">
                                                    <div className="flex-grow ">
                                                        <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                                            Front-End Developer
                                                        </h2>
                                                        <div
                                                            className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                                        >
                                                            <div className="w-full">
                                                                <div className="flex items-center justify-between space-x-2 mb-1">
                                                                    <div className="font-bold text-slate-900">DCCL | Islamabad, Pakistan</div>
                                                                    <time className="font-caveat font-medium text-indigo-500">SEP-2023 - PRESENT</time>
                                                                </div>
                                                                <div className="text-slate-500">
                                                                    ♦ {t("Developed and maintained advanced ReactJS applications tailored for various industries, particularly focusing on the finance sector.")}<br></br>
                                                                    ♦ {t("Managed application state using Redux for robust state handling.")}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>

                                </div>

                                <div data-aos="zoom-out-right" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                        </svg>
                                    </div>
                                    <div className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]'>
                                        <Tilt>
                                            <div
                                                className=" rounded -translate-x-6 translate-y-6 flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000] mr-5"
                                            >
                                                <div className="group relative">
                                                    <div className="flex-grow ">
                                                        <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                                            Internship
                                                        </h2>
                                                        <div
                                                            className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                                        >
                                                            <div className="w-full">
                                                                <div className="flex items-center justify-between space-x-2 mb-1">
                                                                    <div className="font-bold text-slate-900">SECP | Islamabad, Pakistan</div>
                                                                    <time className="font-caveat font-medium text-indigo-500">SEP-2021 - OCT-2021</time>
                                                                </div>
                                                                <div className="text-slate-500">
                                                                    ♦ {t("Led the maintenance of the front-end interface to ensure peak performance.")}<br></br>
                                                                    ♦ {t("Managed supplier relationships to secure cutting-edge technologies, keeping a competitive advantage in web development.")}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                </div>

                                <div data-aos="zoom-out-left" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                        </svg>
                                    </div>
                                    <div className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]'>
                                        <Tilt>
                                            <div
                                                className=" rounded translate-x-6 -translate-y-6 flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                                            >
                                                <div className="group relative">
                                                    <div className="flex-grow ">
                                                        <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                                            Graphic Designer
                                                        </h2>
                                                        <div
                                                            className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                                        >
                                                            <div className="w-full">
                                                                <div className="flex items-center justify-between space-x-2 mb-1">
                                                                    <div className="font-bold text-slate-900">Self Employed</div>
                                                                    <time className="font-caveat font-medium text-indigo-500">OCT-2019 - Present</time>
                                                                </div>
                                                                <div className="text-slate-500">
                                                                    ♦ {t("Created cutting-edge design solutions for a variety of client projects, boosting brand visibility and engagement.")}<br></br>
                                                                    ♦ {t("Proficient in Adobe Creative Suite (Photoshop, Illustrator) design software, guaranteeing timely delivery of high-quality results.")}</div>
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
                    </div>
                </div>

            </main>
            <div className="px-2 sm:hidden flex flex-col justify-center align-middle gap-10">
                <Tilt>
                    <div
                        data-aos="zoom-out-left"
                        className="w-full rounded translate-x-6 -translate-y-6 flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                    >
                        <div className="group relative">
                            <div className="flex-grow ">
                                <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                    Front-End Developer
                                </h2>
                                <div
                                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                >
                                    <div className="w-full">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">DCCL | Islamabad, Pakistan</div>
                                            <time className="font-caveat font-medium text-indigo-500">SEP-2023 - PRESENT</time>
                                        </div>
                                        <div className="text-slate-500">
                                            ♦ {t("Developed and maintained advanced ReactJS applications tailored for various industries, particularly focusing on the finance sector.")}<br></br>
                                            ♦ {t("Managed application state using Redux for robust state handling.")}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div
                        data-aos="zoom-out-right"
                        className="w-full rounded -translate-x-6 translate-y-6 flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000] mr-5"
                    >
                        <div className="group relative">
                            <div className="flex-grow ">
                                <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                    Internship
                                </h2>
                                <div
                                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                >
                                    <div className="w-full">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">SECP | Islamabad, Pakistan</div>
                                            <time className="font-caveat font-medium text-indigo-500">SEP-2021 - OCT-2021</time>
                                        </div>
                                        <div className="text-slate-500">
                                            ♦ {t("Led the maintenance of the front-end interface to ensure peak performance.")}<br></br>
                                            ♦ {t("Managed supplier relationships to secure cutting-edge technologies, keeping a competitive advantage in web development.")}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div
                        data-aos="zoom-out-left"
                        className="w-full rounded translate-x-6 -translate-y-6 flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 transform hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                    >
                        <div className="group relative">
                            <div className="flex-grow ">
                                <h2 className="group-hover:text-red-500 text-xl title-font font-medium mb-3">
                                    Graphic Designer
                                </h2>
                                <div
                                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-700 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                                >
                                    <div className="w-full">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">Self Employed</div>
                                            <time className="font-caveat font-medium text-indigo-500">OCT-2019 - Present</time>
                                        </div>
                                        <div className="text-slate-500">
                                            ♦ {t("Created cutting-edge design solutions for a variety of client projects, boosting brand visibility and engagement.")}<br></br>
                                            ♦ {t("Proficient in Adobe Creative Suite (Photoshop, Illustrator) design software, guaranteeing timely delivery of high-quality results.")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default Expereince