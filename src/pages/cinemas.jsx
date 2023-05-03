import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { useState } from "react";

function Cinemas() {
  const [location, setLocation] = useState("Select City");
  const [nameCinema, setNameCinema] = useState("");
  console.log(nameCinema);
  const dataCinemas = [
    { image: "/images/cineone21.svg", name: "cineone21" },
    { image: "/images/ebuid.svg", name: "ebuid" },
    { image: "/images/hiflix.svg", name: "hiflix" },
  ];
  const data = [
    // jakarta
    {
      name: "BLOK M cineone21",
      city: "jakarta",
      cinema: "cineone21",
      phone: "(021) 27082800",
    },
    {
      name: "DJAKARTA hiflix",
      cinema: "hiflix",
      city: "jakarta",
      phone: "(021) 315 6725",
    },
    {
      name: "BLOK M cineone21",
      cinema: "cineone21",
      city: "jakarta",
      phone: "(021) 27082800",
    },
    // bandung
    {
      name: "TRANSMART BUAH BATU ebuid",
      cinema: "ebuid",
      city: "bandung",
      phone: "(022) 86012956",
    },
    {
      name: "BTC ebuid",
      cinema: "ebuid",
      city: "bandung",
      phone: "(022) 6126521",
    },
    {
      name: "CIWALK hiflix",
      cinema: "hiflix",
      city: "bandung",
      phone: "(022) 2061017",
    },
    // padang
    {
      name: "PLAZA ANDALAS cineone21",
      cinema: "cineone21",
      city: "padang",
      phone: "(0751) 8952484",
    },
    {
      name: "TRANSMART PADANG ebuid",
      cinema: "ebuid",
      city: "padang",
      phone: "(0751) 8971127",
    },
    // surabaya
    {
      name: "CIPUTRA WORLD hiflix",
      cinema: "hiflix",
      city: "surabaya",
      phone: "(031) 512 00021",
    },
    {
      name: "GALAXY cineone21",
      cinema: "cineone21",
      city: "surabaya",
      phone: "(031) 593 7121",
    },
    {
      name: "GRAND CITY cineone21",
      cinema: "cineone21",
      city: "surabaya",
      phone: "(031) 524 05821",
    },
  ];
  const filteredData = data.filter((item) => item.city === location);
  const filteredCinema = data.filter((item) => item.cinema === nameCinema);
  return (
    <Layout title={"Cinemas"}>
      <Header />
      <main className="global-px py-[3.75rem] mt-16 select-none bg-slate-300/20">
        <section>
          <div className="flex mb-10 gap-4">
            <div className="w-fit flex flex-col gap-5">
              <div className="dropdown z-10">
                <label
                  tabIndex={0}
                  className="btn btn-primary  w-[10rem] rounded"
                >
                  {location}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-lg w-full"
                >
                  <li
                    onClick={() => {
                      setLocation("Select City"), setNameCinema("");
                    }}
                  >
                    <a>Select City</a>
                  </li>
                  <li
                    onClick={() => {
                      setLocation("jakarta"), setNameCinema("");
                    }}
                  >
                    <a>Jakarta</a>
                  </li>
                  <li
                    onClick={() => {
                      setLocation("bandung"), setNameCinema("");
                    }}
                  >
                    <a>Bandung</a>
                  </li>
                  <li
                    onClick={() => {
                      setLocation("padang"), setNameCinema("");
                    }}
                  >
                    <a>Padang</a>
                  </li>
                  <li
                    onClick={() => {
                      setLocation("surabaya"), setNameCinema("");
                    }}
                  >
                    <a>Surabaya</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center bg-primary px-4 md:px-10 lg:px-40 py-5 rounded shadow-md">
            {dataCinemas.map((data, idx) => (
              <div key={idx} className="cursor-pointer">
                <Image
                  src={data.image}
                  alt="cinemas"
                  width={100}
                  height={100}
                  className="drop-shadow-[0px_1px_2px_rgba(255,255,255,1)]"
                  onClick={() => {
                    setNameCinema(data.name), setLocation("Select City");
                  }}
                />
              </div>
            ))}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {/* {location === "Select City"
              ? data.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10  drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))
              : filteredData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10 drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))} */}

            {location === "Select City" && nameCinema === ""
              ? data.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10  drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))
              : location === "Select City" && nameCinema !== ""
              ? filteredCinema.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10 drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))
              : location !== "Select City" && nameCinema === ""
              ? filteredData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10 drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))
              : filteredCinema.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10 drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))}
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export default Cinemas;
