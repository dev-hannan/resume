import React from "react";

const Practice = () => {
  const myfunc = (a, b) => {
    // const gets = a.length / 2;
    // const get = a.slice(0, -3);
    if (a.includes(b)) {
      return a + b;
    } else {
      return b + a;
    }
  };
  // console.log(a);
  console.log(myfunc("lip", "i"));
  return <div>Practice</div>;
};

export default Practice;
