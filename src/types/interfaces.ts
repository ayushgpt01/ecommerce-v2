import { categoriesTable, productsTable, users } from "@/db/schema";
import { type InferSelectModel } from "drizzle-orm";

export enum ButtonType {
  Base = "base",
  Google = "google-sign-in",
  Inverted = "inverted",
}

export type Product = InferSelectModel<typeof productsTable>;
export type Category = InferSelectModel<typeof categoriesTable>;
export type User = InferSelectModel<typeof users>;
export interface CategoryWithProducts {
  id: number;
  title: string;
  imageUrl: string | null;
  products: Product[];
}
