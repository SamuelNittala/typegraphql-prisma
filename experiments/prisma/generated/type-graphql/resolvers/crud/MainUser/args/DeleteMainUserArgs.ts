import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMainUserArgs {
  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;
}
