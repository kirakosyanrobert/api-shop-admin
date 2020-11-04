import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { MetaCreatelanguagesInput } from "../inputs/MetaCreatelanguagesInput";
import { ProductCreateOneWithoutMetaInput } from "../inputs/ProductCreateOneWithoutMetaInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MetaCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  publisher!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  isbn!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  edition!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  country!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  numberOfReader!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  numberOfPage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  samplePDF!: string;

  @TypeGraphQL.Field(_type => MetaCreatelanguagesInput, {
    nullable: true,
    description: undefined
  })
  languages?: MetaCreatelanguagesInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOneWithoutMetaInput, {
    nullable: false,
    description: undefined
  })
  product!: ProductCreateOneWithoutMetaInput;
}
