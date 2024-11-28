"use client";

import SectionTitle from "../SectionTitle/Title";
// import { motion } from "framer-motion";
import { TPortfolio } from "@/type/portfolio";
import Link from "next/link";
import Image from "next/image";
import { useGetMyWorkQuery } from "@/redux/feature/Mywork/MyworkApi";
import PortCart from "./Loading/PortCart";
// import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLink } from "react-icons/fa";
const Portfolio = () => {
  const { data, isLoading } = useGetMyWorkQuery(undefined);

  const myPortfolios = data?.data;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);




  return (
    <div className="max-w-7xl mx-auto py-20 px-5" id="portfolio">
      {/* <h1 className="text-4xl text-center">PortFolio</h1> */}
      <div data-aos="zoom-in" data-aos-duration="500">
      <SectionTitle headerText="PortFolio" title="my Portfolio" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6 ">
        {isLoading
          ? Array(4)
              .fill(null)
              ?.map((_, idx) => {
                return(
                  <div key={idx}
                  data-aos="zoom-in-up"
                  data-aos-duration="500"    
                  >
                    <PortCart />
                  </div>
                )
              })
          : myPortfolios?.map((portfolio: TPortfolio) => {
              return (
                <div
                  className="border shadow-md shadow-primaryColor border-slate-900 rounded overflow-hidden "
                  key={portfolio?._id}
                  // data-aos="zoom-in-up"
                  // data-aos-duration="500"    
                >
                 
                    <Image
                      src={portfolio?.thumble}
                      alt={portfolio?.name}
                      height={400}
                      width={500}
                      loading="lazy"
                      className="w-full h-[300px] rounded-none object-cover "
                    />
                    {/* <Link href={`/portfolio/${portfolio?.name}`}>
                      
                    </Link> */}
                  
                  <div className="p-5">
                    <div>
                    <h1 className="text-xl ">Wonder Wish</h1>
                    <p className="text-sm text-justify text-[#bdbdbd]">{
                    
                    portfolio?.details?.slice(0,200)

                  }
                   { portfolio?.details?.length>200 &&<span className="cursor-pointer text-primaryColor hover:text-yellow-700">{" "}<Link href={`/portfolio/${portfolio?.name}`}>more info...</Link></span>}
                    </p>
                    </div>
                    <div className="mt-3">
                        <p>Used Technology:</p>
                      <ul className="flex gap-2 flex-wrap">
                        {
                         portfolio?.useTechnlogyClient?.map((technology:string,idx:number)=>{

                            return(
                              <li key={idx} className="bg-[#3973c533] py-[1px] px-3 rounded-full text-sm" >{technology}</li>
                            )
                          })
                        }
                          {
                         portfolio?.useTechnlogyServer?.map((technology:string,idx:number)=>{

                            return(
                              <li key={idx} className="bg-[#3973c533] py-[1px] px-3 rounded-full text-sm" >{technology}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                    

                    <div className="mt-3 flex gap-3">
                      <Link href={portfolio?.livesiteClient} target="_blank">
                      <h1 className="flex  items-center gap-1 cursor-pointer hover:text-primaryColor">
                        <span><FaLink/></span> Live Link
                        </h1>
                      </Link>
                      
                      <Link href={portfolio?.gitClient} target="_blank">
                      <h1 className="flex  items-center gap-1 cursor-pointer hover:text-primaryColor">
                        <span><FaLink/></span> Client
                        </h1>
                      </Link>
                      <Link href={portfolio?.gitServer} target="_blank">
                      <h1 className="flex  items-center gap-1 cursor-pointer hover:text-primaryColor">
                        <span><FaLink/></span> Server
                        </h1>
                      </Link>
                        
                    </div>

                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Portfolio;
