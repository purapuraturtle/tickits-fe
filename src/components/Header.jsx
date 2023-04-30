import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import SearchBar from './SearchBar';

function Header() {
  const navList = [
    { title: "Movies", url: "/" },
    { title: "Cinemas", url: "/" },
    { title: "Buy Ticket", url: "/" },
  ];
  const locations = [
    {
      key: "cgv-jaksel",
      title: "CGV Jakarta Selatan",
    },
    {
      key: "cgv-pvj-bandung",
      title: "CGV Paris Van Java Bandung",
    },
  ];

  const [search, setSearch] = useState("");
  const [searchBar, setSearchBar] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full">
        <div className="mw-global w-full global-px flex py-7 justify-between items-center bg-white lg:bg-opacity-90 lg:backdrop-blur-sm z-20 ">
          <div className="flex items-center gap-14">
            <Link href={"/"}>
              <Image
                src="/images/logo.svg"
                width={128}
                height={32}
                alt={`Tickits`}
              />
            </Link>
            <nav className="hidden lg:flex gap-7 lg:gap-8 xl:gap-12 2xl:gap-14 list-none">
              {navList.map(({ title, url }) => (
                <li key={title}>
                  <Link href={url} className="font-medium">
                    <p>{title}</p>
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="hidden lg:flex  items-center gap-8">
            <select className="bg-transparent w-24 font-medium">
              <option value={""}>Location</option>
              {locations.map(({ key, title }) => (
                <option key={key} value={key}>
                  {title}
                </option>
              ))}
            </select>
            <div className="relative">
              <button
                className="flex items-center rounded-full hover:bg-gray-300 transition-colors p-2"
                onClick={() => setSearchBar(!searchBar)}
                key={"search-btn"}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
                    className="fill-primary-label"
                  />
                </svg>
              </button>
              <div
                className={`absolute bg-white shadow rounded-md right-0 top-[4.5rem] p-3 ${
                  !searchBar && `invisible`
                }`}
              >
                <SearchBar
                  search={search}
                  setValue={setSearch}
                  className="w-52"
                />
              </div>
            </div>
            <div className="m-auto">
              <div>
                <button className="btn btn-primary text-white btn-sm h-10 m-auto">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden" key={"drawerBtnParent"}>
            <button
              className="flex p-2 hover:bg-gray-300 rounded-full transition-colors"
              onClick={() => setDrawer(!drawer)}
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1C16 1.26522 15.8946 1.51957 15.7071 1.70711C15.5196 1.89464 15.2652 2 15 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1Z"
                  fill="black"
                />
                <path
                  d="M0 13C0 12.7348 0.105357 12.4804 0.292893 12.2929C0.48043 12.1054 0.734784 12 1 12H15C15.2652 12 15.5196 12.1054 15.7071 12.2929C15.8946 12.4804 16 12.7348 16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H1C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13Z"
                  fill="black"
                />
                <path
                  d="M7 6C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6H7Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`h-screen bg-black transition-all ${
            !drawer ? `bg-opacity-80 visible` : `bg-opacity-0 invisible hidden`
          } lg:hidden`}
          onClick={() => setDrawer(!drawer)}
        >
          <div
            className={`bg-white w-full flex flex-col transform-gpu transition-all z-10 ${
              !drawer ? `translate-x-0` : `-translate-x-full`
            }  `}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="global-px mw-global w-full pt-3 pb-10 border-gray-200">
              <SearchBar
                value={search}
                setValue={setSearch}
                className={`w-full`}
              />
            </div>
            <hr />
            <Link
              className="global-px mw-global font-semibold py-4 flex items-center gap-2"
              href={"/"}
            >
              Location{" "}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.96718 0.982517C8.89779 0.912989 8.81538 0.857828 8.72465 0.820192C8.63392 0.782556 8.53665 0.763184 8.43843 0.763184C8.3402 0.763184 8.24294 0.782556 8.15221 0.820192C8.06148 0.857828 7.97906 0.912989 7.90968 0.982517L4.99968 3.89252L2.08968 0.982516C1.94945 0.842283 1.75925 0.763501 1.56093 0.763501C1.36261 0.763501 1.17241 0.842283 1.03218 0.982516C0.891945 1.12275 0.813164 1.31295 0.813164 1.51127C0.813164 1.70959 0.891945 1.89978 1.03218 2.04002L4.47468 5.48252C4.54406 5.55204 4.62648 5.6072 4.71721 5.64484C4.80794 5.68248 4.9052 5.70185 5.00343 5.70185C5.10165 5.70185 5.19892 5.68248 5.28965 5.64484C5.38038 5.6072 5.46279 5.55204 5.53218 5.48252L8.97468 2.04002C9.25968 1.75502 9.25968 1.27502 8.96718 0.982517Z"
                  fill="#14142B"
                />
              </svg>
            </Link>

            <hr />
            <Link
              className="global-px mw-global font-semibold py-4 flex items-center gap-2"
              href={"/"}
            >
              Movies
            </Link>

            <hr />
            <Link
              className="global-px mw-global font-semibold py-4 flex items-center gap-2"
              href={"/"}
            >
              Cinemas
            </Link>

            <hr />
            <Link
              className="global-px mw-global font-semibold py-4 flex items-center gap-2"
              href={"/"}
            >
              Buy Ticket
            </Link>
            <hr />
            <div className="global-px mw-global pt-8 pb-4 text-primary-label text-center text-sm">
              © {new Date().getFullYear()} Tickitz. All Rights Reserved.
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export async function getStaticProps() {
  const locations = [
    {
      key: "cgv-jaksel",
      title: "CGV Jakarta Selatan",
    },
    {
      key: "cgv-pvj-bandung",
      title: "CGV Paris Van Java Bandung",
    },
  ];

  return {
    props: {
      locations,
    },
  };
}

export default Header;
