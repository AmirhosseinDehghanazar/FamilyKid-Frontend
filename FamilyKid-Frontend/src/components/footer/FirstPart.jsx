import React from "react";
import "./footer.css";

const FirstPart = () => {
  return (
    <div className="grid grid-cols-3 gap-14 first-part">
      <div className="flex flex-col gap-4">
        <a href="#" className="text-lg font-semibold">
          Our Services
        </a>
        <div className="flex flex-col gap-3 links-container">
          <a href="#">Professors</a>
          <a href="#">Values</a>
          <a href="#">The quality of our work</a>
          <a href="#">Our mission</a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <a href="#" className="text-lg font-semibold">
          About us
        </a>
        <div className="flex flex-col gap-4  links-container">
          <a href="#">Our policies</a>
          <a href="#">Our work routine</a>
          <a href="#">Our offices</a>
          <a href="#">Sketch</a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <a href="#" className="text-lg font-semibold">
          Contact us
        </a>{" "}
        <div className="flex flex-col gap-4  links-container">
          <a href="#">Photo Gallery</a>
          <a href="#">Resources</a>
          <a href="#">Guides</a>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
