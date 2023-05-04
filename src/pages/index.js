import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import { orderAction } from '@/redux/slice/order';
import { getMovies } from '@/utils/https/movies';

function Home({ movies, error }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleNavigate = (url) => router.push(url);
  const addMovie = (id, name) => {
    const payload = { id: id, name: name };
    dispatch(orderAction.addMovieId(payload));
    handleNavigate(`/movies/${id}`);
  };

  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(
      {
        pathname: "/signup",
        query: {
          email,
        },
      },
      "/signup"
    );
    console.log(email);
  };

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

        <div className="mw-global global-px flex gap-4 pt-1 pb-16 overflow-x-scroll overflow-y-clip bg-accent no-scrollbar relative">
          {movies.map(({ category, image, movie_name }, idx) => (
            <div className="group flex-shrink-0 w-56" key={idx}>
              <div
                className={`p-8 w-56 bg-white/20 border-2 border-white rounded-md flex flex-col text-center gap-5 hover:bg-white group-hover:absolute group-hover:shadow-list-movie z-10`}
              >
                <div className="w-36 h-56 relative">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-cover"
                  ></Image>
                </div>
                <div className="group-hover:flex flex-col gap-y-3 hidden">
                  <p className="font-bold text-lg text-primary-title text-center">
                    {movie_name}
                  </p>
                  <p className="text-xs text-gray-400 text-center mb-4">
                    {category}
                  </p>
                  <div className="m-auto w-full flex flex-col gap-3">
                    <button
                      className="mt-auto btn btn-sm btn-block btn-accent border-primary text-primary font-normal hover:border-primary-focus"
                      onClick={() => {
                        addMovie(id, movie_name);
                      }}
                    >
                      Details
                    </button>
                    <button
                      className="mt-auto btn btn-sm btn-block btn-primary text-white font-normal hover:border-primary-focus"
                      onClick={() => {
                        addMovie(id, movie_name);
                      }}
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
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
          {movies.map(({ id, category, image, movie_name }, idx) => (
            <div
              className={`${
                idx === 0 ? "" : ""
              } flex-shrink-0 flex-grow-0 w-56 p-8 bg-white/20 border-[0.5px] border-primary-line rounded-md flex flex-col  items-center text-center gap-5`}
              key={idx}
            >
              <div className="w-36 h-56 relative">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="100%"
                  className="object-cover"
                ></Image>
              </div>
              <div className="flex flex-col gap-1 mb-3">
                <p className="font-bold text-lg text-primary-title text-center">
                  {movie_name}
                </p>
                <p className="text-xs text-gray-400 text-center">{category}</p>
              </div>
              <button
                className="mt-auto btn btn-sm btn-block btn-accent border-primary text-primary font-normal hover:border-primary-focus"
                onClick={() => {
                  addMovie(id, movie_name);
                }}
              >
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
            <form
              className="flex flex-col md:flex-row gap-4"
              onSubmit={submitHandler}
            >
              <input
                className="px-4 border-primary-line border-2 h-12 rounded-md w-72 text-sm tracking-wider"
                placeholder="Type your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary text-white">
                Join now
              </button>
            </form>
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

export async function getStaticProps(ctx) {
  try {
    const controller = new AbortController();
    const result = await getMovies(
      { limit: 10, page: 1, search: "" },
      controller
    );
    return {
      props: {
        error: "",
        movies: result.data.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error,
        movies: [],
      },
    };
  }
}

export default Home;
