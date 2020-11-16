import { CreateProductArgs } from "./args/CreateProductArgs";
import { Product } from "../../../models/Product";
export declare class CreateProductResolver {
    createProduct(ctx: any, args: CreateProductArgs): Promise<Product>;
}
