import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ContactWhereInput {
    AND?: ContactWhereInput[] | undefined;
    OR?: ContactWhereInput[] | undefined;
    NOT?: ContactWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    number?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
}
