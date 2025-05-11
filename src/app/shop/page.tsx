import ProductCard from "@/components/productCard";
import { getAllCategoriesWithProducts } from "@/db/actions";
import Link from "next/link";

export default async function Shop() {
  const categoriesWithProducts = await getAllCategoriesWithProducts(4);

  return (
    <div>
      {categoriesWithProducts.map(({ id, title, products }) => {
        return (
          <div
            className='flex flex-col mb-[30px] max-[800px]:items-center'
            key={id}
          >
            <h2>
              <Link
                href={`shop/${title}`}
                className='text-[28px] mb-[25px] cursor-pointer'
              >
                {title.toUpperCase()}
              </Link>
            </h2>
            <div
              className='grid grid-cols-4 gap-x-[20px] gap-y-[50px]
              max-[800px]:grid-cols-2 max-[800px]:gap-x-[10px] max-[800px]:gap-y-[20px]'
            >
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
