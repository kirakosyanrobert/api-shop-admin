import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactScalarWhereInput {
  @TypeGraphQL.Field(_type => [ContactScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ContactScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ContactScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ContactScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  userId?: StringFilter | undefined;
}
