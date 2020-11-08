import { AddressListRelationFilter } from "../inputs/AddressListRelationFilter";
import { CardListRelationFilter } from "../inputs/CardListRelationFilter";
import { ContactListRelationFilter } from "../inputs/ContactListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringFilter | undefined;
    role?: EnumRoleFilter | undefined;
    image?: StringFilter | undefined;
    password?: StringFilter | undefined;
    addresses?: AddressListRelationFilter | undefined;
    contacts?: ContactListRelationFilter | undefined;
    card?: CardListRelationFilter | undefined;
}
