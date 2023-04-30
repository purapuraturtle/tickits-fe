import Footer from "@/components/Footer";
import Header from "@/components/Header";

function TicketResult() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center min-h-[76vh] bg-slate-400/20 py-16">
        <section className="w-full max-w-[1440px] flex flex-col justify-center items-center bg-white rounded-md p-5 md:px-10">
          <h1 className="text-2xl font-bold">Proof of Payment</h1>
          <div className="w-full gap-5 rounded-xl overflow-hidden text-center table-ticket">
            <tr className="bg-primary w-full">
              <td colSpan={2} className="font-bold text-4xl">
                TICKITZ
              </td>
              <td>Admit One</td>
              <td className="font-bold text-4xl w-[400px] border-l border-black border-dashed">
                TICKITZ
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="text-start">
                <p className="text-gray-600">Movie</p>
                <p className="text-lg font-bold">Spider-Man: Homecoming</p>
              </td>
              <td
                rowSpan={3}
                className="border-l border-black border-dashed ticket-cut"
              >
                <p className="text-8xl">CODE</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-gray-600">Date</p>
                <p className="text-lg font-bold">07 July</p>
              </td>
              <td>
                <p className="text-gray-600">Time</p>
                <p className="text-lg font-bold">02:00 PM</p>
              </td>
              <td>
                <p className="text-gray-600">Category</p>
                <p className="text-lg font-bold">PG-13</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-gray-600">Count</p>
                <p className="text-lg font-bold">3 pieces</p>
              </td>
              <td>
                <p className="text-gray-600">Seats</p>
                <p className="text-lg font-bold">C4, C5, C6</p>
              </td>
              <td>
                <p className="text-gray-600">Price</p>
                <p className="text-lg font-bold">$30.00</p>
              </td>
            </tr>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default TicketResult;
