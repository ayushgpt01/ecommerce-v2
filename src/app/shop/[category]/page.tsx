import ProductCard from "@/components/productCard";
import { db } from "@/db/drizzle";
import { categoriesTable, productsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

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
  const { category: categoryName } = await params;
  const category = await db
    .select()
    .from(categoriesTable)
    .where(eq(categoriesTable.title, categoryName.toLowerCase()))
    .then((res) => res[0]);

  if (!category) return notFound();

  const products = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.categoryId, category.id));

  return (
    <div className='flex flex-col mb-[30px] max-[800px]:items-center'>
      <h2 className='text-[38px] mb-[25px] text-center'>
        {category.title.toUpperCase()}
      </h2>

      <div
        className='grid grid-cols-4 gap-x-[20px] gap-y-[50px] 
        max-[800px]:grid-cols-2 max-[800px]:gap-x-[10px] max-[800px]:gap-y-[20px]'
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
