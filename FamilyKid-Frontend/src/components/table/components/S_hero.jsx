import React from "react";

const S_hero = () => {
  return (
    <div className="flex gap-6">
      {/* language */}
      <div className="rounded-2xl overflow-hidden">
        <button className="text-white bg-primary py-3 px-6 rounded-xl hover:bg-cyan-600">
          IRAN
        </button>

        <button className=" py-3 px-6 rounded-2xl">CHINA</button>
      </div>

      {/* table */}
      <div className="rounded-2xl overflow-hidden">
        <button className="text-white bg-primary py-3 px-6 rounded-xl hover:bg-cyan-600">
          Main Table
        </button>

        <button className=" py-3 px-6 rounded-2xl">T Management</button>
      </div>

      {/* timeZone ? */}
      <div className="rounded-2xl overflow-hidden">
        <button className="text-white bg-primary py-3 px-6 rounded-xl hover:bg-cyan-600">
          TE
        </button>

        <button className=" py-3 px-6 rounded-2xl">ST</button>
      </div>
    </div>
  );
};

export default S_hero;
