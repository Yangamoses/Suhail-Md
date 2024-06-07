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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_50_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJudU5VWC85d1ZDbFlKalRLaGtXejUwTjBCTmZsblBJQzAydCsvQ0tTRHhFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuZDB3bjA2RlRmNkRYX0ZWVms2VDl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYwMTE4MTY0LWQwZGEtNGMyYi05MjMyLTU3NDgyMGIwY2IzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAzMCxcbiAgICAgIDExNSxcbiAgICAgIDE5MCxcbiAgICAgIDE5MSxcbiAgICAgIDE1MSxcbiAgICAgIDIxNSxcbiAgICAgIDY3LFxuICAgICAgMTg5LFxuICAgICAgMjMzLFxuICAgICAgMTM0LFxuICAgICAgMTQzLFxuICAgICAgMjUxLFxuICAgICAgMjQ0LFxuICAgICAgOTQsXG4gICAgICA2MixcbiAgICAgIDQ3LFxuICAgICAgMTMxLFxuICAgICAgMTM0LFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA1NSxcbiAgICAgIDk5LFxuICAgICAgNDIsXG4gICAgICAxOTMsXG4gICAgICAyNTIsXG4gICAgICAxNjMsXG4gICAgICAyNyxcbiAgICAgIDE5OSxcbiAgICAgIDEzNSxcbiAgICAgIDIwOCxcbiAgICAgIDEwNSxcbiAgICAgIDc3LFxuICAgICAgMjE3LFxuICAgICAgMTk4LFxuICAgICAgNjEsXG4gICAgICAyMjMsXG4gICAgICA1NixcbiAgICAgIDkzLFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEM4UUxLNkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMjg4MTk2NzU4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTUwOTMxMjMxNTQ4OToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pqKzZyUUhFT1NHaXJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia0lRNnVTVjdERDBOVFpGbldLWDZiZVJOL2VCc0JyRkF3TFh1SjVLSGVHVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2Nkk0NFJNYnFYZGhtM1ZFcDJMTTRIOUxLUVh1OTRqcjhuL3Q3V1NyZmRQckdGTHBPZDRvVjViMzRKSkx0UUZ4V3VVNFhhYlZsbUtGcWovRDc3QkREdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHU2RiY01FYUppK2t4WWpRSWlDVXdySWwwQ3o1WGwrcllPUC80QldpNnZTeitRWGFYUWNHZ0txNlIyMTRSdG1FU0tmSlczN1FvU2pTWnF4Y1pwWmtodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzI4ODE5Njc1ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NzMyMjAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjcvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
