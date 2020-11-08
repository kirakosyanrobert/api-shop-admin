import { FindOneProductArgs } from "./args/FindOneProductArgs";
import { Product } from "../../../models/Product";
export declare class FindOneProductResolver {
    product(ctx: any, args: FindOneProductArgs): Promise<Product | null>;
}
