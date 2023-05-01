import React from "react";
import Image from "next/image";

function CardCinema(props) {
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
              <p key={idx} className="font-semibold text-xs">
                {item}
              </p>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <p>Price</p>
            <p className="font-semibold">${props.price}.00/seat</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="btn btn-primary px-4 rounded ">Book now</div>
            <p className="text-primary cursor-pointer">Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCinema;
