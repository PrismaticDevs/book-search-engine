const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User:  {
    _id: ID!
    username: String!
    email: String
    savedBooks: [String]
    bookCount: Int
}
type Auth: {
    token: ID!
    user: User
}
type book {
    bookId: ID!
    authors: [String]
    description: String!
    image: Sting
    link: String
    title: String!
}
type bookInput {

}
type Query: {
    me: User
}
type Mutation: {
   addUser(username: String!, email: String!, password: String!): Auth
   login( email: String!, password: String!): Auth 
}
`;
