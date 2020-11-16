import { UserCreateWithoutAddressesInput } from "../inputs/UserCreateWithoutAddressesInput";
import { UserUpdateWithoutAddressesDataInput } from "../inputs/UserUpdateWithoutAddressesDataInput";
import { UserUpsertWithoutAddressesInput } from "../inputs/UserUpsertWithoutAddressesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAddressesInput {
    create?: UserCreateWithoutAddressesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAddressesDataInput | undefined;
    upsert?: UserUpsertWithoutAddressesInput | undefined;
}
