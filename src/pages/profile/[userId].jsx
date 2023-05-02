import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import placeholder from "@/Assets/profile/placeholder.png";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { getProfile, editProfile } from "@/utils/https/user";
import { useSelector } from "react-redux";

function Profile() {
  const controller = useMemo(() => new AbortController(), []);
  const userStore = useSelector((state) => state.user.data.data);
  // console.log(userStore);
  const token = userStore.token;
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [iconSave, setIconSave] = useState(false);
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    image: null,
    first_name: "",
    last_name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && isNaN(value)) {
      return;
    }
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    console.log(value);
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: files[0] }));
    if (e) {
      setIconSave((prevState) => !prevState);
    }
  };

  const setImgProfile = () => {
    if (form.image) {
      return URL.createObjectURL(form.image);
    }
    return placeholder;
  };

  const handleShowNew = () => {
    setShowNew(!showNew);
  };

  const handleShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const fetching = async () => {
    try {
      const result = await getProfile(token, controller);
      const resultData = result.data.data[0];
      console.log(resultData);
      setData(resultData);
      setForm(resultData);
    } catch (error) {
      console.log(error);
    }
  };

  // const editProfile = async () => {
  //   try {
  //     const result = await editProfile(token, controller);
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const result = await editProfile(
        token,
        form.first_name,
        form.last_name,
        form.phone,
        form.image,
        controller
      );
      console.log(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <label htmlFor="image">
                  <div className="w-[8.5rem] h-[8.5rem] rounded-full">
                    <Image
                      src={setImgProfile()}
                      alt="profile-img"
                      width={200}
                      height={200}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    hidden
                    onChange={handleImageChange}
                  />
                </label>
                {iconSave && (
                  <button className="btn btn-primary btn-outline px-4">
                    <i className="bi bi-check-square text-xl cursor-pointer">
                      <span className="text-lg"> Save</span>
                    </i>
                  </button>
                )}
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
                        type="text"
                        id="firstName"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleInputChange}
                        placeholder="Input First Name"
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
                        name="last_name"
                        value={form.last_name}
                        onChange={handleInputChange}
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
                        type="text"
                        id="email"
                        value={data.email}
                        disabled
                        placeholder="Input Email"
                        className=" w-full md:w-[18rem] lg:w-[20rem] h-16 border outline-none py-5 px-6 rounded focus:border-primary"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="phoneNumber" className="flex mb-3">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phone"
                        value={form.phone === "null" ? "" : form.phone}
                        onChange={handleInputChange}
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
                    <label htmlFor="firstName" className="flex mb-3">
                      New Password
                    </label>
                    <input
                      type={showNew ? "text" : "password"}
                      id="firstName"
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
                    <label htmlFor="lastName" className="flex mb-3">
                      Confirm Password
                    </label>
                    <input
                      type={showConfirm ? "text" : "password"}
                      id="lastName"
                      placeholder="Input Confirm Password"
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
                <button
                  className="mt-14 btn btn-primary w-full md:w-[40%]"
                  onClick={Submit}
                >
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
