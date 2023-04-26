import React from "react";
import logo from '../assets/images/msanii.jpeg'

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <img className="w-16 rounded" src={logo} alt="" />
        {/* <h3 class="absolute text-3xl top-3 left-4">Msanii</h3> */}
      </div>
    </>
  );
};

export default Navbar;
