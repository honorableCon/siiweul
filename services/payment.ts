import axios from "axios";

export type PaymentPayload = {
  externalTransactionId: string;
  ItemName: string;
  ItemPrice: number;
  customData: string;
  callBackURL: string;
  successUrl: string;
  failureUrl: string;
};

export const generatePaymentUrl = async (data: PaymentPayload) => {
  //   const res = await fetch(
  //     "https://api-m.dexchange.sn/api/v1/transaction/merchant/get-link",
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${process.env.PAYMENT_TOKEN}`,
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   );

  const res = await axios.post(
    "https://api-m.dexchange.sn/api/v1/transaction/merchant/get-link",
    data
  );

  return res;
};
