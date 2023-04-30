import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

function TicketResult() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center bg-slate-400/20 global-px mt-24 py-16">
        <section className="w-full max-w-[1440px] flex flex-col justify-center items-center bg-white rounded-md p-5 md:px-10">
          <h1 className="text-2xl font-bold">Proof of Payment</h1>
          <div className="w-full gap-5 rounded-xl overflow-hidden text-center table-ticket">
            <span className="w-full bg-success flex items-center px-5">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={100}
                height={20}
              />
              <p className="text-white ml-auto mr-20">Admit One</p>
              <div className="w-96 flex justify-center border-l border-dashed py-2">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={100}
                  height={20}
                />
              </div>
            </span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default TicketResult;
