"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import TitleComponent from "@/shared/TitleComponent";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
interface CountryData {
  populationCounts: number[];
}
const PopulationGraph = () => {
  const pathname = usePathname();
  const [data, setData] = useState<CountryData | null>(null);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const data = { country: pathname.slice(11, -3).toLowerCase() };
    const getPopulation = async () => {
      try {
        if (!url) {
          throw new Error("Url undefined.");
        }
        const response = await fetch(`${url}/population`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const resposeJson = await response.json();
        setData(resposeJson?.population?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPopulation();
  }, []);

  const chartConfig = {
    label: {
      label: "Population",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <TitleComponent text="Population" />
      <ChartContainer config={chartConfig}>
        <BarChart className="p-3 " data={data?.populationCounts}>
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.toString()}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Bar dataKey="value" fill="green" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PopulationGraph;
