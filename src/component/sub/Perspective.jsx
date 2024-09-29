import React from "react";

function Perspective() {
  return (
    <section className="text-center py-8 px-10 max-sm:px-2">
      <div className="flex justify-center items-center w-full pb-10">
        <div className="">
          <div class="group text-[#5f5f5f] dark:text-white text-3xl  transition duration-300 font-medium">
            Our Perspective
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#0f9d56]"></span>
          </div>
        </div>
      </div>

      <div className="perspective-statement flex  flex-row-reverse justify-between w-full">
        <div className="w-[80%]">
          <img src="https://res.cloudinary.com/metube128/image/upload/v1727591364/GDG/hic10zwlg1c1uzea6tta.png"></img>
        </div>
        <div className="text-container flex justify-center items-center w-[75%]">
          <div className="mr-2">
            <img src="https://res.cloudinary.com/metube128/image/upload/v1727591364/GDG/jc5o1rwk6k3uxtqoiqoj.png"></img>
          </div>
          <div className="text-wrap">
            <h1 className="font-medium text-[#5f5f5f] text-start max-sm:text-xs dark:text-white">
              <h1>We’re a community-driven initiative aiming to</h1>
              <h1>bridge the gap between research and practice,</h1>
              <h1>develop evolutionary thinking and network </h1>
              <h1>throughout the process. We believe in connecting </h1>
              <h1>fellow developers spreading stimulative ideas and</h1>
              <h1>working for a solution driven team.</h1>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perspective;
