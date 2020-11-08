import { StringFilter } from "../inputs/StringFilter";
export declare class AddressScalarWhereInput {
    AND?: AddressScalarWhereInput[] | undefined;
    OR?: AddressScalarWhereInput[] | undefined;
    NOT?: AddressScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    title?: StringFilter | undefined;
    location?: StringFilter | undefined;
    userId?: StringFilter | undefined;
}
