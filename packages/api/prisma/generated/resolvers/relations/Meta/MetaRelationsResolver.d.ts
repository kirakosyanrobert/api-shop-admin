import { Meta } from "../../../models/Meta";
import { Product } from "../../../models/Product";
export declare class MetaRelationsResolver {
    product(meta: Meta, ctx: any): Promise<Product>;
}
