import React, { useState } from "react";

function FAQsub({ que, ans, colour, colour2 }) {
  console.log(colour2);
  const [toggle, settoogle] = useState(false);
  return (
    <div className="flex flex-col items-start px-5 py-1 justify-center ml-5 ">
      <div className="flex items-center mb-4 border-8 dark:border-4 rounded-full p-2 px-5 w-[420px] max-sm:w-[380px] flex justify-start sm:w-[640px]">
        <div onClick={() => settoogle(!toggle)} className="mr-2 cursor-pointer">
          <svg
            width="20"
            height="10"
            viewBox="0 0 25 16"
            fill={colour}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.0625 2.63093e-07L12.5 9.88934L2.9375 3.50293e-08L1.54492e-07 3.04453L12.5 16L25 3.04453L22.0625 2.63093e-07Z"
              fill={colour}
            />
          </svg>
        </div>

        <h1 className="text-lg text-[#5f5f5f] dark:text-white font-bold max-sm:text-sm  ">
          {que}
        </h1>
      </div>
      {toggle ? (
        <div className="w-full ">
          <div className="  flex sm:pl-8  max-sm:pl-3 max-sm:justify-center h-full ">
            <span className={`${colour2}  w-[10px] rounded-l-3xl `}></span>
            <div
              className={`border-8 dark:border-4 p-4 rounded-e-2xl max-sm:w-[320px] w-[480px]`}
            >
              <p className="text-[#5f5f5f] dark:text-white">{ans}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FAQsub;
