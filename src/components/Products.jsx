import React from "react";
import Card from "./Card";

const cards = [
  {
    name: "Bricks",
    imgpath: "images/brick.jpg",
  },
  {
    name: "Cement",
    imgpath: "images/cement.jpg",
  },
  {
    name: "Dust",
    imgpath: "images/dust.jpg",
  },
  {
    name: "Fly Ash Blocks",
    imgpath: "images/flyash.jpg",
  },
  {
    name: "Rodi Dust",
    imgpath: "images/rodidust.jpg",
  },
  {
    name: "Stone Dust",
    imgpath: "images/stonedust.jpg",
  },
  {
    name: "White Cement",
    imgpath: "images/whitecement.jpeg",
  },
  {
    name: "Block Chemical",
    imgpath: "images/blockchemical.jpg",
  },
];

const Products = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-[50px] mt-[150px] sm:mt-[250px]">
      <div className="text-4xl font-monty font-bold text-ke_blue group tracking-wide">
        Products
        <div className="bg-ke_orange ml-auto h-[6px] w-[100px] group-hover:w-full rounded transition-all duration-[500ms] ease-in-out "></div>
      </div>
      <div className="flex flex-row flex-wrap w-[97%] md:w-[90%]">
        {cards.map((cardobj, index) => (
          <Card proimage={cardobj.imgpath} name={cardobj.name} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
