import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorCreateOneWithoutSocialsInput } from "../inputs/AuthorCreateOneWithoutSocialsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  media!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  profileLink!: string;

  @TypeGraphQL.Field(_type => AuthorCreateOneWithoutSocialsInput, {
    nullable: false,
    description: undefined
  })
  author!: AuthorCreateOneWithoutSocialsInput;
}
