// Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400 border-opacity-25"></div>
    </div>
  );
};

export default Loading;
