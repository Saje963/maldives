import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {
  UilFacebook,
  UilTwitter,
  UilInstagram,
  UilLinkedin,
  UilYoutube,
  UilBars,
} from "@iconscout/react-unicons";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="flex justify-between items-center h-20 px-4 absolute z-10 text-white w-full">
      <div className="cursor-pointer">
        <h1 onClick={toggleNav} className={logo ? "hidden" : "block"}>
          SaBooker.
        </h1>
      </div>
      <ul className="hidden md:flex cursor-pointer">
        <li className="hover:text-gray-400">Home</li>
        <li className="hover:text-gray-400">Destinations</li>
        <li className="hover:text-gray-400">Travel</li>
        <li className="hover:text-gray-400">View</li>
        <li className="hover:text-gray-400">Books</li>
      </ul>
      <div className="hidden md:flex cursor-pointer">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hmaburger */}
      <div onClick={toggleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <UilBars size={20} />
        )}
      </div>

      {/* Mobile Menu drop */}

      <div
        onClick={toggleNav}
        className={
          nav
            ? " absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "hidden"
        }
      >
        <ul className="text-black">
          <h1>SaBooker.</h1>
          <li className=" border-b">Home</li>
          <li className=" border-b">Destinations</li>
          <li className=" border-b">Travel</li>
          <li className=" border-b">View</li>
          <li className=" border-b">Books</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="text-[#5651e5] cursor-pointer flex justify-between my-6">
            <UilFacebook size={35} />
            <UilTwitter size={35} />
            <UilInstagram size={35} />
            <UilYoutube size={35} />
            <UilLinkedin size={35} />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
