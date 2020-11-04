import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialScalarWhereInput {
  @TypeGraphQL.Field(_type => [SocialScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SocialScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SocialScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SocialScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  media?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  profileLink?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  authorId?: StringFilter | undefined;
}
