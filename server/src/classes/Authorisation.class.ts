/**
 * 
 * This section of the code is going to handle all the authentication of the system. 
 * 
 * We would need a system/database to ensure that the tokens are kept secure.
 * 
 */

/**
 * AuthorisationClass is the class that is initiated when the server starts and is used to authenticated and approve connections.
 * 
 * @beta
 */
class AuthorisationClass {
    saltKey: string | undefined;

    constructor (saltKey: string) {
        this.saltKey: String = saltKey;
    }
}