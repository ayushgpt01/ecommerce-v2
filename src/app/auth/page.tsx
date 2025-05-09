"use client";

export default function Auth() {
  return (
    <div className='flex w-4xl justify-between my-[30px] mx-auto'>
      <div className='flex flex-col w-[380px]'>
        <h2 className='font-bold text-[24px] my-2.5 mx-0'>
          I already have an account
        </h2>
        <span>Sign in with email and password</span>
        <form>
          <div className='relative my-[40px] mx-auto'>
            <input
              className='bg-white text-[#808080] text-[18px] 
            p-2.5 block w-full rounded-none border-b 
            border-b-[#808080] my-[25px] mx-0 focus:outline-none peer'
              type='email'
              required
              onChange={() => {}}
              name='email'
              value={""}
            />
            <label
              className={`absolute left-[5px] top-[10px] text-[16px] font-normal 
              text-[#808080] pointer-events-none transition-all duration-300 
              peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-black
              ${false ? "top-[-14px] text-[12px] text-black" : ""}`}
            >
              Email
            </label>
          </div>

          <div className='relative my-[40px] mx-auto'>
            <input
              className='bg-white text-[#808080] text-[18px] 
            p-2.5 block w-full rounded-none border-b tracking-[0.3em]
            border-b-[#808080] my-[25px] mx-0 focus:outline-none peer'
              type='password'
              required
              onChange={() => {}}
              name='password'
              value={""}
            />
            <label
              className={`absolute left-[5px] top-[10px] text-[16px] font-normal 
              text-[#808080] pointer-events-none transition-all duration-300 
              peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-black
              ${false ? "top-[-14px] text-[12px] text-black" : ""}`}
            >
              Password
            </label>
          </div>
          <div className='flex justify-between'>
            <button
              className='min-w-40 w-auto h-[50px] tracking-[0.5px] text-base/[50px] 
              py-0 px-9 bg-black text-white uppercase font-bold 
              cursor-pointer flex justify-center items-center 
              hover:bg-white hover:text-black hover:border hover:border-black 
              max-[800px]:text-[12px] max-[800px]:py-7'
              type='submit'
            >
              Sign In
            </button>
            <button
              type='button'
              className='min-w-40 w-auto h-[50px] tracking-[0.5px] text-base/[50px] 
              py-0 px-9 bg-[#4285f4] text-white uppercase font-bold 
              cursor-pointer flex justify-center items-center 
              hover:bg-[#357ae8] hover:text-black max-[800px]:text-[12px] 
              max-[800px]:py-7'
              onClick={() => console.log("signInWithGoogle")}
            >
              Google Sign in
            </button>
          </div>
        </form>
      </div>
      <div className='flex flex-col w-[380px] justify-between'>
        <h2 className='font-bold text-[24px] my-2.5 mx-0'>
          Don&apos;t have an account?
        </h2>
        <span>Sign up with email and password</span>
        <form onSubmit={() => {}}>
          <div className='relative my-[40px] mx-auto'>
            <input
              className='bg-white text-[#808080] text-[18px] 
            p-2.5 block w-full rounded-none border-b 
            border-b-[#808080] my-[25px] mx-0 focus:outline-none peer'
              type='text'
              required
              onChange={() => {}}
              name='displayName'
              value={""}
            />
            <label
              className={`absolute left-[5px] top-[10px] text-[16px] font-normal 
              text-[#808080] pointer-events-none transition-all duration-300 
              peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-black
              ${false ? "top-[-14px] text-[12px] text-black" : ""}`}
            >
              Display Name
            </label>
          </div>

          <div className='relative my-[40px] mx-auto'>
            <input
              className='bg-white text-[#808080] text-[18px] 
            p-2.5 block w-full rounded-none border-b 
            border-b-[#808080] my-[25px] mx-0 focus:outline-none peer'
              type='email'
              required
              onChange={() => {}}
              name='email'
              value={""}
            />
            <label
              className={`absolute left-[5px] top-[10px] text-[16px] font-normal 
              text-[#808080] pointer-events-none transition-all duration-300 
              peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-black
              ${false ? "top-[-14px] text-[12px] text-black" : ""}`}
            >
              Email
            </label>
          </div>

          <div className='relative my-[40px] mx-auto'>
            <input
              className='bg-white text-[#808080] text-[18px] 
            p-2.5 block w-full rounded-none border-b tracking-[0.3em]
            border-b-[#808080] my-[25px] mx-0 focus:outline-none peer'
              type='password'
              required
              onChange={() => {}}
              name='password'
              value={""}
            />
            <label
              className={`absolute left-[5px] top-[10px] text-[16px] font-normal 
              text-[#808080] pointer-events-none transition-all duration-300 
              peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-black
              ${false ? "top-[-14px] text-[12px] text-black" : ""}`}
            >
              Password
            </label>
          </div>

          <div className='relative my-[40px] mx-auto'>
            <input
              className='bg-white text-[#808080] text-[18px] 
            p-2.5 block w-full rounded-none border-b tracking-[0.3em]
            border-b-[#808080] my-[25px] mx-0 focus:outline-none peer'
              type='password'
              required
              onChange={() => {}}
              name='confirmPassword'
              value={""}
            />
            <label
              className={`absolute left-[5px] top-[10px] text-[16px] font-normal 
              text-[#808080] pointer-events-none transition-all duration-300 
              peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-black
              ${false ? "top-[-14px] text-[12px] text-black" : ""}`}
            >
              Confirm Password
            </label>
          </div>

          <button
            type='submit'
            className='min-w-40 w-auto h-[50px] tracking-[0.5px] text-base/[50px] 
              py-0 px-9 bg-black text-white uppercase font-bold 
              cursor-pointer flex justify-center items-center 
              hover:bg-white hover:text-black hover:border hover:border-black 
              max-[800px]:text-[12px] max-[800px]:py-7'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
