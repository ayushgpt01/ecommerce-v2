export default async function CategoryNotFound() {
  return (
    <div className='flex flex-col mb-[30px] max-[800px]:items-center'>
      <h2 className='text-[38px] mb-[25px] text-center'>Category Not Found</h2>

      <div className='text-center mt-20'>
        <p className='mt-2 text-gray-500'>
          The category you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
}
