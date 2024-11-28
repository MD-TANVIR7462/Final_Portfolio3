import MainNav from "@/components/navbar/MainNav";
import Contact from "@/components/ui/Contact";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainNav />
      {children}
      <Contact />
   
    </>
  );
};

export default layout;
