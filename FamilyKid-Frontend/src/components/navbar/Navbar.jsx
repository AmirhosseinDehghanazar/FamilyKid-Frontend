import React from "react";
import Logo from "../../assets/img/navbar/LOGO.png";
import shape from "../../assets/img/navbar/shape.png";
import "./navbar.css";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <div className="navBar mt-8 mb-4 ">
      {/* navbar */}
      <div className="transition-all flex justify-around items-center ">
        <a href="#" className="-mt-7">
          <img src={Logo} />
        </a>
        <div className="transition-all flex font-semibold lg:gap-4  xl:gap-10">
          <div>
            <div className="flex dropdown items-center gap-2 relative">
              <p>About Us </p>
              <img className="h-2" src={shape} />
              <DropdownMenu links={["link aval about", "link dovom about"]} />
            </div>
          </div>
          <a href="#">Our Services</a>
          <div>
            <div className="flex items-center gap-2  dropdown relative">
              <p> Our Organization </p>
              <img className="h-2" src={shape} />
              <DropdownMenu links={["link aval org", "linkdovom org"]} />
            </div>
          </div>
          <a href="#"> Jobs</a>
          <div>
            <div className="flex items-center gap-2  dropdown relative">
              <p>Contact Us </p>
              <img className="h-2" src={shape} />
              <DropdownMenu links={["link aval con", "link dovom con"]} />
            </div>
          </div>
        </div>
        <div className="border border-primary rounded-2xl overflow-hidden">
          <a href="/register">
            <button className="text-white bg-primary py-3 px-6 rounded-xl hover:bg-cyan-600">
              Register
            </button>
          </a>
          <a href="/login">
            <button className=" py-3 px-6 rounded-2xl">Login</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
