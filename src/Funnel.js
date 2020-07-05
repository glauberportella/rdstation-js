export default class Funnel extends ApiResource {

    /**
     * Returns a list of Funnels associated to the given contact.
     * 
     * @param {string} uuid The unique uuid associated to RD Station Contact.
     * @param {string} funnelName The contact funnel name. For now, the only accepted option is: "default".
     * 
     * 
     * Response
     * 
     * Field|Type|Description
     * -----|----|-----------
     * lifecycle_stage | String | The stage in the funnel which the contact belongs to. Valid options: 'Lead', 'Qualified Lead' and 'Client'.
     * opportunity | Boolean | It indicates whether the contact is an opportunity or not in the funnel.
     * contact_owner_email | String | The email of the user responsible for the contact.
     * fit | Integer | The contact fit score in the current funnel.
     * interest | Integer | The contact interest score in the current funnel.

     */
    get(uuid, funnelName) {
        return this.request('GET', `/platform/contacts/${uuid}/funnels/${funnelName}`);
    }

    /**
     * Returns a list of Funnels associated to the given contact.
     * 
     * @param {string} email The email associated to RD Station Contact.
     * @param {string} funnelName The contact funnel name. For now, the only accepted option is: "default".
     * 
     * Response
     * 
     * Field|Type|Description
     * -----|----|-----------
     * lifecycle_stage | String | The stage in the funnel which the contact belongs to. Valid options: 'Lead', 'Qualified Lead' and 'Client'.
     * opportunity | Boolean | It indicates whether the contact is an opportunity or not in the funnel.
     * contact_owner_email | String | The email of the user responsible for the contact.
     * fit | Integer | The contact fit score in the current funnel.
     * interest | Integer | The contact interest score in the current funnel.
     */
    getByEmail(email, funnelName) {
        return this.request('GET', `/platform/contacts/email:${email}/funnels/${funnelName}`);
    }

    /**
     * Updates the funnel information about the current contact.
     * 
     * @param {string} uuid The unique uuid associated to RD Station Contact.
     * @param {string} funnelName The contact funnel name. For now, the only accepted option is: "default".
     * @param {Object} payload The request body parameters
     * 
     * Request Body Parameters
     * 
     * Field|Type|Description
     * -----|----|-----------
     * lifecycle_stage | String | The stage in the funnel which the contact belongs to. Valid options: 'Lead', 'Qualified Lead' and 'Client'.
     * opportunity | Boolean | It indicates whether the contact is an opportunity or not in the funnel.
     * contact_owner_email | String | The email of the user responsible for the contact. Can be defined as null for disassociate the current owner.
     * 
     * Response
     * 
     * Field|Error Type|Description
     * -----|----|-----------
     * lifecycle_stage | CANNOT_BE_NULL | lifecycle_stage cannot be null
     * lifecycle_stage | MUST_BE_STRING | lifecycle_stage must be string
     * lifecycle_stage | MUST_BE_LESS_THAN_OR_EQUAL | lifecycle_stage must less than or equal to 50
     * lifecycle_stage | MUST_BE_VALID_OPTION | invalid options for lifecycle_stage, the valid options are: 'Lead', 'Qualified Lead', 'Client'
     * opportunity | CANNOT_BE_NULL | opportunity cannot be null
     * opportunity | MUST_BE_BOOLEAN | opportunity must be boolean
     * contact_owner_email | MUST_BE_STRING | contact_owner_email must be string
     * contact_owner_email | MUST_BE_LESS_THAN_OR_EQUAL | contact_owner_email must less than or equal to 100
     * contact_owner_email | INVALID_EMAIL_FORMAT | contact_owner_email has an invalid format
     * contact_owner_email | INVALID_USER | The user {user} was not found in your account.
     */
    update(uuid, funnelName, payload) {
        return this.request('PUT', `/platforms/contacts/${uuid}/funnels/${funnelName}`, payload);
    }

    /**
     * Updates the funnel information about the current contact.
     * 
     * @param {string} email The contact email associated to RD Station Contact.
     * @param {string} funnelName The contact funnel name. For now, the only accepted option is: "default".
     * @param {Object} payload The request body parameters
     * 
     * Request Body Parameters
     * 
     * Field|Type|Description
     * -----|----|-----------
     * lifecycle_stage | String | The stage in the funnel which the contact belongs to. Valid options: 'Lead', 'Qualified Lead' and 'Client'.
     * opportunity | Boolean | It indicates whether the contact is an opportunity or not in the funnel.
     * contact_owner_email | String | The email of the user responsible for the contact. Can be defined as null for disassociate the current owner.
     * 
     * Response
     * 
     * Field|Error Type|Description
     * -----|----|-----------
     * lifecycle_stage | CANNOT_BE_NULL | lifecycle_stage cannot be null
     * lifecycle_stage | MUST_BE_STRING | lifecycle_stage must be string
     * lifecycle_stage | MUST_BE_LESS_THAN_OR_EQUAL | lifecycle_stage must less than or equal to 50
     * lifecycle_stage | MUST_BE_VALID_OPTION | invalid options for lifecycle_stage, the valid options are: 'Lead', 'Qualified Lead', 'Client'
     * opportunity | CANNOT_BE_NULL | opportunity cannot be null
     * opportunity | MUST_BE_BOOLEAN | opportunity must be boolean
     * contact_owner_email | MUST_BE_STRING | contact_owner_email must be string
     * contact_owner_email | MUST_BE_LESS_THAN_OR_EQUAL | contact_owner_email must less than or equal to 100
     * contact_owner_email | INVALID_EMAIL_FORMAT | contact_owner_email has an invalid format
     * contact_owner_email | INVALID_USER | The user {user} was not found in your account.
     */
    updateByEmail(email, funnelName, payload) {
        return this.request('PUT', `/platforms/contacts/email:${email}/funnels/${funnelName}`, payload);
    }
}