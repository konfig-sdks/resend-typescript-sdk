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
 * @interface Tag
 */
export interface Tag {
    /**
     * The name of the email tag. It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters.
     * @type {string}
     * @memberof Tag
     */
    'name'?: string;
    /**
     * The value of the email tag.It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters.
     * @type {string}
     * @memberof Tag
     */
    'value'?: string;
}

