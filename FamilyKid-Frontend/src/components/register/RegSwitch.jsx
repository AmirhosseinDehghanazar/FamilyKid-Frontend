import React from "react";

const RegSwitch = ({ switchPerson, person }) => {
  return (
    <div className="border mt-8 border-primary rounded-2xl overflow-hidden flex ">
      <div>
        <button
          onClick={() => switchPerson("supervisor")}
          className={
            person === "supervisor"
              ? "text-white bg-primary py-3 px-6 rounded-xl hover:bg-cyan-600"
              : " py-3 px-6 rounded-2xl"
          }
        >
          Supervisor
        </button>
      </div>
      <div>
        <button
          onClick={() => switchPerson("teacher")}
          className={
            person === "supervisor"
              ? " py-3 px-6 rounded-2xl"
              : "text-white bg-primary py-3 px-6 rounded-xl hover:bg-cyan-600"
          }
        >
          Teacher
        </button>
      </div>
    </div>
  );
};

export default RegSwitch;
