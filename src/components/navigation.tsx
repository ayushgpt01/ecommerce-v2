import LogoSVG from "@/assets/SVG/logoSVG";
import AuthNavigation from "@/components/authNavigation";
import Cart from "@/components/cart";
import Link from "next/link";

export default function Navigation() {
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
        <Link prefetch className='py-2.5 px-3.5' href={"/shop"}>
          SHOP
        </Link>
        <AuthNavigation />
        <Cart />
      </div>
    </div>
  );
}
