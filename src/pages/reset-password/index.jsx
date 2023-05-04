import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import SideForAuth from "@/components/AuthSide";
import Layout from "@/components/Layout";
import PrivateRouteLOGIN from "@/components/PrivateRouteLogin";
import { checkEmail } from "@/utils/https/auth";

function Forgot() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMsg("Email is invalid!");
      setInvalid(true);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    checkEmail(email)
      .then((response) => {
        console.log(response);
        setMsg("Your Request Has Been Send To Your Email");
        setSuccess(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setInvalid(true);
        setMsg(error.response.data.msg);
        setIsLoading(false);
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
              <p className="text-md text-[#8692a6] mt-[12px]">
                we&apos;ll send a link to your email shortly
              </p>

              <p className="mt-12 text-base text-[#4E4B66]">Email</p>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value), setInvalid(false);
                }}
                className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] md:w-[95%]  h-16 p-6"
                placeholder=" Write your email"
              />
              <p className="text-info text-center mt-4">{invalid && msg}</p>
              <p className="text-success text-center mt-4">{success && msg}</p>
              {isLoading ? (
                <button className="btn btn-primary loading  w-[94%] rounded mt-7">
                  Activating
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleEmail}
                  disabled={email === ""}
                  className="btn btn-primary w-[94%] rounded mt-7"
                >
                  Activate Now
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </PrivateRouteLOGIN>
  );
}

export default Forgot;
