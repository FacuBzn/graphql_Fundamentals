//type Query
export const typeDefs = `
    input UserID {
        uid: ID
    }
    
    type User {   
        id: ID     
        name: String!
        email: String
        address: String

    }

    type Role {
        name: String
    }

    type Query {
        users: [User]
        user: [User]
        roles: [Role]
    }
`;