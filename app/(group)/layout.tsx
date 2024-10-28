import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-slate-500 text-center">routing group navbar</div>
      {children}
    </>
  );
};

export default layout;
