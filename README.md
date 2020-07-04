# RD Station Javascript library for API integration

Single lib to allow RDStation integration on Javascript ES2015 projects.

## Installation

```
npm install rdstation
```

## Features

- Contacts: class to work with RDStation Contact resource (the core Contact central resource)
- Events: class to work with RDStation Event resource (opportunities, ecommerce carts, chats, etc)

## Contacts

RDStation Developer documentation:

[https://developers.rdstation.com/pt-BR/reference/contacts](https://developers.rdstation.com/pt-BR/reference/contacts)

```javascript
import { Authentication, Contact } from 'rdstation';

const clientId = 'Your RDStation app client id';
const clientSecret = 'Your RDStation app client secret';
const authCode = 'Code returned on callback'

const auth = new Authentication(clientId, clientSecret);
const accessToken = auth.getAccessToken(authCode);

const contact = new Contact(accessToken);

// Get by UUID
const response = contact.get('5408c5a3-4711-4f2e-8d0b-13407a3e30f3');

// Get by Email
const response = contect.getByEmail('contact@example.org');

// Update a contact (by UUID)
const response = contact.update('5408c5a3-4711-4f2e-8d0b-13407a3e30f3', {
    // fields of request body according to RDStation documentation
});

// Upsert a contact (bt UUID identifier)
const response = contact.upsert('uuid', '5408c5a3-4711-4f2e-8d0b-13407a3e30f3', {
    // fields of request body according to RDStation documentation
});

// Upsert a contact (by email identifier)
const response = contact.upsert('email', 'contact@example.org', {
    // fields of request body according to RDStation documentation
});

```

## Events

RDStation Developer documentation:

[https://developers.rdstation.com/pt-BR/reference/events](https://developers.rdstation.com/pt-BR/reference/events)

```javascript

import { Authentication, Event } from 'rdstation';

const clientId = 'Your RDStation app client id';
const clientSecret = 'Your RDStation app client secret';
const authCode = 'Code returned on callback'

const auth = new Authentication(clientId, clientSecret);
const accessToken = auth.getAccessToken(authCode);

const event = new Event(accessToken);

// Basic conversions
let response = event.conversion({
    email: 'lead@email',
    name: 'Lead Name',
    tags: ['lead', 'tags']
});

// Opportunity
let response = event.opportunity({
    funnel_name: 'default',
    email: 'lead@email',
});

// Opportunity Won (Sale)
let response = event.opportunityWon({
    funnel_name: 'default',
    email: 'lead@email',
    value: 100.50
});

// Opportuniy lost
let response = event.opportunityLost({
    funnel_name: 'default',
    email: 'lead@email',
    value: 'lost reason'
});

// Order placed (Ecommerce order)
let response = event.orderPlaced({
    name: 'Lead name',
    email: 'lead@email',
    cf_order_id: 'ORDER ID',
    cf_order_payment_amount: 200.00
});

// Order specific item placed
let response = event.orderPlacedItem({
    // ... see fieds on RD Docs
});

// Cart abandoned
let response = event.cartAbandoned({
    // ... se fieds on RD Docs
});

// Cart abandoned item
let response = event.cartAbandonedItem({
    // ... se fieds on RD Docs
});

// Chat started
let response = event->chatStarted({
    // ... se fieds on RD Docs
});

// Chart finished
let response = event->chartFinished({
    // ... se fieds on RD Docs
});
```

## TODO

- Needs automated tests
- Add other types of resources
- Please help improve