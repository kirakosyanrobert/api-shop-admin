import { Product } from "../models/Product";
export declare class Category {
    id: string;
    title: string;
    type: string;
    icon?: string | null;
    slug: string;
    itemCount?: number | null;
    product?: Product;
    productId: string;
}
