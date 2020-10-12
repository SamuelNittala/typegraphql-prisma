import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: true,
})
export class CategoryAvgAggregateOutputType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  number!: number;
}
