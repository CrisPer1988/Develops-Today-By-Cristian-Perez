"use client";

import { useEffect, useState } from "react";
import FilterComponent from "./components/FilterComponent";
import Countries from "./components/Countries";
import TitleComponent from "@/shared/TitleComponent";

export interface CountriesI {
  name: string;
  countryCode: string;
  commonName?: string;
}
export default function Home() {
  const [countries, setCountries] = useState<CountriesI[] | null>(null);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const getAllCountries = async () => {
      try {
        if (!url) {
          throw new Error("Url undefined.");
        }
        const response = await fetch(url);
        const resposeJson = await response.json();
        setCountries(resposeJson.countries);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCountries();
  }, []);

  const filteredCountries = countries?.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
        <TitleComponent text="Choose the country to obtain all the information" />
        <FilterComponent
          search={search ?? ""}
          handleOnChange={handleOnChange}
        />
      </div>
      <Countries code={true} countries={filteredCountries ?? []} />
    </div>
  );
}
