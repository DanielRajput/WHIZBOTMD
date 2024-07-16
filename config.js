const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "KINGB2KOFFICIAL@GMAIL.COM";
global.location = "DELHI, INDIA";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "ASIA/KOLKATA";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";"919654970780"
global.sudo = process.env.SUDO || "919654970780";"918512849649"
global.owner = process.env.OWNER_NUMBER || "919654970780";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "false";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18763351214";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhRdWlFY0RlTWQ2SDJvRnZZSkdRZVA4MG5ScVZNVGVPVC9lS0E0S2tFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzJlYVFMSElLNCt6a0swOXpNdUtITjdwS0ErTUplanRJQjVaOVBlSE1oRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSk1malY1ZG9xWlZYczUxelpFMUJQYXFXRFZwYlRuVFVNTWlFblYxb0VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRWRQSHA5MGdSckpNa0JvdWFpL21hVHdoekNsMEYxTDFxL21LRDI1NkJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGNmIxWFVmZWMwd21zWHFVUjYzSE04RXVrWDNzdXF5NE9ta0l1R3RXV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZRdGFsWjFZZXlISXNWS2ZQWUtpdDJocVBncGxhcjJyN2RaYld2dXorVlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUduNXlxbXBMU3RrYmNNbFBTRmQ2U1M0OEZDM2lkYmp5RmRrcnBkSW0yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHhOYXBkUDh3WHZrUGM0ZkNEY0pFcndTVkNOUlp4RjYxK2RzZVB2TTh4MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtodFczT2lUY0tkdE1ZQkZFOWxEUDN5eS9XbjZSYWtCVXc1MnFTSkFvWGlOc0J3WnQyTHBFajlUb09zQlcwVkJ3ZWxLSWIzRTBxWTE3cklRc1RyVmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IktWRnBYcVc1cHJRSjkrL3o1M0d1a0VuQ3BWVGlmSDZCYVg3eldjaU5WdDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im94MzN0c0dlUS1Db0QtMXRkdy1UbFEiLCJwaG9uZUlkIjoiOTI5Y2NmMGItYzVkNy00OTQwLTg5NmYtOWFkYzljOWMyNzE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkExMUxVNW9TTFBxeXVYWWRPL01PT0xlek92Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5djVSNmwvKzR1bStkbmdqZFhBdkxTbnhSOG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlI1QVE2RE4iLCJtZSI6eyJpZCI6IjkxNzY5OTkxNzA4ODozOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVQyK01ZRkVNYVEyclFHR0JvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWGNLVTZlZVJFUHY0Ynk5UldTK1U3ampHcWxkcE5ETEdjV3MzUUtSbHIwYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM1JhNXNxMno2SDBJOWF0OXE4V1EzN2dFcjFjaG1JSlF3WXJ2bWdXU2N0d3RhRWdFcEJnU215SmtXdWJWRGM0bWphQlllMzhMR2pQNWRWZzdXWFdPQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IitibEVFZlZDakRNUkJyRVJ0RUxtQWJueG41c1pYdWdYRUJIcUgxU0VYTFJUWTAzUDAwcWlpaTNoT2lMUFROQ2k0TWhNb01FS0JtSk1rcXF2eVRRQWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3Njk5OTE3MDg4OjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlYzQ2xPbm5rUkQ3K0c4dlVWa3ZsTzQ0eHFwWGFUUXl4bkZyTjBDa1phOUgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjExNDEzMzEsIm15QXBwU3RhdGVLZXlJZCI6IkFCZ0FBTldqIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ POWDERED BY WHIZBO AND KING B2K ✓",
  author: process.env.PACK_AUTHER || "",
  packname: process.env.PACK_NAME || "KING B2K ✓",
  botname: process.env.BOT_NAME || "KING B2K ✓",
  ownername: process.env.OWNER_NAME || "KING BOTS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
