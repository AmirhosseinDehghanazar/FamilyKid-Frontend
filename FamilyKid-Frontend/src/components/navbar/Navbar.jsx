import React from "react";
import Logo from "../../assets/img/LOGO.png";
import shape from "../../assets/img/shape.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="mt-8 mb-4">
      {/* navbar */}
      <div className="transition-all flex justify-center items-center gap-6 md:gap-18 xl:gap-28 2xl:gap-52">
        <div className="-mt-7">
          <img src={Logo} />
        </div>
        <div className="transition-all flex font-semibold sm:gap-4 md:gap-8 2xl:gap-10">
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
