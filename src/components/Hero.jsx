import React from "react";
import beachVid from "../asssets/beachVid.mp4";
import { UilSearch } from "@iconscout/react-unicons";
function Hero() {
  return (
    <div className="relative w-full h-full ">
      <video
        className="object-cover w-full h-full"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full  bg-gray-900/30"></div>
      <div className="absolute top-0 flex flex-col justify-center w-full h-full p-4 text-center text-white ">
        <h1 className="cursor-default ">First Class Travel</h1>
        <h2 className="py-4 cursor-default">Top 1% Locations Worldwide</h2>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className=" bg-transparent w-[300px] sm:w-[400px] outline-none"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <UilSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
