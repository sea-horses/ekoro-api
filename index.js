const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const queriesResolvers = require('./queries/resolvers')
const queriesTypedef = require('./queries/typeDefs')
const mutationsResolvers = require('./mutations/resolvers')
const mutationsTypedef = require('./mutations/typeDefs')

const typeDefs = gql`
  ${queriesTypedef}
  ${mutationsTypedef}
`;

const resolvers = {
  ...queriesResolvers,
  ...mutationsResolvers,
};

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

const appPort = process.env.PORT || 4000

app.listen({ port: appPort }, () =>
  console.log(`🚀 Server ready at http://localhost:${appPort}${server.graphqlPath}`)
);
