import * as TypeGraphQL from "type-graphql";

export enum SocialDistinctFieldEnum {
  id = "id",
  media = "media",
  profileLink = "profileLink",
  authorId = "authorId"
}
TypeGraphQL.registerEnumType(SocialDistinctFieldEnum, {
  name: "SocialDistinctFieldEnum",
  description: undefined,
});
