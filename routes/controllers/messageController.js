const sendWhatsApp = require("../services/whatsapp");
const openai = require("../services/openai");

exports.handleMessage = async (req, res) => {
  try {
    const entry = req.body.entry?.[0];
    const changes = entry?.changes?.[0];
    const message = changes?.value?.messages?.[0];

    if (!message || !message.text) {
      return res.sendStatus(200);
    }

    const userText = message.text.body;
    const userNumber = message.from;

    const reply = await openai.generateReply(userText);

    await sendWhatsApp(userNumber, reply);

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
