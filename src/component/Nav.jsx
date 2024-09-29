import React, { useState } from "react";
import './Nav.css'
function Nav({ toggle, setToggle }) {
    const [isChecked, setIsChecked] = useState(false)

 
  return (
    <>
      <div className="w-screen">
        <div className="flex justify-between shadow-md shadow-gray-400 bg-[#f1f3f4] dark:bg-black dark:text-white  max-sm:text-[12px] w-full      " id="main">
          <a href="https://rcoem-gdsc.netlify.app/" className="flex text-[#8b8b8b] dark:text-white " id="nav1">
           { !toggle?<img
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/contentbuilder/GDG-Bevy-ChapterThumbnail.png"
              // src="src\assets\Gdglogopng.png"
              className="h-16 w-16 dark:bg-black  "
            ></img>:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAitwkipNuQV_70oVUaTqxjhF2of53nCmSg&s" className="w-16 h-16"></img>}
            <h1 className="flex justify-center items-center cursor-default" id="nav1">GDG RBU</h1>
          </a>
          <div className="flex justify-center items-center text-[#8b8b8b] dark:text-white ">
          <div class="group text-[#5f5f5f] px-2 dark:text-white  transition duration-300 font-medium cursor-default">
            Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-blue-500"></span>
          </div>
          <div class="group text-[#5f5f5f] px-2 dark:text-white  transition duration-300 font-medium cursor-default">
            Events
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-red-500"></span>
          </div>
          <div class="group text-[#5f5f5f] px-2 dark:text-white  transition duration-300 font-medium cursor-default">
            Team
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-yellow-500"></span>
          </div>
          <div class="group text-[#5f5f5f] px-2 dark:text-white  transition duration-300 font-medium cursor-default">
            Alumini
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-blue-500"></span>
          </div>
          <div class="group text-[#5f5f5f] px-2 dark:text-white  transition duration-300 font-medium cursor-default" >
            Contact
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-green-500"
            ></span>
          </div>
          <div class="group text-[#5f5f5f] pr-5 dark:text-white  transition duration-300 font-medium flex   " >
          
         <label for="check" className={`${!toggle?"bg-[#7a7a7a]":"bg-white"} relative w-16 h-8 border-2 rounded-full cursor-pointer `}>
                <input type="checkbox" id="check" class="sr-only peer"  ></input>
                <span className={`w-[20px] h-[20px] bg-transparent absolute rounded-full left-1 top-1 flex justify-center ${!toggle?"left-1":"left-9"}  peer-checked:bg-transparent  transition-all duration-500 `} >
                   <span>
                   <span >
                    {
                        !toggle?
                       <h1> <img src="https://res.cloudinary.com/metube128/image/upload/v1727591358/GDG/r1cguiikjjuharrqujaz.png" className="p-0.5 bg-white rounded-full"  onClick={()=>setToggle((prev) => (prev === "dark" ? false : "dark"))}></img></h1>
                       :<h1>
                         <img src="https://res.cloudinary.com/metube128/image/upload/v1727591358/GDG/xtqhuhrmvzaazqm2h9ry.png"   onClick={()=>setToggle((prev) => (prev === "dark" ? false : "dark"))}></img>
                       </h1>}
                    </span>
                   </span>
                </span>

         </label>


           
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
