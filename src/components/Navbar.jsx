import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full py-2 bg-gray-400 flex gap-10 text-2xl justify-center items-center">
      <NavLink className="underline underline-offset-2 " to="/">
        Home
      </NavLink>
      <NavLink className="underline underline-offset-2 " to="/addCoffee">
        Add Coffee
      </NavLink>
    </div>
  );
};

export default Navbar;
