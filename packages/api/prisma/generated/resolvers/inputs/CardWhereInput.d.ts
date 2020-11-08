import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CardWhereInput {
    AND?: CardWhereInput[] | undefined;
    OR?: CardWhereInput[] | undefined;
    NOT?: CardWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    title?: StringFilter | undefined;
    cardType?: StringFilter | undefined;
    lastFourDigit?: IntFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
}
