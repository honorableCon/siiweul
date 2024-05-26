import Hero from "@/components/Hero";
import { PriceCard } from "@/components/PriceCard";
import Package from "@/components/Package";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <PriceCard /> */}
      <Package />
    </main>
  );
}
