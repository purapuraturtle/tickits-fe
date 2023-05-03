import { useMemo, useState } from "react";

import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import placeholder from "@/Assets/profile/placeholder.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PrivateRouteNotLogin from "@/components/PrivateRouteNotLogin";
import { usersAction } from "@/redux/slice/users";
import { editPassword } from "@/utils/https/auth";
import { editProfile } from "@/utils/https/user";

function Profile() {
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const userStore = useSelector((state) => state.user.data);
  const token = userStore.token;
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blop, setBlop] = useState(null);

  const [formData, setFormData] = useState({
    image: userStore.image,
    firstName: userStore.first_name,
    lastName: userStore.last_name,
    email: userStore.email,
    phone: userStore.phone,
    newPassword: "",
    confirmPassword: "",
    file: null,
  });

  const initialErr = {
    newPassword: "",
    confirmPassword: "",
    form: "",
    success: false,
  };

  const [error, setError] = useState({ ...initialErr });

  const handleFirstName = (e) => {
    setFormData({ ...formData, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setFormData({ ...formData, lastName: e.target.value });
  };
  const handlePhone = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };
  const onFileInput = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
    setBlop(URL.createObjectURL(e.target.files[0]));
  };
  const handleShowNew = () => {
    setShowNew(!showNew);
  };

  const handleShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const file = formData.file ? formData.file : formData.image;

      if (formData.newPassword !== "" && formData.confirmPassword !== "") {
        if (!_.isEqual(formData.newPassword, formData.confirmPassword)) {
          setError({
            ...initialErr,
            confirmPassword: "Must match the new password",
            form: "Must match the new password",
          });
          setIsLoading(false);

          return;
        }
        const editPass = await editPassword(
          token,
          {
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword,
          },
          controller
        );
        setFormData({ ...formData, newPassword: "", confirmPassword: "" });
      }

      const result = await editProfile(
        token,
        formData.firstName,
        formData.lastName,
        formData.phone,
        file,
        controller
      );
      // console.log(result);
      const resultData = result.data.data[0];
      let first_name = resultData.first_name;
      let last_name = resultData.last_name;
      if (first_name === "null") {
        first_name = null;
      }
      if (last_name === "null") {
        last_name = null;
      }

      const image = resultData.image;
      let phone = resultData.phone;
      if (phone === "null") {
        phone = null;
      }

      dispatch(
        usersAction.editProfile({ first_name, last_name, image, phone })
      );
      setIsLoading(false);
      setError({ ...error, success: true });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError({ ...initialErr, form: "An error occurred!" });
      // console.log(error);
    }
  };

  return (
    <PrivateRouteNotLogin>
      <Layout title={"Profile"}>
        <Header />
        <main className="global-px py-[3.75rem] mt-16 select-none bg-slate-300/20">
          <section className="flex flex-col lg:flex-row gap-8 rounded-md tracking-wide">
            <div className="flex-1 bg-white">
              <div className="p-10 border-b">
                <div className="flex items-center justify-between">
                  <p className="">INFO</p>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="w-[8.5rem] h-[8.5rem] rounded-full relative">
                      <Image
                        src={blop || formData.image || placeholder}
                        alt="profile-img"
                        fill
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <input
                      type="file"
                      onChange={onFileInput}
                      id="image"
                      name="image"
                      accept=".jpg,.png"
                      hidden
                    />
                  </label>
                  <p className="mt-8 font-semibold text-xl tracking-wider">
                    {userStore.first_name === null ||
                    userStore.first_name === "null"
                      ? userStore.last_name !== null &&
                        userStore.last_name !== "null"
                        ? userStore.last_name
                        : ""
                      : userStore.last_name === null ||
                        userStore.last_name === "null"
                      ? userStore.first_name
                      : userStore.first_name + " " + userStore.last_name}
                  </p>

                  <p className="text-sm text-neutral">Moviegoers</p>
                </div>
              </div>
              <div className="pt-8 px-8 pb-20">
                <p className="mb-6">Loyalty Points</p>
                <div className="w-[80%] md:w-[45%] lg:w-full md:h-52 lg:h-full bg-gradient-to-r from-primary to-primary/80 bg-gradient-to-right-top px-4 py-6 rounded-lg text-white">
                  <p>Moviegoers</p>
                  <p className="text-2xl mt-5">
                    320 <span className="text-xs">points</span>
                  </p>
                </div>
                <p className="mt-8">180 points become a master</p>
                <progress
                  className="progress progress-primary w-56"
                  value="40"
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="flex-[2.5]">
              <form className="bg-white">
                <div className="flex border-b px-8 py-6 gap-14 text-lg relative">
                  <div>
                    <p className="min-w-[9rem]">Account Settings</p>
                    <div className="h-1 w-36 bg-primary absolute bottom-0"></div>
                  </div>
                  <Link href={"profile/history"}>
                    <p className="text-[#AAAAAA]">Order History</p>
                  </Link>
                </div>
                <div className="px-8 py-14">
                  <div className="border-b">
                    <p className="mb-4">Details Information</p>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row w-full justify-between mt-12">
                      <div className="mb-8 md:mb-0">
                        <label htmlFor="firstName" className="flex mb-3">
                          First Name
                        </label>
                        <input
                          onChange={handleFirstName}
                          name="firstName"
                          value={formData.firstName || ""}
                          type="text"
                          placeholder="Input First Name"
                          className="w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none py-5 px-6 rounded focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="flex mb-3">
                          Last Name
                        </label>
                        <input
                          name="lastName"
                          onChange={handleLastName}
                          value={
                            formData.lastName === "null" ||
                            formData.lastName === null
                              ? ""
                              : formData.lastName
                          }
                          type="text"
                          placeholder="Input Last Name"
                          className=" w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none py-5 px-6 rounded focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between mt-12">
                      <div className="mb-8 md:mb-0">
                        <label htmlFor="email" className="flex mb-3">
                          E-mail
                        </label>
                        <input
                          value={formData.email}
                          type="text"
                          disabled
                          placeholder="Input Email"
                          className=" w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none py-5 px-6 rounded focus:border-primary disabled:bg-gray-300"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="phoneNumber" className="flex mb-3">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          onChange={handlePhone}
                          value={
                            formData.phone === "null" || formData.phone === null
                              ? ""
                              : formData.phone
                          }
                          type="text"
                          placeholder="Input Number"
                          className=" w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none  pl-20 pr-6 rounded focus:border-primary "
                        />
                        <span className="absolute left-0 bottom-3 px-4 py-2 border-r h-10">
                          +62
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b">
                    <p className="mb-4 mt-14">Account and Privacy</p>
                  </div>
                  <div className="flex flex-col md:flex-row w-full justify-between mt-12">
                    <div className="relative mb-8 md:mb-0">
                      <label htmlFor="newPassword" className="flex mb-3">
                        New Password
                      </label>
                      <input
                        type={showNew ? "text" : "password"}
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        placeholder="Input New Password"
                        className=" w-full md:w-[18rem] lg:w-[20rem] h-16 border  outline-none py-5 px-6 rounded focus:border-primary"
                      />
                      <i
                        className={`bi ${
                          showNew ? "bi-eye" : "bi-eye-slash"
                        } absolute right-4 bottom-5`}
                        onClick={handleShowNew}
                      ></i>
                    </div>
                    <div className="relative">
                      <label htmlFor="confirmPassword" className="flex mb-3">
                        Confirm Password
                      </label>
                      <input
                        type={showConfirm ? "text" : "password"}
                        value={formData.confirmPassword}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Input Confirm Password"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className={` w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none py-5 px-6 rounded focus:border-primary ${
                          error.confirmPassword && "border-error"
                        }`}
                      />
                      <i
                        className={`bi ${
                          showNew ? "bi-eye" : "bi-eye-slash"
                        } absolute right-4 bottom-5`}
                        onClick={handleShowConfirm}
                      ></i>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row w-full items-center min-h-12 mt-14 gap-4">
                    <button
                      className={`btn btn-primary w-full md:w-[40%] text-white ${
                        isLoading && "loading"
                      }`}
                      onClick={Submit}
                      disabled={isLoading}
                    >
                      Update changes
                    </button>
                    <p className="text-error text-sm">{error.form}</p>
                    {error.success && (
                      <p className="text-success text-sm">
                        Success update data
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </Layout>
    </PrivateRouteNotLogin>
  );
}

export default Profile;
