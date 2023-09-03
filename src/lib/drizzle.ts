import {
    pgTable,
    serial,
    varchar,
    integer,
    text
  } from "drizzle-orm/pg-core";
  import { drizzle } from "drizzle-orm/vercel-postgres";
  import { InferModel } from "drizzle-orm";
  import { sql } from "@vercel/postgres";
  
  export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    product_id: varchar("product_id",{length:255}).notNull(),
    product_title: varchar("title",{length:255}).notNull(),
    product_category: varchar("category",{length:255}).notNull(),
    image: text("image").notNull(),
   user_id: varchar("user_id",{length:255}).notNull(),
   quantity: integer("quanity").notNull(),
   price: integer("price").notNull(),
   total_price: integer("total_price").notNull(),
  });

  export type Cart = InferModel<typeof cartTable>;
  export type addToCart = InferModel<typeof cartTable, "insert">; // insert type
  
  export const db = drizzle(sql);
  