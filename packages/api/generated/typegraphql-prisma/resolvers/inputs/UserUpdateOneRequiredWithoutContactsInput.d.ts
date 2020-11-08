import { UserCreateWithoutContactsInput } from "../inputs/UserCreateWithoutContactsInput";
import { UserUpdateWithoutContactsDataInput } from "../inputs/UserUpdateWithoutContactsDataInput";
import { UserUpsertWithoutContactsInput } from "../inputs/UserUpsertWithoutContactsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutContactsInput {
    create?: UserCreateWithoutContactsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutContactsDataInput | undefined;
    upsert?: UserUpsertWithoutContactsInput | undefined;
}
