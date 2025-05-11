import Link from "next/link";

export default async function NotFound() {
  return (
    <div className='mt-25 flex flex-col items-center justify-center px-4'>
      <h1 className='text-6xl font-extrabold mb-4'>404</h1>
      <h2 className='text-2xl font-semibold mb-6'>
        Oops! This page slipped through the cracks.
      </h2>
      <p className='text-gray-400 text-center max-w-md mb-10'>
        The URL you followed doesn&apos;t lead anywhere... yet. Maybe you meant
        to browse the shop?
      </p>
      <Link
        href='/shop'
        className='border border-black px-6 py-3 rounded-full hover:bg-black
      hover:!text-white transition-colors duration-200'
      >
        🛍 Head to the Shop
      </Link>
    </div>
  );
}
