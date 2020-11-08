import { ProductOrderByInput } from "../../../inputs/ProductOrderByInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
export declare class FindManyProductArgs {
    where?: ProductWhereInput | undefined;
    orderBy?: ProductOrderByInput[] | undefined;
    cursor?: ProductWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "slug" | "title" | "description" | "unit" | "image" | "price" | "salePrice" | "discountInPercent" | "per_unit" | "quantity" | "views" | "sales" | "type"> | undefined;
}
