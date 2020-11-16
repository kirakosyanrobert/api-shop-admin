import { UpdateCardArgs } from "./args/UpdateCardArgs";
import { Card } from "../../../models/Card";
export declare class UpdateCardResolver {
    updateCard(ctx: any, args: UpdateCardArgs): Promise<Card | null>;
}
