import { AddressCreateWithoutUserInput } from "../inputs/AddressCreateWithoutUserInput";
import { AddressScalarWhereInput } from "../inputs/AddressScalarWhereInput";
import { AddressUpdateManyWithWhereNestedInput } from "../inputs/AddressUpdateManyWithWhereNestedInput";
import { AddressUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AddressUpdateWithWhereUniqueWithoutUserInput";
import { AddressUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AddressUpsertWithWhereUniqueWithoutUserInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressUpdateManyWithoutUserInput {
    create?: AddressCreateWithoutUserInput[] | undefined;
    connect?: AddressWhereUniqueInput[] | undefined;
    set?: AddressWhereUniqueInput[] | undefined;
    disconnect?: AddressWhereUniqueInput[] | undefined;
    delete?: AddressWhereUniqueInput[] | undefined;
    update?: AddressUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: AddressUpdateManyWithWhereNestedInput[] | undefined;
    deleteMany?: AddressScalarWhereInput[] | undefined;
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput[] | undefined;
}
