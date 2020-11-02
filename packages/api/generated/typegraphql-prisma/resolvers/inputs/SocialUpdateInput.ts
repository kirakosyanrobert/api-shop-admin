import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorUpdateOneRequiredWithoutSocialsInput } from "../inputs/AuthorUpdateOneRequiredWithoutSocialsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  media?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  profileLink?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorUpdateOneRequiredWithoutSocialsInput, {
    nullable: true,
    description: undefined
  })
  author?: AuthorUpdateOneRequiredWithoutSocialsInput | undefined;
}
