import { CardOrderByInput } from "../../../inputs/CardOrderByInput";
import { CardWhereInput } from "../../../inputs/CardWhereInput";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";
export declare class UserCardArgs {
    where?: CardWhereInput | undefined;
    orderBy?: CardOrderByInput[] | undefined;
    cursor?: CardWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "title" | "cardType" | "lastFourDigit" | "userId"> | undefined;
}
