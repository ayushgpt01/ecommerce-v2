"use client";

import { useStore } from "@/store/store";
import Image from "next/image";
import { useMemo } from "react";

export default function Checkout() {
  const cart = useStore((state) => state.cart);
  const removeItem = useStore((state) => state.removeItem);
  const addItem = useStore((state) => state.addItem);

  const totalPrice = useMemo(
    () => cart.reduce((acc, v) => acc + v.price * v.quantity, 0),
    [cart]
  );

  return (
    <div className='w-[55%] min-h-[90vh] flex flex-col items-center mt-[50px] mx-auto'>
      <div className='w-full py-[10px] flex justify-between border-b border-gray-400'>
        <div className='capitalize w-[23%]'>Product</div>
        <div className='capitalize w-[23%]'>Description</div>
        <div className='capitalize w-[23%]'>Quantity</div>
        <div className='capitalize w-[23%]'>Price</div>
        <div className='capitalize w-[8%]'>Remove</div>
      </div>

      {cart.map((item) => {
        const { quantity, id, price, name, imageUrl } = item;
        return (
          <div
            key={id}
            className='w-full flex min-h-[100px] border-b border-gray-400 py-[15px] text-[20px] items-center'
          >
            <div className='w-[23%] pr-[15px]'>
              <Image
                src={imageUrl ?? ""}
                alt={name}
                width={0}
                height={0}
                unoptimized
                className='w-full h-full object-cover'
              />
            </div>
            <span className='w-[23%]'>{name}</span>
            <span className='flex w-[23%] items-center'>
              <div
                className={`cursor-pointer ${
                  quantity === 1 ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={() => removeItem(id, 1)}
              >
                &#10094;
              </div>
              <span className='mx-[10px]'>{quantity}</span>
              <div
                className='cursor-pointer'
                onClick={() => addItem({ ...item, quantity: 1 })}
              >
                &#10095;
              </div>
            </span>
            <span className='w-[23%]'>{price}</span>
            <span
              className='pl-[12px] cursor-pointer'
              onClick={() => removeItem(id)}
            >
              &#10060;
            </span>
          </div>
        );
      })}

      <span className='mt-[30px] ml-auto text-[36px] font-medium'>
        Total: ${totalPrice}
      </span>

      {/* <PaymentForm /> */}
    </div>
  );
}
