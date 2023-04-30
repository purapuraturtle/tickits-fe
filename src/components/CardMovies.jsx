import Image from "next/image";

function CardMovies(props) {
  return (
    <div className="card card-side flex-col md:flex-row rounded-md bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <Image
          src="/images/banner-movies.png"
          alt="banner-movies"
          width={160}
          height={250}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl md:text-4xl text-center mb-2 md:mb-5">
          {props.name}
        </h2>
        <p>{props.category}</p>
        <p className="text-gray-600 mt-5">Availabel</p>
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full md:w-fit mt-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardMovies;
