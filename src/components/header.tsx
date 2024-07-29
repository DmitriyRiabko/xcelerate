import React from "react";

export default function Header() {
  return (
    <header className="flex justify-center items-center   text-[20px] md:text-[40px]   gap-2 lg:gap-8  lg:text-[70px] mb-[10%] xl:mb-[200px] lg:pl-[10%]">
      <img
        src="/images/logo.png"
        alt="xcelerate_logo"
        className=" max-h-[30px]  md:max-h-[50px] lg:max-h-[85px] h-full w-auto"
      />
      <h1 className="text-nowrap">
        {" "}
        <span className="text-primary">-</span> ЦЕ ПРО
      </h1>

      <div className="lg:h-[300px] flex items-end border-b-2 lg:max-w-[350px] lg:w-full">
        <h1>
          {"РУХ"}
          <span className="text-[#F05262]">.</span>
        </h1>
      </div>
    </header>
  );
}
