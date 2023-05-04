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
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const id = router.query.otp;
  const reset = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setMsg("Your Password Not Match");
      setInvalid(true);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    resetPassword(id, formData.newPassword, formData.confirmPassword)
      .then((response) => {
        setIsLoading(false);
        setSuccess(true);
        setMsg("Reset Password Success");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setInvalid(true);
        setMsg(error.response.data.msg);
        setIsLoading(false);
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
            <div className="md:flex">
              <SideForAuth />
              <div className="md:flex-[1] bg-slate-300/20 h-screen md:h-[1024px]">
                <div className="ml-6 md:ml-[83px] md:pt-[176px] pt-14 md:w-[77%]">
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
                    Fill your new password
                  </p>
                  <p className="text-md text-[#8692a6] mt-[10px] md:mt-0">
                    we&apos;ll reset the password for you
                  </p>
                  <input
                    value={formData.newPassword}
                    onChange={(e) => {
                      setFormData({ ...formData, newPassword: e.target.value }),
                        setInvalid(false);
                    }}
                    type="password"
                    className="mt-10 outline-none border border-solid border-[#dedede] w-[95%] h-16 p-6"
                    placeholder=" Write your new password"
                  />
                  <input
                    value={formData.confirmPassword}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      }),
                        setInvalid(false);
                    }}
                    type="password"
                    className="mt-3 outline-none border border-solid border-[#dedede] w-[95%] h-16 p-6"
                    placeholder=" Write your confirm password"
                  />
                  <p className="text-info text-center mt-4">{invalid && msg}</p>
                  <p className="text-success text-center mt-4">
                    {success && msg}
                  </p>
                  {isLoading ? (
                    <button className="btn btn-primary loading  w-[94%] rounded mt-7">
                      Resseting
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={reset}
                      disabled={
                        formData.confirmPassword === "" &&
                        formData.newPassword === ""
                      }
                      className="btn btn-primary w-[94%] rounded mt-7"
                    >
                      Reset Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Layout>
        </PrivateRouteLOGIN>
      ) : (
        <PrivateRouteLOGIN>
          <div className="md:flex">
            <SideForAuth />
            <div className="md:flex-[1] bg-slate-300/20 h-screen md:h-[1024px]">
              <div className="ml-6 pt-14">
                <Image
                  src="/images/logo.svg"
                  width={120}
                  height={62}
                  className="md:hidden "
                  alt="Tickits"
                />
                <p className="text-[#121212] text-[26px] font-semibold mt-11 text-center pt-[300px] ">
                  Your Code Is Invalid, Please Make A Request First
                </p>
                <p
                  onClick={() => {
                    router.push("/reset-password");
                  }}
                  className="font-bold cursor-pointer mt-10 text-primary text-center"
                >
                  Click Here to Make Some Request
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
