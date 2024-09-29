import React from "react";

function TopPart() {
  return (
    <>
      <div id="toppart" className="flex justify-center items-center w-full">
        <div className="max-w-md ">
          <img
            src="https://res.cloudinary.com/metube128/image/upload/v1727591366/GDG/kszipiyagnh3o1djqivn.png"
            className="w-full h-auto object-cover rounded-md"
            alt="Google Developer Groups"
          />
          <h1 className="text-[#5f5f5f] text-center max-sm:text-xs pt-2 font-medium dark:text-white ">
            <p>Google Developer Groups are community groups for college</p>
            <p>and university students interested in Google developer</p>
            <p>technologies.</p>
          </h1>

          <h1 className="flex justify-center items-center py-10">
            <button className="bg-[#3686F7] text-white px-5 py-2 text-md font-bold flex justify-center items-center rounded hover:border hover:border-blue-600 hover:bg-transparent hover:text-blue-500 ">
              JOIN US
            </button>
          </h1>
          <div className=" flex justify-center">
            <div className=" ">
              <img src="https://res.cloudinary.com/metube128/image/upload/v1727591366/GDG/njkgwzolluiv4zpl5qqm.png" className="w-8 max-sm:w-6"></img>
              <img src="https://res.cloudinary.com/metube128/image/upload/v1727591365/GDG/dglbehxuj82qsgdgfpmq.png" className="w-8  max-sm:w-6"></img>
              <img src="https://res.cloudinary.com/metube128/image/upload/v1727591365/GDG/vubnz6skrtnbx4ie7wbr.png" className="w-8  max-sm:w-6"></img>
            </div>
          </div>
          <h1 className="text-[#5f5f5f] dark:text-white font-bold text-3xl flex justify-center items-center py-5">
            Get To Know Us!
          </h1>
        </div>
      </div>
    </>
  );
}

export default TopPart;
