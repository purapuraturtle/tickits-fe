import "react-loading-skeleton/dist/skeleton.css";

import { useEffect, useMemo, useState } from "react";

import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { orderAction } from "@/redux/slice/order";
import { getGenre, getMovies } from "@/utils/https/movies";

function Movies() {
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const [dataMovies, setDataMovies] = useState([]);
  const [meta, setMeta] = useState({
    totalpage: 1,
    limit: "12",
    page: 1,
    totaldata: 0,
  });
  const router = useRouter();
  const { query, push } = router;
  const { search = "", sort, page } = query;

  const [cat, setCat] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [catLoad, setCatLoad] = useState(true);

  const handleNavigate = (url) => router.push(url);

  const fetching = async (page = 1, search = "", sort = "") => {
    const params = {
      limit: 12,
      page,
      search,
      sort,
    };
    try {
      setLoading(true);
      const result = await getMovies(params, controller);
      // console.log(result);
      setDataMovies(result.data.data);
      setMeta({
        ...meta,
        limit: result.data.limit,
        page: result.data.page,
        totalpage: result.data.totalpage,
        totaldata: result.data.totaldata,
      });
      setLoading(false);
    } catch (error) {
      // console.log(error);
    }
  };

  const addMovie = (id, name) => {
    dispatch(orderAction.resetOrder());
    const payload = { id: id, name: name };
    dispatch(orderAction.addMovieId(payload));
    handleNavigate(`/movies/${id}`);
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetching(page, search, sort);
  }, [sort, page, search, router.isReady]);

  useEffect(() => {
    getGenre(controller)
      .then((result) => {
        setCat(result.data.data);
        setCatLoad(false);
      })
      .catch((err) => {
        setCatLoad(false);
        console.log(err);
      });
  }, []);

  if (!isLoading && page > meta.totalpage)
    push({ query: { ...router.query, page: 1 } });

  if (page < 1) push({ query: { ...router.query, page: 1 } });

  return (
    <>
      <Layout title={"All Movies"}>
        <Header />
        <main className="w-full mt-12 md:mt-[5.5rem] bg-accent py-10">
          <section className="mw-global global-px h-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold mb-4 mr-auto">All Movies</h1>
              <select
                className="select w-52 max-w-xs"
                value={sort}
                onChange={(e) => {
                  if (sort !== e.target.value) return;
                  push({
                    query: { ...router.query, sort: e.target.value },
                  });
                }}
              >
                <option value={""}>Sort</option>
                <option value={"asc"}>Movie Name (A-Z)</option>
                <option value={"dsc"}>Movie Name (Z-A)</option>
              </select>
            </div>
          </section>

          <div className="mw-global global-px flex gap-4 mt-6 pb-16 overflow-x-scroll no-scrollbar">
            {catLoad ? (
              <>
                {Array("", "", "", "", "", "", "").map((item, idx) => (
                  <Skeleton key={idx} width={128} height={48} />
                ))}
              </>
            ) : (
              <>
                <button
                  className={`${
                    search !== ""
                      ? "bg-white hover:bg-gray-200 border-primary text-primary"
                      : `btn-primary text-white`
                  } btn btn-sm h-12  min-w-[8rem]`}
                  onClick={() =>
                    push({
                      query: {
                        ...router.query,
                        search: "",
                      },
                    })
                  }
                >
                  All
                </button>
                {cat.map(({ id, genre_name }) => (
                  <button
                    className={`${
                      _.isEqual(search.toLowerCase(), genre_name.toLowerCase())
                        ? `btn-primary text-white`
                        : `bg-white hover:bg-gray-200 border-primary text-primary`
                    } btn btn-sm h-12 min-w-[8rem]`}
                    key={id}
                    onClick={() =>
                      handleNavigate({
                        query: {
                          ...router.query,
                          search: genre_name.toLowerCase(),
                        },
                      })
                    }
                  >
                    {genre_name}
                  </button>
                ))}
              </>
            )}
          </div>

          {dataMovies.length < 1 && !isLoading && (
            <section className="h-2/4 flex flex-col justify-center items-center gap-6">
              <Image src="/images/movie.svg" alt="" width={128} height={128} />
              <p className="text-lg font-semibold">Movie not Found</p>
            </section>
          )}

          <section className="mw-global global-px ">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 md:gap-10 md:mb-10 justify-center justify-items-center">
              {isLoading
                ? Array("", "", "", "", "", "", "", "").map((item, idx) => (
                    <Skeleton key={idx} count="1" width={224} height={480} />
                  ))
                : dataMovies.map(
                    ({ id, movie_name, image, genre_name, category }) => (
                      <div
                        className={`w-72 md:w-56 p-8 scale-105 md:scale-100 bg-white/20 border-[0.5px] border-primary-line rounded-md flex flex-col  items-center text-center gap-5 min-h-[10rem]`}
                        key={id}
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
                          <p className="text-xs text-gray-400 text-center">
                            {category}
                          </p>
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
                    )
                  )}
            </div>
          </section>
          <section className="global-px mw-global">
            <div className="flex  gap-10 justify-center relative mt-20">
              {isLoading ? (
                <>
                  <Skeleton count="1" width={168} height={48} />
                  <Skeleton count="1" width={168} height={48} />
                  <div className="absolute right-0 bottom-0 text-sm">
                    <Skeleton count="1" width={80} height={20} />
                  </div>
                </>
              ) : dataMovies.length > 0 ? (
                <>
                  {page > 1 && (
                    <button
                      className="group btn btn-primary border-primary text-white  btn-sm h-12  min-w-[8rem] flex gap-2 items-center"
                      onClick={() =>
                        handleNavigate({
                          query: {
                            ...query,
                            search: "",
                          },
                        })
                      }
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 -4.5 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="group-hover:-translate-x-1 duration-150"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-260.000000, -6643.000000)"
                            fill="#ffffff"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <polygon
                                id="arrow_left-[#347]"
                                points="209.657 6494 211.071 6492.46965 207.829 6489.17544 224 6489.17544 224 6487.24561 207.829 6487.24561 211.071 6484.28237 209.657 6483 204 6488.25105"
                              ></polygon>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p>Prev Page</p>
                    </button>
                  )}

                  {meta.page < meta.totalpage && meta.page > 0 && (
                    <button
                      className="group btn btn-primary border-primary text-white  btn-sm h-12  min-w-[8rem] flex gap-2 items-center"
                      onClick={() =>
                        push({
                          query: {
                            ...router.query,
                            page: meta.page + 1,
                          },
                        })
                      }
                    >
                      <p>Next Page</p>
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 -4.5 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:translate-x-1 duration-150"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-300.000000, -6643.000000)"
                            fill="#fff"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <polygon
                                id="arrow_right-[#346]"
                                points="264 6488.26683 258.343 6483 256.929 6484.21678 260.172 6487.2264 244 6487.2264 244 6489.18481 260.172 6489.18481 256.929 6492.53046 258.343 6494"
                              ></polygon>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  )}
                  <div className="absolute right-0 bottom-0 text-sm hidden md:block">
                    <p>
                      Page {meta.page} of {meta.totalpage}
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </Layout>
    </>
  );
}

export default Movies;
