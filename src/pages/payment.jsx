import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import Layout from "@/components/Layout";

function Payment() {
  const [active, setActive] = useState(null);

  const handleDivClick = (index) => {
    setActive(index);
  };
  return (
    <Layout title={"Payment"}>
      <Header />
      <div className="flex min-[1300px]:flex-row  flex-col-reverse min-[1300px]:justify-between bg-slate-300/20 gap-6">
        <div className="pl-6 lg:pl-32 min-[1300px]:flex-[1.5] mr-6 lg:mr-32 min-[1300px]:mr-0">
          <div className="">
            <p className="text-[#14142B] text-2xl pt-10 min-[1300px]:pt-[152px] font-bold">
              Payment Info
            </p>
            <div className="bg-white mt-6 h-full">
              <div className="ml-10 pt-12">
                <div className="flex border-b border-[#E6E6E6] border-solid pb-5 w-[95%]">
                  <p className="text-[#6B6B6B] flex-[1] text-xl ">
                    Date & time
                  </p>
                  <p className="text-xl flex-[2]  text-[#000000] text-right">
                    Tuesday, 07 july 2020 at 02:00pm
                  </p>
                </div>
                <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[95%]">
                  <p className="text-[#6B6B6B] flex-[1] text-xl">Movie title</p>
                  <p className="text-xl flex-[2] text-[#000000] text-right">
                    Spider-Man:Homecoming
                  </p>
                </div>
                <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[95%]">
                  <p className="text-[#6B6B6B] text-xl flex-[1]">Cinema name</p>
                  <p className="text-xl flex-[2] text-[#000000] text-right">
                    CineOne21 Cinema
                  </p>
                </div>
                <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[95%]">
                  <p className="text-[#6B6B6B] text-xl flex-[1]">
                    Number of tickets
                  </p>
                  <p className="text-xl flex-[2] text-[#000000] text-right">
                    3 pieces
                  </p>
                </div>
                <div className="flex mt-6  pb-5 w-[95%]">
                  <p className="text-[#6B6B6B] text-xl flex-[1]">
                    Total payment
                  </p>
                  <p className="text-xl flex-[2] text-[#000000] text-right">
                    $30,00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-[#14142B] text-2xl mt-12 font-bold">
              Choose a Payment Method
            </p>
            <div className=" h-full mt-6 bg-white">
              <div className="flex flex-wrap justify-center gap-6 pt-14">
                <div
                  className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                    active === 0 ? "bg-primary" : ""
                  }`}
                  onClick={() => handleDivClick(0)}
                >
                  <Image src="/gpay.svg" width={74} height={30} />
                </div>
                <div
                  className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                    active === 1 ? "bg-primary" : ""
                  }`}
                  onClick={() => handleDivClick(1)}
                >
                  <Image src="/visa.svg" width={80} height={25.9} />
                </div>
                <div
                  className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                    active === 2 ? "bg-primary" : ""
                  }`}
                  onClick={() => handleDivClick(2)}
                >
                  <Image src="/gopay.svg" width={106} height={35} />
                </div>
                <div
                  className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                    active === 3 ? "bg-primary" : ""
                  }`}
                  onClick={() => handleDivClick(3)}
                >
                  <Image src="/paypal.svg" width={31} height={37} />
                </div>
                <div
                  className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                    active === 4 ? "bg-primary" : ""
                  }`}
                  onClick={() => handleDivClick(4)}
                >
                  <Image src="/dana.svg" width={108} height={31} />
                </div>
                <div
                  className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                    active === 5 ? "bg-primary" : ""
                  }`}
                  onClick={() => handleDivClick(5)}
                >
                  <Image src="/bca.svg" width={85} height={28} />
                </div>
                <div
                  className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                    active === 6 ? "bg-primary" : ""
                  }`}
                  onClick={() => handleDivClick(6)}
                >
                  <Image src="/bri.svg" width={45} height={38} />
                </div>
                <div
                  className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center ${
                    active === 7 ? "bg-primary" : ""
                  }`}
                  onClick={() => handleDivClick(7)}
                >
                  <Image src="/ovo.svg" width={92} height={30} />
                </div>
              </div>
              <div className="flex items-center justify-center mt-10">
                <hr className="w-[38%]  h-[1px] bg-[#dedede]" />
                <p className="text-[#aaaaaa] ml-9 text-xs">Or</p>
                <hr className="w-[38%]  h-[1px] bg-[#dedede] ml-9" />
              </div>
              <p className="text-center mt-9">
                Pay via cash.{" "}
                <span className="text-primary">See how it work</span>
              </p>
            </div>
            <div className="flex justify-between mt-10 pb-[72px] gap-6">
              <button className="border-[3px] border-solid border-primary text-primary flex items-center justify-center w-[300px] h-14">
                Previous step
              </button>
              <button className="bg-primary text-white w-[300px] h-14">
                Pay your order
              </button>
            </div>
          </div>
        </div>
        <div className="ml-6 lg:ml-32 min-[1300px]:ml-0 min-[1300px]:w-[400px] h-[548px] bg-white mt-[206px] mr-6 lg:mr-32 min-[1300px]:flex-[1]">
          <p className="ml-10 mt-12 text-[#696F79]">Full Name</p>
          <input
            className="w-[85%] h-16 border border-solid border-[#DEDEDE] rounded ml-10 mt-[14px] pl-4"
            placeholder="Input your full name"
          />
          <p className="ml-10 mt-12 text-[#696F79]">Email</p>
          <input
            className="w-[85%] h-16 border border-solid border-[#DEDEDE] rounded ml-10 mt-[14px] pl-4"
            placeholder="Input your full email"
          />
          <p className="ml-10 mt-12 text-[#696F79]">Phone Number</p>
          <input
            className="w-[85%] h-16 border border-solid border-[#DEDEDE] rounded ml-10 mt-[14px] pl-4"
            placeholder="Input your phone number"
          />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Payment;
