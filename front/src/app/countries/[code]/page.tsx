import BordersCountries from "./components/BordersCountries";
import Flag from "./components/Flag";
import PopulationGraph from "./components/PopulationGraph";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 p-4">
      <Flag />
      <PopulationGraph />
      <BordersCountries />
    </div>
  );
}
