/**
 * 
 * This section of the code is going to handle all the authentication of the system. 
 * 
 * We would need a system/database to ensure that the tokens are kept secure.
 * 
 */

import * as dotenv from 'dotenv';
dotenv.config();

/**
 * AuthorisationClass is the class that is initiated when the server starts and is used to authenticated and approve connections.
 * 
 * @beta
 */
export class AuthorisationClass {
    saltKey: string | undefined;

    constructor (saltKey = process.env.SALTKEY) {
        this.saltKey = saltKey;
    }

    //#region Token Creation, Suspension, Deletion

    /**
     * Create a new Token that is valid for the socket.io connection. By Default, if any connection trys, it will be in a limbo until a admin
     * approves the token. However, this token will be sent back to the client.
     * 
     * Read more at https://otsproject.org.uk/docs/SID/server/tokens/createNewToken
     */
    public createNewToken(): string {
        
        // First check if the saltKey is not empty.
        if (this.saltKey == "" || this.saltKey == null || this.saltKey.length < 0) throw Error('Salt Key is missing in the enviroment.');

        // TODO: Build the token generation script for the system.
        // ? Possible to use Pocketbase as the backend for this system. Provides persistant storage and also databases (inc. logs);
        // ? or use Appwrite and have a central database.
        console.log('Key Present')

        return "";
    }

    //#endregion
}