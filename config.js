const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23288196758";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_13_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgODAsXG4gICAgICAgIDgwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzLFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklYV2RLWlFLZHRSc0JKZTgxRVVzcG16c25vSGp0ZUhpK3Z4YnhuZVZvSzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5vQ2JLN3NhVGFLNkVmN3ljdWdJRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzAwN2JjNDAtZjZkNy00MzQ5LTg1MzQtZDQwMjU3ZDA2YmVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NixcbiAgICAgIDkzLFxuICAgICAgMTk5LFxuICAgICAgMTAsXG4gICAgICAyMzQsXG4gICAgICAyMTYsXG4gICAgICA5NCxcbiAgICAgIDI0OSxcbiAgICAgIDIxMyxcbiAgICAgIDIwMSxcbiAgICAgIDE4MyxcbiAgICAgIDM2LFxuICAgICAgODYsXG4gICAgICAyMixcbiAgICAgIDYwLFxuICAgICAgMjAyLFxuICAgICAgMTk5LFxuICAgICAgODcsXG4gICAgICA5MSxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDcwLFxuICAgICAgNzMsXG4gICAgICAyMjgsXG4gICAgICAxMTQsXG4gICAgICAyNCxcbiAgICAgIDQsXG4gICAgICA5MyxcbiAgICAgIDEsXG4gICAgICA4OSxcbiAgICAgIDI3LFxuICAgICAgMTg2LFxuICAgICAgOTksXG4gICAgICAyMjAsXG4gICAgICA0MCxcbiAgICAgIDExMyxcbiAgICAgIDE2NyxcbiAgICAgIDkxLFxuICAgICAgMTU5LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkEzQlNYODVNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzI4ODE5Njc1ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk1MDkzMTIzMTU0ODk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZis2clFIRU9TcGc3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtJUTZ1U1Y3REQwTlRaRm5XS1g2YmVSTi9lQnNCckZBd0xYdUo1S0hlR1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUWZNeEV1TGxDMEI3MFVKVVl2VDJpcitxQmVmbGtGQThWZHFuOG4yb2ZNaHA4V0NYSXUwVDJMK2NBQnZCbEJza0xnRWVadjhkQTIxYW5YR0xTTHlTQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieEtZQlYyblN4UVpCa1dCbVFkdEZQcmxhbmt0S2JDcmtPeE93OGE4ekdtd29uUDF1eHl1SUFlb053ck05a3Mza3Y4OEJrblo0aDZXSDkyYkIvZk9hQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMyODgxOTY3NTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzYyMTk5M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
