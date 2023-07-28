
const Navbar = () => {
    return (
        <>

            <div className="group hidden relative w-fit cursor-pointer py-2">
                <div className="flex items-center justify-between space-x-5 bg-white px-4">
                    <li
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                        onClick=""
                    >
                        Our Products
                    </li>
                    <span>
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
                </div>
                <div
                    className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                    onClick=""
                >
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
                </div>
            </div>


            <nav className="container mx-auto my-5 flex justify-between">
                <img src="https://doccure.dreamguystech.com/html/template/lissets/img/logo.png" alt="" className="h-full" />

                <ul className="flex gap-10">

                    <li className="relative flex items-center justify-between text-lg font-semibold cursor-pointer group">Home <span>
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
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible"
                            onClick="">
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


                    <li className="relative flex items-center justify-between text-lg font-semibold cursor-pointer group">Doctors <span>
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
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible"
                            onClick="">
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
                    <li className="relative flex items-center justify-between text-lg font-semibold cursor-pointer group">Patients <span>
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
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible"
                            onClick="">
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
                    <li className="relative flex items-center justify-between text-lg font-semibold cursor-pointer group">Pharmacy <span>
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
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible"
                            onClick="">
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
                    <li className="relative flex items-center justify-between text-lg font-semibold cursor-pointer group">Pages <span>
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
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible"
                            onClick="">
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
                    <li className="relative flex items-center justify-between text-lg font-semibold cursor-pointer group">Blog <span>
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
                            className="invisible absolute top-10 left-0 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible"
                            onClick="">
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
                    <li className="relative flex items-center justify-between text-lg font-semibold cursor-pointer group">Admin <span>
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
                            className="invisible absolute top-10 right-0 w-40 z-50 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible"
                            onClick="">
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
            </nav>
        </>
    );
};

export default Navbar;