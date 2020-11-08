import { UpdateProductArgs } from "./args/UpdateProductArgs";
import { Product } from "../../../models/Product";
export declare class UpdateProductResolver {
    updateProduct(ctx: any, args: UpdateProductArgs): Promise<Product | null>;
}
