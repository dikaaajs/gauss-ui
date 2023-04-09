import React from "react";

const Header = () => {
  return (
    <header className="w-full flex py-[10px] px-[30px]">
      <div className="w-1/2 font-inter font-[900] text-[2rem]">LOGO</div>
      <nav className="w-1/2 flex gap-[60px] font-inria-sans-serif font-[300] justify-end items-center text-[1rem] pr-[30px]">
        <a href="#home">home</a>
        <a href="#about">about us</a>
        <a href="#members">members</a>
        <a href="#works">works</a>
      </nav>
    </header>
  );
};

export default Header;
