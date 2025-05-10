"use client";

import ShoppingBagSVG from "@/assets/SVG/shoppingBagSVG";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

interface Item {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems] = useState<Item[]>([
    {
      id: 1,
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      name: "Test",
      price: 12,
      quantity: 1,
    },
  ]);

  return (
    <Fragment>
      <div
        className='size-11 relative flex justify-center items-center 
          cursor-pointer'
        onClick={() => {
          setIsCartOpen((prev) => !prev);
        }}
      >
        <ShoppingBagSVG width={24} height={24} />
        <span className='absolute text-[10px] font-bold bottom-3'>12</span>
      </div>
      {isCartOpen && (
        <div
          className='absolute w-[300px] h-[340px] flex flex-col 
          p-5 border border-black bg-white top-[90px] right-10 z-10'
        >
          <div className='h-60 flex flex-col overflow-auto'>
            {cartItems.length ? (
              cartItems.map(({ id, name, imageUrl, quantity, price }) => (
                <div className='w-full flex h-[80px] mb-3.5' key={id}>
                  <Image
                    src={imageUrl}
                    alt={name}
                    loader={({ src }) => src}
                    width={0}
                    height={0}
                    style={{ width: "30%", height: "auto" }}
                  />
                  <div
                    className='w-7/10 flex flex-col justify-center 
                    items-start py-2.5 px-5'
                  >
                    <span className='text-base'>{name}</span>
                    <span className='price'>
                      {quantity} X ${price}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <span className='text-[18px] my-12 mx-auto'>
                Your cart is empty
              </span>
            )}
          </div>
          <button
            className='min-w-40 w-auto h-[50px] tracking-[0.5px] text-base/[50px] 
              px-0 py-9 bg-black text-white uppercase font-bold 
              cursor-pointer flex justify-center items-center mt-auto 
              hover:bg-white hover:text-black hover:border hover:border-black 
              max-[800px]:text-[12px] max-[800px]:py-7'
            onClick={() => router.push("/checkout")}
          >
            GO TO CHECKOUT
          </button>
        </div>
      )}
    </Fragment>
  );
}
