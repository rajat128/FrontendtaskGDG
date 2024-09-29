import React from "react";

function Mission() {
  return (
    <section className="text-center pt-10 px-10 max-sm:px-0">
      <div className="flex justify-center items-center w-full">
        <div className="">
          <div class="group text-[#5f5f5f] dark:text-white text-3xl  transition duration-300 font-medium">
            Our Mission
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#4285f4]"></span>
          </div>
        </div>
      </div>
      <div className="mission-statement flex  justify-between w-full">
        <div className="w-[80%]">
          <img src="https://res.cloudinary.com/metube128/image/upload/v1727591365/GDG/v3yog3nclh9pxqepwdbl.png"></img>
        </div>
        <div className="text-container flex justify-center items-center w-[75%] ">
          <div className="">
            <p className="font-medium text-[#5f5f5f max-sm:text-xs dark:text-white">
              <p> Our mission involves community engagement,</p>
              <p>
                leadership development, building strong tech foundation, while
                enabling all tech{" "}
              </p>
              <p>enthusiasts to contribute to </p>
              <p>the global society.</p>
            </p>
          </div>
          <div className="ml-[0.2px]">
            <img src="https://res.cloudinary.com/metube128/image/upload/v1727591365/GDG/gjx7na8t5vuls34aq4b2.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
