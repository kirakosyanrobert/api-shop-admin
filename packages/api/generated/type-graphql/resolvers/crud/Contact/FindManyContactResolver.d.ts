import { FindManyContactArgs } from "./args/FindManyContactArgs";
import { Contact } from "../../../models/Contact";
export declare class FindManyContactResolver {
    contacts(ctx: any, args: FindManyContactArgs): Promise<Contact[]>;
}
