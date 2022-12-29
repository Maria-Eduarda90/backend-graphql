import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../models/User';
import crypto from 'crypto';

@Resolver()
export class UserResolver {
    private data: User[] = [];

    @Query(() => [User])
    async users(){
        return this.data;
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string,
        @Arg('email') email: string,
        @Arg('password') password: string
    ){
        const user = {
            id: crypto.randomUUID(),
            name,
            email,
            password
        }

        this.data.push(user);

        return user;
    }
}