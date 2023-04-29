import SideForAuth from "@/components/AuthSide";
import { usersAction } from "@/redux/slice/users";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex">
        <SideForAuth />
        <form>
          <div className="ml-[83px] mt-[173px] w-[396px]">
            <p className="font-semibold text-5xl text-[#121212]">Sign In</p>
            <p className="text-lg text-[#aaaaaa] mt-3">
              Sign in with your data that you entered during your registration
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
            <button
              type="submit"
              onClick={handleLogin}
              className="flex justify-center rounded bg-[#9570FE] text-white font--bold p-5 w-[400px] h-[64px] mt-7"
            >
              Sign In
            </button>
            <p className="text-[#696F79] mt-8 text-center">
              Forgot your password?{" "}
              <span className="text-[#9570FE] cursor-pointer">Reset now</span>
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
        </form>
      </div>
    </>
  );
}

export default Login;
