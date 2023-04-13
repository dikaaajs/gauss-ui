import React, { useState } from "react";
import { layoutGenerator } from "react-break";
import buttonHeader from "../assets/button-header.svg";
import close from "../assets/close.svg";

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast("tablet");
const OnMobile = layout.is("mobile");

const Header = () => {
  const [popupIsHidden, setPopupIsHidden] = useState(true);
  const handleClick = () => {
    // toogle state
    setPopupIsHidden(!popupIsHidden);
  };

  return (
    <>
      <OnAtLeastTablet>
        <header className="w-full flex py-[10px] px-[30px]">
          <div className="w-1/2 font-inter font-[900] text-[2rem]">
            LOS AINOS
          </div>
          <nav className="w-1/2 flex gap-[60px] font-inria-sans-serif font-[300] justify-end items-center text-[1rem] pr-[30px]">
            <a href="#home">home</a>
            <a href="#about">about us</a>
            <a href="#members">members</a>
            <a href="#works">works</a>
          </nav>
        </header>
      </OnAtLeastTablet>

      <OnMobile>
        <header className="flex w-full py-[30px] items-center">
          <div className="w-1/2 font-inter font-[900] text-[1.3rem] text-center">
            <h1 className="w-fit pl-[20px]">
              LOS <br /> AINOS
            </h1>
          </div>
          <div className="w-1/2 h-fit">
            <img
              src={popupIsHidden ? buttonHeader : close}
              alt=""
              className="ml-auto pr-[20px]"
              onClick={handleClick}
            />
          </div>
        </header>
      </OnMobile>

      {/* popup nav on mobile */}
      <div
        className={`absolute top-[50px] right-[50px] w-fit h-fit py-[10px] px-[10px] text-center rounded-[3px] shadow-md font-inria-sans-serif ${
          popupIsHidden ? "hidden" : ""
        }`}
      >
        <nav className="flex flex-col gap-[3px]">
          <a href="#home">home</a>
          <a href="#about">about us</a>
          <a href="#members">members</a>
          <a href="#work">work</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
