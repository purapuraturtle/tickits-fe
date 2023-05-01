import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import QRCodeGenerator from "@/utils/qrCode";
import { useState } from "react";

function TicketResult() {
  const [qrCodeImage, setQrCodeImage] = useState("purapura-turtle");
  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center bg-slate-400/20 global-px mt-24 py-16">
        <section className="w-full max-w-[1440px] flex flex-col justify-center items-center bg-white rounded-md p-5 md:px-10">
          <h1 className="text-2xl font-bold mb-5">Proof of Payment</h1>
          <div className="w-full flex flex-row text-center overflow-hidden">
            <div className="flex-1 flex flex-col border border-black border-r-0 rounded-s-lg overflow-hidden">
              <span className="w-full flex items-center bg-primary px-4 md:px-5 py-2">
                <Image
                  src="/images/Tickitz-2.svg"
                  alt="Logo"
                  width={105}
                  height={29}
                />
                <p className="text-white ml-auto mr-20">Admit One</p>
              </span>
              {/* Left Ticket */}
              <span className="w-full flex flex-col px-4 md:px-5 py-4 gap-4">
                {/* MOVIE */}
                <div className="w-full flex flex-col items-start">
                  <p className="text-gray-400 text-sm">Movie</p>
                  <h2 className="font-bold">Spider-Man: Homecoming</h2>
                </div>
                {/* DATE TIME CATEGORY */}
                <div className="w-full flex justify-between">
                  <span className="flex-1 flex flex-col items-start">
                    <p className="text-gray-400 text-sm">Date</p>
                    <h2 className="font-bold">07 July</h2>
                  </span>
                  <span className="flex-1 flex flex-col items-start">
                    <p className="text-gray-400 text-sm">Time</p>
                    <h2 className="font-bold">02:00 PM</h2>
                  </span>
                  <span className="flex-1 flex flex-col items-start">
                    <p className="text-gray-400 text-sm">Category</p>
                    <h2 className="font-bold">PG-13</h2>
                  </span>
                </div>
                {/* COUNT SEAT PRICE */}
                <div className="w-full flex justify-between">
                  <span className="flex-1 flex flex-col items-start">
                    <p className="text-gray-400 text-sm">Count</p>
                    <h2 className="font-bold">3 pieces</h2>
                  </span>
                  <span className="flex-1 flex flex-col items-start">
                    <p className="text-gray-400 text-sm">Seats</p>
                    <h2 className="font-bold">C4, C5, C6</h2>
                  </span>
                  <span className="flex-1 flex flex-col items-start">
                    <p className="text-gray-400 text-sm">Price</p>
                    <h2 className="font-bold">$30</h2>
                  </span>
                </div>
              </span>
            </div>
            <span className=" bg-slate-500 border-l border-dashed border-black"></span>
            <div className="w-64 flex flex-col border border-black border-l-0 relative rounded-e-lg">
              <div className="flex w-10 h-10 bg-base-100 rounded-full absolute -top-5 -left-5 border border-black"></div>
              <div className="flex w-10 h-10 bg-base-100 rounded-full absolute -bottom-5 -left-5 border border-black"></div>
              <span className="w-full py-2 flex justify-center items-center bg-primary rounded-se-lg">
                <Image
                  src="/images/Tickitz-2.svg"
                  alt="Logo"
                  width={105}
                  height={29}
                />
              </span>
              <div className="flex justify-center items-center">
                <QRCodeGenerator data={qrCodeImage} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default TicketResult;
