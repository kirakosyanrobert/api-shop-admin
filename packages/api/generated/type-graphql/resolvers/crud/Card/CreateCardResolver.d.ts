import { CreateCardArgs } from "./args/CreateCardArgs";
import { Card } from "../../../models/Card";
export declare class CreateCardResolver {
    createCard(ctx: any, args: CreateCardArgs): Promise<Card>;
}
