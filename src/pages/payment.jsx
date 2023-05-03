import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import PrivateRouteNotLogin from "@/components/PrivateRouteNotLogin";
import { createBooking } from "@/utils/https/transaction";

function Payment() {
  const userRedux = useSelector((state) => state.user.data);
  const orderRedux = useSelector((state) => state.order);
  const router = useRouter();
  const controller = useMemo(() => new AbortController(), []);
  const [active, setActive] = useState("");
  const [fill, setFill] = useState(false);
  const movieName = useSelector((state) => state.order?.movieName);
  const cinema = useSelector((state) => state.order?.cinemaName);
  const tickets = useSelector((state) => state.order?.dataSeat?.length);
  const payment = useSelector((state) => state.order?.totalPrice);
  const firstName = useSelector((state) => state.user?.data?.first_name);
  const lastName = useSelector((state) => state.user?.data?.last_name);
  const email = useSelector((state) => state.user?.data?.email);
  const phone = useSelector((state) => state.user?.data?.phone);

  const [isLoading, setLoading] = useState(false);
  // console.log(firstName + lastName);

  const handlePayOrder = async () => {
    // setLoading(true);
    const onBookingFormatted = orderRedux.dataSeat.map((seat) => {
      return {
        block_name: seat.substring(0, 1),
        block_number: seat.substring(1),
      };
    });
    const data = {
      user_id: userRedux.id,
      movie_id: orderRedux.movieId,
      teathStudio_id: orderRedux.cinemaId,
      seat: onBookingFormatted,
      total_price: orderRedux.totalPrice,
      payment_id: active,
    };
    console.log(data);
    const qrCode = `${orderRedux.cinemaId}-${orderRedux.dataSeat}`;
    console.log(qrCode);
    try {
      const result = await createBooking(data, controller);
      console.log(result);
      setLoading(false);
      router.push(`/ticket-result/${qrCode}`);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (firstName === null || lastName === null || !email || phone === null) {
      setFill(true);
    }
  });

  const handleDivClick = (index) => {
    setActive(index);
  };

  const date = new Date(orderRedux.date);
  const year = date.getFullYear();
  const mounth = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formatedDate = `${day}/${mounth}/${year}`;
  return (
    <PrivateRouteNotLogin>
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
                      {formatedDate} at {orderRedux.time}
                    </p>
                  </div>
                  <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[95%]">
                    <p className="text-[#6B6B6B] flex-[1] text-xl">
                      Movie title
                    </p>
                    <p className="text-xl flex-[2] text-[#000000] text-right">
                      {movieName}
                    </p>
                  </div>
                  <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[95%]">
                    <p className="text-[#6B6B6B] text-xl flex-[1]">
                      Cinema name
                    </p>
                    <p className="text-xl flex-[2] text-[#000000] text-right">
                      {cinema}
                    </p>
                  </div>
                  <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[95%]">
                    <p className="text-[#6B6B6B] text-xl flex-[1]">
                      Number of tickets
                    </p>
                    <p className="text-xl flex-[2] text-[#000000] text-right">
                      {tickets} pieces
                    </p>
                  </div>
                  <div className="flex mt-6  pb-5 w-[95%]">
                    <p className="text-[#6B6B6B] text-xl flex-[1]">
                      Total payment
                    </p>
                    <p className="text-xl flex-[2] text-[#000000] font-semibold text-right">
                      ${payment}
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
                      active === 1 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(1)}
                  >
                    <Image src="/gpay.svg" width={74} height={30} />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 2 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(2)}
                  >
                    <Image src="/visa.svg" width={80} height={25.9} />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 3 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(3)}
                  >
                    <Image src="/gopay.svg" width={106} height={35} />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 4 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(4)}
                  >
                    <Image src="/paypal.svg" width={31} height={37} />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 5 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(5)}
                  >
                    <Image src="/dana.svg" width={108} height={31} />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 6 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(6)}
                  >
                    <Image src="/bca.svg" width={85} height={28} />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 7 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(7)}
                  >
                    <Image src="/bri.svg" width={45} height={38} />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center ${
                      active === 8 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(8)}
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
                <button
                  onClick={() => {
                    router.push("/order");
                  }}
                  className="btn btn-outline btn-primary rounded w-[300px] flex items-center h-14"
                >
                  Previous step
                </button>
                {isLoading ? (
                  <button className="btn btn-primary loading rounded w-[300px] h-14">
                    Loading
                  </button>
                ) : (
                  <button
                    onClick={handlePayOrder}
                    disabled={active === ""}
                    className="btn btn-primary rounded w-[300px] h-14"
                  >
                    Pay your order
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="ml-6 lg:ml-32 min-[1300px]:ml-0 min-[1300px]:w-[400px] h-[548px] bg-white mt-[206px] mr-6 lg:mr-32 min-[1300px]:flex-[1]">
            <p className="ml-10 mt-12 text-[#696F79]">Full Name</p>
            <input
              value={
                firstName === "null" || lastName === "null"
                  ? ""
                  : firstName + " " + lastName
              }
              className="w-[85%] h-16 border border-solid border-[#DEDEDE] rounded ml-10 mt-[14px] pl-4"
              placeholder="Input your full name"
            />
            <p className="ml-10 mt-12 text-[#696F79]">Email</p>
            <input
              value={email}
              className="w-[85%] h-16 border border-solid border-[#DEDEDE] rounded ml-10 mt-[14px] pl-4"
              placeholder="Input your full email"
            />
            <p className="ml-10 mt-12 text-[#696F79]">Phone Number</p>
            <input
              value={phone === "null" ? "" : phone}
              className="w-[85%] h-16 border border-solid border-[#DEDEDE] rounded ml-10 mt-[14px] pl-4"
              placeholder="Input your phone number"
            />
            {fill && (
              <p className="ml-10 bg-yellow-200 w-[85%] text-center mt-11">
                Fill Your Data Correctly{" "}
                <span
                  onClick={() => {
                    router.push("/profile");
                  }}
                  className="cursor-pointer text-black font-bold"
                >
                  Click Here To Fill Your Data
                </span>
              </p>
            )}
          </div>
        </div>
        <Footer />
      </Layout>
    </PrivateRouteNotLogin>
  );
}

export default Payment;
