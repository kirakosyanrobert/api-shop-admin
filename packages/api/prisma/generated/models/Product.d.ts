import { Author } from "../models/Author";
import { Category } from "../models/Category";
import { Gallery } from "../models/Gallery";
import { Meta } from "../models/Meta";
export declare class Product {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    title: string;
    description: string;
    unit: string;
    image: string;
    price: number;
    salePrice: number;
    discountInPercent: number;
    per_unit: number;
    quantity: number;
    views?: number | null;
    sales?: number | null;
    type: "BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY";
    author?: Author | null;
    meta?: Meta | null;
    gallery?: Gallery[] | null;
    categories?: Category[] | null;
}
