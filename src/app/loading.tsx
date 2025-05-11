export default function Loading() {
  return (
    <div className='w-full flex flex-wrap justify-between'>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className='min-w-[30%] h-[240px] flex grow shrink basis-auto bg-gray-200 
         animate-pulse rounded mt-0 mb-[15px] mx-[7.5px] first:mr-[7.5px] 
         last:ml-[7.5px] max-[800px]:h-[200px]'
        />
      ))}
    </div>
  );
}
