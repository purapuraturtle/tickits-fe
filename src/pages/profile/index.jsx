import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import placeholder from "@/Assets/placeholder.png";
import { useState } from "react";

function Profile() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleShowNew = () => {
    setShowNew(!showNew);
  };

  const handleShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  console.log(showNew);

  return (
    <Layout title={"Profile"}>
      <Header />
      <main className="global-px py-[3.75rem] mt-16 select-none bg-slate-300/20">
        <section className="flex flex-col lg:flex-row gap-8 rounded-md">
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
                <div className="w-[8.5rem] h-[8.5rem] rounded-full">
                  <Image
                    src={placeholder}
                    alt="profile-img"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="mt-8 font-semibold text-xl">Jonas El Rodriguez</p>
                <p className="text-sm text-neutral">Moviegoers</p>
              </div>
            </div>
            <div className="pt-8 px-8 pb-20">
              <p className="mb-6">Loyalty Points</p>
              <div className="w-[80%] md:w-[45%] lg:w-full bg-gradient-to-r from-teal-500 to-emerald-500 via-cyan-600 bg-gradient-to-right-top px-4 py-6 rounded-lg">
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
                  <p className="w-36">Account Settings</p>
                  <div className="h-1 w-36 bg-primary absolute bottom-0"></div>
                </div>
                <p className="text-[#AAAAAA]">Order History</p>
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
                        type="text"
                        id="firstName"
                        className=" w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none py-5 px-6 rounded focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="flex mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
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
                        type="text"
                        id="email"
                        className=" w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none py-5 px-6 rounded focus:border-primary"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="phoneNumber" className="flex mb-3">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phoneNumber"
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
                    <label htmlFor="firstName" className="flex mb-3">
                      New Password
                    </label>
                    <input
                      type={showNew ? "text" : "password"}
                      id="firstName"
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
                    <label htmlFor="lastName" className="flex mb-3">
                      Confirm Password
                    </label>
                    <input
                      type={showConfirm ? "text" : "password"}
                      id="lastName"
                      className=" w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none py-5 px-6 rounded focus:border-primary"
                    />
                    <i
                      className={`bi ${
                        showNew ? "bi-eye" : "bi-eye-slash"
                      } absolute right-4 bottom-5`}
                      onClick={handleShowConfirm}
                    ></i>
                  </div>
                </div>
                <button className="mt-14 btn btn-primary w-full md:w-[40%]">
                  Update changes
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export default Profile;
