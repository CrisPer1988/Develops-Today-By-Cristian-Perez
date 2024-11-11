"use client";

import TitleComponent from "@/shared/TitleComponent";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Countries from "../../components/Countries";

const BordersCountries = () => {
  const pathname = usePathname();
  const [data, setData] = useState();
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const code = pathname.slice(-2).toUpperCase();

    const getCountryInfo = async () => {
      try {
        if (!url) {
          throw new Error("Url undefined.");
        }
        const response = await fetch(`${url}/${code}`);

        const resposeJson = await response.json();
        console.log("RESPONSEEEEEEE", resposeJson);

        setData(resposeJson.country.borders);
      } catch (error) {
        console.log(error);
      }
    };

    getCountryInfo();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 md:flex-row ">
      <TitleComponent text="Borders Countries: " />

      <Countries countries={data ?? []} />
    </div>
  );
};

export default BordersCountries;
