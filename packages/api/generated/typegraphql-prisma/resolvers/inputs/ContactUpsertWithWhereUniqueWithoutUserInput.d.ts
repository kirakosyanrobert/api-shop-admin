import { ContactCreateWithoutUserInput } from "../inputs/ContactCreateWithoutUserInput";
import { ContactUpdateWithoutUserDataInput } from "../inputs/ContactUpdateWithoutUserDataInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";
export declare class ContactUpsertWithWhereUniqueWithoutUserInput {
    where: ContactWhereUniqueInput;
    update: ContactUpdateWithoutUserDataInput;
    create: ContactCreateWithoutUserInput;
}
