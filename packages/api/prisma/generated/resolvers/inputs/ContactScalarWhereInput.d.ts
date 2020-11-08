import { StringFilter } from "../inputs/StringFilter";
export declare class ContactScalarWhereInput {
    AND?: ContactScalarWhereInput[] | undefined;
    OR?: ContactScalarWhereInput[] | undefined;
    NOT?: ContactScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    number?: StringFilter | undefined;
    userId?: StringFilter | undefined;
}
