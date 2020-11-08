import { AuthorCreateOneWithoutSocialsInput } from "../inputs/AuthorCreateOneWithoutSocialsInput";
export declare class SocialCreateInput {
    id?: string | undefined;
    media: string;
    profileLink: string;
    author: AuthorCreateOneWithoutSocialsInput;
}
