import Image from "next/image";
import cineOne21 from "@/Assets/cineone21.svg";
import Seat from "@/components/Seat";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { getHistorySeat } from "@/utils/https/transaction";
import { useDispatch, useSelector } from "react-redux";
import { orderAction } from "@/redux/slice/order";

function Order() {
  const reduxStore = useSelector((state) => state.user);
  const orderRedux = useSelector((state) => state.order);
  // console.log(reduxStore);
  const router = useRouter();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  // const onSelected = [];
  const [dataHistorySeat, setHistorySeat] = useState([]);
  // const [onSelected, setSelectSeat] = useState([]);
  const [price, setPrice] = useState(10);

  // const handleSelected = (blockName, blockNumber) => {
  //   const seat = `${blockName}${blockNumber}`;
  //   console.log(`memilih kursi ${seat}`);

  //   // Cek apakah seat sudah ada pada array onSelected
  //   const index = onSelected.indexOf(seat);
  //   if (index !== -1) {
  //     // Jika sudah ada, hapus data pada indeks tersebut dari array
  //     const newSelected = [...onSelected];
  //     newSelected.splice(index, 1);
  //     setSelectSeat(newSelected);
  //     // console.log(`${seat} telah dihapus dari array onSelected.`);
  //   } else {
  //     // Jika belum ada, tambahkan seat ke array onSelected
  //     const newSelected = [...onSelected, seat];
  //     setSelectSeat(newSelected);
  //     console.log(newSelected);
  //   }
  // };

  const handleCheckout = async () => {
    // const onBookingFormatted = onSelected.map((seat) => {
    //   return {
    //     block_name: seat.substring(0, 1),
    //     block_number: seat.substring(1),
    //   };
    // });
    const data = {
      // dataSeats: onBookingFormatted,
      teathstudioId: 8,
      totalPrice: price * orderRedux.dataSeat.length,
    };
    dispatch(orderAction.addOrder(data));
    // setLoading(true);
    // const onBookingFormatted = onSelected.map((seat) => {
    //   return {
    //     block_name: seat.substring(0, 1),
    //     block_number: seat.substring(1),
    //   };
    // });
    // // console.log(onBookingFormatted);
    // const body = {
    //   user_id: "61ae12bb-0ba4-48dd-9bf5-833f324b14b0",
    //   movie_id: "c86f937b-ea07-495c-9047-da30a1b758e5",
    //   teathStudio_id: 8,
    //   seat: onBookingFormatted,
    //   payment_id: 1,
    // };
    // try {
    //   const result = await createBooking(body, controller);
    //   console.log(result);
    //   setLoading(false);
    //   if (result.status && result.status === 200) {
    //     router.push("/ticket-result");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const fetching = async () => {
    const token = reduxStore.data.data.token;
    const id = 8;
    try {
      const result = await getHistorySeat(token, id, controller);
      // console.log(result);
      setHistorySeat(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={"Order"}>
      <Header />
      <main className="global-px py-[3.75rem] mt-16 select-none bg-slate-300/20">
        <section className="flex flex-col-reverse lg:flex-row w-full gap-6 justify-between">
          <div className="lg:flex-[2]">
            <h1 className="font-bold mb-6 text-2xl text-[#14142B]">
              Movie Selected
            </h1>
            <div className="flex bg-white justify-between px-4 items-center lg:px-12 py-9 rounded-md">
              <p className="w-[50%] font-semibold md:text-2xl text-black">
                {orderRedux.movieName}
              </p>
              <button
                onClick={() => router.push("/movies")}
                className="btn btn-secondary"
              >
                Change movie
              </button>
            </div>
            <h1 className="font-bold text-[#14142B] mt-12 mb-6 text-2xl">
              Choose Your Seat
            </h1>
            <div className=" items-center px-4 lg:px-[7.313rem] py-4 lg:py-[6.625rem] bg-white text-[#4E4B66] rounded-md">
              <p className="mb-2 text-center font-semibold">Screen</p>

              <div className="w-full flex flex-col gap-2 mt-6">
                <Seat
                  // handleSelected={handleSelected}
                  seatHistory={dataHistorySeat}
                />
              </div>

              <div className="mt-8">
                <p className="mb-5 font-semibold text-lg">Seating key</p>
                <div className="flex justify-between flex-wrap gap-y-4">
                  <div className="flex gap-1 md:gap-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-secondary"></div>
                    <p className="text-xs md:text-base">Available</p>
                  </div>
                  <div className="flex gap-1 md:gap-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-primary"></div>
                    <p className="text-xs md:text-base">Selected</p>
                  </div>
                  <div className="flex gap-1 md:gap-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-info"></div>
                    <p className="text-xs md:text-base">Love nest</p>
                  </div>
                  <div className="flex gap-1 md:gap-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-success"></div>
                    <p className="text-xs md:text-base">Sold</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-64 md:flex-row justify-between mt-10">
              <button
                onClick={() => router.push("/movies")}
                className="btn btn-primary btn-outline flex-1"
              >
                Change your movie
              </button>

              <button
                onClick={handleCheckout}
                disabled={orderRedux.dataSeat.length < 1}
                className="btn btn-primary flex-1"
              >
                Checkout now
              </button>
            </div>
          </div>
          <div className="lg:flex-1">
            <h1 className="font-bold mb-6 text-2xl text-[#14142B]">
              Order Info
            </h1>
            <div className="flex flex-col items-center px-6 pt-10 bg-white rounded-md">
              <Image src={cineOne21} alt="cineone21" />
              <p className="text-2xl font-semibold text-[#14142B] mt-3 mb-8">
                CineOne21 Cinema
              </p>
              <div className="flex flex-col gap-4 w-full border-b pb-10">
                <div className="flex justify-between text-sm">
                  <p className="text-[#6B6B6B] w-[6.563rem] ">Movie selected</p>
                  <p className="font-semibold text-end text-[#14142B] w-[10.8rem]">
                    {orderRedux.movieName}
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[#6B6B6B] ">Tuesday, 07 July 2020</p>
                  <p className="font-semibold text-[#14142B]">02:00pm</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[#6B6B6B] ">One ticket price</p>
                  <p className="font-semibold text-[#14142B]">${price}</p>
                </div>
                <div className="flex justify-between  text-sm">
                  <p className="text-[#6B6B6B] w-[6rem] ">Seat choosed</p>
                  <div className="flex flex-wrap max-w-[10.8rem] font-semibold text-[#14142B] justify-end">
                    {orderRedux.dataSeat.map((item, idx) => (
                      <p key={idx}>{idx >= 1 ? ", " + item : item}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full py-6">
                <p className="font-semibold text-lg text-black">
                  Total Payment
                </p>
                <p className="font-bold text-2xl text-font-primary ">
                  ${price * orderRedux.dataSeat.length}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export default Order;
