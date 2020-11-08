import { NestedEnumProductTypeFilter } from "../inputs/NestedEnumProductTypeFilter";
export declare class EnumProductTypeFilter {
    equals?: "BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY" | undefined;
    in?: Array<"BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY"> | undefined;
    notIn?: Array<"BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY"> | undefined;
    not?: NestedEnumProductTypeFilter | undefined;
}
