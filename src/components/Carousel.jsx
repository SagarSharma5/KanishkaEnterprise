import { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-full">
      {images.map((image, index) => (
        <img
          src={image}
          className={`absolute object-cover w-full h-full ${
            index === currentIndex ? "opacity-30" : "opacity-0"
          } transition-all duration-[2000ms] ease-in`}
        />
      ))}

      <div className="px-[20px] md:mt-[50px] sm:px-none flex flex-col gap-y-[10px] md:gap-y-[15x] items-left sm:items-center justify-center w-full h-full">
        <div className="font-monty text-3xl sm:text-4xl md:text-7xl tracking-wider sm:tracking-widest font-bold">
          YOUR ONE <br className="flex sm:hidden" /> STOP SOLUTION
        </div>
        <div className="z-[9999] font-monty text-ke_orange font-semibold text-xl sm:text-2xl md:text-4xl">
          for construction materials <br className="flex sm:hidden" /> and
          supplies
        </div>

        <div className="flex items-center justify-end sm:justify-center w-full cursor-pointer">
          <a
            href="https://wa.me/+918010514242"
            target="_blank"
            className="z-[9999] bg-ke_blue rounded-full px-[20px] py-[5px] mt-[55px] md:mt-[100px] text-lg md:text-3xl md:px-[35px] md:py-[15px] font-monty w-fit shadow-lg shadow-black md:hover:scale-[105%] transition-all ease-in duration-[100ms] font-semibold"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
