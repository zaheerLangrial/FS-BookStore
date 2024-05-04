import React from "react";
import BookImage from '../assets/Banner.png';

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl md:h-screen mx-auto container px-4 md:px-8 lg:px-20 flex flex-col gap-3 md:flex-row md:items-center my-10 mt-20 md:mt-8">
        <div className="order-2 md:order-none md:w-1/2 flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, welcomes here to learn something{" "}
            <span className="text-[#EC4899]"> new everyday!!!</span>
          </h1>
          <p className="text-sm lg:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <div>
          <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
        <div className="order-1 md:order-none md:w-1/2">
            <img src={BookImage} alt="Books Image" className="md:w-[550px] md:h-[460px] lg:w-full lg:h-full md:ml-12"/>
        </div>
      </div>
    </>
  );
};

export default Banner;
