import CardMovies from "@/components/CardMovies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { getMovies } from "@/utils/https/movies";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Movies() {
  const controller = useMemo(() => new AbortController(), []);
  const [dataMovies, setDataMovies] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const fetching = async () => {
    const params = {
      limit: 5,
      page: 1,
      search: "",
    };
    try {
      const result = await getMovies(params, controller);
      console.log(result);
      setDataMovies(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout title={"All Movies"}>
      <Header />
      <main className="w-full global-px flex flex-col items-center justify-center mt-24 py-10 bg-slate-300/20">
        <h1 className="text-2xl font-bold mb-4 mr-auto">All Movies</h1>
        <div className="w-full flex flex-col gap-4">
          {isLoading
            ? "LOADING"
            : dataMovies.map((item) => (
                <CardMovies
                  key={item.id}
                  id={item.id}
                  name={item.movie_name}
                  image={item.image}
                  category={item.category}
                />
              ))}
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default Movies;
