import { CardCreateInput } from "../../../inputs/CardCreateInput";
import { CardUpdateInput } from "../../../inputs/CardUpdateInput";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";
export declare class UpsertCardArgs {
    where: CardWhereUniqueInput;
    create: CardCreateInput;
    update: CardUpdateInput;
}
