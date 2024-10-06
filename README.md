# nimbasms-firebase
Firebase extensions for Nimba SMS API

**Author**: Nimba SMS (**[https://www.nimbasms.com](https://www.nimbasms.com)**)

**Description**: Sends a message using the Nimba SMS API based on the contents of a document written to a specified Cloud Firestore collection.

**Details**: Use this extension to send messages (SMS) using the [Nimba SMS Messaging API](https://developers.nimbasms.com) based on information from documents added to a specified Cloud Firestore collection.

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
| `to`   | The phone number you want to send the message to. |
| `sendername`   | The Sender Name for expeditor. |
| `message` | The body of the message                                                                                                                                         |


#### Additional setup

Before installing this extension, make sure:

* You have [set up a Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart) in your Firebase project

##### Sending SMS

* You will need a [Nimba SMS SenderName](https://www.nimbasms.com/app/campaigns/sender-names) that is capable of sending SMS messages


#### Billing
To install an extension, your project must be on the [Blaze (pay as you go) plan](https://firebase.google.com/pricing)

- You will be charged a small amount (typically around $0.01/month) for the Firebase resources required by this extension (even if it is not used).
- This extension uses other Firebase and Google Cloud Platform services, which have associated charges if you exceed the service’s free tier:
  - Cloud Firestore
  - Cloud Functions (Node.js 10+ runtime. [See FAQs](https://firebase.google.com/support/faq#extensions-pricing))
  - Cloud Secret Manager

Usage of this extension also requires you to have a [Nimba SMS Account](https://www.nimbasms.com/)



**Configuration Parameters:**

* Nimba SMS Account Sid: What is your Nimba SMS Account Sid? You can find in in your dashboard.

* Nimba SMS Auth Token: What is your Nimba SMS Auth Token? You can find it in your dashboard.

* Message documents collection: What is the path to the collection that contains the documents used to build and send the messages?


**Cloud Functions:**

* **sendMessage:** An HTTP Call Send Message with specifics params.

* **addContact:** An HTTP Call to save contact number to your Nimba SMS account.


**Access Required**:


This extension will operate with the following project IAM roles:

* datastore.user (Reason: Allows this extension to access Cloud Firestore to read and process added message documents.)
