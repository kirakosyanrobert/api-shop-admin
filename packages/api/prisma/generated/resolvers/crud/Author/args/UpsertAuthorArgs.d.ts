import { AuthorCreateInput } from "../../../inputs/AuthorCreateInput";
import { AuthorUpdateInput } from "../../../inputs/AuthorUpdateInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";
export declare class UpsertAuthorArgs {
    where: AuthorWhereUniqueInput;
    create: AuthorCreateInput;
    update: AuthorUpdateInput;
}
