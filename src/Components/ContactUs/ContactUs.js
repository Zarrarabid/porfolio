import React, { useContext, useState } from 'react'
import MyContext from '../../Container/Context';

function ContactUs() {
    const {
        setToggle,
        isToggled
    } = useContext(MyContext);

    const [details, setDetails] = useState({
        name: "",
        contact: "",
        email: "",
        message: ""
    })
    return (
        <div
            style={{
                overflow: "hidden",
                backgroundImage: isToggled ? "linear-gradient(135deg, #16213E 0%, #1A1A2E 100%)" : ""
            }}
            className='h-full flex flex-col items-center justify-center'>
            <div
                className="z-50 flex flex-col items-center justify-center">
                <div className="relative my-36">
                    <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-gray-500 via-blue-600 to-black shadow-lg animate-pulse"></div>
                    <div className="relative bg-white p-10 rounded-lg shadow-lg">
                        <div className="flex flex-wrap justify-center gap-5 items-center w-full max-md:max-w-full mb-10">
                            <div className="text-2xl font-bold text-gray-800">Contact Us</div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div id="input" className="relative">
                                <input
                                    type="text"
                                    id="floating_outlined"
                                    className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                    placeholder="Full name"
                                    value={details?.name}
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            name: e?.target?.value
                                        })
                                    }}
                                />
                                <label
                                    for="floating_outlined"
                                    className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                    Full Name
                                </label>
                            </div>

                            <div id="input" className="relative">
                                <input
                                    type="text"
                                    id="floating_outlined"
                                    className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                    placeholder="Contact"
                                    value={details?.contact}
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            contact: e?.target?.value
                                        })
                                    }}
                                />
                                <label
                                    for="floating_outlined"
                                    className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                    Contact
                                </label>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 gap-6 mb-10">

                            <div id="input" className="relative">
                                <input
                                    type="text"
                                    id="floating_outlined"
                                    className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                    placeholder="Email"
                                    value={details?.email}
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            email: e?.target?.value
                                        })
                                    }}
                                />
                                <label
                                    for="floating_outlined"
                                    className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                    Email
                                </label>
                            </div>

                            <div id="input" className="relative">
                                <textarea
                                    type="text"
                                    id="floating_outlined"
                                    name="message"
                                    className="block w-full text-sm h-[50px] px-4 py-3 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                    placeholder="Message"
                                    value={details?.message}
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            message: e?.target?.value
                                        })
                                    }}
                                ></textarea>
                                <label
                                    for="floating_outlined"
                                    className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                    Message
                                </label>
                            </div>

                        </div>

                        <div className="sm:flex sm:flex-row-reverse flex gap-4">
                            <a
                                href={`mailto:zarrarabid72@gmail.com?subject=Reach Out&body=${encodeURIComponent(details?.name)}%0A${encodeURIComponent(details?.contact)}%0A${encodeURIComponent(details?.message)}`}
                                target="_blank"
                                className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none border bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
                            >
                                Send
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs