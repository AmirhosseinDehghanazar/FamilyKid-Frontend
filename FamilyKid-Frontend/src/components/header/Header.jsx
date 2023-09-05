import React from "react";
import image from "../../assets/img/020.png";
import "./header.css";

const Header = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="text">Family Kid Academy</div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
};

export default Header;
