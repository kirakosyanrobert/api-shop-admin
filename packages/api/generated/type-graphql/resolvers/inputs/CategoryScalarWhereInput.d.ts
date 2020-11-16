import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CategoryScalarWhereInput {
    AND?: CategoryScalarWhereInput[] | undefined;
    OR?: CategoryScalarWhereInput[] | undefined;
    NOT?: CategoryScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    type?: StringFilter | undefined;
    icon?: StringNullableFilter | undefined;
    slug?: StringFilter | undefined;
    itemCount?: IntNullableFilter | undefined;
    productId?: StringFilter | undefined;
}
