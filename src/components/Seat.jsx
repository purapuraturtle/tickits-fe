import { orderAction } from "@/redux/slice/order";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SeatRow({ isBooked, handleSelect, blockName, blockNumber }) {
  const dispatch = useDispatch();
  const seatsRedux = useSelector((state) => state.order.dataSeat);
  const onReduxSeat =
    seatsRedux && seatsRedux.includes(`${blockName}${blockNumber}`);
  const onBooking = isBooked && isBooked.includes(`${blockName}${blockNumber}`);
  // console.log(onBooking);
  const [isSelected, setSelected] = useState(onReduxSeat);
  const handleClick = () => {
    if (onBooking) return;
    dispatch(orderAction.addSeats(`${blockName}${blockNumber}`));
    setSelected(!isSelected);
    // handleSelect(blockName, blockNumber);
  };
  return (
    <div
      onClick={handleClick}
      className={`w-4 h-4 md:w-6 md:h-6 flex justify-center items-center text-xs rounded-md ${
        blockNumber === 7 && "mr-2 md:mr-16"
      } ${
        !onBooking &&
        "hover:scale-125 hover:border-2 hover:border-primary cursor-pointer"
      } ${
        isSelected ? "bg-primary" : onBooking ? "bg-success" : "bg-secondary"
      } transition-all`}
    ></div>
  );
}

function seat({ handleSelected, seatHistory }) {
  const seatA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatG = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const onBooking = seatHistory.map((item) => {
    return `${item.block_name}${item.block_number}`;
  });
  // console.log(onBooking);

  return (
    <>
      <div className="w-full flex justify-between gap-2 mb-6">
        <p className="w-3 "></p>
        <div className="w-full h-2 bg-accent rounded-md"></div>
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">A</p>
        {seatA.map((seatNumber) => (
          <SeatRow
            key={seatNumber}
            handleSelect={handleSelected}
            isBooked={onBooking}
            blockName={"A"}
            blockNumber={seatNumber}
          />
        ))}
      </div>
      <div className="w-full justify-between flex gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">B</p>
        {seatB.map((seatNumber) => (
          <SeatRow
            key={seatNumber}
            handleSelect={handleSelected}
            isBooked={onBooking}
            blockName={"B"}
            blockNumber={seatNumber}
          />
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">C</p>
        {seatC.map((seatNumber) => (
          <SeatRow
            key={seatNumber}
            handleSelect={handleSelected}
            isBooked={onBooking}
            blockName={"C"}
            blockNumber={seatNumber}
          />
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">D</p>
        {seatD.map((seatNumber) => (
          <SeatRow
            key={seatNumber}
            handleSelect={handleSelected}
            isBooked={onBooking}
            blockName={"D"}
            blockNumber={seatNumber}
          />
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">E</p>
        {seatE.map((seatNumber) => (
          <SeatRow
            key={seatNumber}
            handleSelect={handleSelected}
            isBooked={onBooking}
            blockName={"E"}
            blockNumber={seatNumber}
          />
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">F</p>
        {seatF.map((seatNumber) => (
          <SeatRow
            key={seatNumber}
            handleSelect={handleSelected}
            isBooked={onBooking}
            blockName={"F"}
            blockNumber={seatNumber}
          />
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">G</p>
        {seatG.map((seatNumber) => (
          <SeatRow
            key={seatNumber}
            handleSelect={handleSelected}
            isBooked={onBooking}
            blockName={"G"}
            blockNumber={seatNumber}
          />
        ))}
      </div>
      <div className="w-full flex justify-between gap-2 mt-2">
        <p className="w-3"></p>
        {seatG.map((seatNumber, idx) => (
          <div
            key={idx}
            className={`w-6 h-6 flex font-bold justify-center items-center text-xs rounded-md ${
              seatNumber === 7 && "mr-2 md:mr-16"
            }`}
          >
            {seatNumber}
          </div>
        ))}
      </div>
    </>
  );
}

export default seat;
