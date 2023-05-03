import { useMemo, useState } from "react";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { orderAction } from "@/redux/slice/order";
import { usersAction } from "@/redux/slice/users";
import { logout } from "@/utils/https/user";

// import { logout } from "@/services/https/auth";

// import { authAction } from "@/store/slices/authInfo";

function Logout({ isOpen, onClose, handler }) {
  const [isLoading, setIsLoading] = useState();

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();
  const controller = useMemo(() => new AbortController(), []);

  const logoutHandler = (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    logout(user.data.token, controller)
      .then((result) => {
        setIsLoading(false);
        router.push("/login");
        dispatch(usersAction.logout());
        dispatch(orderAction.resetOrder());
      })
      .catch((err) => {
        setIsLoading(false);

        router.push("/login");
        dispatch(usersAction.logout());
      });
  };
  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/80 flex justify-center items-center select-none ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={onClose}
    >
      <section
        className="bg-white opacity-100 text-dark p-7 rounded-2xl w-[28rem] relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="absolute right-7" onClick={onClose}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1L1 15"
              stroke="#3A3D42"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L15 15"
              stroke="#3A3D42"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <section className="flex flex-col gap-5 w-full">
          <p className="text-lg font-semibold">Logout</p>
          <p className="text-sm text-secondary-context">
            Are you sure you want to log out?
          </p>

          <div className="ml-auto">
            <button
              onClick={logoutHandler}
              className={`submit mt-5 btn px-8 bg-primary border-2 border-white capitalize hover:bg-primary-focus hover:border-gray-200 text-white ${
                isLoading ? "loading" : ""
              }`}
            >
              Yes
            </button>
            <p
              className="text-center text-primary cursor-pointer text-sm mt-2"
              onClick={() => onClose()}
            >
              No
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Logout;
