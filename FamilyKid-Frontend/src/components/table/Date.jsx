import React, { useState } from "react";
import logo from "../../assets/img/navbar/LOGO.png";
import T_hero from "./components/T_hero";
import S_hero from "./components/S_hero";
import Days from "./components/Days";
import Time from "./components/Time";
import "./date.css";
import Rectangle from "./components/Rectangle";
import { useGetDataQuery } from "../../app/apiSlice";
import Loading from "./../LoadingScreen/LoadingScreen";

const Date = ({ name, job }) => {
  const [loading, setLoading] = useState(false);
  const { data, refetch } = useGetDataQuery(undefined);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 bottom-0 h-[100vh] w-[100vw] bg-loading">
          <Loading />
        </div>
      )}
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
        <div className="mb-6">
          {" "}
          {job === "teacher" ? <T_hero /> : <S_hero />}
        </div>

        {/* making timetableText + times aprt from days and Rectangle */}
        <div className="flex ">
          {/* timetable text + all times in flex-col */}
          <div className="inline-flex flex-col gap-4 items-center">
            <p className="timetable-text">timetable</p>
            <Time />
          </div>
          {/* table */}
          <div className="grid grid-cols-7 auto-rows-max w-full gap-2 text-center">
            <Days />
            {data?.map((data) => (
              <Rectangle
                data={data}
                key={data.id}
                job={job}
                refetch={refetch}
                name="mr.x"
                setLoading={setLoading}
              />
            ))}
          </div>
          {/* table ends here */}
        </div>
      </div>
    </>
  );
};

export default Date;
