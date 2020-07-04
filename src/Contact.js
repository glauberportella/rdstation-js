import Request from './Request';

export default class Contact extends ApiResource {
    /**
     * Get contact by UUID
     * 
     * @param {string} uuid The unique uuid associated to each RD Station Contact.
     * @return {Object} API Response
     * 
     * Response
     * 
     * Field | Type | Description
     * ------|------|------------
     * uuid| String | The unique uuid associated to each RD Station Contact.
     * name| String | Name of the Contact.
     * email| String | Email of the Contact.
     * bio | String | Notes about the Contact.
     * website |String | Website of the Contact.
     * job_title|String|Job title of the Contact.
     * personal_phone|String|Phone of the Contact.
     * mobile_phone|String|Mobile phone of the Contact.
     * city|String|City of the Contact.
     * state|String|State of the Contact.
     * country|String|Country of the Contact.
     * twitter|String|Twitter of the Contact.
     * facebook|String|Facebook of the Contact.
     * linkedin|String|Linkedin of the Contact.
     * tags|ArrayStrings|Tags of the Contact.
     * extra_emails|ArrayStrings|Extra emails of the Contact.
     * legal_bases|ArrayObjects|Legal Bases of the Contact. 
     */
    get(uuid) {
        return this.request('GET', `/platform/contacts/${uuid}`);
    }

    /**
     * Get contact by email
     * 
     * @param {string} email The primary e-mail associated to a RD Station Contact.
     * @return {Object} API Response
     * 
     * Response
     * 
     * Field | Type | Description
     * ------|------|------------
     * uuid | String | The unique uuid associated to each RD Station Contact.
     * name | String | Name of the Contact.
     * email | String | Email of the Contact.
     * bio | String | Notes about the Contact.
     * website | String | Website of the Contact.
     * job_title | String | Job title of the Contact.
     * personal_phone | String | Phone of the Contact.
     * mobile_phone | String | Mobile phone of the Contact.
     * city | String | City of the Contact.
     * state | String | State of the Contact.
     * country | String | Country of the Contact.
     * twitter | String | Twitter of the Contact.
     * facebook | String | Facebook of the Contact.
     * linkedin | String | Linkedin of the Contact.
     * tags | ArrayStrings | Tags of the Contact.
     * extra_emails | ArrayStrings | Extra emails of the Contact.
     * legal_bases | ArrayObjects | Legal Bases of the Contact.
     */
    getByEmail(email) {
        return this.request('GET', `/platform/contacts/email:${email}`);
    }

    /**
     * Updates the properties of a Contact
     * 
     * @param {string} uuid The unique uuid associated to each RD Station Contact.
     * @param {Object} payload Request Body parameters
     * @return {Object} API Response
     * 
     * 
     * Request Body Default parameters
     * 
     * Field | Type | Description
     * ------|------|------------
     * email | String | Email of the Contact
     * name | String | Name of the Contact
     * bio | String | Notes about the Contact.
     * job_title | String | Job title of the Contact
     * linkedin | String | Linkedin profile of the Contact
     * facebook | String | Facebook profile of the Contact
     * city | String | City of the Contact.
     * state | String | State of the Contact.
     * country | String | Country of the Contact.
     * twitter | String | Twitter profile of the Contact
     * personal_phone | String | Personal phone of the Contact
     * mobile_phone | String | Mobile phone number of the Contact
     * website | String | Website of the Contact
     * tags | ArrayStrings | Tags of the Contact
     * legal_bases | ArrayObjects | Legal Bases of the Contact.
     * 
     * 
     * Request Custom Fields parameters
     * 
     * When updating the custom fields information, 
     * the attribute keys should be sent as the API name of the custom field. 
     * The custom field value should also be adequated accordingly to the field's type.
     * 
     * Field | Type | Description
     * ------|------|------------
     * cf_text_field | String | Custom field of type text.
     * cf_text_area | String | Custom field of type text area.
     * cf_multiple_choice | ArrayStrings | Custom field of type multiple choice.
     * cf_radio_button | String | Custom field of type radio button.
     * cf_number | Integer | Custom field of type number.
     * cf_url | String | Custom field of type URL.
     * cf_telephone | String | Custom field of type telephone.
     * cf_email | String | Custom field of type email.
     * cf_checkbox | Boolean | Custom field of type checkbox.
     * cf_combobox | String | Custom field of type combobox.
     * 
     * 
     * Response
     * 
     * Field | Type | Description
     * ------|------|------------
     * uuid | String | The unique uuid associated to each RD Station Contact.
     * name | String | Name of the Contact.
     * email | String | Email of the Contact.
     * bio | String | Notes about the Contact.
     * website | String | Website of the Contact.
     * job_title | String | Job title of the Contact.
     * personal_phone | String | Phone of the Contact.
     * mobile_phone | String | Mobile phone of the Contact.
     * city | String | City of the Contact.
     * state | String | State of the Contact.
     * country | String | Country of the Contact.
     * twitter | String | Twitter of the Contact.
     * facebook | String | Facebook of the Contact.
     * linkedin | String | Linkedin of the Contact.
     * tags | ArrayStrings | Tags of the Contact.
     * extra_emails | ArrayStrings | Extra emails of the Contact.
     * legal_bases | ArrayObjects | Legal Bases of the Contact.
     * 
     * 
     * Legal Bases
     * 
     * Field | Type | Description
     * ------|------|------------
     * category | String | data_processing or communications
     * type | String | pre_existent_contract, consent, legitimate_interest, judicial_process, vital_interest or public_interest
     * status | String | granted or declined (only when category is communications) 
     */
    update(uuid, payload) {
        return this.request('PATCH', `/platform/contacts/${uuid}`, payload);
    }

    /**
     * Upsert contact
     * 
     * With an UPSERT like behavior, this method is capable of both updating the 
     * properties of a Contact or creating a new Contact. 
     * Whatever is used as an identifier cannot appear in the request payload as a field. 
     * This will result in a BAD_REQUEST error.
     * 
     * @param {string} identifier The api_identifier of the Contact Field that uniquely identifies the Lead. Currently only email or uuid are supported
     * @param {string} value The value for the given identifier e.g. contact@example.org or 5408c5a3-4711-4f2e-8d0b-13407a3e30f3
     * @param {Object} payload The Request body parameters
     * @return {Object} API Response
     * 
     * 
     * Request Body Default Parameters
     * 
     * Field | Type | Description
     * ------|------|------------
     * email | String | Email of the Contact
     * name | String | Name of the Contact
     * bio | String | Notes about the Contact.
     * job_title | String | Job title of the Contact
     * linkedin | String | Linkedin profile of the Contact
     * facebook | String | Facebook profile of the Contact
     * city | String | City of the Contact.
     * state | String | State of the Contact.
     * country | String | Country of the Contact.
     * twitter | String | Twitter profile of the Contact
     * personal_phone | String | Personal phone of the Contact
     * mobile_phone | String | Mobile phone number of the Contact
     * website | String | Website of the Contact
     * tags | ArrayStrings | Tags of the Contact
     * legal_bases | ArrayObjects | Legal Bases of the Contact.
     * 
     * 
     * Request Custom Fields parameters
     * 
     * When updating the custom fields information, 
     * the attribute keys should be sent as the API name of the custom field. 
     * The custom field value should also be adequated accordingly to the field's type.
     * 
     * Field | Type | Description
     * ------|------|------------
     * cf_text_field | String | Custom field of type text.
     * cf_text_area | String | Custom field of type text area.
     * cf_multiple_choice | ArrayStrings | Custom field of type multiple choice.
     * cf_radio_button | String | Custom field of type radio button.
     * cf_number | Integer | Custom field of type number.
     * cf_url | String | Custom field of type URL.
     * cf_telephone | String | Custom field of type telephone.
     * cf_email | String | Custom field of type email.
     * cf_checkbox | Boolean | Custom field of type checkbox.
     * cf_combobox | String | Custom field of type combobox.
     * 
     * 
     * Response
     * 
     * Field | Type | Description
     * ------|------|------------
     * uuid | String | The unique uuid associated to each RD Station Contact.
     * name | String | Name of the Contact.
     * email | String | Email of the Contact.
     * bio | String | Notes about the Contact.
     * website | String | Website of the Contact.
     * job_title | String | Job title of the Contact.
     * personal_phone | String | Phone of the Contact.
     * mobile_phone | String | Mobile phone of the Contact.
     * city | String | City of the Contact.
     * state | String | State of the Contact.
     * country | String | Country of the Contact.
     * twitter | String | Twitter of the Contact.
     * facebook | String | Facebook of the Contact.
     * linkedin | String | Linkedin of the Contact.
     * tags | ArrayStrings | Tags of the Contact.
     * extra_emails | ArrayStrings | Extra emails of the Contact.
     * legal_bases | ArrayObjects | Legal Bases of the Contact.
     * 
     * 
     * Legal Bases
     * 
     * Field | Type | Description
     * ------|------|------------
     * category | String | data_processing or communications
     * type | String | pre_existent_contract, consent, legitimate_interest, judicial_process, vital_interest or public_interest
     * status | String | granted or declined (only when category is communications) 
     */
    upsert(identifier, value, payload) {
        return this.request('PATCH', `/platform/contacts/${identifier}:${value}`, payload);
    }
}