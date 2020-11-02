import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MetaUpdatelanguagesInput {
  @TypeGraphQL.Field(_type => [String], {
    nullable: false,
    description: undefined
  })
  set!: string[];
}
