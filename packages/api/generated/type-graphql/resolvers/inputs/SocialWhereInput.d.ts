import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SocialWhereInput {
    AND?: SocialWhereInput[] | undefined;
    OR?: SocialWhereInput[] | undefined;
    NOT?: SocialWhereInput[] | undefined;
    id?: StringFilter | undefined;
    media?: StringFilter | undefined;
    profileLink?: StringFilter | undefined;
    author?: AuthorRelationFilter | undefined;
    authorId?: StringFilter | undefined;
}
