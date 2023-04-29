function seat() {
  const seatA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatG = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <div className="w-full flex justify-between gap-2 mb-6">
        <p className="w-3 "></p>
        <div className="w-full h-2 bg-accent rounded-md"></div>
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">A</p>
        {seatA.map((seatNumber, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 md:w-6 md:h-6 flex bg-secondary justify-center items-center text-xs rounded-md ${
              seatNumber === 7 && "mr-2 md:mr-16"
            }`}
          ></div>
        ))}
      </div>
      <div className="w-full justify-between flex gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">B</p>
        {seatB.map((seatNumber, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 md:w-6 md:h-6 flex bg-secondary justify-center items-center text-xs rounded-md ${
              seatNumber === 7 && "mr-2 md:mr-16"
            }`}
          ></div>
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">C</p>
        {seatC.map((seatNumber, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 md:w-6 md:h-6 flex bg-secondary justify-center items-center text-xs rounded-md ${
              seatNumber === 7 && "mr-2 md:mr-16"
            }`}
          ></div>
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">D</p>
        {seatD.map((seatNumber, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 md:w-6 md:h-6 flex bg-secondary justify-center items-center text-xs rounded-md ${
              seatNumber === 7 && "mr-2 md:mr-16"
            }`}
          ></div>
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">E</p>
        {seatE.map((seatNumber, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 md:w-6 md:h-6 flex bg-secondary justify-center items-center text-xs rounded-md ${
              seatNumber === 7 && "mr-2 md:mr-16"
            }`}
          ></div>
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">F</p>
        {seatF.map((seatNumber, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 md:w-6 md:h-6 flex bg-secondary justify-center items-center text-xs rounded-md ${
              seatNumber === 7 && "mr-2 md:mr-16"
            }`}
          ></div>
        ))}
      </div>
      <div className="w-full flex justify-between gap-1">
        <p className="w-3 text-black text-xs md:font-semibold">G</p>
        {seatG.map((seatNumber, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 md:w-6 md:h-6 flex bg-secondary justify-center items-center text-xs rounded-md ${
              seatNumber === 7 && "mr-2 md:mr-16"
            }`}
          ></div>
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
