import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import asianMan from "../../assets/img/comment/Asian-Man.png";
import arrowRight from "../../assets/img/comment/Arrow---Right.png";
import arrowLeft from "../../assets/img/comment/Arrow---Left.png";
import "./comments.css";
// Inside your Comment component

const Comment = () => {
  const sliderRef = useRef(null); // Reference to the Slider component

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //  comments based on the structure
  const comments = [
    {
      text: "With the help of this collection and professional leaders, I was able to reach the best possible level of preparation to participate in the TOEFL exam, and I am very grateful to them. - John Doe, Designer",
      name: "John Doe",
      role: "Designer",
    },
    {
      text: "This collection is a game-changer! It provided me with invaluable resources and support to excel in my TOEFL exam. - Jane Smith, Engineer",
      name: "Jane Smith",
      role: "Engineer",
    },
    {
      text: "I highly recommend this collection to anyone preparing for the TOEFL. The quality of materials and guidance is unmatched. - Michael Johnson, Student",
      name: "Michael Johnson",
      role: "Student",
    },
    {
      text: "The TOEFL exam was a breeze for me thanks to this amazing collection. I owe my success to the dedicated team behind it. - Sarah Williams, Teacher",
      name: "Sarah Williams",
      role: "Teacher",
    },
    {
      text: "I couldn't have asked for better TOEFL preparation. This collection is a treasure trove of knowledge. - David Lee, IT Professional",
      name: "David Lee",
      role: "IT Professional",
    },
    {
      text: "Kudos to the creators of this collection! It made a significant difference in my TOEFL scores. - Emily Davis, Writer",
      name: "Emily Davis",
      role: "Writer",
    },
    {
      text: "This collection is a must-have for TOEFL aspirants. It's like having a personal tutor guiding you to success. - Mark Johnson, Researcher",
      name: "Mark Johnson",
      role: "Researcher",
    },
    {
      text: "I'm amazed by how effective this collection is. It gave me the confidence to ace the TOEFL exam. - Jessica White, Nurse",
      name: "Jessica White",
      role: "Nurse",
    },
  ];
  {
    comments.map((comment, index) => (
      <div key={index}>
        <div className="flex flex-col items-center justify-center relative bg-black p-4 rounded-lg shadow-lg">
          {/* ... Rest of the comment content ... */}
        </div>
      </div>
    ));
  }

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

      <div className="text-center comment-sp-width rounded-md relative bg-white p-4 comment-rounder">
        <Slider {...settings} ref={sliderRef}>
          {comments.map((comment, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center relative font-sans ">
                <p className="text-lg">{comment.text}</p>
                <div className="flex items-start">
                  <div>
                    <img src={asianMan} alt="User" />
                  </div>
                  <div className="pt-8 -ms-6">
                    <p>{comment.name}</p>
                    <p className="text-gray-500">{comment.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* buttons */}
        <div className="absolute rounded-lg px-2 bottom-10 right-5">
          <div>
            <button
              className="pe-2"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src={arrowLeft} alt="Previous" />
            </button>
            <button
              className="ps-2"
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src={arrowRight} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
