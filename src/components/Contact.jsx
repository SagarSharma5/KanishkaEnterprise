import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col gap-y-[50px] items-center">
      <div className="flex flex-col w-fit text-ke_blue text-2xl sm:text-3xl md:text-4xl font-bold mt-[140px] font-monty group">
        <span>Contact Us</span>
        <div className="bg-ke_orange ml-auto h-[6px] w-[120px] group-hover:w-full rounded transition-all duration-[500ms] ease-in-out"></div>
      </div>
      <div className="flex flex-col md:flex-row w-[80%] md:h-[400px] bg-ke_blue rounded-lg p-[50px] gap-x-[30px]">
        <div className="md:w-[30%] h-full flex flex-col text-white gap-y-[20px]">
          <div className="mt-[10px] flex flex-row">
            <a className="flex flex-row gap-x-[6px]" href="tel:8010514242">
              <IoIosCall className="md:text-4xl text-3xl text-ke_orange" />
              <span className="mt-[5px] hover:underline hover:text-ke_orange ml-[2px]">
                8010514242,
              </span>
            </a>
            <a
              href="tel:9350508582"
              className="mt-[5px] ml-[2px] hover:underline hover:text-ke_orange"
            >
              9350508582
            </a>
          </div>
          <div className="hover:underline w-fit ml-[3px]">
            <a
              className="flex flex-row gap-x-[12px]"
              href="mailto:pankaj.agg383@gmail.com"
            >
              <img
                src="/images/Gmail_Logo_128px.png"
                className="md:h-[22px] h-[18px] md:mt-0 mt-[4px]"
              />
              <span className=" hover:text-ke_orange md:ml-[5px]">
                pankaj.agg383@gmail.com
              </span>
            </a>
          </div>
          <div className="hover:underline w-fit">
            <a
              className="flex flex-row gap-x-[9px]"
              href="https://wa.me/+918010514242"
              target="_blank"
            >
              <FaWhatsapp className="md:text-4xl text-3xl text-green-500" />
              <span className="mt-[5px] hover:text-ke_orange">8010514242</span>
            </a>
          </div>

          <a
            href="https://maps.app.goo.gl/ax4spxGSu93XepHw8"
            className="font-monty md:w-[80%] md:mt-[10px] hover:underline"
            target="_blank"
          >
            Opposite Lemon Tree Hotel, Sector-61, Ullwash Gaon, Gurugram,
            Haryana - 122004
          </a>
        </div>

        <div className="md:w-[70%] md:mt-0 mt-[30px] h-full bg-gray-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3509.533373133425!2d77.09473107549243!3d28.4031585757908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI0JzExLjQiTiA3N8KwMDUnNTAuMyJF!5e0!3m2!1sen!2sin!4v1711202191096!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade"
            className="h-full w-full rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
