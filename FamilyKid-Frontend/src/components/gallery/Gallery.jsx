import React from "react";
import main from "../../assets/img/gallery/4_0.png";
import one from "../../assets/img/gallery/27-scaled.png";
import two from "../../assets/img/gallery/2jpg-scaled.png";
import three from "../../assets/img/gallery/26jpg-scaled.png";
import four from "../../assets/img/gallery/3-scaled.png";
import five from "../../assets/img/gallery/25-scaled.png";
import six from "../../assets/img/gallery/13.png";
import flash from "../../assets/img/gallery/Vector_29.png";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center mt-20 gap-8">
      <div>
        <div className="flex">
          <p className="text-chelona text-primary text-8xl">Our Gallery</p>
          <img src={flash} />
        </div>
        <div className="grid grid-cols-2 gap-2 images-height mt-10 overflow-auto">
          <img src={one} />
          <img src={two} />
          <img src={three} />
          <img src={four} />
          <img src={five} />
          <img src={six} />
        </div>
      </div>

      <div>
        <img height={"680px"} src={main} />
      </div>
    </div>
  );
};

export default Gallery;
