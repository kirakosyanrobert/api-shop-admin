import { UserCreateWithoutCardInput } from "../inputs/UserCreateWithoutCardInput";
import { UserUpdateWithoutCardDataInput } from "../inputs/UserUpdateWithoutCardDataInput";
import { UserUpsertWithoutCardInput } from "../inputs/UserUpsertWithoutCardInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCardInput {
    create?: UserCreateWithoutCardInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutCardDataInput | undefined;
    upsert?: UserUpsertWithoutCardInput | undefined;
}
