import { GraphQLResolveInfo } from "graphql";
import { AggregateCardArgs } from "./args/AggregateCardArgs";
import { CreateCardArgs } from "./args/CreateCardArgs";
import { DeleteCardArgs } from "./args/DeleteCardArgs";
import { DeleteManyCardArgs } from "./args/DeleteManyCardArgs";
import { FindFirstCardArgs } from "./args/FindFirstCardArgs";
import { FindManyCardArgs } from "./args/FindManyCardArgs";
import { FindOneCardArgs } from "./args/FindOneCardArgs";
import { UpdateCardArgs } from "./args/UpdateCardArgs";
import { UpdateManyCardArgs } from "./args/UpdateManyCardArgs";
import { UpsertCardArgs } from "./args/UpsertCardArgs";
import { Card } from "../../../models/Card";
import { AggregateCard } from "../../outputs/AggregateCard";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class CardCrudResolver {
    card(ctx: any, args: FindOneCardArgs): Promise<Card | null>;
    findFirstCard(ctx: any, args: FindFirstCardArgs): Promise<Card | null>;
    cards(ctx: any, args: FindManyCardArgs): Promise<Card[]>;
    createCard(ctx: any, args: CreateCardArgs): Promise<Card>;
    deleteCard(ctx: any, args: DeleteCardArgs): Promise<Card | null>;
    updateCard(ctx: any, args: UpdateCardArgs): Promise<Card | null>;
    deleteManyCard(ctx: any, args: DeleteManyCardArgs): Promise<BatchPayload>;
    updateManyCard(ctx: any, args: UpdateManyCardArgs): Promise<BatchPayload>;
    upsertCard(ctx: any, args: UpsertCardArgs): Promise<Card>;
    aggregateCard(ctx: any, info: GraphQLResolveInfo, args: AggregateCardArgs): Promise<AggregateCard>;
}
