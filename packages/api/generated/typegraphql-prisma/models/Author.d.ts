import { Product } from "../models/Product";
import { Social } from "../models/Social";
export declare class Author {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    email: string;
    website: string;
    socials?: Social[] | null;
    product?: Product;
    productId: string;
}
