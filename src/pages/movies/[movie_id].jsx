import 'react-loading-skeleton/dist/skeleton.css';

import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';

import placeholder from '@/Assets/profile/poster.png';
import CardCinema from '@/components/CardCinema';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import {
  getMovieDetails,
  getStudioTime,
} from '@/utils/https/movies';

function ListDate(props) {
  // console.log(props);
  const date = new Date(props.date);
  const year = date.getFullYear();
  const mounth = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formatedDate = `${year}-${mounth}-${day}`;

  return (
    <li onClick={() => props.isClick(formatedDate)}>
      <a>{formatedDate}</a>
    </li>
  );
}

function MovieDetails() {
  const router = useRouter();
  const controller = useMemo(() => new AbortController(), []);
  const [dataDate, setDataDate] = useState([]);
  const [selectDate, setSelectDate] = useState("");
  const [dataMovie, setDataMovie] = useState({});
  const [dataStudio, setDataStudio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(router.query.movie_id);

  const handleSelectDate = (info) => {
    setSelectDate(info);
    fetchingSelectDate(info);
  };

  const fetchingSelectDate = async (date) => {
    try {
      const result = await getStudioTime(date, controller);
      // console.log(result.data.data);
      setDataStudio(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetching = async () => {
    const movieId = router.query.movie_id;
    try {
      const result = await getMovieDetails(movieId, controller);
      // console.log(result);
      setDataMovie(result.data.data[0]);
      const getStudio = await getStudioTime("", controller);
      // console.log(getStudio);
      setDataDate(getStudio.data.data);
      setIsLoading(false);
      // setDataStudio(getStudio.data.data);
    } catch (error) {
      router.push("/movies");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  const data = [
    {
      name: "ebv.id",
      address: "Whatever street No.12, South Purwokerto",
      image: "/images/ebuid.svg",
      time: ["08:20", "09:20", "10:20", "11:20", "12:20", "13:20", "16:20"],
      price: 10,
    },
    {
      name: "CineOne21",
      address: "Downcare street  No. 21, East Purwokerto",
      image: "/images/cineone21.svg",
      time: ["08:20", "09:20", "10:20", "11:20", "12:20", "13:20", "16:20"],
      price: 10,
    },
    {
      name: "hiflix Cinema",
      address: "Colonel street No. 2, East Purwokerto",
      image: "/images/hiflix.svg",
      time: ["08:20", "09:20", "10:20", "11:20", "12:20", "13:20", "16:20"],
      price: 10,
    },
  ];

  const [location, setLocation] = useState("Jakarta");
  let date = new Date(dataMovie.release_date);
  let options = { year: "numeric", month: "long", day: "numeric" };
  let new_date = date.toLocaleDateString("en-US", options);
  // console.log(new_date);

  console.log(dataStudio);
  return (
    <Layout title={"Movie Details"}>
      <Header />
      <main className="global-px py-[3.75rem] mt-16 select-none bg-slate-300/20">
        {isLoading ? (
          <>
            <div>
              <div className="flex flex-col md:flex-row gap-14">
                <Skeleton width={282} height={402} />
                <div>
                  <Skeleton width={250} height={30} />

                  <Skeleton width={150} height={24} />

                  <div className="mt-8">
                    <Skeleton width={150} height={18} />
                    <Skeleton width={250} height={20} />
                  </div>
                  <div className="mt-8">
                    <Skeleton width={150} height={18} />
                    <Skeleton width={250} height={20} />
                  </div>
                  <div className="mt-8">
                    <Skeleton width={150} height={18} />
                    <Skeleton width={250} height={20} />
                  </div>
                  <div className="mt-8">
                    <Skeleton width={150} height={18} />
                    <Skeleton width={250} height={20} />
                  </div>
                </div>
              </div>
              <div className="mt-14">
                <Skeleton width={150} height={18} />
                <Skeleton className="w-full" height={100} />
              </div>
              <div className="flex flex-col items-center mt-36">
                <Skeleton width={300} height={48} />
                <div className="flex items-center mt-10 gap-6">
                  <div className="form-control flex-1 ">
                    <div className="w-full flex flex-col gap-5 ">
                      {/* SET DATE */}
                      <div className="dropdown z-0">
                        <Skeleton width={250} height={48} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-5 ">
                    <div className="dropdown z-0">
                      <Skeleton width={250} height={48} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <section className="w-full gap-6 justify-between">
              <div>
                <div className="flex flex-col md:flex-row gap-14">
                  <div className="max-w-[283px]">
                    <div className="p-5 border border-primary rounded-2xl">
                      <div className="w-60 h-[22.5rem] relative">
                        <Image
                          src={dataMovie.image || placeholder}
                          alt="img-movie"
                          fill
                          className=" object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl">
                      {dataMovie.movie_name || "Title Movie"}
                    </h1>
                    <p className="text-[#4E4B66] text-lg">
                      {dataMovie.genre_name || "category"}
                    </p>
                    <div className="mt-8">
                      <p className="text-[#8692A6] text-sm">Release date</p>
                      <p className="text-base">{new_date || "June 28, 2017"}</p>
                    </div>
                    <div className="mt-8">
                      <p className="text-[#8692A6] text-sm">Duration</p>
                      <p className="text-base">
                        {`${dataMovie.duration_hour} hours, ${dataMovie.duration_minute} minutes` ||
                          "2 hours 13 minutes"}
                      </p>
                    </div>
                    <div className="mt-8">
                      <p className="text-[#8692A6] text-sm">Directed by</p>
                      <p className="text-base">
                        {dataMovie.director || "director"}
                      </p>
                    </div>
                    <div className="mt-8">
                      <p className="text-[#8692A6] text-sm">Casts</p>
                      <p className="text-base">
                        {dataMovie.aktors || "actors"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-14">
                  <h2 className="font-semibold text-xl">Synopsis</h2>
                  <p className="text-base">
                    {dataMovie.sinopsis || "synopsis"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-36">
                <h1 className="text-2xl font-bold">Showtimes and Tickets</h1>
                <div className="flex items-center mt-10 gap-6">
                  <div className="form-control flex-1 ">
                    <div className="w-full flex flex-col gap-5 ">
                      {/* SET DATE */}
                      <div className="dropdown z-0">
                        <label
                          tabIndex={0}
                          className="btn btn-outline btn-primary  w-[10rem] md:w-[16.375rem] rounded"
                        >
                          {selectDate === "" ? "Select Date" : selectDate}
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-lg w-full"
                        >
                          {dataDate.map((date, idx) => (
                            <ListDate
                              isClick={handleSelectDate}
                              key={idx}
                              date={date.open_date}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-5 ">
                    <div className="dropdown z-0">
                      <label
                        tabIndex={0}
                        className="btn btn-primary  w-[10rem] md:w-[16.375rem] rounded"
                      >
                        {location}
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-lg w-full"
                      >
                        <li onClick={() => setLocation("Jakarta")}>
                          <a>Jakarta</a>
                        </li>
                        <li onClick={() => setLocation("Bandung")}>
                          <a> Bandung</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-y-5 w-full mt-16">
                  {dataStudio.map((studio, idx) => (
                    <CardCinema
                      key={idx}
                      name={studio.teather_name}
                      address={studio.address}
                      image={studio.image}
                      date={studio.open_date}
                      time={studio.open_time}
                      price={10}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </Layout>
  );
}

export default MovieDetails;
