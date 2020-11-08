import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CardScalarWhereInput {
    AND?: CardScalarWhereInput[] | undefined;
    OR?: CardScalarWhereInput[] | undefined;
    NOT?: CardScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    title?: StringFilter | undefined;
    cardType?: StringFilter | undefined;
    lastFourDigit?: IntFilter | undefined;
    userId?: StringFilter | undefined;
}
