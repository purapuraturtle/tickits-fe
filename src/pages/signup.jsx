import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SideForAuth from "@/components/AuthSide";
import Layout from "@/components/Layout";
import PrivateRouteLOGIN from "@/components/PrivateRouteLogin";
import { register } from "@/utils/https/auth";

function Signup() {
  const controller = useMemo(() => new AbortController(), []);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { email, password } = formData;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setMsg("Email is invalid!");
        setInvalid(true);
        setIsLoading(false);
        return;
      }
      const result = await register(email, password, controller);
      console.log(result);
      setMsg("Create account success");
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 700);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setInvalid(true);
      setMsg(error.response.data.msg);
    }
  };
  const isDisabled = isChecked;
  return (
    <PrivateRouteLOGIN>
      <Layout title={"Sign Up"}>
        <div className="md:flex">
          <SideForAuth />
          <form className="md:flex-[1] bg-slate-300/20 h-full">
            <div className=" ml-6 md:ml-[50px] lg:ml-[83px] pt-[54px] md:pt-[176px]  lg:w-[75%] ">
              <Link href={"/"}>
                <Image
                  src="/images/logo.svg"
                  width={130}
                  height={72}
                  className="md:hidden "
                  alt="Tickits"
                />
              </Link>
              <p className="text-[#121212] text-[26px] font-semibold hidden md:inline-block">
                Fill your additional details
              </p>
              <p className="text-3xl font-semibold text-[#121212] mt-12 md:hidden">
                Sign Up
              </p>
              <p className="mt-12 text-base text-[#4E4B66]">Email</p>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData(
                    { ...formData, email: e.target.value },
                    setInvalid(false)
                  );
                }}
                className="mt-3 outline-none border border-solid border-[#dedede] w-[95%]   h-16 p-6"
                placeholder=" Write your email"
              />
              <p className="mt-9 text-base text-[#4E4B66]">Password</p>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => {
                  setFormData(
                    { ...formData, password: e.target.value },
                    setInvalid(false)
                  );
                }}
                className="mt-3 outline-none border border-solid border-[#dedede] w-[95%]  h-16 p-6"
                placeholder=" Write your password"
              />
              <div className="mt-8">
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={!isChecked}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-red-500 rounded focus:ring-0 focus:outline-none md:inline-block hidden"
                  />

                  <span className="text-[#696F79] ml-[10px] hidden md:inline-block">
                    I agree to terms & conditions
                  </span>
                  <p className="text-info text-center mt-4">{invalid && msg}</p>
                  <p className="text-success text-center mt-4">
                    {success && msg}
                  </p>
                </label>
              </div>
              {isLoading ? (
                <button className="btn btn-primary loading  w-[94%] rounded mt-7">
                  Sign Up
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSignUp}
                  disabled={
                    isDisabled ||
                    invalid ||
                    formData.email === "" ||
                    formData.password === ""
                  }
                  className="btn btn-primary w-[94%] rounded mt-7"
                >
                  Join for free
                </button>
              )}
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
              <div className="flex items-center mt-10 w-[95%] justify-center">
                <hr className="w-[36%] md:w-[41%]  h-[1px] bg-[#dedede]" />
                <p className="text-[#aaaaaa] ml-9 text-xs">Or</p>
                <hr className="w-[36%] md:w-[41%]  h-[1px] bg-[#dedede] ml-9" />
              </div>
              <div className="flex justify-center w-[95%] pb-[181px]">
                <div className="flex gap-5 cursor-pointer items-center justify-center mt-14 bg-white drop-shadow-md w-full h-[64px]">
                  <Image
                    src="/google.svg"
                    width={24}
                    height={24}
                    className="relative left-0"
                    alt="google"
                  />
                  <button className="text-[#A0A3BD]">Google</button>
                </div>
                <div className="flex ml-9 gap-5 cursor-pointer items-center justify-center mt-14 bg-white drop-shadow-md w-full h-[64px]">
                  <Image
                    src="/facebook.svg"
                    width={24}
                    height={24}
                    className="relative left-0"
                    alt="google"
                  />
                  <button className="text-[#A0A3BD]">Facebook</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </PrivateRouteLOGIN>
  );
}

export default Signup;
