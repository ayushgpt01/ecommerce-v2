"use client";
import LogoSVG from "@/assets/SVG/logoSVG";
import ShoppingBagSVG from "@/assets/SVG/shoppingBagSVG";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Item {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Navigation() {
  const [currentUser] = useState(false);
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
    <div
      className='h-[70px] w-full flex justify-between mb-[25px]
     max-[800px]:h-[60px] max-[800px]:p-[10px] max-[800px]:mb-[20px]'
    >
      <Link
        className='h-full w-16 p-6 max-[800px]:p-0 max-[800px]:w-12'
        href={"/"}
      >
        <LogoSVG />
      </Link>
      <div className='w-1/2 h-full flex items-center justify-end max-[800px]:w-4/5'>
        <Link className='py-2.5 px-3.5' href={"/shop"}>
          SHOP
        </Link>
        {currentUser ? (
          <span
            className='py-2.5 px-3.5 cursor-pointer'
            onClick={() => {
              console.log("sign out");
            }}
          >
            SIGN OUT
          </span>
        ) : (
          <Link className='py-2.5 px-3.5' href='/auth'>
            SIGN IN
          </Link>
        )}
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
              onClick={() => {
                console.log("goToCheckout");
              }}
            >
              GO TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
