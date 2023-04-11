import React from "react";
import dot from "../assets/dot.svg";
import members from "../assets/peepsmembers.svg";
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast("tablet");
const OnMobile = layout.is("mobile");

const Home = () => {
  return (
    <>
      <OnAtLeastTablet>
        <div
          id="home"
          className="w-full flex px-[50px] py-[170px] items-center"
        >
          {/* paragraph section */}
          <div className="w-1/2 font-inter font-[600] text-[2rem] relative">
            <p className="w-[80%] ml-auto relative">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              ligula nulla. Aliquam volutpat in leo et fringilla.
              <img
                src={dot}
                className="absolute top-[0px] left-[-30px] z-[-1] w-[20%]"
              />
            </p>
          </div>

          {/* image section */}
          <div className="w-1/2">
            <img src={members} className="w-[80%]" />
          </div>
        </div>
      </OnAtLeastTablet>

      <OnMobile>
        <div
          id="home"
          className="w-full flex flex-col gap-[30px] px-[20px] py-[50px] items-center"
        >
          {/* paragraph section */}
          <div className="w-full font-inter font-[600] text-[1.3rem] relative">
            <p className="w-[85%] mx-auto relative">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              ligula nulla. Aliquam volutpat in leo et fringilla.
              <img
                src={dot}
                className="absolute top-[0px] left-[-30px] z-[-1] w-[20%]"
              />
            </p>
          </div>

          {/* image section */}
          <div className="w-full">
            <img src={members} className="w-[80%] mx-auto" />
          </div>
        </div>
      </OnMobile>
    </>
  );
};

export default Home;
