import { UpsertContactArgs } from "./args/UpsertContactArgs";
import { Contact } from "../../../models/Contact";
export declare class UpsertContactResolver {
    upsertContact(ctx: any, args: UpsertContactArgs): Promise<Contact>;
}
