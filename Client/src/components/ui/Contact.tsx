// import { Link } from '@nextui-org/react';
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../SectionTitle/Title";
import bgLine from "@/assets/bg-line.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative" id="contact">
      <div className="py-20 max-w-7xl mx-auto z-10">
        <div className="px-5 ">
          <div data-aos="zoom-in" data-aos-duration="500">
            <SectionTitle headerText="Contact" title="Contect" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div
              className="border rounded-xl h-20 flex justify-center items-center gap-1 text-xl bg-[#3e3d3d]   z-20"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <span className="text-3xl text-white">
                <MdOutlineMail />
              </span>
              <span className="flex flex-col text-white">
                <Link
                  href="mailto:mdtanvir7462@gmail.com"
                  className="text-wrap"
                >
                  mdtanvir7462@gmail.com
                </Link>
              </span>
            </div>
            <div
              className="border rounded-xl h-20 flex justify-center items-center gap-1 text-xl bg-[#3e3d3d]   z-20"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <span className="text-3xl text-white">
                <LuPhone />
              </span>
              <span className="text-white">
                <Link href="tel:+8801998863753">+880 1998863753</Link>
              </span>
            </div>
            <div
              className="md:col-span-2 lg:col-span-1 border rounded-xl h-20 flex justify-center items-center gap-1 text-xl bg-[#3e3d3d]   z-20"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <span className="text-3xl text-white">
                <IoLocationOutline />
              </span>
              <span className="text-white">
                <Link href="">Chittagong , Bangladesh</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-8 items-center justify-center">
          <div className="bg-primaryColor text-primaryColor h-[2px] flex-1"></div>
          <div className="flex px-5 gap-2 text-2xl   z-20">
            <Link href="https://www.facebook.com/MD.Tanvir.evan33/">
              <FaFacebook className="text-white" />
            </Link>
            <Link href={"mailto:mdtanvir7462@gmail.com"}>
              <MdOutlineMail className="text-white" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/md-tajul-islam-tanvir-531682278/"
              }
            >
              <FaLinkedin className="text-white" />
            </Link>
            <Link href={"https://github.com/MD-TANVIR7462"}>
              <FaGithub className="text-white" />
            </Link>
          </div>
          <div className="bg-primaryColor h-[2px] flex-1"></div>
        </div>
      </div>
      <div
        className="absolute w-full h-full inset-0 bg-cover bg-center opacity-5 z-1"
        style={{ backgroundImage: `url(${bgLine.src})` }}
      ></div>
    </div>
  );
};

export default Contact;
