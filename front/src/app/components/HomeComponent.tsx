"use client";

import TitleComponent from "@/shared/TitleComponent";
import { useRouter } from "next/navigation";
import React from "react";

const HomeComponent = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center gap-8 ">
      <TitleComponent
        bg={true}
        text="Get all the information about the countries"
        isTitle={true}
      />
      <button
        className="z-50 bg-cyan-600 p-4 rounded-md text-slate-50"
        onClick={() => router.push("/countries")}
      >
        Go!
      </button>
    </div>
  );
};

export default HomeComponent;
