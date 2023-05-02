import SideForAuth from "@/components/AuthSide";
import { checkEmail } from "@/utils/https/authaxios";
import Image from "next/image";
import { useState } from "react";

function Forgot() {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    checkEmail(email)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:flex">
      <SideForAuth />
      <div className="lg:flex-[1] min-[1440px]:flex-[1.3] bg-slate-300/20">
        <div className="ml-6 lg:ml-[83px] lg:mt-[176px] mt-14 lg:w-[77%]">
          <Image
            src="/logo.svg"
            width={120}
            height={62}
            className="lg:hidden "
          />
          <p className="text-[#121212] text-[26px] font-semibold mt-11 lg:hidden">
            Forgot Password
          </p>
          <p className="text-[#121212] text-[26px] font-semibold hidden lg:inline-block">
            Fill your complete email
          </p>
          <p className="text-lg text-[#8692a6] mt-[10px] lg:mt-0">
            we&apos;ll send a link to your email shortly
          </p>

          <p className="mt-12 text-base text-[#4E4B66]">Email</p>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onClick={handleEmail}
            className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] lg:w-[95%]  h-16 p-6"
            placeholder=" Write your email"
          />
          <button
            type="submit"
            className="flex justify-center rounded btn-primary text-white font--bold p-5 w-[95%] h-[64px] mt-7"
          >
            Activate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
