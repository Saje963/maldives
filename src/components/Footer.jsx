import React from "react";
import {
  UilFacebook,
  UilTwitter,
  UilInstagram,
  UilLinkedin,
  UilYoutube,
} from "@iconscout/react-unicons";
function Footer() {
  return (
    <div className="w-auto h-full py-8 bg-gray-300 ">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="items-center justify-between cursor-pointer sm:flex">
          <h1>SaBooker.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4 text-[#5651e5] cursor-pointer">
            <UilFacebook size={35} />
            <UilTwitter size={35} />
            <UilInstagram size={35} />
            <UilYoutube size={35} />
            <UilLinkedin size={35} />
          </div>
        </div>
        <div className="flex justify-between cursor-pointer">
          <ul className="lg:flex">
            <li className="hover:text-[#5651e5]">About</li>
            <li className="hover:text-[#5651e5]">PartnerShips</li>
            <li className="hover:text-[#5651e5]">Careers</li>
            <li className="hover:text-[#5651e5]">NewsRoom</li>
            <li className="hover:text-[#5651e5]">Adverstising</li>
          </ul>
          <ul className="mr-5 lg:flex">
            <li className="hover:text-[#5651e5]">Home</li>
            <li className="hover:text-[#5651e5]">Destinations</li>
            <li className="hover:text-[#5651e5]">Travel</li>
            <li className="hover:text-[#5651e5]">View</li>
            <li className="hover:text-[#5651e5]">Books</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t">
        <p className="mt-6 text-xl ">
          Made By
          <a
            href="https://www.instagram.com/saje_963/"
            className="p-1 font-bold hover:text-teal-600"
          >
            Saje
          </a>
          For
          <a
            href="https://www.facebook.com/mariam.mostafaa.79"
            className="p-1 font-bold hover:text-teal-600"
          >
            Maryoma ❤️
          </a>
        </p>
        <p>All CopyRights Saved © </p>
      </div>
    </div>
  );
}

export default Footer;
