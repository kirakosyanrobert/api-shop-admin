import { AddressCreateManyWithoutUserInput } from "../inputs/AddressCreateManyWithoutUserInput";
import { CardCreateManyWithoutUserInput } from "../inputs/CardCreateManyWithoutUserInput";
import { ContactCreateManyWithoutUserInput } from "../inputs/ContactCreateManyWithoutUserInput";
export declare class UserCreateInput {
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
    card?: CardCreateManyWithoutUserInput | undefined;
}
