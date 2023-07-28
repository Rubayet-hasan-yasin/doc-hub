import { BsSearch, BsPerson } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="container mx-auto my-5 flex justify-between">
            <img src={logo} alt="" className="h-full" />

            <div className="flex gap-5">
                <ul className="flex gap-5">

                    <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">Home <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>


                        <ul
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product One</li
                            >

                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Two</li
                            >
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Three
                            </li>
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Four
                            </li>
                        </ul>
                    </li>


                    <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">Doctors <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>

                        <ul
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product One</li>

                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Two</li>
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Three
                            </li>
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Four
                            </li>
                        </ul>


                    </li>
                    <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">Patients <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>

                        <ul
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product One</li
                            >

                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Two</li
                            >
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Three
                            </li>
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Four
                            </li>
                        </ul>
                    </li>
                    <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">Pharmacy <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>

                        <ul
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product One</li
                            >

                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Two</li
                            >
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Three
                            </li>
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Four
                            </li>
                        </ul>

                    </li>
                    <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">Pages <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>

                        <ul
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product One</li
                            >

                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Two</li
                            >
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Three
                            </li>
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Four
                            </li>
                        </ul>

                    </li>
                    <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">Blog <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>

                        <ul
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product One</li
                            >

                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Two</li
                            >
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Three
                            </li>
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Four
                            </li>
                        </ul>

                    </li>
                    <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">Admin <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>

                        <ul
                            className="invisible absolute top-10 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product One</li
                            >

                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Two</li
                            >
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Three
                            </li>
                            <li
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >Product Four
                            </li>
                        </ul>

                    </li>
                </ul>


                <button>
                    <BsSearch />
                </button>


                <button className="relative px-3 w-fit h-fit py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute left-0 top-0 w-0 h-0 transition-all duration-200 border-l-2 border-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-r-2 border-gray-600 group-hover:h-full ease"></span>


                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-600 group-hover:h-1/2 ease"></span>
                    <span className="absolute top-0 bottom-0 left-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-600 group-hover:w-1/2 ease"></span>

                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-600 group-hover:h-1/2 ease"></span>
                    <span className="absolute bottom-0 top-0 right-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-600 group-hover:w-1/2 ease"></span>
                    

                    <span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative flex items-center gap-1 transition-colors duration-700 delay-200 group-hover:text-white ease"><BsPerson size={20}/> Register</span>
                </button>

                <button className="relative px-3 w-fit h-fit py-2 overflow-hidden font-medium text-gray-100 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-[1200ms] border-t-2 border-gray-600 group-hover:w-0 ease"></span>
                    <span className="absolute bottom-0 right-0 w-full h-0 transition-all duration-700 delay-[1200ms] border-b-2 border-gray-600 group-hover:w-0 ease"></span>
                    <span className="absolute left-0 top-0 w-0 h-full transition-all duration-700 delay-[1200ms] border-l-2 border-gray-600 group-hover:h-0 ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-full transition-all duration-700 delay-[1200ms] border-r-2 border-gray-600 group-hover:h-0 ease"></span>


                    <span className="absolute top-0 left-0 w-full h-1/2 transition-all duration-1000 delay-200 bg-gray-600 group-hover:h-0 ease"></span>
                    <span className="absolute top-0 bottom-0 left-0 w-1/2 h-full transition-all duration-1000 delay-200 bg-gray-600 group-hover:w-0 ease"></span>

                    <span className="absolute bottom-0 left-0 w-full h-1/2 transition-all duration-1000 delay-200 bg-gray-600 group-hover:h-0 ease"></span>
                    <span className="absolute bottom-0 top-0 right-0 w-1/2 h-full transition-all duration-1000 delay-200 bg-gray-600 group-hover:w-0 ease"></span>
                    

                    {/* <span className="absolute inset-0 w-full h-full duration-1000 delay-300 bg-gray-100 opacity-0 group-hover:opacity-100"></span> */}
                    <span className="relative flex items-center gap-1 transition-colors duration-1000 delay-200 group-hover:text-gray-600 ease"><BiLockAlt size={20}/> Login</span>
                </button>



                
            </div>
        </nav>
    );
};

export default Navbar;