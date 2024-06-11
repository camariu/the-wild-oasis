import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
//face update la dat in functie de timpul setat global
export const revalidate = 0;
// export const revalidate = 3600;
// daca folosim useParams atunci devin dinamic si revalidarea nu mai este necesara

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter></Filter>
      </div>
      <Suspense fallback={<Spinner></Spinner>} key={filter}>
        <CabinList filter={filter}></CabinList>
        <ReservationReminder></ReservationReminder>
      </Suspense>
    </div>
  );
}
