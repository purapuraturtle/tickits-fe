import { useState } from "react";

function SeatRow({ isBooked, handleSelect, blockName, blockNumber }) {
  const onBooking =
    isBooked && isBooked.includes(`${blockName}-${blockNumber}`);
  // console.log(onBooking);
  const [isSelected, setSelected] = useState(false);
  const handleClick = () => {
    if (onBooking) return;
    setSelected(!isSelected);
    handleSelect(blockName, blockNumber);
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

function seat({ handleSelected }) {
  const seatA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatG = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const onBooking = ["A-5", "A-6", "C-8", "F-2"];
  // console.log(onBooking);
  // const onSelected = [];
  // const handleSelected = (blockName, BlockNumber) => {
  //   const seat = `${blockName}-${BlockNumber}`;

  //   console.log(`memilih kursi ${seat}`);

  //   // Cek apakah seat sudah ada pada array onSelected
  //   const index = onSelected.indexOf(seat);
  //   if (index !== -1) {
  //     // Jika sudah ada, hapus data pada indeks tersebut dari array
  //     onSelected.splice(index, 1);
  //     console.log(`${seat} telah dihapus dari array onSelected.`);
  //   } else {
  //     // Jika belum ada, tambahkan seat ke array onSelected
  //     onSelected.push(seat);
  //     console.log(onSelected);
  //   }
  // };
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
