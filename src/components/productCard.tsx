"use client";

import Image from "next/image";
import React from "react";
import Button from "./button";
import { ButtonType, Product } from "@/types/interfaces";

interface Props {
  product: Product;
}

export default function ProductCard({
  product: { id, imageUrl, name, price },
}: Props) {
  return (
    <div
      className='w-full flex flex-col h-[350px] items-center relative group
      max-[800px]:w-[40vw]'
    >
      <Image
        src={imageUrl ?? ""}
        alt={name}
        loader={({ src }) => src}
        width={0}
        height={0}
        style={{ width: "100%", height: "95%" }}
        unoptimized
        className='object-cover mb-[5px] group-hover:opacity-80
        max-[800px]:group-hover:opacity-100'
      />

      <div
        className='w-[80%] opacity-70 absolute top-[255px] hidden group-hover:flex
        group-hover:items-center group-hover:justify-center max-[800px]:flex 
        max-[800px]:items-center max-[800px]:justify-center max-[800px]:opacity-90
        max-[800px]:min-w-0 max-[800px]:px-[10px]'
      >
        <Button
          type='button'
          buttonType={ButtonType.Inverted}
          onClick={() => {
            console.log("id: ", id);
          }}
        >
          Add to cart
        </Button>
      </div>

      <div
        className='w-full h-[5%] flex justify-between text-[18px] 
        max-[800px]:text-[14px]'
      >
        <span className='w-[90%] mb-[15px]'>{name}</span>
        <span className='w-[10%]'>{price}</span>
      </div>
    </div>
  );
}
