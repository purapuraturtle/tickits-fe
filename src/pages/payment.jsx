import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import PrivateRouteNotLogin from "@/components/PrivateRouteNotLogin";
import { createBooking } from "@/utils/https/transaction";
import order from "@/redux/slice/order";

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
  console.log(fill);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (
      firstName === null ||
      firstName === "null" ||
      lastName === "null" ||
      lastName === null ||
      !email ||
      phone === null ||
      phone === "null"
    ) {
      setFill(true);
    }
  });

  const handleDivClick = (index) => {
    setActive(index);
  };
  const time = orderRedux.time;
  const [hour, minute] = time.split(":");
  const formattedTime = `${hour}:${minute}`;
  const date = new Date(orderRedux.date);
  const year = date.getFullYear();
  const mounth = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formatedDate = `${day}/${mounth}/${year}`;
  return (
    <PrivateRouteNotLogin>
      <Layout title={"Payment"}>
        <Header />
        <div className="flex md:flex-row  flex-col-reverse md:justify-between bg-slate-300/20 gap-6">
          <div className="pl-10 lg:pl-32 md:flex-[1.5] mr-6 lg:mr-0 md:mr-0">
            <div className="">
              <p className="text-[#14142B] text-2xl pt-10 md:pt-[152px] font-bold">
                Payment Info
              </p>
              <div className="bg-white mt-6 h-full">
                <div className="ml-10 pt-12">
                  <div className="flex border-b border-[#E6E6E6] border-solid pb-5 w-[95%]">
                    <p className="text-[#6B6B6B] flex-[1] text-xl ">
                      Date & time
                    </p>
                    <p className="text-xl flex-[2]  text-[#000000] text-right">
                      {formatedDate} at {formattedTime}
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
                    <Image
                      src="/gpay.svg"
                      alt="logo-payment"
                      width={74}
                      height={30}
                    />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 2 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(2)}
                  >
                    <Image
                      src="/visa.svg"
                      alt="logo-payment"
                      width={80}
                      height={25.9}
                    />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 3 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(3)}
                  >
                    <Image
                      src="/gopay.svg"
                      alt="logo-payment"
                      width={106}
                      height={35}
                    />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 4 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(4)}
                  >
                    <Image
                      src="/paypal.svg"
                      alt="logo-payment"
                      width={31}
                      height={37}
                    />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 5 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(5)}
                  >
                    <Image
                      src="/dana.svg"
                      alt="logo-payment"
                      width={108}
                      height={31}
                    />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 6 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(6)}
                  >
                    <Image
                      src="/bca.svg"
                      alt="logo-payment"
                      width={85}
                      height={28}
                    />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center  ${
                      active === 7 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(7)}
                  >
                    <Image
                      src="/bri.svg"
                      alt="logo-payment"
                      width={45}
                      height={38}
                    />
                  </div>
                  <div
                    className={`w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center ${
                      active === 8 ? "bg-primary" : ""
                    }`}
                    onClick={() => handleDivClick(8)}
                  >
                    <Image
                      src="/ovo.svg"
                      alt="logo-payment"
                      width={92}
                      height={30}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-10">
                  <hr className="w-[38%]  h-[1px] bg-[#dedede]" />
                  <p className="text-[#aaaaaa] ml-9 text-xs">Or</p>
                  <hr className="w-[38%]  h-[1px] bg-[#dedede] ml-9" />
                </div>
                <p className="text-center mt-9 pb-14">
                  Pay via cash.{" "}
                  <span className="text-primary cursor-pointer">
                    See how it work
                  </span>
                </p>
              </div>
              <div className="flex justify-between mt-10 pb-[72px] gap-6">
                <button
                  onClick={() => {
                    router.push("/order");
                  }}
                  className="btn btn-outline btn-primary rounded flex-[1] flex items-center h-14"
                >
                  Previous step
                </button>
                {isLoading ? (
                  <button className="btn btn-primary loading rounded flex-[1] h-14">
                    Loading
                  </button>
                ) : (
                  <button
                    onClick={handlePayOrder}
                    disabled={active === "" || fill === true}
                    className="btn btn-primary rounded flex-[1] h-14"
                  >
                    Pay your order
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="ml-6 md:ml-0 md:w-[400px] h-[548px] bg-white max-[768px]:mt-[106px] mt-[206px] mr-6 md:mr-10 lg:mr-32 md:flex-[1] overflow-hidden">
            <p className="ml-10 mt-12 text-[#696F79]">Full Name</p>
            <input
              disabled
              value={
                firstName === "null" ||
                lastName === "null" ||
                firstName === null ||
                lastName === null
                  ? ""
                  : firstName + " " + lastName
              }
              className="w-[90%] max-[528px]:w-[80%]  ml-10 flex md:w-[70%] xl:w-[80%] h-16 border border-solid border-[#DEDEDE] rounded mt-[14px] pl-4"
              placeholder="Input your full name"
            />
            <p className="ml-10 mt-12 text-[#696F79]">Email</p>
            <input
              disabled
              value={email}
              className="w-[90%] md:w-[70%] max-[528px]:w-[80%] xl:w-[80%] h-16 border border-solid border-[#DEDEDE] rounded ml-10 mt-[14px] pl-4"
              placeholder="Input your full email"
            />
            <p className="ml-10 mt-12 text-[#696F79]">Phone Number</p>
            <input
              disabled
              value={phone === "null" || phone === null ? "" : phone}
              className="w-[90%] max-[528px]:w-[80%] md:w-[70%] xl:w-[80%] h-16 border border-solid border-[#DEDEDE] rounded ml-10 mt-[14px] pl-4"
              placeholder="Input your phone number"
            />
            {fill && (
              <p className="ml-10 bg-yellow-200 w-[85%] text-center mt-6">
                Fill Your Data Correctly to go to the next step{" "}
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
