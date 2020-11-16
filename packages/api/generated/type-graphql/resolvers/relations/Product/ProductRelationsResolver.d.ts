import { Author } from "../../../models/Author";
import { Category } from "../../../models/Category";
import { Gallery } from "../../../models/Gallery";
import { Meta } from "../../../models/Meta";
import { Product } from "../../../models/Product";
import { ProductCategoriesArgs } from "./args/ProductCategoriesArgs";
import { ProductGalleryArgs } from "./args/ProductGalleryArgs";
export declare class ProductRelationsResolver {
    author(product: Product, ctx: any): Promise<Author | null>;
    meta(product: Product, ctx: any): Promise<Meta | null>;
    gallery(product: Product, ctx: any, args: ProductGalleryArgs): Promise<Gallery[] | null>;
    categories(product: Product, ctx: any, args: ProductCategoriesArgs): Promise<Category[] | null>;
}
