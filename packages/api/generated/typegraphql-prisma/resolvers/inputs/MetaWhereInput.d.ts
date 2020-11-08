import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class MetaWhereInput {
    AND?: MetaWhereInput[] | undefined;
    OR?: MetaWhereInput[] | undefined;
    NOT?: MetaWhereInput[] | undefined;
    id?: StringFilter | undefined;
    publisher?: StringFilter | undefined;
    isbn?: StringFilter | undefined;
    edition?: StringFilter | undefined;
    country?: StringFilter | undefined;
    languages?: StringNullableListFilter | undefined;
    numberOfReader?: StringFilter | undefined;
    numberOfPage?: StringFilter | undefined;
    samplePDF?: StringFilter | undefined;
    product?: ProductRelationFilter | undefined;
    productId?: StringFilter | undefined;
}
