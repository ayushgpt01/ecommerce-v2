"use server";

import { saltAndHashPassword } from "@/auth/utils";
import { db } from "@/db/drizzle";
import { categoriesTable, productsTable, users } from "@/db/schema";
import { CategoryWithProducts, Product, User } from "@/types/interfaces";
import { SignUpSchema } from "@/types/zodSchema";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string): Promise<User | null> {
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

export async function getAllCategoriesWithProducts(limit: number = 4) {
  const categories = await db.select().from(categoriesTable);

  const products = await db.select().from(productsTable);

  // Group products by categoryId and limit per group
  const productMap = new Map<number, Product[]>();

  for (const product of products) {
    const list = productMap.get(product.categoryId) || [];
    if (list.length < limit) {
      list.push(product);
      productMap.set(product.categoryId, list);
    }
  }

  const result: CategoryWithProducts[] = categories.map((cat) => ({
    ...cat,
    products: productMap.get(cat.id) || [],
  }));

  return result;
}
