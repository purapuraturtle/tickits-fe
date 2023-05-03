import { useState } from "react";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import SideForAuth from "@/components/AuthSide";
import Layout from "@/components/Layout";
import PrivateRouteLOGIN from "@/components/PrivateRouteLogin";
import { resetPassword } from "@/utils/https/auth";

function ResetPassword({ isValidId }) {
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
        // console.log(response);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isValidId === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isValidId ? (
        <PrivateRouteLOGIN>
          <Layout title={"Reset Password"}>
            <div className="lg:flex">
              <SideForAuth />
              <div className="lg:flex-[1] bg-slate-300/20 h-screen lg:h-[1024px]">
                <div className="ml-6 lg:ml-[83px] lg:pt-[176px] pt-14 lg:w-[77%]">
                  <Link href={"/"}>
                    <Image
                      src="/images/logo.svg"
                      width={120}
                      height={62}
                      className="lg:hidden "
                      alt="Tickits"
                    />
                  </Link>
                  <p className="text-[#121212] text-[26px] font-semibold mt-11 lg:hidden">
                    Forgot Password
                  </p>
                  <p className="text-[#121212] text-[26px] font-semibold hidden lg:inline-block">
                    Fill your new password
                  </p>
                  <p className="text-lg text-[#8692a6] mt-[10px] lg:mt-0">
                    we&apos;ll reset the password for you
                  </p>
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
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      });
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
                    Reset Now
                  </button>
                </div>
              </div>
            </div>
          </Layout>
        </PrivateRouteLOGIN>
      ) : (
        <PrivateRouteLOGIN>
          <div className="lg:flex">
            <SideForAuth />
            <div className="lg:flex-[1] bg-slate-300/20 h-screen lg:h-[1024px]">
              <div className="ml-6 lg:ml-[83px] lg:pt-[176px] pt-14 lg:w-[77%]">
                <Image
                  src="/images/logo.svg"
                  width={120}
                  height={62}
                  className="lg:hidden "
                  alt="Tickits"
                />
                <p className="text-[#121212] text-[26px] font-semibold mt-11 ">
                  Your Code Is Invalid, Please Make A Request First
                </p>
              </div>
            </div>
          </div>
        </PrivateRouteLOGIN>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { otp } = context.query; // mengambil nilai otp dari konteks permintaan

  try {
    const response = await axios.get(
      `https://tickits-be.vercel.app/auth/reset-password/${otp}`
    );
    const isValidId = true; // jika permintaan berhasil, maka nilai isValidId true
    return { props: { isValidId } };
  } catch (error) {
    const isValidId = false; // jika permintaan gagal, maka nilai isValidId false
    return { props: { isValidId } };
  }
}

export default ResetPassword;
