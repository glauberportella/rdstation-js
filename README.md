# RD Station Javascript library for API integration

Single lib to allow RDStation integration on Javascript ES2015 projects.

## Installation

```
npm install rdstation
```

## Use

For the current version only Event conversions can be done.

See RD Station docs for fields to pass on each event method.

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