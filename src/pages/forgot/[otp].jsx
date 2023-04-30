import SideForAuth from "@/components/AuthSide";
import Image from "next/image";

function Otp() {
  return (
    <div className="lg:flex">
      <SideForAuth />
      <div className="lg:flex-[1] min-[1440px]:flex-[1.3]">
        <div className="ml-6 lg:ml-[83px] lg:mt-[176px] mt-14 lg:w-[77%]">
          <Image
            src="/icon-blue.svg"
            width={120}
            height={62}
            className="lg:hidden "
          />
          <p className="text-[#121212] text-[26px] font-semibold mt-11 lg:hidden">
            Forgot Password
          </p>
          <p className="text-[#121212] text-[26px] font-semibold hidden lg:inline-block">
            Fill your new password
          </p>
          <p className="text-lg text-[#8692a6] mt-[10px] lg:mt-0">
            we'll reset the password for you
          </p>

          <p className="mt-12 text-base text-[#4E4B66]">Email</p>
          <input
            type="password"
            className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] h-16 p-6"
            placeholder=" Write your password"
          />
          <input
            type="password"
            className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] h-16 p-6"
            placeholder=" Write your password"
          />
          <button
            type="submit"
            className="flex justify-center rounded bg-[#9570FE] text-white font--bold p-5 w-[95%] h-[64px] mt-7"
          >
            Activate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
