import localFont from "next/font/local";

const starCartoon = localFont({ src: "./StarCartoon.woff2" });
const candyBean = localFont({ src: "./CandyBeans.woff2" });
const arialRoundedBold = localFont({ src: "./ArialRoundedBold.woff2" });
const lexend = localFont({
  src: [
    {
      path: "./Lexend-Medium.woff2",
    },
    {
      path: "./Lexend-Bold.woff2",
    },
  ],
  weight: ["300", "700"],
});

export { starCartoon, candyBean, arialRoundedBold, lexend };
