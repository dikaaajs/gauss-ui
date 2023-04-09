import React from "react";
import dot from "../assets/dot.svg";
import members from "../assets/peepsmembers.svg";

const Home = () => {
  return (
    <div id="home" className="w-full flex md:px-[50px] py-[170px] items-center">
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
  );
};

export default Home;
