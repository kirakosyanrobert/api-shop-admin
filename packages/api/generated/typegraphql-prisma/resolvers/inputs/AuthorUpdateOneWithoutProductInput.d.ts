import { AuthorCreateWithoutProductInput } from "../inputs/AuthorCreateWithoutProductInput";
import { AuthorUpdateWithoutProductDataInput } from "../inputs/AuthorUpdateWithoutProductDataInput";
import { AuthorUpsertWithoutProductInput } from "../inputs/AuthorUpsertWithoutProductInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";
export declare class AuthorUpdateOneWithoutProductInput {
    create?: AuthorCreateWithoutProductInput | undefined;
    connect?: AuthorWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: AuthorUpdateWithoutProductDataInput | undefined;
    upsert?: AuthorUpsertWithoutProductInput | undefined;
}
