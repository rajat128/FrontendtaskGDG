import React from "react";

function Heading() {
  return (
    <>
      <div id="heading" className="flex justify-center pt-10 ">
        <div>
          <h1 className="text-4xl font-bold max-sm:text-3xl dark:text-white">
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#db4437" }}>o</span>
            <span style={{ color: "#fcb912" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#0f9d58" }}>l</span>
            <span style={{ color: "#ea4335" }}>e</span>
            <span> Developer Groups</span>
          </h1>
          <h1 className="flex justify-center text-[#646464] font-bold dark:text-white text-2xl">
            RBU Chapter
          </h1>
        </div>
      </div>
    </>
  );
}

export default Heading;
