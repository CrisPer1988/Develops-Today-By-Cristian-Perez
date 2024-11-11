import Image from "next/image";
import HomeComponent from "./components/HomeComponent";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center pb-20 gap-16 p-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image className="z-40 opacity-40" fill alt="5456" src="/flags.jpg" />
      <HomeComponent />
    </div>
  );
}
