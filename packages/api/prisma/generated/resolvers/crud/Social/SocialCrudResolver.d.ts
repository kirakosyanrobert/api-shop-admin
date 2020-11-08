import { GraphQLResolveInfo } from "graphql";
import { AggregateSocialArgs } from "./args/AggregateSocialArgs";
import { CreateSocialArgs } from "./args/CreateSocialArgs";
import { DeleteManySocialArgs } from "./args/DeleteManySocialArgs";
import { DeleteSocialArgs } from "./args/DeleteSocialArgs";
import { FindFirstSocialArgs } from "./args/FindFirstSocialArgs";
import { FindManySocialArgs } from "./args/FindManySocialArgs";
import { FindOneSocialArgs } from "./args/FindOneSocialArgs";
import { UpdateManySocialArgs } from "./args/UpdateManySocialArgs";
import { UpdateSocialArgs } from "./args/UpdateSocialArgs";
import { UpsertSocialArgs } from "./args/UpsertSocialArgs";
import { Social } from "../../../models/Social";
import { AggregateSocial } from "../../outputs/AggregateSocial";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class SocialCrudResolver {
    social(ctx: any, args: FindOneSocialArgs): Promise<Social | null>;
    findFirstSocial(ctx: any, args: FindFirstSocialArgs): Promise<Social | null>;
    socials(ctx: any, args: FindManySocialArgs): Promise<Social[]>;
    createSocial(ctx: any, args: CreateSocialArgs): Promise<Social>;
    deleteSocial(ctx: any, args: DeleteSocialArgs): Promise<Social | null>;
    updateSocial(ctx: any, args: UpdateSocialArgs): Promise<Social | null>;
    deleteManySocial(ctx: any, args: DeleteManySocialArgs): Promise<BatchPayload>;
    updateManySocial(ctx: any, args: UpdateManySocialArgs): Promise<BatchPayload>;
    upsertSocial(ctx: any, args: UpsertSocialArgs): Promise<Social>;
    aggregateSocial(ctx: any, info: GraphQLResolveInfo, args: AggregateSocialArgs): Promise<AggregateSocial>;
}
