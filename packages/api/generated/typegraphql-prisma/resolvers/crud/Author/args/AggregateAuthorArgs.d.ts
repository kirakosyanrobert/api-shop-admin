import { AuthorOrderByInput } from "../../../inputs/AuthorOrderByInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";
export declare class AggregateAuthorArgs {
    where?: AuthorWhereInput | undefined;
    orderBy?: AuthorOrderByInput[] | undefined;
    cursor?: AuthorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "avatar" | "bio" | "email" | "website" | "productId"> | undefined;
}
