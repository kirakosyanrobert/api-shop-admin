import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CategoryWhereInput {
    AND?: CategoryWhereInput[] | undefined;
    OR?: CategoryWhereInput[] | undefined;
    NOT?: CategoryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    type?: StringFilter | undefined;
    icon?: StringNullableFilter | undefined;
    slug?: StringFilter | undefined;
    itemCount?: IntNullableFilter | undefined;
    product?: ProductRelationFilter | undefined;
    productId?: StringFilter | undefined;
}
