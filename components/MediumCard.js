import Image from "next/image";
import React from "react";

function MediumCard({ image, title }) {
  return (
    <div className=" hover:scale-105 transform transition duration-300 cursor-pointer">
      <div className="relative h-80 w-80 ease-out">
        <Image src={image} className="rounded-xl" layout="fill" />
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
