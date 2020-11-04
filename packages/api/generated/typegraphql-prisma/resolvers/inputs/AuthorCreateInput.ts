import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateOneWithoutAuthorInput } from "../inputs/ProductCreateOneWithoutAuthorInput";
import { SocialCreateManyWithoutAuthorInput } from "../inputs/SocialCreateManyWithoutAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AuthorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  avatar!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  bio!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  website!: string;

  @TypeGraphQL.Field(_type => SocialCreateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  socials?: SocialCreateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOneWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  product!: ProductCreateOneWithoutAuthorInput;
}
