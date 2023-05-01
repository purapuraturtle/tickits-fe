import SideForAuth from "@/components/AuthSide";
import { resetPassword } from "@/utils/https/allAxios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

function Otp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const id = router.query.otp;
  const reset = (e) => {
    e.preventDefault();
    resetPassword(id, formData.newPassword, formData.confirmPassword)
      .then((response) => {
        console.log(response);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:flex">
      <SideForAuth />
      <div className="lg:flex-[1] min-[1440px]:flex-[1.3]">
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
            Fill your new password
          </p>
          <p className="text-lg text-[#8692a6] mt-[10px] lg:mt-0">
            we&apos;ll reset the password for you
          </p>

          <p className="mt-12 text-base text-[#4E4B66]">Email</p>
          <input
            value={formData.newPassword}
            onChange={(e) => {
              setFormData({ ...formData, newPassword: e.target.value });
            }}
            type="password"
            className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] h-16 p-6"
            placeholder=" Write your new password"
          />
          <input
            value={formData.confirmPassword}
            onChange={(e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
            }}
            type="password"
            className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] h-16 p-6"
            placeholder=" Write your confirm password"
          />
          <button
            onClick={reset}
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

export default Otp;
