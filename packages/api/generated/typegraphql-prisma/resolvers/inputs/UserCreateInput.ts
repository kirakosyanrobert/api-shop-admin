import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AddressCreateManyWithoutUserInput } from "../inputs/AddressCreateManyWithoutUserInput";
import { CardCreateManyWithoutUserInput } from "../inputs/CardCreateManyWithoutUserInput";
import { ContactCreateManyWithoutUserInput } from "../inputs/ContactCreateManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  image!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  password!: string;

  @TypeGraphQL.Field(_type => AddressCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  addresses?: AddressCreateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ContactCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  contacts?: ContactCreateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CardCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  card?: CardCreateManyWithoutUserInput | undefined;
}
