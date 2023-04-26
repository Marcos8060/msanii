import React, { useState } from "react";
import { BsArrowRight } from 'react-icons/bs'

const Subscribe = () => {
  const [show, setShow] = useState(false);

  const showInput = () => {
    setShow(true);
  };
  const hideInput = () => {
    setShow(false);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    hideInput();
  }


  return (
    <div className="flex items-center justify-center my-8">
      {!show && (
        <>
          <button onClick={showInput} className="py-3 px-8 border border-black rounded-3xl hover:scale-105 duration-700">
            Get early access
          </button>
        </>
      )}

      {show && (
        <>
         <div className="flex justify-end items-center relative">
         <input
            className="py-3 px-4 w-80 outline-none bg-transparent border-gray border border-black rounded-3xl placeholder:text-xs"
            type="text"
            placeholder="Enter your email address to request early access"
          />
          <BsArrowRight onClick={handleSubmit} className="absolute mr-4 font-semibold cursor-pointer text-xl hover:scale-105 duration-700" />
         </div>
          

        </>
      )}
    </div>
  );
};

export default Subscribe;
