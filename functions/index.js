const functions = require("firebase-functions");
const NimbaSMS = require("nimbasms");


exports.sendMessage = functions.https.onRequest(async (req, res) => {
  const sid = process.env.NIMBASMS_ACCOUNT_SID;
  const secretKey = process.env.NIMBASMS_AUTH_TOKEN;
  const phoneNumber = req.body.to;
  const message = req.body.message;
  const senderId = req.body.sendername;

  if (!sid || !secretKey || !message || !senderId) {
    res.status(400).send("Des informations sont manquantes.");
    return;
  }

  const client = new NimbaSMS.Client({
      SERVICE_ID: sid,
      SECRET_TOKEN: secretKey,
  });
  const body = {
    to: [phoneNumber],
    message: message,
    sender_name: senderId,
  }

  client.messages.create(body).then(message => {
      console.log(`A new message has been sent : `, message);
      res.status(200).send({ success: true, result: message });
  }).catch(error => {
      console.error("Erreur lors de l'envoi du SMS:", error);
      res.status(500).send({ success: false, error: error.message });
  });

});


exports.addContact = functions.https.onRequest(async (req, res) => {
  const sid = process.env.NIMBASMS_ACCOUNT_SID;
  const secretKey = process.env.NIMBASMS_AUTH_TOKEN;
  const name = req.body.name;
  const numero = req.body.numero;
  const groups = req.body.groups;

  if (!apiKey || !name || !phoneNumber) {
    res.status(400).send("Des informations sont manquantes.");
    return;
  }

  const client = new NimbaSMS.Client({
      SERVICE_ID: sid,
      SECRET_TOKEN: secretKey,
  });
  const nimbaSMSClient = new NimbaSMS.Client(client);

  const body = {
      numero: numero,
      name: name,
      groups: groups,
  }

  client.contacts.create(body).then(contact => {
      console.log(`A contact has been added :`, contact);
      res.status(200).send({ success: true, result: contact });
  }).catch(error => {
      console.error("Erreur lors de l'ajout du contact:", error);
      res.status(500).send({ success: false, error: error.message });
  });

});
