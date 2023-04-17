import React from "react";
import kita from "../assets/kita.svg";
import kitaPhone from "../assets/kitaPhone.svg";
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast("tablet");
const OnMobile = layout.is("mobile");

const Works = () => {
  return (
    <>
      <OnAtLeastTablet>
        <div className="w-full pb-[100px]" id="work">
          <h1 className="font-inter font-[900] text-[3rem] text-center py-[100px]">
            Works
          </h1>
          <div className="w-[90%] h-[450px] bg-[#393D3F] rounded-[10px] mx-auto relative">
            <div className="flex px-[20px] pt-[70px]">
              {/* image section */}
              <div className="w-1/4 ">
                <img src={kita} alt="" className="" />
              </div>

              {/* text section */}
              <div className="w-3/4 pl-[50px] pt-[20px]">
                <h2 className="font-inter font-[800] text-[2rem] text-white text-center">
                  GUS-11804
                </h2>
                <p className="font-inria-sans-serif font-[300] text-[1.5rem] text-white text-center">
                  GUS-11804 (Geodata Utilizing System) adalah alat untuk
                  mengukur tingkat kekeringan pada suatu tanah. alat ini
                  terintergari dengan halaman website, yang mana ketika alat ini
                  bekerja, maka akan menghasilkan output pada website tersebut
                </p>
              </div>
            </div>

            {/* button */}
            <div className="w-fit absolute bottom-[10px] right-[10px]">
              <button className="bg-white rounded-[8px] py-[10px] px-[15px] mx-auto block">
                GUS-11804
              </button>
              <p className="text-white text-[.6rem]">
                lihat lebih jauh tentang avew-0443
              </p>
            </div>
          </div>
        </div>
      </OnAtLeastTablet>

      <OnMobile>
        <div className="w-full pb-[100px]" id="work">
          <h1 className="font-inter font-[900] text-[2rem] text-center py-[100px]">
            Works
          </h1>
          <div className="w-[90%] h-fit bg-[#393D3F] rounded-[10px] mx-auto relative">
            <div className="px-[20px] py-[30px]">
              <div className="w-full">
                <h2 className="font-inter font-[800] text-[2rem] text-white text-center">
                  GUS-11804
                </h2>
                <img src={kitaPhone} alt="" className="py-[20px]" />
                <p className="pb-[70px] font-inria-sans-serif font-[300] text-[1rem] text-white text-center">
                  Geodata Acquization and Utilization Semi-system (GAUSS) adalah
                  alat untuk mengukur tingkat kekeringan pada suatu tanah. alat
                  ini terintergari dengan halaman website, yang mana ketika alat
                  ini bekerja, maka akan menghasilkan output pada website
                  tersebut
                </p>
              </div>
            </div>

            {/* button */}
            <div className="w-fit absolute bottom-[10px] right-[10px]">
              <button className="bg-white rounded-[8px] py-[10px] px-[15px] mx-auto block">
                GUS-11804
              </button>
              <p className="text-white text-[.6rem]">
                lihat lebih jauh tentang GUS-11804
              </p>
            </div>
          </div>
        </div>
      </OnMobile>
    </>
  );
};

export default Works;
