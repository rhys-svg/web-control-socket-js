// Authorised Token Class

import { v7, validate } from 'uuid';


export class AuthorisedToken {
    //** This is the unique identifier known to the server */
    token: string;
    //** This is the lifetime of the token before it refreshes */
    lifetime: number = 3600;
    //** Token Database */
    


    constructor(token: string = '', lifetime: number = 3600) {
        this.token = token;
        this.lifetime = lifetime;
    }

    //** fff
    //  */
    generateUniqueTokens(): string {
        return v7();
    }
}