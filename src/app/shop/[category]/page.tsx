import { db } from "@/db/drizzle";
import { categoriesTable } from "@/db/schema";

export async function generateStaticParams() {
  const categories = await db.select().from(categoriesTable);

  return categories.map((c) => ({
    category: c.title.toLowerCase(),
  }));
}

interface Props {
  params: {
    category: string;
  };
}

export default function Category({ params: { category } }: Props) {
  console.log(category);

  return <div>Category {category}</div>;
}
