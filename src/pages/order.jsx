import Image from "next/image";
import cineOne21 from "@/Assets/cineone21.svg";
import Seat from "@/components/Seat";

function Order() {
  return (
    <>
      <main className="px-4 lg:px-[4.375rem] py-[3.75rem] select-none">
        <section className="flex flex-col-reverse lg:flex-row w-full gap-6 justify-between">
          <div className="lg:flex-[2]">
            <h1 className="font-bold mb-6 text-2xl text-[#14142B]">
              Movie Selected
            </h1>
            <div className="flex bg-white justify-between px-4 items-center lg:px-12 py-9 rounded-md">
              <p className="w-[50%] font-semibold md:text-2xl text-black">
                Spider-Man: Homecoming
              </p>
              <button className="font-bold text-sm text-[#5F2EEA] bg-[#EFF0F6] px-6 py-4 rounded-lg">
                Change movie
              </button>
            </div>
            <h1 className="font-bold text-[#14142B] mt-12 mb-6 text-2xl">
              Choose Your Seat
            </h1>
            <div className=" items-center px-4 lg:px-[7.313rem] py-4 lg:py-[6.625rem] bg-white text-[#4E4B66] rounded-md">
              <p className="mb-2 text-center font-semibold">Screen</p>

              <div className="w-full flex flex-col gap-2 mt-6">
                <Seat />
              </div>

              <div className="mt-8 ">
                <p className="mb-5 font-semibold text-lg">Seating key</p>
                <div className="flex justify-between">
                  <div className="flex gap-1 md:gap-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-[#D6D8E7]"></div>
                    <p className="text-xs md:text-base">Available</p>
                  </div>
                  <div className="flex gap-1 md:gap-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-[#5F2EEA]"></div>
                    <p className="text-xs md:text-base">Selected</p>
                  </div>
                  <div className="flex gap-1 md:gap-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-[#F589D7]"></div>
                    <p className="text-xs md:text-base">Love nest</p>
                  </div>
                  <div className="flex gap-1 md:gap-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-[#6E7191]"></div>
                    <p className="text-xs md:text-base">Sold</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-between mt-10">
              <button className="md:w-[18.75rem] py-4 text-base font-bold text-[#5F2EEA] border border-[#5F2EEA] rounded-md">
                Change your movie
              </button>
              <button className="md:w-[18.75rem] py-4 text-base font-bold text-white bg-[#5F2EEA] rounded-md shadow-md">
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
                <div className="flex justify-between  text-sm">
                  <p className="text-[#6B6B6B] ">Movie selected</p>
                  <p className="font-semibold text-[#14142B]">
                    Spider-Man: Homecoming
                  </p>
                </div>
                <div className="flex justify-between  text-sm">
                  <p className="text-[#6B6B6B] ">Tuesday, 07 July 2020</p>
                  <p className="font-semibold text-[#14142B]">02:00pm</p>
                </div>
                <div className="flex justify-between  text-sm">
                  <p className="text-[#6B6B6B] ">One ticket price</p>
                  <p className="font-semibold text-[#14142B]">$10</p>
                </div>
                <div className="flex justify-between  text-sm">
                  <p className="text-[#6B6B6B] ">Seat choosed</p>
                  <p className="font-semibold text-[#14142B]">C4, C5, C6</p>
                </div>
              </div>
              <div className="flex justify-between w-full py-6">
                <p className="font-semibold text-lg text-black">
                  Total Payment
                </p>
                <p className="font-bold text-2xl text-font-primary ">$30</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Order;
