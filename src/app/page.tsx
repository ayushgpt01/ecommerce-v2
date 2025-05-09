import CategoryItem from "@/components/categoryItem";
import { db } from "@/db/drizzle";
import { categoriesTable } from "@/db/schema";

export default async function Home() {
  const categories = await db.select().from(categoriesTable);

  return (
    <div className='w-full flex flex-wrap justify-between'>
      {categories.map(({ id, imageUrl, title }) => (
        <CategoryItem
          imageUrl={imageUrl ?? ""}
          route={`shop/${title.toLowerCase()}`}
          title={title}
          key={id}
        />
      ))}
    </div>
  );
}
