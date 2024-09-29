import React from "react";
import { techdetails } from "./data/data";
import Card from "./Card";
function Technology() {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center   px-10   ">
          {techdetails.map((item) => {
            return (
              <Card colour={item.colour} name={item.name} image={item.image} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Technology;
