import React from "react";

import "./footer.css";
import SecondPart from "./SecondPart";
import FirstPart from "./FirstPart";

const Footer = () => {
  return (
    <div className="flex justify-around items-center mt-20 mb-4">
      <FirstPart />
      <SecondPart />
    </div>
  );
};

export default Footer;
