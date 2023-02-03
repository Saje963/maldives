import React from "react";

import BoraBora from "../asssets/borabora.jpg";
import BoraBora2 from "../asssets/borabora2.jpg";
import Maldives from "../asssets/maldives.jpg";
import Maldives2 from "../asssets/maldives2.jpg";
import KeyWest from "../asssets/keywest.jpg";

function Destinations() {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1 className="cursor-default">All-Inclusive Resorts</h1>
      <p className="py-4 cursor-default">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 md:gap-4">
        <img
          className="h-full w-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={BoraBora}
          alt=""
        />
        <img className="h-full w-full object-cover" src={BoraBora2} alt="" />
        <img className="h-full w-full object-cover" src={Maldives} alt="" />
        <img className="h-full w-full object-cover" src={Maldives2} alt="" />
        <img className="h-full w-full object-cover" src={KeyWest} alt="" />
      </div>
    </div>
  );
}

export default Destinations;
