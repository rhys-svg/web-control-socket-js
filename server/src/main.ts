/**
 * 
 * Verson 0.0.10
 * 
 * The Socket Interactive Display system (or SID System).
 * 
 * This system is built for the Open Tenant System for helping business parks to have a interactive display on a tablet.
 * 
 * Licence: GNU 2.0
 * 
 */

import { AuthorisationClass } from "./classes/Authorisation.class.js";

const authModule = new AuthorisationClass();

authModule.createNewToken();