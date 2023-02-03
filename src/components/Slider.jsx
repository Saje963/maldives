import React, { useState } from "react";
import { UilAngleLeftB, UilAngleRightB } from "@iconscout/react-unicons";
const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];
function Slider() {
  const [slider, setSlider] = useState(0);
  const length = sliderData.length;
  const prevSlide = () => {
    setSlider(slider === length - 1 ? 0 : slider + 1);
  };
  const nextSlide = () => {
    setSlider(slider === 0 ? length - 1 : slider - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <UilAngleLeftB
        onClick={prevSlide}
        className=" absolute top-[50%] text-white cursor-pointer left-8 bg-slate-900/60 rounded-md"
        size={40}
      />
      <UilAngleRightB
        onClick={nextSlide}
        className=" absolute top-[50%] text-white cursor-pointer right-8 bg-slate-900/60 rounded-md "
        size={40}
      />
      {sliderData.map((item, index) => (
        <div className={index === slider ? "opacity-100" : "opacity-0"}>
          {index === slider && (
            <img className="w-full rounded-md " src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Slider;
