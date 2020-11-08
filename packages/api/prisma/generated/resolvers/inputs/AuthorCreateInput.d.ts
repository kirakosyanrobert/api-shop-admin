import { ProductCreateOneWithoutAuthorInput } from "../inputs/ProductCreateOneWithoutAuthorInput";
import { SocialCreateManyWithoutAuthorInput } from "../inputs/SocialCreateManyWithoutAuthorInput";
export declare class AuthorCreateInput {
    id?: string | undefined;
    name: string;
    avatar: string;
    bio: string;
    email: string;
    website: string;
    socials?: SocialCreateManyWithoutAuthorInput | undefined;
    product: ProductCreateOneWithoutAuthorInput;
}
