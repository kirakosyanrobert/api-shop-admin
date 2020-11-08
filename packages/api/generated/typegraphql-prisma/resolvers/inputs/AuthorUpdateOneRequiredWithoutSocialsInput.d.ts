import { AuthorCreateWithoutSocialsInput } from "../inputs/AuthorCreateWithoutSocialsInput";
import { AuthorUpdateWithoutSocialsDataInput } from "../inputs/AuthorUpdateWithoutSocialsDataInput";
import { AuthorUpsertWithoutSocialsInput } from "../inputs/AuthorUpsertWithoutSocialsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";
export declare class AuthorUpdateOneRequiredWithoutSocialsInput {
    create?: AuthorCreateWithoutSocialsInput | undefined;
    connect?: AuthorWhereUniqueInput | undefined;
    update?: AuthorUpdateWithoutSocialsDataInput | undefined;
    upsert?: AuthorUpsertWithoutSocialsInput | undefined;
}
