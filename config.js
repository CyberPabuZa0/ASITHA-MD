const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=PjgSnITR#j9RQalRwhSknK1ND6Mo6gidFVRZtlDPd-YWSNCxMAnI",
MONGODB: process.env.MONGODB || "mongodb+srv://pabasara:pabasara@123@cluster0.om16l.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
