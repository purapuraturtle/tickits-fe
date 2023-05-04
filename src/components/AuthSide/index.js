import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function SideForAuth() {
  const router = useRouter();
  return (
    <>
      <div className="md:flex-[1] lg:flex-[1.3] w-full">
        <div className="bg-hero-pattern bg-[#4f3c81] bg-cover w-full h-full bg-no-repeat hidden md:inline-block bg-slate-300/20">
          <div className="bg-primary/70 h-full  ">
            {router.pathname === "/signup" && (
              <>
                <div className="pt-20 md:ml-6 lg:ml-14 min-[1440px]:ml-28">
                  <div className="">
                    <Link href={"/"}>
                      <Image
                        src="/images/logo-white.svg"
                        width={276}
                        height={104}
                        alt="icon"
                      />
                    </Link>
                  </div>
                  <p className="text-white md:text-3xl lg:text-5xl mt-[101px] md:w-[99%]">
                    Lets build your account
                  </p>
                  <p className="text-white/70 mt-[22px] md:text-lg lg:text-2xl md:w-[80%]">
                    To be a loyal moviegoer and access all of features, your
                    details are required.
                  </p>
                  <div className="flex mt-[58px]">
                    <p className="bg-white text-[#29034180]/50 w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      1
                    </p>
                    <p className="text-white flex items-center justify-center ml-6 md:text-xl lg:text-[24px]">
                      Fill your additional details
                    </p>
                  </div>
                  <div className="h-12 w-[2px] bg-white md:ml-6"></div>
                  <div className="flex">
                    <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      2
                    </p>
                    <p className="text-white/60 flex items-center justify-center ml-6  md:text-xl lg:text-[24px]">
                      Activate your account
                    </p>
                  </div>
                  <div className="h-12 w-[2px] bg-white md:ml-6"></div>
                  <div className="flex">
                    <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      3
                    </p>
                    <p className="text-white/60 flex items-center justify-center ml-6  md:text-xl lg:text-[24px]">
                      Done
                    </p>
                  </div>
                </div>
              </>
            )}
            {router.pathname === "/login" && (
              <>
                <Link href={"/"}>
                  <Image
                    src="/images/logo-white.svg"
                    width={500}
                    height={190}
                    className="m-auto pt-[383px] md:w-[300px] lg:w-auto"
                    alt="icon"
                  />
                </Link>{" "}
                <p className="md:text-4xl lg:text-5xl text-white/80 text-center mt-[9px]">
                  wait, watch, wow!
                </p>
              </>
            )}
            {router.pathname === "/reset-password" && (
              <>
                <div className="pt-20 md:ml-6 lg:ml-14 min-[1440px]:ml-28">
                  <div className="">
                    <Link href={"/"}>
                      <Image
                        src="/images/logo-white.svg"
                        width={276}
                        height={104}
                        alt="icon"
                      />
                    </Link>
                  </div>
                  <p className="text-white md:text-3xl lg:text-5xl mt-[101px] md:w-[99%]">
                    Lets reset your password
                  </p>
                  <p className="text-white/70 mt-[22px] md:text-lg lg:text-2xl md:w-[80%]">
                    To be able to use your account again, please complete the
                    following steps.
                  </p>
                  <div className="flex mt-[58px]">
                    <p className="bg-white text-[#29034180]/50 w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      1
                    </p>
                    <p className="text-white flex items-center justify-center ml-6 md:text-xl lg:text-[24px]">
                      Fill your complete email
                    </p>
                  </div>
                  <div className="h-12 w-[2px] bg-white md:ml-6"></div>
                  <div className="flex">
                    <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      2
                    </p>
                    <p className="text-white/60 flex items-center justify-center ml-6  md:text-xl lg:text-[24px]">
                      Activate your email
                    </p>
                  </div>
                  <div className="h-12 w-[2px] bg-white md:ml-6"></div>
                  <div className="flex">
                    <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      3
                    </p>
                    <p className="text-white/60 flex items-center justify-center ml-6  md:text-xl lg:text-[24px]">
                      Enter your new password
                    </p>
                  </div>
                  <div className="h-12 w-[2px] bg-white md:ml-6"></div>
                  <div className="flex">
                    <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      4
                    </p>
                    <p className="text-white/60 flex items-center justify-center ml-6  md:text-xl lg:text-[24px]">
                      Done
                    </p>
                  </div>
                </div>
              </>
            )}
            {router.pathname === "/reset-password/[otp]" && (
              <>
                <div className="pt-20 md:ml-6 lg:ml-14 min-[1440px]:ml-28">
                  <div className="">
                    <Link href={"/"}>
                      <Image
                        src="/images/logo-white.svg"
                        width={276}
                        height={104}
                        alt="icon"
                      />
                    </Link>
                  </div>
                  <p className="text-white md:text-3xl lg:text-5xl mt-[101px] md:w-[99%]">
                    Lets reset your password
                  </p>
                  <p className="text-white/70 mt-[22px] md:text-lg lg:text-2xl md:w-[80%]">
                    To be able to use your account again, please complete the
                    following steps.
                  </p>
                  <div className="flex mt-[58px]">
                    <p className="bg-white text-[#29034180]/50 w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      1
                    </p>
                    <p className="text-white flex items-center justify-center ml-6 md:text-xl lg:text-[24px]">
                      Fill your complete email
                    </p>
                  </div>
                  <div className="h-12 w-[2px] bg-white md:ml-6"></div>
                  <div className="flex">
                    <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      2
                    </p>
                    <p className="text-white/60 flex items-center justify-center ml-6  md:text-xl lg:text-[24px]">
                      Activate your email
                    </p>
                  </div>
                  <div className="h-12 w-[2px] bg-white md:ml-6"></div>
                  <div className="flex">
                    <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      3
                    </p>
                    <p className="text-white/60 flex items-center justify-center ml-6  md:text-xl lg:text-[24px]">
                      Enter your new password
                    </p>
                  </div>
                  <div className="h-12 w-[2px] bg-white md:ml-6"></div>
                  <div className="flex">
                    <p className="border-2 border-solid border-white  bg-opacity-0 text-white w-[50px] h-[50px] text-[24px] rounded-full flex items-center justify-center">
                      4
                    </p>
                    <p className="text-white/60 flex items-center justify-center ml-6  md:text-xl lg:text-[24px]">
                      Done
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideForAuth;
