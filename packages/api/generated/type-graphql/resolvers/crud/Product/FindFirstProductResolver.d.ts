import { FindFirstProductArgs } from "./args/FindFirstProductArgs";
import { Product } from "../../../models/Product";
export declare class FindFirstProductResolver {
    findFirstProduct(ctx: any, args: FindFirstProductArgs): Promise<Product | null>;
}
