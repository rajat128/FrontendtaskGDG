import React from "react";
import going from "../../assets/Going.png"
function Going() {
  return (
    <section className="text-center py-8 px-10 max-sm:px-0">
      <div className="flex justify-center items-center w-full pb-10">
        <div className="">
          <div class="group text-[#5f5f5f] dark:text-white text-3xl  transition duration-300 font-medium">
            Whats Keeps Us Going?
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#ffc727]"></span>
          </div>
        </div>
      </div>

      <div className="perspective-statement flex  justify-between w-full">
        <div className="">
          <img src="https://res.cloudinary.com/metube128/image/upload/v1727591364/GDG/icroplnt143d1jl1klhu.png"></img>
        </div>
        <div className="text-container flex justify-center items-center w-[80%] max-sm:w-[100%]">
          <div className="text-wrap">
            <h1 className="font-medium text-[#5f5f5f] text-start max-sm:text-xs dark:text-white">
              <h1>Our club helps students to connect, learn, </h1>
              <h1>
                empower and grow. Teamwork, innovative thinking, communication,
                and leading with{" "}
              </h1>
              <h1>solutions is what helps us achieve new heights. </h1>
              <h1>
                The entire team works in coordination, to inspire and motivate
                the{" "}
              </h1>
              <h1>upcoming coding community to evolve </h1>
              <h1>their skills and broaden their horizons of </h1>
              <h1>knowledge </h1>
            </h1>
          </div>
          <div className="mr-2 max-sm:mr-0 ">
            <img
              src="https://res.cloudinary.com/metube128/image/upload/v1727591363/GDG/jxav0m3dpctt9c0yflhh.png"
              className="max-sm:h-64 h-60 w-6 max-sm:w-5"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Going;
