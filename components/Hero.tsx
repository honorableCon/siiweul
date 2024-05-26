import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 items-center w-full h-full py-16 px-24">
      <Image
        src={"/assets/images/hero.svg"}
        width={500}
        height={500}
        alt="social network"
      />
      <div className="grid gap-4 h-fit">
        <h1 className="text-6xl font-bold">Keur bukki niakul tioow !</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          illum aperiam quaerat modi itaque eaque quod tempore rem maiores porro
          soluta, harum, aliquid totam aut odio. Aliquid, sequi dolore. Dolor.
        </p>
        <div className="flex gap-4">
          {["Followers", "Likes", "Views"].map((item) => (
            <Button key={item}>More {item}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
