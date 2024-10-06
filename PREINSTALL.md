Use this extension to send messages (SMS) using the [Messaging API](https://developers.nimbasms.com) based on information from documents added to a specified Cloud Firestore collection. The extension will also record the delivery status of each message.

Adding a document triggers this extension to send a message built from the document's fields. The document's fields specify who to send the message to and the body of the message and can optionally define the number to send the message from.

Here's an example document that would trigger this extension:

```js
admin.firestore().collection('messages').add({
  to: ['+224623000000'],
  sendername: 'SMS 9080',
  message: 'Hello from Firebase!'
});
```

#### Required fields

| Field  | Description                                                                                                                                                     |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `to`   | The phone number or WhatsApp number you want to send the message to. Phone numbers should be in [e.164 format](https://www.twilio.com/docs/glossary/what-e164). |
| `body` | The body of the message                                                                                                                                         |

#### Additional setup

Before installing this extension, make sure:

* You have [set up a Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart) in your Firebase project
* You have [signed up for a Nimba SMS account](https://www.nimbasms.com)

##### Sending SMS

* You will need a [Nimba SMS SenderName](https://www.nimbasms.com/app/campaigns/sender-names) that is capable of sending SMS messages

Usage of this extension also requires you to have a [Nimba SMS Account](https://www.nimbasms.com/)
