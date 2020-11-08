import { UpsertProductArgs } from "./args/UpsertProductArgs";
import { Product } from "../../../models/Product";
export declare class UpsertProductResolver {
    upsertProduct(ctx: any, args: UpsertProductArgs): Promise<Product>;
}
