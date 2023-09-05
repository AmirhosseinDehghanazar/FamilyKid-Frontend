import React from "react";
import Logo from "../../assets/img/LOGO.png";
import shape from "../../assets/img/shape.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="mt-8 mb-4">
      {/* navbar */}
      <div className="transition-all flex justify-between items-center ">
        <div className="-mt-7">
          <img src={Logo} />
        </div>
        <div className="transition-all flex font-semibold lg:gap-4  xl:gap-10">
          <a href="#">
            <div className="flex items-center gap-2">
              <p>About Us </p>
              <img className="h-2" src={shape} />
            </div>
          </a>
          <a href="#">Our Services</a>
          <a href="#">
            <div className="flex items-center gap-2">
              <p> Our Organization </p>
              <img className="h-2" src={shape} />
            </div>
          </a>
          <a href="#"> Jobs</a>
          <a href="#">
            <div className="flex items-center gap-2">
              <p>Contact Us </p>
              <img className="h-2" src={shape} />
            </div>
          </a>
        </div>
        <div className="buttons_div rounded-2xl overflow-hidden">
          <button className="bg-button py-3 px-6 rounded-xl hover:bg-cyan-600">
            Register
          </button>
          <button className=" py-3 px-6 rounded-2xl">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
