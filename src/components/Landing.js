import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import DateTimer from "./Timer";
import Subscribe from "./Subscribe";
import logo from "../assets/images/msanii.png";
import Fabs from "./Fabs";

const Landing = () => {
  return (
    <>
      <div className="p-2">
        <Fabs />
        <div className="flex items-center justify-center">
          <img className="w-72" src={logo} alt="" />
        </div>
        <div className="">
          <DateTimer />
        </div>
        <p className="text-center mt-4 md:w-1/2 w-10/12 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam
          molestias voluptatum placeat eveniet sit nostrum odio vel possimus
          cumque.
        </p>
        <Subscribe />
      </div>
    </>
  );
};

export default Landing;
