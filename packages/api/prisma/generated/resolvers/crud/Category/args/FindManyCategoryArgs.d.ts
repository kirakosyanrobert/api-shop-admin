import { CategoryOrderByInput } from "../../../inputs/CategoryOrderByInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
export declare class FindManyCategoryArgs {
    where?: CategoryWhereInput | undefined;
    orderBy?: CategoryOrderByInput[] | undefined;
    cursor?: CategoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "type" | "icon" | "slug" | "itemCount" | "productId"> | undefined;
}
