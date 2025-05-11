"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthClient() {
  const { data: session } = useSession();

  if (!session?.user)
    return (
      <Link prefetch className='py-2.5 px-3.5' href='/auth'>
        SIGN IN
      </Link>
    );

  return (
    <span className='py-2.5 px-3.5 cursor-pointer' onClick={() => signOut()}>
      SIGN OUT
    </span>
  );
}
