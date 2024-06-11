import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner></Spinner>
      <p className="text-primary-200">Loading cabin data...</p>
    </div>
  );
}
