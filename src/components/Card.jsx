import React from "react";

const Card = ({ proimage, name, index }) => {
  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 h-[400px] px-[40px] py-[40px]">
      <div className={`flex-1 bg-ke_blue rounded-lg shadow-lg shadow-black`}>
        <div className={`flex justify-center items-center rounded-lg h-[70%]`}>
          <img
            src={proimage}
            className={`w-full object-fit h-full rounded-md hover:scale-110 ${
              index % 2 == 0 ? "hover:rotate-3" : "hover:-rotate-3"
            } transition-all duration-[100ms] ease-in`}
          />
        </div>

        <span
          className={` text-white text-center flex justify-center h-full mt-[19px] font-monty font-semibold text-3xl`}
        >
          <div className=" h-fit py-[10px] px-[30px] rounded">{name}</div>
        </span>
      </div>
    </div>
  );
};

export default Card;
