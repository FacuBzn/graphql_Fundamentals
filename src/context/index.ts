import { UsersAPI } from "../datasource/users.data"

export interface MyContext {

    dataSources:{
        usersAPI : UsersAPI;
    };

}