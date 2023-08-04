import { BsSearch, BsPerson } from "react-icons/bs";
import { BiLockAlt, BiMenu } from "react-icons/bi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <nav className="container mx-auto my-5 lg:flex justify-between">
      <button className="absolute lg:hidden">
        <BiMenu onClick={() => setMenu(true)} size={40} color="blue" />
      </button>
      <img src={logo} alt="" className="h-full mx-auto lg:mx-0" />
      <div
        className={`absolute lg:static top-0 z-30 ${
          menu ? "left-0" : "-left-[500px]"
        } duration-1000 lg:flex gap-5 w-fit space-y-10 lg:space-y-0 h-screen lg:h-fit bg-blue-500 lg:bg-white`}
      >
        <div className="bg-white border-2 lg:hidden border-white flex">
          <img src={logo} alt="" className="mx-auto" />
          <button onClick={() => setMenu(false)} className="">
            <IoMdClose size={35} />
          </button>
        </div>
        <ul className="flex lg:flex-row flex-col gap-8 w-fit mx-auto lg:mx-0 px-32 lg:p-0">
          <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">
            Home <IoIosArrowDown />
            <ul className="invisible absolute lg:top-10 top-6 left-0 right-0 w-40 z-10 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </li>

              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </li>
            </ul>
          </li>

          <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">
            Doctors <IoIosArrowDown />
            <ul className="invisible absolute lg:top-10 top-6 left-0 right-0 w-40 z-10 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </li>

              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </li>
            </ul>
          </li>
          <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">
            Patients <IoIosArrowDown />
            <ul className="invisible absolute lg:top-10 top-6 left-0 right-0 w-40 z-10 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </li>

              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </li>
            </ul>
          </li>
          <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">
            Pharmacy <IoIosArrowDown />
            <ul className="invisible absolute lg:top-10 top-6 left-0 right-0 w-40 z-10 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </li>

              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </li>
            </ul>
          </li>
          <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">
            Pages <IoIosArrowDown />
            <ul className="invisible absolute lg:top-10 top-6 left-0 right-0 w-40 z-10 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </li>

              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </li>
            </ul>
          </li>
          <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">
            Blog <IoIosArrowDown />
            <ul className="invisible absolute lg:top-10 top-6 left-0 right-0 w-40 z-10 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </li>

              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </li>
            </ul>
          </li>
          <li className="relative flex items-center justify-between text-base font-semibold cursor-pointer group">
            Admin <IoIosArrowDown />
            <ul className="invisible absolute lg:top-10 top-6 right-0 w-40 z-10 bg-gray-100 p-1 text-gray-800 shadow-xl group-hover:visible">
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </li>

              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </li>
              <li className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex gap-5 items-center px-32 lg:px-0">
          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="w-fit h-fit lg:w-fit text-center bg-red-50 px-4 py-4 rounded-full"
            >
              <BsSearch />
            </button>

            <form
              className={` bg-slate-200 rounded shadow-2xl flex absolute lg:right-0  top-12 z-10 ${
                showSearch ? "h-16" : "h-0 invisible"
              } overflow-hidden transition-all duration-1000 ease`}
            >
              <input
                type="text"
                name="search"
                id=""
                className="bg-slate-100 h-8 border-blue-500 border-2 rounded-l-md focus:outline-none my-4 ml-5"
              />
              <button className="h-8 bg-blue-500 rounded-r-md px-3 text-white font-semibold hover:bg-blue-400 border-blue-500 border-2 my-4 mr-5">
                Search
              </button>
            </form>
          </div>

          <button className="relative px-3 w-fit h-fit py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 rounded shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute left-0 top-0 w-0 h-0 transition-all duration-200 border-l-2 border-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-r-2 border-gray-600 group-hover:h-full ease"></span>

            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-600 group-hover:h-1/2 ease"></span>
            <span className="absolute top-0 bottom-0 left-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-600 group-hover:w-1/2 ease"></span>

            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-600 group-hover:h-1/2 ease"></span>
            <span className="absolute bottom-0 top-0 right-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-600 group-hover:w-1/2 ease"></span>

            <span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative flex items-center gap-1 transition-colors duration-700 delay-200 group-hover:text-white ease">
              <BsPerson size={20} /> Register
            </span>
          </button>

          <button className="relative px-3 w-fit h-fit py-2 overflow-hidden font-medium text-gray-100 bg-gray-100  rounded shadow-inner group">
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-[1200ms] border-t-2 border-gray-600 group-hover:w-0 ease"></span>
            <span className="absolute bottom-0 right-0 w-full h-0 transition-all duration-700 delay-[1200ms] border-b-2 border-gray-600 group-hover:w-0 ease"></span>
            <span className="absolute left-0 top-0 w-0 h-full transition-all duration-700 delay-[1200ms] border-l-2 border-gray-600 group-hover:h-0 ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-full transition-all duration-700 delay-[1200ms] border-r-2 border-gray-600 group-hover:h-0 ease"></span>
            <span className="absolute top-0 left-0 w-full h-1/2 transition-all duration-1000 delay-200 bg-gray-600 group-hover:h-0 ease"></span>
            <span className="absolute top-0 bottom-0 left-0 w-1/2 h-full transition-all duration-1000 delay-200 bg-gray-600 group-hover:w-0 ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/2 transition-all duration-1000 delay-200 bg-gray-600 group-hover:h-0 ease"></span>
            <span className="absolute bottom-0 top-0 right-0 w-1/2 h-full transition-all duration-1000 delay-200 bg-gray-600 group-hover:w-0 ease"></span>
            <span className="relative flex items-center gap-1 transition-colors duration-1000 delay-200 group-hover:text-gray-600 ease">
              <BiLockAlt size={20} /> Login
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
