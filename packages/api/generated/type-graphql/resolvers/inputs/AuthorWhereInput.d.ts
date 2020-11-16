import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { SocialListRelationFilter } from "../inputs/SocialListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AuthorWhereInput {
    AND?: AuthorWhereInput[] | undefined;
    OR?: AuthorWhereInput[] | undefined;
    NOT?: AuthorWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    avatar?: StringFilter | undefined;
    bio?: StringFilter | undefined;
    email?: StringFilter | undefined;
    website?: StringFilter | undefined;
    socials?: SocialListRelationFilter | undefined;
    product?: ProductRelationFilter | undefined;
    productId?: StringFilter | undefined;
}
