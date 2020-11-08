import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";
export declare class CategoryRelationsResolver {
    product(category: Category, ctx: any): Promise<Product>;
}
