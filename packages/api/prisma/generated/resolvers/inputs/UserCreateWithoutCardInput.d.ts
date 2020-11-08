import { AddressCreateManyWithoutUserInput } from "../inputs/AddressCreateManyWithoutUserInput";
import { ContactCreateManyWithoutUserInput } from "../inputs/ContactCreateManyWithoutUserInput";
export declare class UserCreateWithoutCardInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    email: string;
    name: string;
    role?: "USER" | "ADMIN" | undefined;
    image: string;
    password: string;
    addresses?: AddressCreateManyWithoutUserInput | undefined;
    contacts?: ContactCreateManyWithoutUserInput | undefined;
}
