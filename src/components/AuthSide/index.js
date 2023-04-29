import Image from "next/image";
function SideForAuth() {
  return (
    <>
      <div className="bg-hero-pattern w-[800px] h-[1024px]  bg-no-repeat">
        <div className="pt-20 pl-28">
          <Image src="/favicon.svg" width={276} height={104} alt="icon" />
        </div>
        <p className="text-white text-5xl mt-[101px] ml-28">
          Lets build your account
        </p>
        <p className="text-white/70 mt-[22px] ml-28 text-2xl w-[555px]">
          To be a loyal moviegoer and access all of features, your details are
          required.
        </p>
        <div className="flex ml-28 mt-[58px]">
          <p className="bg-white text-[#29034180]/50 w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
            1
          </p>
          <p className="text-white flex items-center justify-center ml-6 text-[24px]">
            Fill your additional details
          </p>
        </div>
        <div className="h-12 w-[2px] bg-white ml-[136px]"></div>
        <div className="flex ml-28">
          <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
            2
          </p>
          <p className="text-white/60 flex items-center justify-center ml-6 text-[24px]">
            Activate your account
          </p>
        </div>
        <div className="h-12 w-[2px] bg-white ml-[136px]"></div>
        <div className="flex ml-28">
          <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
            3
          </p>
          <p className="text-white/60 flex items-center justify-center ml-6 text-[24px]">
            Done
          </p>
        </div>
      </div>
    </>
  );
}

export default SideForAuth;
