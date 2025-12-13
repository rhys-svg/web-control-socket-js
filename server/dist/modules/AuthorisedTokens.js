// Authorised Token Class
import { v7, validate } from 'uuid';
export class AuthorisedToken {
    //** This is the unique identifier known to the server */
    token;
    //** This is the lifetime of the token before it refreshes */
    lifetime;
    //** Token Database */
    constructor(token = '', lifetime = 3600) {
        this.token = token;
        this.lifetime = lifetime;
    }
    //** fff
    //  */
    generateUniqueTokens() {
        return v7();
    }
}
//# sourceMappingURL=AuthorisedTokens.js.map