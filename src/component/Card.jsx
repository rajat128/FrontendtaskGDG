import React from "react";

function Card({ colour, name, image }) {
  console.log(colour);

  return (
    <>
      <div className=" ">
        <div class=" h-full relative flex flex-col px-4 pt-24 pb-12 font-sans text-gray-700  sm:px-6 lg:px-8 justify-center items-center ">
          <div class="flex-1  justify-center items-center w-full ">
            <div class="group text-[#5f5f5f] text-3xl  transition duration-300 font-medium w-full ">
              
            <div className="grid justify-center"><span class={`block w-0 group-hover:w-28 max-sm:group-hover:w-10 transition-all duration-500 h-1 ${colour} display-flex justify-center`}></span></div>
        
              <div class="sticky w-full max-w-xl px-3 py-1 mx-auto space-y-4 bg-white border rounded-2xl shadow-2xl shadow-[#a8a7a7] dark:shadow justify-center items-center">
                <h2 class="space-y-1 text-2xl font-bold leading-none text-gray-900 mt-5 max-sm:mt-2 ">
                  <span class="flex justify-center items-center">
                    <img src={image} className="h-16 max-sm:h-12 "></img>
                  </span>
                </h2>
                <p className="px-16 max-sm:px-4 text-[#5f5f5f] font-bold text-lg max-sm:text-xs">
                  {name}
                </p>
                <div className="flex justify-center">
                  <img src="https://res.cloudinary.com/metube128/image/upload/v1727594693/GDG/vector/w2z0ah2xw8a42tikcgkt.png" className="h-2"></img>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;