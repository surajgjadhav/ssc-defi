"use client";
import Navbar from "@/app/components/Nav/Navbar";
import SideBar from "@/app/components/Nav/SideBar";
import React, { useRef } from "react";

const Nav = () => {
  const sideBarRef = useRef(null);
  const toggleSideBar = () => {
    if (!!sideBarRef.current) {
      console.log(sideBarRef.current.checkVisibility());

      sideBarRef.current.classList.toggle("visible");
    }
  };

  return (
    <>
      <Navbar onBurgerClick={toggleSideBar} />
      <SideBar ref={sideBarRef} />
    </>
  );
};

export default Nav;
