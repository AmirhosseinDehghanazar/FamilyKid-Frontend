import React from "react";
import asianMan from "../../assets/img/comment/Asian-Man.png";
import arrowRight from "../../assets/img/comment/Arrow---Right.png";
import arrowLeft from "../../assets/img/comment/Arrow---Left.png";

import "./comments.css";

const Comment = () => {
  return (
    <div className="flex justify-around items-center mt-28 mb-6 relative 2xl:justify-center 2xl:gap-36">
      <div className="comments-fp-width">
        <div className="text-chelona chelona-width text-8xl text-primary">
          Comments from our Customers
        </div>
        <div className="bg-line"></div>
        <p className=" text-xl w-96 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>

      {/* need to add carousel to show other comments for that i need flowbite*/}
      <div className="text-center comment-sp-width rounded-md relative">
        <div className="flex flex-col items-center justify-center relative">
          <p className="text-lg">
            With the help of this collection and professional leaders, I was
            able to reach the best possible level of preparation to participate
            in the TOEFL exam, and I am very grateful to them John Doe Designer
          </p>
          <div className="flex items-start ">
            <div>
              <img src={asianMan} />
            </div>

            <div className="pt-8 -ms-6">
              <p>John Doe</p>
              <p className="text-gray-500">Designer</p>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="absolute rounded-lg px-2 bottom-8 right-0">
          <div>
            <button className="pe-2" data-carousel-next>
              <img src={arrowLeft} />
            </button>
            <button className="ps-2" data-carousel-next>
              <img src={arrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
