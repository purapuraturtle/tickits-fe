import "@/styles/globals.css";

import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <div className={`dark-mode ${mulish.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
