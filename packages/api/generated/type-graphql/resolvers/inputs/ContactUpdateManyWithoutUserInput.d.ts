import { ContactCreateWithoutUserInput } from "../inputs/ContactCreateWithoutUserInput";
import { ContactScalarWhereInput } from "../inputs/ContactScalarWhereInput";
import { ContactUpdateManyWithWhereNestedInput } from "../inputs/ContactUpdateManyWithWhereNestedInput";
import { ContactUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ContactUpdateWithWhereUniqueWithoutUserInput";
import { ContactUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ContactUpsertWithWhereUniqueWithoutUserInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";
export declare class ContactUpdateManyWithoutUserInput {
    create?: ContactCreateWithoutUserInput[] | undefined;
    connect?: ContactWhereUniqueInput[] | undefined;
    set?: ContactWhereUniqueInput[] | undefined;
    disconnect?: ContactWhereUniqueInput[] | undefined;
    delete?: ContactWhereUniqueInput[] | undefined;
    update?: ContactUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: ContactUpdateManyWithWhereNestedInput[] | undefined;
    deleteMany?: ContactScalarWhereInput[] | undefined;
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput[] | undefined;
}
