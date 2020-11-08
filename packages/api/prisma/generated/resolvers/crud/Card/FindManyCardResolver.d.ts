import { FindManyCardArgs } from "./args/FindManyCardArgs";
import { Card } from "../../../models/Card";
export declare class FindManyCardResolver {
    cards(ctx: any, args: FindManyCardArgs): Promise<Card[]>;
}
