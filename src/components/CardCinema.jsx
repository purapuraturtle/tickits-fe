import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { orderAction } from "@/redux/slice/order";
import { useState } from "react";

function CardCinema(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectTime, setSelectTime] = useState("");
  const [price, setPrice] = useState(0);
  const [cinemaId, setCinemaId] = useState(0);

  const handleSelectTime = (time, id, price) => {
    if (selectTime === time) {
      setSelectTime("");
      setCinemaId(0);
      setPrice(0);
      return;
    }
    setSelectTime(time);
    setCinemaId(id);
    setPrice(price);
  };
  const handleBooking = () => {
    const payload = {
      image: props.image,
      cinemaId: cinemaId,
      cinemaName: props.name,
      date: props.date,
      time: selectTime,
      price: price,
    };
    dispatch(orderAction.addDataBookNow(payload));
    router.push("/order");
  };
  return (
    <>
      <div className="md:w-[21rem] h-[20rem] bg-white shadow-md hover:scale-105 transition-all rounded-md">
        <div className="p-6 flex gap-10 border-b">
          <div className=" ">
            <Image
              src={props.image}
              width={50}
              height={50}
              className="w-full h-full object-contain"
              alt="name-cinema"
            />
          </div>
          <div className=" w-[10rem]">
            <p className="text-2xl font-semibold mb-1">{props.name}</p>
            <p className="font-light text-xs w-[8rem]">{props.address}</p>
          </div>
        </div>
        <div className=" p-6">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {props.time.map((item, idx) => (
              <p
                onClick={() =>
                  handleSelectTime(item.open_time, item.id, item.price)
                }
                key={idx}
                className={`text-xs cursor-pointer ${
                  selectTime === item.open_time
                    ? "text-primary font-bold underline"
                    : "font-semibold"
                }`}
              >
                {item.open_time}
              </p>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <p>Price</p>
            <p className="font-semibold">${props.price}.00/seat</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              className="btn btn-primary px-4 rounded"
              onClick={handleBooking}
              disabled={selectTime === ""}
            >
              Book now
            </button>
            <p className="text-primary italic text-xs sm:text-sm text-end max-w-[50%] md:max-w-[70%]">
              Choose a time first and continue to booking
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCinema;
