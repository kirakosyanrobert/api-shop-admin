import { AddressCreateManyWithoutUserInput } from "../inputs/AddressCreateManyWithoutUserInput";
import { CardCreateManyWithoutUserInput } from "../inputs/CardCreateManyWithoutUserInput";
export declare class UserCreateWithoutContactsInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    email: string;
    name: string;
    role?: "USER" | "ADMIN" | undefined;
    image: string;
    password: string;
    addresses?: AddressCreateManyWithoutUserInput | undefined;
    card?: CardCreateManyWithoutUserInput | undefined;
}
