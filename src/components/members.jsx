import React from "react";
import gelombang from "../assets/gelombang.svg";
import fagian from "../assets/fagian.svg";
import andika from "../assets/andika.svg";
import jibran from "../assets/jibran.svg";
import dimas from "../assets/dimas.svg";

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast("tablet");
const OnMobile = layout.is("mobile");

const Members = () => {
  return (
    <>
      <OnAtLeastTablet>
        <div className="py-[200px] relative h-fit w-full" id="members">
          <h1 className="font-inter font-[800] text-[3rem] text-center">
            Members
          </h1>
          <img src={gelombang} className="w-full pt-[100px]" />

          <div className="w-full flex justify-around absolute bottom-[340px]">
            <div className="w-[20%] relative top-[50px]">
              <img src={fagian} alt="fagian" className="" />
              <div className="w-fit h-fit absolute bottom-[35px] left-[55px]">
                <p className="font-inter font-[500] text-slate-800 drop-shadow-md">
                  Fagian
                </p>
              </div>
            </div>
            <div className="w-[20%] relative bottom-[10px]">
              <img src={andika} alt="andika" className="" />
              <div className="w-fit h-fit absolute bottom-[35px] left-[55px]">
                <p className="font-inter font-[500] text-slate-800 drop-shadow-md">
                  andika
                </p>
              </div>
            </div>
            <div className="w-[20%] relative bottom-[20px]">
              <img src={jibran} alt="jibran" className="" />
              <div className="w-fit h-fit absolute bottom-[35px] left-[55px]">
                <p className="font-inter font-[500] text-slate-800 drop-shadow-md">
                  jibran
                </p>
              </div>
            </div>
            <div className="w-[20%] relative top-[20px]">
              <img src={dimas} alt="dimas" className="" />
              <div className="w-fit h-fit absolute bottom-[35px] left-[55px]">
                <p className="font-inter font-[500] text-slate-800 drop-shadow-md">
                  dimas
                </p>
              </div>
            </div>
          </div>
        </div>
      </OnAtLeastTablet>
      <div className="py-[50px]" id="members">
        <h1 className="font-inter font-[800] text-[3rem] text-center">
          Members
        </h1>
      </div>
      <OnMobile></OnMobile>
    </>
  );
};

export default Members;
