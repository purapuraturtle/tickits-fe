import Image from "next/image";
function SideForAuth() {
  return (
    <>
      <div className="bg-hero-pattern w-screen h-[1024px] bg-no-repeat">
        <div className="pt-20 pl-28">
          <Image src="/favicon.svg" width={276} height={104} />
        </div>
        <p className="text-white text-5xl mt-[101px] ml-28">
          Lets build your account
        </p>
        <p className="text-white/70 mt-[22px] ml-28 text-2xl w-[555px]">
          To be a loyal moviegoer and access all of features, your details are
          required.
        </p>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold">1</div>
            <hr className="my-8 h-full w-4 border-gray-400 " />
            <div className="text-6xl font-bold">2</div>
            <hr className="my-8 h-full border-gray-400" />
            <div className="text-6xl font-bold">3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideForAuth;
