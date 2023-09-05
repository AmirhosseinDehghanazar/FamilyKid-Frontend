import React from "react";
import computerIcon from "../assets/img/segments/iconComputerBold.png";
import bookIcon from "../assets/img/segments/iconBookBold.png";
import approveIcon from "../assets/img/segments/iconApproveBoxBold.png";
import mainIcon from "../assets/img/segments/iconMailBold.png";

const Segments = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mx-auto 2xl:px-20 mt-20">
      <div className=" text-center border-4 border-primary px-3 rounded-3xl max-w-sm py-8">
        <div className="flex justify-center">
          <img src={computerIcon} />
        </div>

        <div className="my-2 text-3xl font-semibold">Platform</div>
        <p>
          We have our own dedicated platform with minimal outages and bugs.r
        </p>
      </div>

      <div className=" text-center border-4 border-primary px-3 rounded-3xl max-w-sm py-8">
        <div className="flex justify-center">
          <img src={bookIcon} />
        </div>

        <div className="my-2 text-3xl font-semibold">Books</div>
        <p>
          Using the best and most up-to-date books according to your level and
          desire.
        </p>
      </div>

      <div className=" text-center border-4 border-primary px-3 rounded-3xl max-w-sm py-8">
        <div className="flex justify-center">
          <img src={approveIcon} />
        </div>

        <div className="my-2 text-3xl font-semibold">Professors</div>
        <p>
          we are Online English Teaching Platform, with Current Operation in
          Iran and the Head Office being located in China
        </p>
      </div>

      <div className=" text-center border-4 border-primary px-3 rounded-3xl max-w-sm py-8">
        <div className="flex justify-center">
          <img src={mainIcon} />
        </div>

        <div className="my-2 text-3xl font-semibold">Supports</div>
        <p>Support and help 24 hours a day, 7 days a week</p>
      </div>
    </div>
  );
};

export default Segments;
