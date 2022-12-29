import path from "path";
import { buildSchema } from "type-graphql";

export const schema = await buildSchema({
  resolvers: [],
  emitSchemaFile: path.resolve(__dirname, "schema.gql"),
});
