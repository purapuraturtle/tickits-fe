import Image from "next/image";
import { useRouter } from "next/router";
function SideForAuth() {
  const router = useRouter();
  return (
    <>
      <div className="bg-hero-pattern  h-[1024px] lg:w-[55.5%]  bg-no-repeat hidden lg:inline-block">
        {router.pathname === "/signup" && (
          <>
            <div className="pt-20 lg:ml-14 min-[1440px]:ml-28">
              <div className="">
                <Image src="/favicon.svg" width={276} height={104} alt="icon" />
              </div>
              <p className="text-white text-5xl mt-[101px] lg:w-[99%]">
                Lets build your account
              </p>
              <p className="text-white/70 mt-[22px] text-2xl min-[1440px]:w-[555px]">
                To be a loyal moviegoer and access all of features, your details
                are required.
              </p>
              <div className="flex mt-[58px]">
                <p className="bg-white text-[#29034180]/50 w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                  1
                </p>
                <p className="text-white flex items-center justify-center ml-6 text-[24px]">
                  Fill your additional details
                </p>
              </div>
              <div className="h-12 w-[2px] bg-white lg:ml-6"></div>
              <div className="flex">
                <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                  2
                </p>
                <p className="text-white/60 flex items-center justify-center ml-6 text-[24px]">
                  Activate your account
                </p>
              </div>
              <div className="h-12 w-[2px] bg-white lg:ml-6"></div>
              <div className="flex">
                <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                  3
                </p>
                <p className="text-white/60 flex items-center justify-center ml-6 text-[24px]">
                  Done
                </p>
              </div>
            </div>
          </>
        )}
        {router.pathname === "/login" && (
          <>
            <Image
              src="/favicon.svg"
              width={500}
              height={190}
              className="m-auto pt-[383px]"
              alt="icon"
            />{" "}
            <p className="text-5xl text-white/80 text-center mt-[9px]">
              wait, watch, wow!
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default SideForAuth;
