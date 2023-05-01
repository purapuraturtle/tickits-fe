import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />

      <main>
        <section className="mw-global global-px bg-white">
          <div className="min-h-screen flex flex-col md:flex-row pt-28 md:pt-0 gap-5 w-full md:items-center md:gap-10 lg:gap-40">
            <div className="md:flex-1 flex  flex-col gap-2 md:gap-4">
              <p className="text-primary-placeholder text-base md:text-2xl">
                Nearest Cinema, Newest Movie,
              </p>
              <p className="font-bold text-primary text-3xl md:text-[3.5rem]">
                Find out now!
              </p>
            </div>
            <div className="flex-1 flex gap-7 relative scale-90 md:scale-100">
              <div className="w-28 h-96 relative top-20 rounded-xl bg-black shadow-movie-landing-hero">
                <Image
                  src={"/images/movies/movie-1.png"}
                  alt="spiderman"
                  fill
                  className="object-cover rounded-xl opacity-75"
                  sizes="100kb"
                />
              </div>
              <div className="w-28 h-96 relative top-10 rounded-xl bg-black shadow-movie-landing-hero">
                <Image
                  src={"/images/movies/movie-2.png"}
                  alt="spiderman"
                  fill
                  className="object-cover rounded-xl opacity-75"
                  sizes="100kb"
                />
              </div>

              <div className="w-28 h-96 relative -top-2 rounded-xl bg-black shadow-movie-landing-hero">
                <Image
                  src={"/images/movies/movie-3.png"}
                  alt="spiderman"
                  fill
                  className="object-cover rounded-xl opacity-75"
                  sizes="100kb"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mw-global global-px bg-accent min-h-16 py-10">
          <div className="flex justify-between text-primary py-5">
            <div className="font-bold text-2xl flex flex-col gap-3">
              <p>Now Showing</p>
              <div className="h-[3px] w-[65%] bg-primary mx-auto rounded-lg" />
            </div>
            <div className="">
              <Link href={"/movies"} className="font-bold">
                view all
              </Link>
            </div>
          </div>
        </section>

        <div className="mw-global global-px flex gap-4 pt-1 pb-16 overflow-x-scroll bg-accent no-scrollbar">
          {Array("", "", "", "", "", "", "").map((item, idx) => (
            <div
              className={`${
                idx === 0 ? "" : ""
              } group flex-shrink-0 p-8 bg-white/20 border-2 border-white rounded-md  flex flex-col text-center gap-5 hover:bg-white`}
              key={idx}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dare4eibk/image/upload/v1682705686/movies/movie-image-Spider-Man:HomeComming.png"
                }
                alt=""
                width={150}
                height={250}
              ></Image>
            </div>
          ))}
        </div>
        <section className="mw-global global-px pt-16 bg-white">
          <div className="flex justify-between text-primary py-5">
            <div className="font-bold text-2xl flex flex-col gap-3 text-primary-title">
              <p>Upcoming Movies</p>
            </div>
            <div className="">
              <Link href={"/movies"} className="font-bold">
                view all
              </Link>
            </div>
          </div>
        </section>
        <div className="mw-global global-px flex gap-4 mt-6 pb-16 overflow-x-scroll bg-white no-scrollbar">
          <button className="btn btn-primary text-white btn-sm h-12  min-w-[8rem]">
            September
          </button>
          <button className="btn bg-white hover:bg-gray-200 border-primary text-primary  btn-sm h-12  min-w-[8rem]">
            October
          </button>
          <button className="btn bg-white hover:bg-gray-200 border-primary text-primary  btn-sm h-12  min-w-[8rem]">
            November
          </button>
          <button className="btn bg-white hover:bg-gray-200 border-primary text-primary  btn-sm h-12  min-w-[8rem]">
            December
          </button>
          <button className="btn bg-white hover:bg-gray-200 border-primary text-primary  btn-sm h-12  min-w-[8rem]">
            January
          </button>
          <button className="btn bg-white hover:bg-gray-200 border-primary text-primary  btn-sm h-12  min-w-[8rem]">
            February
          </button>
          <button className="btn bg-white hover:bg-gray-200 border-primary text-primary  btn-sm h-12  min-w-[8rem]">
            March
          </button>
          <button className="btn bg-white hover:bg-gray-200 border-primary text-primary  btn-sm h-12  min-w-[8rem]">
            April
          </button>
          <button className="btn bg-white hover:bg-gray-200 border-primary text-primary  btn-sm h-12  min-w-[8rem]">
            May
          </button>
        </div>
        <div className="mw-global global-px flex gap-4 pt-1 pb-16 overflow-x-scroll bg-white no-scrollbar">
          {Array("", "", "", "", "", "", "").map((item, idx) => (
            <div
              className={`${
                idx === 0 ? "" : ""
              } flex-shrink-0 flex-grow-0 w-56 p-8 bg-white/20 border-[0.5px] border-primary-line rounded-md flex flex-col  items-center text-center gap-5`}
              key={idx}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dare4eibk/image/upload/v1682705686/movies/movie-image-Spider-Man:HomeComming.png"
                }
                alt=""
                width={150}
                height={250}
              ></Image>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl">Nama Film</p>
                <p className="text-sm text-gray-500">
                  Action, Category2, Category3
                </p>
              </div>
              <button className="btn btn-sm btn-block btn-accent border-primary text-primary mt-3 font-normal hover:border-primary-focus">
                Details
              </button>
            </div>
          ))}
        </div>
        <section className="mw-global global-px my-20">
          <div className="flex flex-col gap-12 p-10 rounded-lg items-center justify-center shadow-[0px_16px_32px_0px_#BABABA4D] text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-body text-2xl tracking-wide">
                Be the vanguard of the
              </p>
              <p className="text-primary text-5xl font-bold">Moviegoers</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="px-4 border-primary-line border-2 h-12 rounded-md w-72 text-sm tracking-wider"
                placeholder="Type your email"
              />
              <button className="btn btn-primary text-white">Join now</button>
            </div>
            <div className="text-primary-label text-sm  tracking-wider">
              <p>By joining you as a Tickitz member,</p>
              <p>we will always send you the latest updates via email .</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
