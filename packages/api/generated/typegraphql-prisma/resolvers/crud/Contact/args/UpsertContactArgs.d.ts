import { ContactCreateInput } from "../../../inputs/ContactCreateInput";
import { ContactUpdateInput } from "../../../inputs/ContactUpdateInput";
import { ContactWhereUniqueInput } from "../../../inputs/ContactWhereUniqueInput";
export declare class UpsertContactArgs {
    where: ContactWhereUniqueInput;
    create: ContactCreateInput;
    update: ContactUpdateInput;
}
