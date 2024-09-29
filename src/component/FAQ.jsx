import React, { useState } from "react";
import { faq } from "./data/data";
import FAQsub from "./sub/FAQsub";

function FAQ() {
  const [toggle, settoogle] = useState(false);
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#5f5f5f] dark:text-white flex justify-center pb-5">
        FAQS
      </h1>
      {faq.map((item) => {
        return (
          <FAQsub
            que={item.que}
            ans={item.ans}
            colour={item.colour}
            colour2={item.colour2}
          />
        );
      })}
    </div>
  );
}

export default FAQ;
