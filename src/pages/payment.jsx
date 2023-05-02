import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

function Payment() {
  return (
    <>
      <Header />
      <div className=" bg-slate-300/20 pl-[70px]">
        <div className="">
          <p className="text-[#14142B] text-2xl pt-[152px] font-bold">
            Payment Info
          </p>
          <div className="bg-white mt-6 h-[413px] w-[751px]">
            <div className="ml-10 pt-12">
              <div className="flex border-b border-[#E6E6E6] border-solid pb-5 w-[671px]">
                <p className="text-[#6B6B6B] text-xl w-[167px]">Date & time</p>
                <p className="text-xl w-[505px] text-[#000000] text-right">
                  Tuesday, 07 july 2020 at 02:00pm
                </p>
              </div>
              <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[671px]">
                <p className="text-[#6B6B6B] text-xl w-[167px]">Movie title</p>
                <p className="text-xl w-[505px] text-[#000000] text-right">
                  Spider-Man:Homecoming
                </p>
              </div>
              <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[671px]">
                <p className="text-[#6B6B6B] text-xl w-[167px]">Cinema name</p>
                <p className="text-xl w-[505px] text-[#000000] text-right">
                  CineOne21 Cinema
                </p>
              </div>
              <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[671px]">
                <p className="text-[#6B6B6B] text-xl w-[167px]">
                  Number of tickets
                </p>
                <p className="text-xl w-[505px] text-[#000000] text-right">
                  3 pieces
                </p>
              </div>
              <div className="flex mt-6 border-b border-[#E6E6E6] border-solid pb-5 w-[671px]">
                <p className="text-[#6B6B6B] text-xl w-[167px]">
                  Total payment
                </p>
                <p className="text-xl w-[505px] text-[#000000] text-right">
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
          <div className="w-[748px] h-[368px] mt-6 bg-white">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center mt-14">
                <Image src="/gpay.svg" width={74} height={30} />
              </div>
              <div className="w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center mt-14">
                <Image src="/visa.svg" width={74} height={30} />
              </div>
              <div className="w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center mt-14">
                <Image src="/gopay.svg" width={74} height={30} />
              </div>
              <div className="w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center mt-14">
                <Image src="/paypal.svg" width={74} height={30} />
              </div>
              <div className="w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center mt-14">
                <Image src="/dana.svg" width={74} height={30} />
              </div>
              <div className="w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center mt-14">
                <Image src="/bca.svg" width={74} height={30} />
              </div>
              <div className="w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center mt-14">
                <Image src="/bri.svg" width={74} height={30} />
              </div>
              <div className="w-[146px] h-[58px] border-[2px] border-solid border-[#DEDEDE] rounded flex justify-center items-center mt-14">
                <Image src="/ovo.svg" width={74} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
