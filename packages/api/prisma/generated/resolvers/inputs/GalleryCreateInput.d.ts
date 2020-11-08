import { ProductCreateOneWithoutGalleryInput } from "../inputs/ProductCreateOneWithoutGalleryInput";
export declare class GalleryCreateInput {
    id?: string | undefined;
    url: string;
    product: ProductCreateOneWithoutGalleryInput;
}
