import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { SocialCreateWithoutAuthorInput } from "../inputs/SocialCreateWithoutAuthorInput";
import { SocialWhereUniqueInput } from "../inputs/SocialWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialCreateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [SocialCreateWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  create?: SocialCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SocialWhereUniqueInput[] | undefined;
}
