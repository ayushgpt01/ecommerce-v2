ALTER TABLE "categories_table" RENAME TO "categories";--> statement-breakpoint
ALTER TABLE "products_table" RENAME TO "products";--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "products_table_category_id_categories_table_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;