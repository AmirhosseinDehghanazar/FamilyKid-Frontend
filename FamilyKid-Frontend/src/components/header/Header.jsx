import React from "react";
import image from "../../assets/img/header/020.png";
import up from "../../assets/img/header/Highlight_10.png";
import under from "../../assets/img/header/Underline_04.png";
import "./header.css";

const Header = () => {
  return (
    <div className="flex justify-between 2xl:justify-around items-center mt-20 mb-8">
      <div className="relative">
        <div className="text text-9xl text-sky-500 max-w-lg">
          Family Kid Academy
        </div>
        <div className="absolute -top-8 -right-10">
          <img src={up} />
        </div>
        <div>
          <img src={under} />
        </div>
        <p className="font-bold text-2xl max-w-lg my-2">
          Family Kid Academy is International Online English Teaching Services
        </p>
        <button className="py-3 mt-4 px-4 text-lg button rounded-xl text-white font-semibold">
          Get Started
        </button>
      </div>

      <div className="max-w-xl">
        <img src={image} />
      </div>
    </div>
  );
};

export default Header;
