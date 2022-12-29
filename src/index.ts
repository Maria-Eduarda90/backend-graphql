import { ApolloServer } from 'apollo-server';
import { schema } from './schema/schema';

async function main(){
    const server = new ApolloServer({
        schema
    });

    const { url } = await server.listen();
    console.log(`server running on ${url}`)
}

main()