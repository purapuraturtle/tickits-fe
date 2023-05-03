import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import placeholder from "@/Assets/profile/placeholder.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

function History() {
  const userStore = useSelector((state) => state.user.data);
  const image = userStore.image;
  const firstName = userStore.first_name;
  const lastName = userStore.last_name;
  return (
    <Layout title={"History"}>
      <Header />
      <main className="global-px py-[3.75rem] mt-16 select-none bg-slate-300/20">
        <section className="flex flex-col lg:flex-row gap-8 rounded-md  tracking-wide">
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
                    src={image || placeholder}
                    width={136}
                    height={136}
                    alt="profile-img"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="mt-8 font-semibold text-xl">
                  {" "}
                  {firstName || lastName
                    ? firstName && lastName
                      ? `${firstName} ${lastName}`
                      : firstName || lastName
                    : " "}
                </p>
                <p className="text-sm text-neutral">Moviegoers</p>
              </div>
            </div>
            <div className="pt-8 px-8 pb-20">
              <p className="mb-6">Loyalty Points</p>
              <div className="w-[80%] md:w-[45%] lg:w-full bg-gradient-to-r from-primary to-primary/80 bg-gradient-to-right-top px-4 py-6 rounded-lg text-white">
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
                <Link href={"/profile"}>
                  <p className="text-[#AAAAAA]">Account Settings</p>
                </Link>
                <div>
                  <p className="w-36">Order History</p>
                  <div className="h-1 w-28 bg-primary absolute bottom-0"></div>
                </div>
              </div>

              <div className="px-8 py-14 h-[40rem] overflow-y-auto">
                <div className="border rounded-md">
                  <div className="flex items-center justify-between px-4 md:px-8 py-10 border-b ">
                    <div>
                      <p className="text-sm text-[#AAAAAA]">
                        Tuesday, 07 July 2020 - 04:30pm
                      </p>
                      <h2 className="font-semibold md:text-2xl">
                        Spider-Man: Homecoming
                      </h2>
                    </div>
                    <div>
                      <Image
                        src={"/images/cineone21.svg"}
                        width={174}
                        height={27}
                        className="h-6 md:h-auto"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-8 py-4">
                    <button className="btn btn-primary w-[40%] px-0 md:w-[30%] ">
                      Ticket in active
                    </button>
                    <div className="flex items-center gap-2 text-[#AAAAAA]">
                      <p>Show Details</p>
                      <i className="bi bi-caret-down"></i>
                    </div>
                  </div>
                </div>
                <div className=" mt-4 border rounded-md">
                  <div className="flex items-center justify-between px-4 md:px-8 py-10 border-b ">
                    <div>
                      <p className="text-sm text-[#AAAAAA]">
                        Monday, 14 June 2020 - 02:00pm
                      </p>
                      <h2 className="font-semibold md:text-2xl">
                        Avengers: End Game
                      </h2>
                    </div>
                    <div>
                      <Image
                        src={"/images/ebuid.svg"}
                        width={174}
                        height={27}
                        className="h-6 md:h-auto"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-8 py-4">
                    <button className="btn btn-secondary w-[40%] px-0 md:w-[30%] ">
                      Ticket used
                    </button>
                    <div className="flex items-center gap-2 text-[#AAAAAA]">
                      <p>Show Details</p>
                      <i className="bi bi-caret-down"></i>
                    </div>
                  </div>
                </div>
                <div className=" mt-4 border rounded-md">
                  <div className="flex items-center justify-between px-4 md:px-8 py-10 border-b ">
                    <div>
                      <p className="text-sm text-[#AAAAAA]">
                        Monday, 14 June 2020 - 02:00pm
                      </p>
                      <h2 className="font-semibold md:text-2xl">
                        Avengers: End Game
                      </h2>
                    </div>
                    <div>
                      <Image
                        src={"/images/ebuid.svg"}
                        width={174}
                        height={27}
                        className="h-6 md:h-auto"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-8 py-4">
                    <button className="btn btn-secondary w-[40%] px-0 md:w-[30%] ">
                      Ticket used
                    </button>
                    <div className="flex items-center gap-2 text-[#AAAAAA]">
                      <p>Show Details</p>
                      <i className="bi bi-caret-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export default History;
