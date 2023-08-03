/* eslint-disable @next/next/no-img-element */
// components/Banner.js
import banner from "@/assets/images/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      <Image
        src={banner}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold text-4xl md:text-6xl">
        <h1 className="animate-bounce">
          Make Yourself At Home With PC Builder
        </h1>
      </div>
    </div>
  );
};

export default Banner;
