import { UpsertCardArgs } from "./args/UpsertCardArgs";
import { Card } from "../../../models/Card";
export declare class UpsertCardResolver {
    upsertCard(ctx: any, args: UpsertCardArgs): Promise<Card>;
}
