"use client";
import React, { useContext } from "react";
import { InputForm } from "./form";
import { OrderContext } from "@/context/OrderProvider";

const Page = () => {
  const { order } = useContext(OrderContext);

  return (
    <div className="bg-blue-50 h-full flex justify-center  p-16">
      <div className="bg-white rounded-2xl p-10 h-fit">
        <h2 className="text-lg font-bold mb-4">Offre choisie</h2>
        <div className="bg-blue-50 p-4 mb-8 flex justify-between items-center">
          <div>
            <div className="text-sm">Instagram</div>
            <div>
              <span className="font-bold text-orange-600">{order.size}</span>
              <span className="text-xs ml-2 font-bold">
                High Quality {order.type}
              </span>
            </div>
          </div>
          <div className="font-bold text-xs">{order.price}f</div>
        </div>
        <h2 className="text-xl font-bold mb-4">Les informations du compte</h2>
        <InputForm />
      </div>
    </div>
  );
};

export default Page;
