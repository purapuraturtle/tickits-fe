import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import SideForAuth from "@/components/AuthSide";
import Layout from "@/components/Layout";
import PrivateRouteLOGIN from "@/components/PrivateRouteLogin";
import { usersAction } from "@/redux/slice/users";
import { login } from "@/utils/https/auth";

function Login() {
  const controller = useMemo(() => new AbortController(), []);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [invalid, setInvalid] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
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
      await login(email, password, controller);
      // console.log(result);
      dispatch(usersAction.storeLogin({ email, password, controller }));
      setIsLoading(false);
      router.push("/");
    } catch (err) {
      // console.log(err.response.data.msg);
      setMsg(err.response.data.msg);
      setInvalid(true);
      setIsLoading(false);
    }
  };

  return (
    <PrivateRouteLOGIN>
      <Layout title={"Login"}>
        <div className="md:flex">
          <SideForAuth />
          <form className="md:flex-[1] bg-slate-300/20 h-screen md:h-full">
            <div className=" ml-6 md:ml-[50px] lg:ml-[83px] pt-[54px] md:pt-[176px]  lg:w-[75%] ">
              <Image
                src="/images/logo.svg"
                width={130}
                height={72}
                className="md:hidden "
                alt="Tickits"
              />
              <p className="text-[#121212] text-3xl font-semibold inline-block mt-12 md:mt-0">
                Sign In
              </p>
              <p className="text-md mt-3 text-[#aaaaaa] hidden md:inline-block">
                Sign in with your data that you entered during your registration
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
                  setFormData({ ...formData, password: e.target.value }),
                    setInvalid(false);
                }}
                className="mt-3 outline-none border border-solid border-[#dedede] w-[95%]  h-16 p-6"
                placeholder=" Write your password"
              />

              {isLoading ? (
                <button className="btn btn-primary loading  w-[94%] rounded mt-7">
                  Sign in
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleLogin}
                  disabled={
                    (formData.password === "" && formData.password === "") ||
                    invalid ||
                    isLoading
                  }
                  className="btn btn-primary w-[94%] rounded mt-7"
                >
                  Sign in
                </button>
              )}

              <p className="text-info text-center mt-4">{invalid && msg}</p>
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
              <div className="flex items-center mt-10 w-[95%] justify-center">
                <hr className="w-[36%] md:w-[41%]  h-[1px] bg-[#dedede]" />
                <p className="text-[#aaaaaa] ml-9 text-xs">Or</p>
                <hr className="w-[36%] md:w-[41%] h-[1px] bg-[#dedede] ml-9" />
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
                <div className="flex gap-5 ml-9 cursor-pointer items-center justify-center mt-14 bg-white drop-shadow-md w-full h-[64px]">
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

export default Login;
