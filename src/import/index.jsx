import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container max-w-[1152px] w-full px-[92px] m-auto">
      {children}
    </div>
  );
};

export default Container;
