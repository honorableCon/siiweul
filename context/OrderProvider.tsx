"use client";

import React, { ReactNode, createContext, useState } from "react";

export interface Order {
  type: string;
  price: string;
  size: number;
}

const initialOrder = {
  type: "",
  size: 0,
  price: "",
};

export const OrderContext = createContext({
  order: initialOrder,
  setOrder: (order: Order) => {},
});

const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [order, setOrder] = useState(initialOrder);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
