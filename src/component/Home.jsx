import React from "react";
import Mission from "./sub/Mission";
import Perspective from "./sub/Perspective";
import Going from "./sub/Going";
import Circle from "./sub/Circle";
import { details } from "./data/data";
import Heading from "./Heading";
import TopPart from "./TopPart";
import Details from "./Details";
import Technology from "./Technology";
import FAQsub from "./sub/FAQsub";
import { faq } from "./data/data";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Footer2 from "./Footer2";
function Home({toggle}) {
  return (
    <div className="h-full">
    <div className="flex flex-col justify-center items-center h-full   dark:bg-black">
      <Heading />
      <TopPart />

      <div id="mission">
        <Mission />
      </div>
      <div id="perspective">
        <Perspective />
      </div>
      <div id="going">
        <Going />
      </div>
      <div>
      <Details /></div>

      <div className="technology">
        <div>
          <div className=" flex justify-center items-center ">
            {/* <h1 className="bg-[#ff6060] h-[3px] w-full  flex justify-center items-center"></h1>
            <h1 className="text-[#5f5f5f] flex justify-center items-center px-5 text-4xl font-bold">
              Technologies
            </h1>
            <h1 className="bg-[#ff6060] h-[3px] w-full   flex justify-center items-center"></h1> */}

<div class="group grid grid-cols-3 justify-center items-center text-[#5f5f5f] dark:text-white text-4xl  transition duration-400 font-medium max-sm:hidden">
<span class="block w-0  group-hover:w-full  transition-all duration-500 h-1 bg-red-500 group-hover:translate-x-0"></span>
<h1>Technologies</h1>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-red-500 "></span>
          </div>

          <div class="group text-[#5f5f5f] dark:text-white text-3xl  transition duration-300 font-medium sm:hidden">
          Technologies
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-red-500"></span>
          </div>
          </div>
          <div className="text-[#5f5f5f] dark:text-white flex justify-center items-center py-2 font-medium  ">
            Domains That Excite Us to Collaborate and Teach!
          </div>
        </div>
        <div>
          <Technology />
        </div>
      </div>
      <div>
        <FAQ />
      </div>
      <Footer toggle={toggle}/>
    </div>
    </div>
  );
}

export default Home;
