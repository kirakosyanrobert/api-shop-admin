import { CardCreateWithoutUserInput } from "../inputs/CardCreateWithoutUserInput";
import { CardScalarWhereInput } from "../inputs/CardScalarWhereInput";
import { CardUpdateManyWithWhereNestedInput } from "../inputs/CardUpdateManyWithWhereNestedInput";
import { CardUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CardUpdateWithWhereUniqueWithoutUserInput";
import { CardUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CardUpsertWithWhereUniqueWithoutUserInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";
export declare class CardUpdateManyWithoutUserInput {
    create?: CardCreateWithoutUserInput[] | undefined;
    connect?: CardWhereUniqueInput[] | undefined;
    set?: CardWhereUniqueInput[] | undefined;
    disconnect?: CardWhereUniqueInput[] | undefined;
    delete?: CardWhereUniqueInput[] | undefined;
    update?: CardUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: CardUpdateManyWithWhereNestedInput[] | undefined;
    deleteMany?: CardScalarWhereInput[] | undefined;
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput[] | undefined;
}
