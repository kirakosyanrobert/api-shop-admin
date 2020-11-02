import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactWhereInput {
  @TypeGraphQL.Field(_type => [ContactWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ContactWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ContactWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ContactWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  number?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
    description: undefined
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  userId?: StringFilter | undefined;
}
