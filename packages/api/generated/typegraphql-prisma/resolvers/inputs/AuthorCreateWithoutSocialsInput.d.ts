import { ProductCreateOneWithoutAuthorInput } from "../inputs/ProductCreateOneWithoutAuthorInput";
export declare class AuthorCreateWithoutSocialsInput {
    id?: string | undefined;
    name: string;
    avatar: string;
    bio: string;
    email: string;
    website: string;
    product: ProductCreateOneWithoutAuthorInput;
}
