const { decode } = require("html-entities");
exports.def = {
  usage: ["mediafire"],
  hidden: ["mf"],
  use: "link",
  category: "downloader",
  async: async (m, { client, args, isPrefix, command }) => {
    try {
      console.log('tes')
    } catch {
      return client.reply(m.chat, global.status.error, m);
    }
  },
  error: false,
  limit: true,
  cache: true,
  location: __filename,
};
