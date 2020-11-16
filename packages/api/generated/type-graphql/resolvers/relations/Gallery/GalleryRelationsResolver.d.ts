import { Gallery } from "../../../models/Gallery";
import { Product } from "../../../models/Product";
export declare class GalleryRelationsResolver {
    product(gallery: Gallery, ctx: any): Promise<Product>;
}
