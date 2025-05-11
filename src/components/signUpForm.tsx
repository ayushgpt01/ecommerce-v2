"use client";

import { registerUser } from "@/db/actions";
import type { SignUpSchema } from "@/types/zodSchema";
import { signUpSchema } from "@/types/zodSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import Button from "./button";

export default function SignUpForm() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError("");

    const formData: SignUpSchema = {
      displayName,
      email,
      password,
      confirmPassword,
    };

    const validation = signUpSchema.safeParse(formData);

    if (!validation.success) {
      setError(validation.error.errors[0].message);
      return;
    }

    await registerUser(validation.data);

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
          type='text'
          required
          name='displayName'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <label
          className={`absolute left-[5px] text-[16px] font-normal text-[#808080]
          pointer-events-none transition-all duration-300 peer-focus:top-[-14px]
          peer-focus:text-[12px] peer-focus:text-black ${
            displayName ? "top-[-14px] text-[12px] text-black" : "top-[10px]"
          }`}
        >
          Display Name
        </label>
      </div>

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

      <div className='relative my-[40px] mx-auto'>
        <input
          className='bg-white text-[#808080] text-[18px] p-2.5 block w-full 
          rounded-none border-b tracking-[0.3em] border-b-[#808080] my-[25px] 
          mx-0 focus:outline-none peer'
          type='password'
          required
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label
          className={`absolute left-[5px] text-[16px] font-normal text-[#808080]
            pointer-events-none transition-all duration-300 peer-focus:top-[-14px] 
            peer-focus:text-[12px] peer-focus:text-black ${
              confirmPassword
                ? "top-[-14px] text-[12px] text-black"
                : "top-[10px]"
            }`}
        >
          Confirm Password
        </label>
      </div>

      <Button type='submit'>Sign Up</Button>
      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </form>
  );
}
