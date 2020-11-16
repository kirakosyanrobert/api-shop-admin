import { FindOneCardArgs } from "./args/FindOneCardArgs";
import { Card } from "../../../models/Card";
export declare class FindOneCardResolver {
    card(ctx: any, args: FindOneCardArgs): Promise<Card | null>;
}
