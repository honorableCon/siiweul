"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { OrderContext } from "@/context/OrderProvider";
import { useContext } from "react";
import { PaymentPayload, generatePaymentUrl } from "@/services/payment";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
});

export function InputForm() {
  const { order } = useContext(OrderContext);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const payload: PaymentPayload = {
      externalTransactionId: uuidv4(),
      ItemName: `${order.size} ${order.type}`,
      ItemPrice: Number(order.price.replace(".", "")),
      customData: JSON.stringify(data),
      callBackURL: "https://siiweul.vercel.app",
      failureUrl: "https://siiweul.vercel.app",
      successUrl: "https://siiweul.vercel.app",
    };

    generatePaymentUrl(payload).then((res) => console.log(res));

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{"Nom d'utilisateur instagram"}</FormLabel>
              <FormControl>
                <Input placeholder="@username" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="melentaan@mail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mb-2" type="submit">
          Continuer la commande
        </Button>
        <p className="text-xs">
          {"By clicking continue you agree to our Terms of Service"}
          <br />
          {"and confirm that you’ve read our Privacy Policy."}
        </p>
      </form>
    </Form>
  );
}
