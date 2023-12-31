import React from "react";
import logo from "../../assets/img/navbar/LOGO.png";
import T_hero from "./components/T_hero";
import S_hero from "./components/S_hero";
import Days from "./components/Days";
import Time from "./components/Time";
import "./date.css";
import Rectangle from "./components/Rectangle";

const Date = ({ name, job }) => {
  return (
    <div className="mb-10">
      {/* header */}
      <div className="flex items-center justify-between mb-8">
        <img src={logo} />
        <div className="flex justify-center items-center gap-4">
          <p className="good-morning">Good Morning, {name}</p>
          <div className="bg-smile" />
        </div>
      </div>

      {/* hero */}
      <div className="mb-6"> {job === "teacher" ? <T_hero /> : <S_hero />}</div>

      {/* making timetableText + times aprt from days and Rectangle */}
      <div className="flex ">
        {/* timetable text + all times in flex-col */}
        <div className="inline-flex flex-col gap-4 items-center">
          <p className="timetable-text">timetable</p>
          <Time />
        </div>
        {/* table */}
        <div className="grid grid-cols-7 w-full gap-2 text-center">
          <Days />
          {Array.from(Array(91).keys()).map((num) => (
            <Rectangle />
          ))}
        </div>
        {/* table ends here */}
      </div>
    </div>
  );
};

export default Date;
