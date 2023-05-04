import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import SideForAuth from "@/components/AuthSide";
import Layout from "@/components/Layout";
import PrivateRouteLOGIN from "@/components/PrivateRouteLogin";
import { checkEmail } from "@/utils/https/auth";

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
    <PrivateRouteLOGIN>
      <Layout title={"Reset Password"}>
        <div className="md:flex">
          <SideForAuth />
          <div className="md:flex-[1] bg-slate-300/20 h-screen md:h-full pb-[533px]">
            <div className="ml-6 md:ml-[50px] lg:ml-[83px] pt-[54px] md:pt-[176px]  lg:w-[75%] ">
              <Link href={"/"}>
                <Image
                  src="/images/logo.svg"
                  width={120}
                  height={62}
                  className="md:hidden "
                  alt="Tickits"
                />
              </Link>
              <p className="text-[#121212] text-[26px] font-semibold mt-11 md:hidden">
                Forgot Password
              </p>
              <p className="text-[#121212] text-[26px] font-semibold hidden md:inline-block">
                Fill your complete email
              </p>
              <p className="text-md text-[#8692a6] mt-[10px] md:mt-0">
                we&apos;ll send a link to your email shortly
              </p>

              <p className="mt-12 text-base text-[#4E4B66]">Email</p>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] md:w-[95%]  h-16 p-6"
                placeholder=" Write your email"
              />
              <button
                onClick={handleEmail}
                type="submit"
                className="flex justify-center rounded btn-primary text-white font--bold p-5 w-[95%] h-[64px] mt-7 "
              >
                Activate Now
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </PrivateRouteLOGIN>
  );
}

export default Forgot;
