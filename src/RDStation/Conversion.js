import Request from "./Request";

export default class Conversion {
    constructor(apikey) {
        super();
        this.apikey = apikey
    }

    /**
     * Request body payload
     *
     * Field | Type | Required | Description
     * ------|------|----------|------------
     * conversion_identifier | String | true | The name of the conversion event.
     * name | String | false | Name of the contact.
     * email | String | true | Email of the contact.
     * job_title | String | false | Job title of the contact.
     * state | String | false | State of the contact.
     * city | String | false | City of the contact.
     * country | String | false | Country of the contact.
     * personal_phone | String | false | Phone of the contact.
     * mobile_phone | String | false | Mobile phone of the contact.
     * twitter | String | false | Twitter handler of the contact.
     * facebook | String | false | Facebook of the contact.
     * linkedin | String | false | Linkedin of the contact.
     * website | String | false | Website of the contact.
     * company_name | String | false | Company name of the contact.
     * company_site | String | false | Company website of the contact.
     * company_address | String | false | Company address of the contact.
     * client_tracking_id | String | false | Value of a '_rdtrk' cookie. (e.g: 43b00843-09af-4fae-bf9d-a0697640b808)
     * traffic_source | String | false | This can either be the value of a '__trf.src' cookie (base 64 encoded or not) or an UTM source param. If passing a cookie the following fields MUST be empty: traffic_medium, traffic_campaign and traffic_value.
     * traffic_medium | String | false | UTM medium param.
     * traffic_campaign | String | false | UTM campaign param.
     * traffic_value | String | false | UTM value param (term).
     * tags | Array of Strings | false | Tags that can be added to the contact.
     * available_for_mailing | Boolean | false | Enable/disable receive emails.
     * cf_custom_field_name* | String | false | Custom field created in RDSM and its value related to the contact.
     *
     *
     * * All custom fields available in RD Station Marketing account are valid on this payload. They should be sent using the prefix "cf_" plus the field name, for instance: cf_age.
     *
     * @param {Object} payload The conversion payload
     *
     * return {*} Response
     */
    send(payload = {}) {
        return Request.send('POST', `/platform/conversions?api_key=${this.apikey}`, {
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload
        });
    }
}
