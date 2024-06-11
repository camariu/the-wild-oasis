import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  //Optimizare SEO
  description:
    "Luxurios cabin hotel located in the heart of the Romania surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative `}
      >
        <Header></Header>
        <div className="flex-1 px-8 py-12 grid ">
          <ReservationProvider>{children}</ReservationProvider>
          <main className="max-w-7xl  mx-auto w-full"> </main>
        </div>
      </body>
    </html>
  );
}
