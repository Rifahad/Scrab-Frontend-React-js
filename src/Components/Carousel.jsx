import React from "react";
import { Carousel } from "antd";
import Image from "../assets/Lorry.png";

const Banner = () => (
  <>
      <Carousel autoplay arrows className="w-full sm:w-[70%] h-52 flex text-center bg-red-500">
        <div className="h-full w-full flex items-center justify-center">
          <img src={Image} className="w-full h-full object-fill" alt="" />
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <img src={Image} className="w-full h-full object-fit" alt="" />
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <img src={Image} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <img src={Image} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <img src={Image} className="w-full h-full object-cover" alt="" />
        </div>
      </Carousel>
  </>
);

export default Banner;
