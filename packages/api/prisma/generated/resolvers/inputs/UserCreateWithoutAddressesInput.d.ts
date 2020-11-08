import { CardCreateManyWithoutUserInput } from "../inputs/CardCreateManyWithoutUserInput";
import { ContactCreateManyWithoutUserInput } from "../inputs/ContactCreateManyWithoutUserInput";
export declare class UserCreateWithoutAddressesInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    email: string;
    name: string;
    role?: "USER" | "ADMIN" | undefined;
    image: string;
    password: string;
    contacts?: ContactCreateManyWithoutUserInput | undefined;
    card?: CardCreateManyWithoutUserInput | undefined;
}
