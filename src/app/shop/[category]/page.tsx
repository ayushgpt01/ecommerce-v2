import { db } from "@/db/drizzle";
import { categoriesTable } from "@/db/schema";

export async function generateStaticParams() {
  const categories = await db.select().from(categoriesTable);

  return categories.map((c) => ({
    category: c.title.toLowerCase(),
  }));
}

interface Props {
  category: string;
}

export default async function Category({ params }: { params: Promise<Props> }) {
  const { category } = await params;

  return <div>Category {category}</div>;
}
