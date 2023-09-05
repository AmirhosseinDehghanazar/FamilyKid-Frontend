import React from "react";
import lady from "../../assets/img/policy/lady.png";
import underLine from "../../assets/img/policy/Line-9.png";
import "./policy.css";

const Policy = () => {
  return (
    <div className="flex justify-around md:gap-10 2xl:gap-28 2xl:justify-center mt-20">
      <div className="lady-img">
        <img className="lady-img" src={lady}></img>
      </div>

      <div className="word-width max-w-xl pt-6">
        <p className="text-xl font-semibold">Our Policies:</p>
        <p className="text-chelona text-primary text-7xl pt-3">
          Our customers are very valuable to us
        </p>
        <div className="flex justify-center">
          <img src={underLine}></img>
        </div>

        <p className="text-xl font-semibold my-4">
          To provide the most accessible affordable and quality educational
          services to children and teenagers using the best teachers.
        </p>
        <button className="bg-primary w-40 mt-4 text-white py-2 rounded-xl">
          View About Us
        </button>
      </div>
    </div>
  );
};

export default Policy;
