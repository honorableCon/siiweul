"use client";
import React, { useContext } from "react";
import { PricingCardProps } from "./interface";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";
import { useRouter } from "next/navigation";
import { OrderContext } from "@/context/OrderProvider";

const PricingCard = ({ label, price, size }: PricingCardProps) => {
  const router = useRouter();
  const { setOrder } = useContext(OrderContext);

  const handleClick = () => {
    setOrder({ price, type: label, size });
    router.push("/checkout");
  };

  return (
    <div className="z-40 relative group grid justify-center w-48      h-56 rounded-lg shadow-lg px-12 pt-10 pb-2 border border-white bg-white hover:border-orange-500 overflow-hidden">
      <p className="text-center space-y-2">
        <b className="font-bold text-3xl">{size}</b>
        <span className="uppercase block">{label}</span>
        <span className="text-center block text-orange-600 font-bold text-lg">
          {price}f
        </span>
      </p>
      <Button
        onClick={handleClick}
        className="z-40 hidden group-hover:block rounded-full mt-4 px-6 text-sm bg-orange-400 font-bold w-full"
      >
        Acheter
      </Button>
      <div className="absolute -bottom-2 -right-4 bg-blue-50 w-fit flex justify-center items-center p-6 rounded-full">
        <Instagram
          className="text-white group-hover:text-orange-400"
          size={25}
        />
      </div>
    </div>
  );
};

export default PricingCard;
