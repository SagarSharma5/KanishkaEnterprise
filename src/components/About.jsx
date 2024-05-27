import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-y-[50px] items-center md:mt-[150px] mt-[100px]"
    >
      <heading className="flex flex-col w-fit text-ke_blue text-2xl sm:text-3xl md:text-4xl font-bold  font-monty group">
        Who Are We?
        <div className="bg-ke_orange ml-auto h-[6px] w-[180px] group-hover:w-full rounded transition-all duration-[500ms] ease-in-out"></div>
      </heading>

      <div className="flex flex-col md:flex-row md:items-center w-full">
        <intro className="md:w-[70vw] md:pl-[100px] px-[50px] font-monty text-ke_blue md:text-2xl text-center md:text-justify">
          Welcome to Kanishka Enterprise, your premier destination for
          top-quality building materials and supplies in Gurugram, Haryana. With
          a steadfast commitment to excellence and customer satisfaction, we
          provide a comprehensive range of construction products sourced from
          leading manufacturers. Our dedicated team is here to assist you at
          every step, ensuring that your project receives the highest quality
          materials delivered on time. At Kanishka Enterprise, we pride
          ourselves on integrity, transparency, and professionalism, striving to
          build lasting relationships with our clients based on trust and mutual
          respect. Experience the difference with Kanishka Enterprise and let us
          be your trusted partner in achieving your construction goals.
          <br />
          <br />
          Explore our extensive selection of construction essentials at our
          enterprise. Our offerings include tile chemicals for seamless
          installation and blocks renowned for their durability. Opt for
          eco-friendly fly ash bricks or traditional bricks for versatile
          construction solutions. Enhance your projects with essential materials
          like Rodi, dust, and stone dust. Cement, a cornerstone of
          construction, is readily available to meet your needs. Ensure
          efficient bonding with our range of block chemicals and achieve
          impeccable finishing touches with washer badarpur. For premium
          aesthetic results, we also offer white cement. Trust our commitment to
          quality and reliability as you embark on your construction journey.
        </intro>
        <div className="md:w-[30vw] items-center md:mt-0 mt-[60px] px-[40px] md:pr-[100px] h-[650px] sm:h-[690px] flex justify-center">
          <div className=" h-full w-fit">
            <video
              className=" rounded-3xl border-ke_blue border-[5px]"
              autoPlay
              loop
              muted
              controls
            >
              <source src="videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
