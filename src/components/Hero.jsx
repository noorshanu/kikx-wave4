import React from "react";
import ClickStart from "../components/ClickStart";

function Hero() {
  return (
    <section className=" relative  h-[100vh]  ">
      <div className="container-wrapper relative z-50 flex items-center flex-col ">
        <img
          src="images/free.png"
          alt=""
          className=" absolute left-3 sm:left-[14%] h-[150px] sm:h-[200px] top-[4%] sm:top-[4%]"
        />
        <img
          src="images/winn.png"
          alt=""
          className=" absolute right-0 sm:right-[23%] h-[150px] sm:h-[125px] top-[73%] sm:top-[73%]"
        />

        <img
          src="images/grand.png"
          alt=""
          className=" absolute right-0 sm:right-[23%] h-[150px] sm:h-[110px] bottom-2 sm:-bottom-[21px] overflow-y-hidden"
        />
        <img
          src="images/chart.png"
          alt=""
          className=" absolute -z-[2] top-[35%] sm:top-[19%] h-auto sm:h-[47%]"
        />
        <div className="py-3 sm:py-2 flex items-center gap-4">
          <img
            src="images/logo.png"
            alt=""
            className=" mx-auto h-[2rem] sm:h-[40px]"
          />{" "}
          <h2 className=" font-work text-4xl font-normal text-white">
            TRADE-ATHON{" "}
          </h2>
        </div>
        <div className=" sm:pt-0 pt-[40%]">
          <img
            src="images/tredtext.png"
            alt=""
            className=" mx-auto py-1 -mt-3  sm:-mt-3 sm:py-4 sm:h-[9.5rem] h-[3.5rem] "
          />
        </div>

        {/* <div className=" relative ">
          <h1
            className="  text-white  lh-1_1 
          sm:text-2xl text-lg  text-center "
          >
            BUY & SELL FOOTBALLERS
          </h1>
        </div> */}

        <div>
          <img
            src="/teen.png"
            alt=""
            className=" mx-auto h-auto sm:h-[240px]"
          />
        </div>

        <div className="  mt-4 sm:-mt-2 sm:mb-0 mb-3 ">
          <ClickStart />
        </div>

        <div className="">
          <h1 className="uppercase archo-black text-xl sm:text-[2rem] txt-s text-white text-center tracking-[-0.11em] sm:mb-0 mb-3">
            {/* <img src="images/play.png" alt="" className=" mx-auto h-full sm:h-[50px]" /> */}
            {/* <span className="text-[#edd400]">PLAY </span> */}
            FOR A SHARE OF
          </h1>
          <img
            src="images/100k.png"
            alt=""
            className=" mx-auto h-auto sm:h-[148px] sm:-mt-9 "
          />
          <p className=" font-work text-5xl text-white text-center ">
            {" "}
            <span className=" archo-black">+</span> 1,000,000 $KIX
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;