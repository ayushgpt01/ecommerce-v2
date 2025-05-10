"use server";

import { eq } from "drizzle-orm";
import { db } from "./drizzle";
import { users } from "./schema";
import { SignUpSchema } from "@/types/zodSchema";
import { saltAndHashPassword } from "@/auth/utils";

export async function getUserByEmail(email: string) {
  const result = await db.select().from(users).where(eq(users.email, email));

  return result[0] ?? null;
}

export async function registerUser(signUpData: SignUpSchema) {
  const hashedPassword = await saltAndHashPassword(signUpData.password);
  await db.insert(users).values({
    name: signUpData.displayName,
    email: signUpData.email,
    password: hashedPassword,
  });
}
