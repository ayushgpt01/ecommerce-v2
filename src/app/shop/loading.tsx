export default function Loading() {
  return (
    <div>
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className='flex flex-col mb-[30px] max-[800px]:items-center'
        >
          <div className='h-[32px] w-48 bg-gray-200 animate-pulse rounded my-5' />
          <div
            className='grid grid-cols-4 gap-x-[20px] gap-y-[50px]
              max-[800px]:grid-cols-2 max-[800px]:gap-x-[10px] max-[800px]:gap-y-[20px]'
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className='bg-gray-200 animate-pulse rounded w-[20vw] h-[350px] max-[800px]:w-[40vw]'
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
