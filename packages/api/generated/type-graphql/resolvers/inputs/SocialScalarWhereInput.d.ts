import { StringFilter } from "../inputs/StringFilter";
export declare class SocialScalarWhereInput {
    AND?: SocialScalarWhereInput[] | undefined;
    OR?: SocialScalarWhereInput[] | undefined;
    NOT?: SocialScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    media?: StringFilter | undefined;
    profileLink?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
}
