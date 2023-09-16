import React from "react";

const Rectangle = () => {
  const rectangle = {
    /* Rectangle */
    height: "50px",
    backgroundColor: "#f4e5e9",
  };

  const underline = {
    // underLine
    height: "4px",
    backgroundColor: "#DB2725",
  };
  return (
    <div className="flex flex-col max rectangle-parent rounded-2xl overflow-hidden">
      <div style={rectangle}></div>
      <div style={underline}></div>
    </div>
  );
};

export default Rectangle;
