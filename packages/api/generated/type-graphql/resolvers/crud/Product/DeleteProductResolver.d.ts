import { DeleteProductArgs } from "./args/DeleteProductArgs";
import { Product } from "../../../models/Product";
export declare class DeleteProductResolver {
    deleteProduct(ctx: any, args: DeleteProductArgs): Promise<Product | null>;
}
