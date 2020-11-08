import { SocialCreateManyWithoutAuthorInput } from "../inputs/SocialCreateManyWithoutAuthorInput";
export declare class AuthorCreateWithoutProductInput {
    id?: string | undefined;
    name: string;
    avatar: string;
    bio: string;
    email: string;
    website: string;
    socials?: SocialCreateManyWithoutAuthorInput | undefined;
}
