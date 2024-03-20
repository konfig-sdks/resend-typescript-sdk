/*
Resend

Resend is the email platform for developers.

The version of the OpenAPI document: 1.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CreateDomainRequest
 */
export interface CreateDomainRequest {
    /**
     * The name of the domain you want to create.
     * @type {string}
     * @memberof CreateDomainRequest
     */
    'name': string;
    /**
     * The region where emails will be sent from. Possible values are us-east-1\' | \'eu-west-1\' | \'sa-east-1
     * @type {string}
     * @memberof CreateDomainRequest
     */
    'region'?: CreateDomainRequestRegionEnum;
}

type CreateDomainRequestRegionEnum = 'us-east-1' | 'eu-west-1' | 'sa-east-1'


