export default function Loading() {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-[36px] w-48 bg-gray-200 animate-pulse rounded my-5' />
      <div
        className='grid grid-cols-4 gap-x-[20px] gap-y-[50px] 
        max-[800px]:grid-cols-2 max-[800px]:gap-x-[10px] max-[800px]:gap-y-[20px]'
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className='bg-gray-200 animate-pulse rounded w-[20vw] h-[350px] max-[800px]:w-[40vw]'
          />
        ))}
      </div>
    </div>
  );
}
