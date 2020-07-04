import ApiResource from './ApiResource';
import Exception from "./Exception/Exception";
import Request from "./Request";

export default class Event extends ApiResource {
    static EVENT_CONVERSION = 'CONVERSION';
    static EVENT_OPPORTUNITY = 'OPPORTUNITY';
    static EVENT_OPPORTUNITY_WON = 'SALE';
    static EVENT_OPPORTUNITY_LOST = 'OPPORTUNITY_LOST';
    static EVENT_ORDER_PLACED = 'ORDER_PLACED';
    static EVENT_ORDER_PLACED_ITEM = 'ORDER_PLACED_ITEM';
    static EVENT_CART_ABANDONED = 'CART_ABANDONED';
    static EVENT_CART_ABANDONED_ITEM = 'CART_ABANDONED_ITEM';
    static EVENT_CHAT_STARTED = 'CHAT_STARTED';
    static EVENT_CHAT_FINISHED = 'CHAT_FINISHED';

    static CDP_FAMILY = 'CDP';

    /**
     * Standard Event Conversion
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * conversion_identifier            String  true    The name of the conversion event.
     * name	                            String  false   Name of the contact.
     * email                            String  true    Email of the contact.
     * job_title                        String  false   Job title of the contact.
     * state                            String  false   State of the contact.
     * city                             String  false   City of the contact.
     * country                          String  false   Country of the contact.
     * personal_phone                   String  false   Phone of the contact.
     * mobile_phone                     String  false   Mobile phone of the contact.
     * twitter                          String  false   Twitter handler of the contact.
     * facebook                         String  false   Facebook of the contact.
     * linkedin                         String  false   Linkedin of the contact.
     * website                          String  false   Website of the contact.
     * cf_custom_field_api_identifier   String  false   Custom field and its value related to the contact.
     *                                                  All custom fields available in RD Station Marketing account are valid on this payload,
     *                                                  and should be sent with the payload key being the the fields api identifier (cf_api_identifier)
     * company_name                     String  false   Company name of the contact.
     * company_site                     String  false   Company website of the contact.
     * company_address                  String  false   Company address of the contact.
     * client_tracking_id               String  false   LeadTracking client_id
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    conversion(payload) {
        return this.sendEvent(this.EVENT_CONVERSION, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Opportunity
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * funnel_name                     String  true     Name of the funnel to which the Contact should be marked as opportunity.
     * email	                       String  true     Email of the contact.
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    opportunity(payload) {
        return this.sendEvent(this.EVENT_OPPORTUNITY, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Opportunity Won (Sale)
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * funnel_name                     String  true     Name of the funnel to which the Contact should be marked as won.
     * email	                       String  true     Email of the contact.
     * value                           String  false    Value of the won opportunity.
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    opportunityWon(payload) {
        return this.sendEvent(this.EVENT_OPPORTUNITY_WON, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Opportunity lost
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * funnel_name                     String  true     Name of the funnel to which the Contact should be marked as lost.
     * email                           String  true     Lead email
     * reason                          String  false    Reason for why the Contact was marked as lost.
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    opportunityLost(payload) {
        return this.sendEvent(this.EVENT_OPPORTUNITY_LOST, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Order placed
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * cf_order_id                      String  true    Order identifier
     * name                             String  false   Name of the contact.
     * email                            String  true    Email of the contact.
     * cf_order_total_items             Integer false   Total number of itens from the order.
     * cf_order_status                  String  false   Status of the order to when the event was triggered
     * cf_order_payment_method          String  false   Method of payment. Available options: "Credit Card", "Debit Card", "Invoice", "Others"
     * cf_order_payment_amount          String  false   Total value of the order
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    orderPlaced(payload) {
        return this.sendEvent(this.EVENT_ORDER_PLACED, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Order placed item
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * cf_order_id                      String  true    Order identifier
     * name                             String  false   Name of the contact.
     * email                            String  true    Email of the contact.
     * cf_order_product_id              String  true    Product Identifier
     * cf_order_product_sku             String  false   Product SKU
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    orderPlacedItem(payload) {
        return this.sendEvent(this.EVENT_ORDER_PLACED_ITEM, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Cart abandoned
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * cf_cart_id                       String  true    Cart identifier
     * name                             String  false   Name of the contact.
     * email                            String  true    Email of the contact.
     * cf_cart_total_items              Integer false   Total number of itens from the cart.
     * cf_cart_status                   String  false   Status of the cart to when the event was triggered
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    cartAbandoned(payload) {
        return this.sendEvent(this.EVENT_CART_ABANDONED, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Cart item abandoned
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * cf_cart_id                       String	true	Cart identifier
     * name                             String	false	Name of the contact.
     * email                            String	true	Email of the contact.
     * cf_cart_product_id               String	true	Identifier of the product that was left on the cart.
     * cf_cart_product_sku              String	false	SKU of the product that was left on the cart
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    cartAbandonedItem(payload) {
        return this.sendEvent(this.EVENT_CART_ABANDONED_ITEM, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Chat started
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * chat_subject                     String  true    The subject of the chat.
     * name                             String  false   Name of the contact.
     * email                            String  true    Email of the contact.
     * job_title                        String  false   Job title of the contact.
     * personal_phone                   String  false   Phone of the contact.
     * mobile_phone                     String  false   Mobile phone of the contact.
     * twitter                          String  false   Twitter handler of the contact.
     * facebook                         String  false   Facebook of the contact.
     * linkedin                         String  false   Linkedin of the contact.
     * website                          String  false   Website of the contact.
     * cf_birthdate                     String  false   Bith date of the Contact
     * cf_gender                        String  false   Gender of the Contact.
     * chat_status                      String  false   Status of the chat.
     * chat_type                        String  false   Type of the chat.
     * company_site                     String  false   Company website of the contact.
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    chatStarted(payload) {
        return this.sendEvent(this.EVENT_CHAT_STARTED, this.CDP_FAMILY, payload);
    }

    /**
     * Standard Event Chat finished
     *
     * PAYLOAD FIELD NAMES             TYPE    REQ.
     * --------------------------------------------------------------------------------
     * chat_subject                     String  true    The subject of the chat.
     * name                             String  false   Name of the contact.
     * email                            String  true    Email of the contact.
     * job_title                        String  false   Job title of the contact.
     * personal_phone                   String  false   Phone of the contact.
     * mobile_phone                     String  false   Mobile phone of the contact.
     * twitter                          String  false   Twitter handler of the contact.
     * facebook                         String  false   Facebook of the contact.
     * linkedin                         String  false   Linkedin of the contact.
     * website                          String  false   Website of the contact.
     * cf_birthdate                     String  false   Bith date of the Contact
     * cf_gender                        String  false   Gender of the Contact.
     * chat_status                      String  false   Status of the chat.
     * chat_type                        String  false   Type of the chat.
     * company_site                     String  false   Company website of the contact.
     *
     * @param {Object} payload
     * @return {Object} JSON respone
     */
    chatFinished(payload) {
        return this.sendEvent(this.EVENT_CHAT_FINISHED, thus.CDP_FAMILY, payload);
    }

    /**
     * Send a general RD Station event
     *
     * @param {string} eventType
     * @param {string} eventFamily
     * @param {Object} payload
     * @return {Object} JSON response
     */
    sendEvent(eventType, eventFamily, payload) {
        const fields = {
            event_type: eventType,
            event_family: eventFamily,
            payload: payload
        };

        return this.request('POST', '/platform/events', fields);
    }
}