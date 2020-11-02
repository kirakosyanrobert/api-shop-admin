import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CardUpdateManyMutationInput } from "../../../inputs/CardUpdateManyMutationInput";
import { CardWhereInput } from "../../../inputs/CardWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCardArgs {
  @TypeGraphQL.Field(_type => CardUpdateManyMutationInput, { nullable: false })
  data!: CardUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CardWhereInput, { nullable: true })
  where?: CardWhereInput | undefined;
}
