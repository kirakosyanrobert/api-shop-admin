import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOneWithoutCardInput } from "../inputs/UserCreateOneWithoutCardInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  cardType!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  lastFourDigit!: number;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutCardInput, {
    nullable: false,
    description: undefined
  })
  user!: UserCreateOneWithoutCardInput;
}
