import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
    type File {
        title: String!
        director: String!
    }

    type Query {
        files: [File]
    }
    `;

const files = [
    {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont'
    },
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola'
    }
];

controlers w REST - przekazują dane dalej

const resolvers = {
    Query: {
        files: () => files
    }
};

export const listen = async (port: number) => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
        listen: {
            port: port,
        }
    });
    console.log(`Server ready at ${url}`);
}
