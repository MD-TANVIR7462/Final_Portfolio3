"use client";
import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import SectionTitle from "../SectionTitle/Title";

import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative bg-cover" id="education">
      <div className="max-w-7xl mx-auto py-20">
        {/* <h1 className="text-4xl font-bold text-center pb-5">Education</h1> */}
        <div data-aos="zoom-in" data-aos-duration="500">
          <SectionTitle
            headerText="Education"
            title="Education"
          />
        </div>

        <div className="relative mt-6">
          {/* Vertical Line for Timeline */}
          <div className="absolute w-[2px] left-1/2 transform -translate-x-1/2 h-full bg-primaryColor"></div>

          {/* JSC Section */}
          <div className="mb-10 flex items-start w-full pt-2 ">
            <div className="w-1/2"></div>
            <div
              className="relative w-10 mt-1 flex justify-center "
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaCircle
                className="text-default-50 bg-primaryColor rounded-full p-[2px]"
                size={14}
              />
            </div>
            <div
              className="w-1/2 pl-0"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <h1 className="text-md sm:text-xl font-semibold">In 2016 (JSC)</h1>
              <p className="text-sm sm:text-base">Junior School Certificate</p>
              <p className=" text-xs sm:text-sm text-[#808080]">
                Mohammed Kamal Uddin High School, Chittagong
              </p>
            </div>
          </div>

          {/* SSC Section */}
          <div className="mb-10 flex items-start w-full">
            <div
              className="w-1/2 text-right"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <h1 className="text-md sm:text-xl font-semibold">In 2019 (SSC)</h1>
              <p className="text-sm sm:text-base">Senior School Certificate</p>
              <p className=" text-xs sm:text-sm text-[#808080]">
                Bangladesh Korea Technical Training Center, Chittagong
              </p>
            </div>
            <div
              className="relative w-10 flex justify-center mt-1"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaCircle
                className="text-default-50 bg-primaryColor rounded-full p-[2px]"
                size={14}
              />
            </div>
            <div className="w-1/2"></div>
          </div>
          {/* diploma Section */}
          <div className="mb-10 flex items-start w-full pt-4">
            <div className="w-1/2"></div>
            <div
              className="relative w-10 mt-1 flex justify-center "
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaCircle
                className="text-default-50 bg-primaryColor rounded-full p-[2px]"
                size={14}
              />
            </div>
            <div
              className="w-1/2 pl-0"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <h1 className="text-md sm:text-xl font-semibold">In 2019-2023 (Diploma)</h1>
              <p className="text-sm sm:text-base">Diploma in computer science and Technology</p>
              <p className=" text-xs sm:text-sm text-[#808080]">
                Chittagong Polytechnic institute, Chittagong
              </p>
            </div>
          </div>

          {/* BSC Section */}
          <div className="mb-10 flex items-start w-full">
            <div
              className="w-1/2 text-right"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <h1 className="text-md sm:text-xl font-semibold">In 2024-Present (BSC)</h1>
              <p className="text-sm sm:text-base">BSC in computer science and Engineering</p>
              <p className=" text-xs sm:text-sm text-[#808080]">
                East Delta University, Chittagong
              </p>
            </div>
            <div
              className="relative w-10 flex justify-center mt-1"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaCircle
                className="text-default-50 bg-primaryColor rounded-full p-[2px]"
                size={14}
              />
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
