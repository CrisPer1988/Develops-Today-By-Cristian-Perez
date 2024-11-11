"use client";

import TitleComponent from "@/shared/TitleComponent";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Flag = () => {
  const pathname = usePathname();
  const [flag, setFlag] = useState<string | null>(null);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const data = { country: pathname.slice(11, -3).toLowerCase() };
    const getFlag = async () => {
      try {
        if (!url) {
          throw new Error("Url undefined.");
        }
        const response = await fetch(`${url}/flag`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const resposeJson = await response.json();
        setFlag(resposeJson?.flag?.data.flag);
      } catch (error) {
        console.log(error);
      }
    };

    getFlag();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <TitleComponent isTitle={true} text={pathname.slice(11, -3)} />
      {flag && (
        <Image width={500} height={500} alt={`Image${pathname}`} src={flag} />
      )}
    </div>
  );
};

export default Flag;
