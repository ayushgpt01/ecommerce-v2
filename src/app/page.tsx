"use client";

import { useRouter } from "next/navigation";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className='w-full flex flex-wrap justify-between'>
      {categories.map(({ id, imageUrl, route, title }) => (
        <div
          className='group min-w-[30%] h-[240px] flex grow shrink basis-auto 
          items-center justify-center border border-black mt-0 mb-[15px] 
          mx-[7.5px] overflow-hidden cursor-pointer first:mr-[7.5px] 
          last:ml-[7.5px] max-[800px]:h-[200px]'
          onClick={() => router.push(route)}
          key={id}
        >
          <div
            className='w-full h-full bg-cover bg-center 
              group-hover:scale-110 group-hover:transition-transform 
              group-hover:duration-[6000ms] 
              group-hover:ease-[cubic-bezier(0.25,0.45,0.45,0.95)]'
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className='h-[90px] py-0 px-[25px] flex flex-col items-center 
          justify-center border border-black bg-white opacity-70 absolute
          transition-opacity group-hover:opacity-90'
          >
            <h2
              className='font-bold my-0 mx-[6px] text-[22px] text-[#4a4a4a] 
            uppercase'
            >
              {title}
            </h2>
            <p className='font-extralight text-[16px]'>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}
