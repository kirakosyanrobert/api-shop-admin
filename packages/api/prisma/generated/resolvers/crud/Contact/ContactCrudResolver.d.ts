import { GraphQLResolveInfo } from "graphql";
import { AggregateContactArgs } from "./args/AggregateContactArgs";
import { CreateContactArgs } from "./args/CreateContactArgs";
import { DeleteContactArgs } from "./args/DeleteContactArgs";
import { DeleteManyContactArgs } from "./args/DeleteManyContactArgs";
import { FindFirstContactArgs } from "./args/FindFirstContactArgs";
import { FindManyContactArgs } from "./args/FindManyContactArgs";
import { FindOneContactArgs } from "./args/FindOneContactArgs";
import { UpdateContactArgs } from "./args/UpdateContactArgs";
import { UpdateManyContactArgs } from "./args/UpdateManyContactArgs";
import { UpsertContactArgs } from "./args/UpsertContactArgs";
import { Contact } from "../../../models/Contact";
import { AggregateContact } from "../../outputs/AggregateContact";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class ContactCrudResolver {
    contact(ctx: any, args: FindOneContactArgs): Promise<Contact | null>;
    findFirstContact(ctx: any, args: FindFirstContactArgs): Promise<Contact | null>;
    contacts(ctx: any, args: FindManyContactArgs): Promise<Contact[]>;
    createContact(ctx: any, args: CreateContactArgs): Promise<Contact>;
    deleteContact(ctx: any, args: DeleteContactArgs): Promise<Contact | null>;
    updateContact(ctx: any, args: UpdateContactArgs): Promise<Contact | null>;
    deleteManyContact(ctx: any, args: DeleteManyContactArgs): Promise<BatchPayload>;
    updateManyContact(ctx: any, args: UpdateManyContactArgs): Promise<BatchPayload>;
    upsertContact(ctx: any, args: UpsertContactArgs): Promise<Contact>;
    aggregateContact(ctx: any, info: GraphQLResolveInfo, args: AggregateContactArgs): Promise<AggregateContact>;
}
