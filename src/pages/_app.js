import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store";

import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={`${mulish.className}`}>
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
