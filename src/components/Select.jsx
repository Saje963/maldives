import React from "react";
import SelectCard from "./SelectCard";
import BoraBora from "../asssets/borabora.jpg";
import BoraBora2 from "../asssets/borabora2.jpg";
import Maldives from "../asssets/maldives.jpg";
import Maldives2 from "../asssets/maldives2.jpg";
import Maldives3 from "../asssets/maldives3.jpg";
import KeyWest from "../asssets/keywest.jpg";

function Select() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <SelectCard bg={Maldives} text="Maldives" />
      <SelectCard bg={BoraBora} text="BoraBora" />
      <SelectCard bg={Maldives2} text="Cozumel" />
      <SelectCard bg={Maldives3} text="KeyWest" />
      <SelectCard bg={BoraBora2} text="Antigua" />
      <SelectCard bg={KeyWest} text="Jamaica" />
    </div>
  );
}

export default Select;
