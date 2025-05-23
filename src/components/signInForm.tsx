"use client";

import { ButtonType } from "@/types/interfaces";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import Button from "./button";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid credentials.");
    } else {
      router.refresh();
      router.push("/"); // or wherever you want
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative my-[40px] mx-auto'>
        <input
          className='bg-white text-[#808080] text-[18px] p-2.5 block w-full 
          rounded-none border-b border-b-[#808080] my-[25px] mx-0
          focus:outline-none peer'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
        />
        <label
          className={`absolute left-[5px] text-[16px] font-normal text-[#808080]
          pointer-events-none transition-all duration-300 peer-focus:top-[-14px]
          peer-focus:text-[12px] peer-focus:text-black ${
            email ? "top-[-14px] text-[12px] text-black" : "top-[10px]"
          }`}
        >
          Email
        </label>
      </div>

      <div className='relative my-[40px] mx-auto'>
        <input
          className='bg-white text-[#808080] text-[18px] p-2.5 block w-full 
          rounded-none border-b tracking-[0.3em] border-b-[#808080] my-[25px] 
          mx-0 focus:outline-none peer'
          type='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
        />
        <label
          className={`absolute left-[5px] text-[16px] font-normal text-[#808080]
            pointer-events-none transition-all duration-300 peer-focus:top-[-14px] 
            peer-focus:text-[12px] peer-focus:text-black ${
              password ? "top-[-14px] text-[12px] text-black" : "top-[10px]"
            }`}
        >
          Password
        </label>
      </div>
      <div className='flex justify-between'>
        <Button type='submit'>Sign In</Button>

        <Button
          buttonType={ButtonType.Google}
          type='button'
          onClick={() => signIn("google", { redirectTo: "/" })}
        >
          Google Sign in
        </Button>
      </div>
      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </form>
  );
}
