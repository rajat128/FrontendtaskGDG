import React from "react";
import { details } from "./data/data";
import Circle from "./sub/Circle";
function Details() {
  return (
    <>
      <div id="details-circle " className="py-20 dark:text-white">
        <div className="flex px-10 max-sm:px-0 dark:text-white">
          {details.map((item) => {
            return (
              <Circle
                number={item.count}
                name={item.name}
                heigth={100}
                width={218}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Details;
