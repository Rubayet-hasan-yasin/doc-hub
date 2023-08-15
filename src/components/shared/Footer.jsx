import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoLocation } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      {/* upper side */}
      <div>
        {/* grid parent */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10 pb-4">
          {/* first col */}
          <div>
            <img src={logo} alt="logo" />
            <p className="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          {/* second col */}
          <div>
            <p className="text-xl font-semibold">For Patients</p>
            <ul className="pt-4">
              <li>Search for Doctors</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
          {/* third col */}
          <div>
            <p className="text-xl font-semibold">For Doctors</p>
            <ul>
              <li>Appointments</li>
              <li>Chat</li>
              <li>Login</li>
            </ul>
          </div>
          {/* fourth col */}
          <div>
            <p className="text-xl font-semibold">Contact Us</p>
            {/* location */}
            <div className="flex items-center gap-3">
              <IoLocation />
              <span>3556 Beech Street, USA</span>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3">
              <BiPhoneCall />
              <a href="tel:+1 315 369 5943">+1 315 369 5943</a>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3">
              <HiOutlineMail />
              <a href="mailto:doccure@example.com">doccure@example.com</a>
            </div>
          </div>
          {/* fifth col */}
          <div className="space-y-2">
            <p className="text-xl font-semibold">Join Our Newsletter</p>
            <form className="flex items-center">
              <input
                type="email"
                name="name"
                className="border px-1 py-1 rounded-l focus:outline-none"
                placeholder="Enter Email"
              />
              <button
                type="submit"
                className="bg-blue-500 py-[5px] px-[6px] font-semibold text-white rounded-r"
              >
                Submit
              </button>
            </form>
            {/* Socials logos */}
            <div className="flex items-center gap-2">
              <FaFacebook className="text-xl"/>
              <FaTwitter className="text-xl"/>
              <FaInstagram className="text-xl"/>
              <FaLinkedin className="text-xl"/>
            </div>
          </div>
        </div>
      </div>
      {/* down side */}
      <div className="text-center md:flex justify-between items-center border-t border-gray-300">
        <p className="pt-2">Copyright © 2023 Dreamguys. All Rights Reserved</p>
        <p>Privacy Policy &nbsp; &nbsp; | &nbsp; &nbsp; Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
