import { DeleteCardArgs } from "./args/DeleteCardArgs";
import { Card } from "../../../models/Card";
export declare class DeleteCardResolver {
    deleteCard(ctx: any, args: DeleteCardArgs): Promise<Card | null>;
}
