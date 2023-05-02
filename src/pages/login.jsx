import SideForAuth from "@/components/AuthSide";
import { usersAction } from "@/redux/slice/users";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    dispatch(usersAction.storeLogin({ email, password }))
      .unwrap()
      .then((response) => {
        console.log(response);
      });
    router.push("/").catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <div className="lg:flex">
        <SideForAuth />
        <form className="lg:flex-[1] min-[1440px]:flex-[1.3] bg-slate-300/20">
          <div className="lg:ml-[83px] ml-6  mt-[55px] lg:w-[75%]">
            <Image
              src="/logo.svg"
              width={120}
              height={62}
              className="lg:hidden "
            />
            <p className="font-semibold text-5xl mt-[50px] lg:mt-[176px] text-[#121212]">
              Sign In
            </p>
            <p className="text-lg text-[#aaaaaa] mt-3 hidden lg:inline-block">
              Sign in with your data that you entered during your registration
            </p>
            <p className="mt-12 text-base text-[#4E4B66]">Email</p>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] h-16 p-6"
              placeholder=" Write your email"
            />
            <p className="mt-9 text-base text-[#4E4B66]">Password</p>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] h-16 p-6"
              placeholder=" Write your password"
            />
            <button
              type="submit"
              onClick={handleLogin}
              className="flex justify-center rounded btn-primary text-white font--bold p-5 w-[95%]  h-[64px] mt-7"
            >
              Sign In
            </button>
            <p className="text-[#696F79] mt-8 text-center">
              Forgot your password?{" "}
              <span
                onClick={() => {
                  router.push("/reset-password");
                }}
                className="text-[#9570FE] cursor-pointer"
              >
                Reset now
              </span>
            </p>
            <div className="flex items-center justify-center mt-10 w-[95%]">
              <hr className="w-[40%]  h-[1px] bg-[#dedede]" />
              <p className="text-[#aaaaaa] ml-9 text-xs">Or</p>
              <hr className="w-[40%]  h-[1px] bg-[#dedede] ml-9" />
            </div>
            <div className="flex justify-center w-[95%]">
              <div className="flex w-full cursor-pointer items-center justify-center mt-14 bg-white drop-shadow-lg h-[64px]">
                <Image
                  src="/google.svg"
                  width={24}
                  height={24}
                  className="absolute left-5"
                  alt="google"
                />
                <button className="text-[#A0A3BD]">Google</button>
              </div>
              <div className="flex ml-9 cursor-pointer items-center justify-center mt-14 bg-white drop-shadow-lg w-full h-[64px]">
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
        </form>
      </div>
    </>
  );
}

export default Login;
