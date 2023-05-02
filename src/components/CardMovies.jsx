// import { orderAction } from "@/redux/slice/order";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { orderAction } from "@/redux/slice/order";

function CardMovies(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const addMovie = () => {
    const payload = { id: props.id, name: props.name };
    dispatch(orderAction.addMovieId(payload));
    // router.push("/order");
    router.push(`/movies/${props.id}`);
  };
  return (
    <div className="w-full h-fit flex flex-col md:flex-row rounded-md bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <Image
          src={props.image || "/images/banner-movies.png"}
          alt="banner-movies"
          width={160}
          height={250}
          className="h-full w-auto"
        />
      </figure>
      <div className="w-full flex flex-col px-5 py-4">
        <h2 className="card-title text-2xl md:text-4xl text-center mb-2 md:mb-5">
          {props.name}
        </h2>
        <p>{props.category}</p>
        <p className="text-gray-400 mt-5">Availabel :</p>
        <div className="flex flex-col md:flex-row mt-2md:mt-5 gap-4 md:gap-10">
          <Image
            src="/images/ebuid.svg"
            alt="banner-movies"
            width={110}
            height={10}
          />
          <Image
            src="/images/hiflix.svg"
            alt="banner-movies"
            width={120}
            height={10}
          />
          <Image
            src="/images/cineone21.svg"
            alt="banner-movies"
            width={210}
            height={10}
          />
        </div>
        <div className=" mt-10">
          <button
            onClick={addMovie}
            className="btn btn-outline btn-primary flex-1"
          >
            Details
          </button>
          {/* <button onClick={handleBooking} className="btn btn-primary flex-1">
            Book Now
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default CardMovies;
