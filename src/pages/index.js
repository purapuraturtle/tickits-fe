import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />

      <main>
        <section className="mw-global global-px bg-white">
          <div className="h-screen flex w-full items-center">
            <div className="flex-1">
              <p className="text-primary-placeholder text-xl">
                Nearest Cinema, Newest Movie,
              </p>
              <p className="font-bold text-primary text-5xl">Find out now!</p>
            </div>
            <div className="flex-1 relative">
              <div className="w-20 h-64 relative top-0 rounded-xl">
                <Image
                  src={"/images/movies/movie-1.png"}
                  alt="spiderman"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
