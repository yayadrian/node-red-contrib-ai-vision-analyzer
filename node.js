module.exports = (RED) => {
  const OpenAI = require("openai");
  const main = function (config) {
    RED.nodes.createNode(this, config);
    this.prompt = config.prompt || [];
    this.promptType = config.promptType || "str";
    this.Token = config.Token || "";
    const node = this;

    const openai = new OpenAI({
      apiKey: node.Token,
    });

    node.on("input", async (msg) => {
      node.status({ fill: "green", shape: "dot", text: "処理中..." });
      try {
        let prompt = "";
        RED.util.evaluateNodeProperty(
          node.prompt,
          node.promptType,
          node,
          msg,
          (err, value) => {
            if (err) {
              return;
            } else {
              prompt = value;
            }
          }
        );
        // url or base64
        let imageData = msg.payload;
        if (!msg.payload.startsWith("http")) imageData = `data:image/png;base64,${msg.payload}`;
        const messages = [
          {
            role: "system",
            content: "lang:ja"
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: prompt
              },
              {
                type: "image_url",
                image_url: {
                  url: imageData
                }
              }
            ]
          }
        ];
        const resp = await openai.chat.completions.create({
          model: 'gpt-4-vision-preview',
          max_tokens: 1024,
          messages
        })
        msg.payload = resp.choices[0].message.content;
        node.status({});
      } catch (error) {
        if (error.response) {
          node.status({
            fill: "red",
            shape: "dot",
            text: `${error.response.status}, ${JSON.stringify(
              error.response.data.error.message
            )}`,
          });
          msg.payload = `${error.response.status}, ${JSON.stringify(
            error.response.data.error.message
          )}`;
        } else {
          node.status({
            fill: "red",
            shape: "dot",
            text: `${error.type}, ${error.message}`,
          });
          msg.payload = `${error.type}, ${error.message}`;
        }
      }
      node.send(msg);
    });
  };

  RED.nodes.registerType("simple-gpt-vision", main);
};
