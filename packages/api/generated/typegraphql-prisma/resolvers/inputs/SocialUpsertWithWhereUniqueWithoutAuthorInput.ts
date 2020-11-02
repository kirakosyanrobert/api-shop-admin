import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { SocialCreateWithoutAuthorInput } from "../inputs/SocialCreateWithoutAuthorInput";
import { SocialUpdateWithoutAuthorDataInput } from "../inputs/SocialUpdateWithoutAuthorDataInput";
import { SocialWhereUniqueInput } from "../inputs/SocialWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SocialWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SocialWhereUniqueInput;

  @TypeGraphQL.Field(_type => SocialUpdateWithoutAuthorDataInput, {
    nullable: false,
    description: undefined
  })
  update!: SocialUpdateWithoutAuthorDataInput;

  @TypeGraphQL.Field(_type => SocialCreateWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  create!: SocialCreateWithoutAuthorInput;
}
