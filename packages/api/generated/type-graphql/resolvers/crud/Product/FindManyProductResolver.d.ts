import { FindManyProductArgs } from "./args/FindManyProductArgs";
import { Product } from "../../../models/Product";
export declare class FindManyProductResolver {
    products(ctx: any, args: FindManyProductArgs): Promise<Product[]>;
}
