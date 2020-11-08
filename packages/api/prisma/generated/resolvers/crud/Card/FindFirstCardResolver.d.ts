import { FindFirstCardArgs } from "./args/FindFirstCardArgs";
import { Card } from "../../../models/Card";
export declare class FindFirstCardResolver {
    findFirstCard(ctx: any, args: FindFirstCardArgs): Promise<Card | null>;
}
