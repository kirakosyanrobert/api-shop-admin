import { Product } from "../models/Product";
export declare class Meta {
    id: string;
    publisher: string;
    isbn: string;
    edition: string;
    country: string;
    languages?: string[] | null;
    numberOfReader: string;
    numberOfPage: string;
    samplePDF: string;
    product?: Product;
    productId: string;
}
