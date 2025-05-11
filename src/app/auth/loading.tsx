export default function Loading() {
  return (
    <div className='flex w-4xl justify-between my-[30px] mx-auto'>
      <div className='flex flex-col w-[380px]'>
        <h2 className='text-[24px]'>I already have an account</h2>
        <span>Sign in with email and password</span>
        <div
          className='w-full mt-[40px] mx-auto bg-gray-200 
         animate-pulse rounded'
          style={{ height: "calc(100vh - 310px)" }}
        />
      </div>
      <div className='flex flex-col w-[380px] justify-between'>
        <h2 className='text-[24px]'>Don&apos;t have an account?</h2>
        <span>Sign up with email and password</span>
        <div
          className='w-full mt-[40px] mx-auto bg-gray-200 
         animate-pulse rounded'
          style={{ height: "calc(100vh - 310px)" }}
        />
      </div>
    </div>
  );
}
