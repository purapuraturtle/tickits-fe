import SideForAuth from "@/components/AuthSide";
import Image from "next/image";
import { useState } from "react";
import { register } from "@/utils/https/allAxios";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const { email, password } = formData;
      const result = await register(email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex">
        <SideForAuth />
        <div className="ml-[83px] mt-[176px]">
          <p className="text-[#121212] text-[26px] font-semibold">
            Fill your additional details
          </p>
          <p className="mt-12 text-base text-[#4E4B66]">Email</p>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            className="mt-3 outline-none border border-solid border-[#dedede] w-[400px] h-16 p-6"
            placeholder=" Write your email"
          />
          <p className="mt-9 text-base text-[#4E4B66]">Password</p>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            className="mt-3 outline-none border border-solid border-[#dedede] w-[400px] h-16 p-6"
            placeholder=" Write your password"
          />
          <div className="mt-8">
            <label className="cursor-pointer">
              <input
                type="checkbox"
                id="checkbox"
                className="h-5 w-5 text-red-500 rounded focus:ring-0 focus:outline-none"
              />
              <span className="text-[#696F79] ml-[21px]">
                I agree to terms & conditions
              </span>
            </label>
          </div>
          <button
            type="submit"
            onClick={handleSignUp}
            className="rounded bg-[#9570FE] text-white font--bold p-5 w-[400px] h-[64px] mt-7"
          >
            Join for free now
          </button>
          <p className="text-[#696F79] mt-8 text-center">
            Do you already have an account?{" "}
            <span
              onClick={() => {
                router.push("/login");
              }}
              className="text-[#9570FE] cursor-pointer"
            >
              Log in
            </span>
          </p>
          <div className="flex items-center mt-10">
            <hr className="w-40 h-[1px] bg-[#dedede]" />
            <p className="text-[#aaaaaa] ml-9 text-xs">Or</p>
            <hr className="w-40 h-[1px] bg-[#dedede] ml-9" />
          </div>
          <div className="flex">
            <div className="flex cursor-pointer items-center justify-center mt-14 bg-white drop-shadow-lg w-[182px] h-[64px]">
              <Image
                src="/google.svg"
                width={24}
                height={24}
                className="absolute left-5"
                alt="google"
              />
              <button className="text-[#A0A3BD]">Google</button>
            </div>
            <div className="flex ml-9 cursor-pointer items-center justify-center mt-14 bg-white drop-shadow-lg w-[182px] h-[64px]">
              <Image
                src="/facebook.svg"
                width={24}
                height={24}
                className="absolute left-5"
                alt="google"
              />
              <button className="text-[#A0A3BD]">Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
