"use client";
import { useRouter } from "next/navigation";
import { CountriesI } from "../page";

interface Props {
  countries: CountriesI[];
  code?: boolean;
}

const Countries = ({ countries, code }: Props) => {
  const router = useRouter();
  return (
    <div className=" flex flex-wrap justify-center gap-4 p-4 overflow-x-auto shadow-md sm:rounded-lg">
      {countries &&
        countries?.map((country, i) => (
          <div
            className={`flex flex-col items-center cursor-pointer px-2 py-4 rounded-md text-slate-50 ${
              i % 2 === 0 ? "bg-green-600" : "bg-cyan-600"
            }`}
            key={country.countryCode}
          >
            <p
              onClick={() =>
                router.push(
                  `/countries/${country.name || country.commonName}-${
                    country.countryCode
                  }`
                )
              }
            >
              {country.name || country.commonName}
            </p>
            <p>{code && country.countryCode}</p>
          </div>
        ))}
    </div>
  );
};

export default Countries;
