import React from "react";

const NavBar = () => {
  return (
    <div className="bg-cyan-600 text-slate-50 flex justify-center gap-6 h-16 items-center">
      <p>Created by Cristian Perez</p>
      <p className="hidden md:block">for my friends at Develops Today</p>
    </div>
  );
};

export default NavBar;
