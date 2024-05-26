import React from "react";
import PricingCard from "./PricingCard";
import { ig_packages } from "@/data";
import { Instagram } from "lucide-react";

const index = () => {
  return (
    <div className="relative bg-blue-50 py-16 overflow-hidden h-full">
      <div className="mb-8">
        <h2 className="text-3xl text-center mb-2 font-bold">
          Tannal sa bula neex <span className="text-4xl ml-2">🚀</span>
        </h2>
        <p className="text-center text-lg">
          Pas de comptes bots - Des comptes de{" "}
          <span className="text-orange-600 font-bold">hautes qualités !</span>{" "}
        </p>
      </div>
      <div className="w-fit mx-auto grid lg:grid-cols-4 items-center justify-center gap-8 py-10 z-40">
        {ig_packages.map((pack, i) => (
          <PricingCard key={pack.label + i} {...pack} />
        ))}
      </div>
      <div className="absolute -bottom-36 -right-36 w-fit flex justify-center items-center p-24 rounded-full bg-orange-400/25 opacity-25">
        <Instagram className="text-orange-400" size={350} />
      </div>
      <div className="absolute top-[20%] -left-48 w-fit flex justify-center items-center p-24 rounded-full bg-orange-400/25 opacity-25">
        <Instagram className="text-orange-400" size={350} />
      </div>
    </div>
  );
};

export default index;
