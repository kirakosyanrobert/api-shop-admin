import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AddressWhereInput {
    AND?: AddressWhereInput[] | undefined;
    OR?: AddressWhereInput[] | undefined;
    NOT?: AddressWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    title?: StringFilter | undefined;
    location?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
}
