### See it in action

You can test out this extension right away!

1.  Go to your [Cloud Firestore dashboard](https://console.firebase.google.com/project/${param:PROJECT_ID}/firestore/data) in the Firebase console.

2.  If it doesn't already exist, create the collection you specified during installation: `${param:MESSAGE_COLLECTION}`.

3.  Add a document with a `to` field and a `body` field with the following content:

    ```js
    to: ["YOUR_PHONE_NUMBER"],
    sendername: "SENDER_NAME",
    body: "Hello from Firebase!"
    ```

**Note:** You can also use the [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) to add a document:

```js
admin
  .firestore()
  .collection("${param:MESSAGE_COLLECTION}")
  .add({
    to: ["YOUR_PHONE_NUMBER"],
    sendername: "SENDER_NAME",
    message: "Hello from Firebase!"
  })
  .then(() => console.log("Queued message for delivery!"));
```

### Using this extension

After its installation, this extension monitors all document writes to the `${param:MESSAGE_COLLECTION}` collection. Messages are delivered based on the contents of the document's fields. The document's fields specify who to send the message to and the body of the message and can optionally define the number to send the message from.



### Monitoring

As a best practice, you can [monitor the activity](https://firebase.google.com/docs/extensions/manage-installed-extensions#monitor) of your installed extension, including checks on its health, usage, and logs.
