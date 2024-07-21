const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.co"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/6ed51d9ca3914432e9df4.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ 👑🌎☠" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084644182,2347073082957";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/6ed51d9ca3914432e9df4.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_16_14_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgwLFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY1LFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWXhpTzh0VFVHb1h4dmNPTDVsNzNueVgrZzZuNFFESjVwR0lGdlhTb1l5az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieElGUHRyNFJRVXUtRUc0WUZwbDZBUVwiLFxuICBcInBob25lSWRcIjogXCI0MGFiMDRiMi1mZWIxLTQ1NjItYTA1Zi0zMGQ1YzJjNDBjMmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMjIzLFxuICAgICAgNTUsXG4gICAgICAyMTEsXG4gICAgICAxNixcbiAgICAgIDk5LFxuICAgICAgODgsXG4gICAgICAyMzYsXG4gICAgICAxNjcsXG4gICAgICAyNixcbiAgICAgIDEzMixcbiAgICAgIDE3NyxcbiAgICAgIDI5LFxuICAgICAgMzEsXG4gICAgICAxMzIsXG4gICAgICAyNTMsXG4gICAgICAyMjMsXG4gICAgICA1NyxcbiAgICAgIDUyLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAyOCxcbiAgICAgIDIwOCxcbiAgICAgIDE4OCxcbiAgICAgIDEyMyxcbiAgICAgIDE5LFxuICAgICAgNTYsXG4gICAgICA1MixcbiAgICAgIDExLFxuICAgICAgMjQzLFxuICAgICAgMCxcbiAgICAgIDIwMCxcbiAgICAgIDE1NSxcbiAgICAgIDE1MSxcbiAgICAgIDIwNixcbiAgICAgIDEwNCxcbiAgICAgIDM0LFxuICAgICAgMjQ5LFxuICAgICAgMTkwLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkhaRkZBTjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODQ2NDQxODI6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MzAyNjk5OTkwMjM3OToyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMenYvUDRHRU83bjlMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllNaDJkazhIb2ZtVTZBcVVFY2xuQ2hSR0tYSSswZ3ppM0EvTVhlQ3lqbkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTEZJelpzR2NpbkZQeGFJblhsTWNid0t4RTQ2RElEelRwK2dHVTkzQ3dRT09lZWd3Z054YUtSQ3hoYmhEajB1L0ZVS2dQZW1aS3R1MlRYSENGZUF0QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNnY1cUdYQjhCbjhkZDdoTG9mcWk5K1NLMWROaGt1alBIS1V1UGVBUHBMZTY5TE5EczNMcDVpaEpVV1hVYVdtcjJsV2pjamJyNEw1eEZodW1EYzg5amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4NDY0NDE4MjoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1Nzg0ODNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ 👑🌎☠" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ąҍօѵҽ ąӀӀ 👑🌎☠",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ 👑🌎☠",
  botname : process.env.BOT_NAME  || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ 👑🌎☠",
  ownername:process.env.OWNER_NAME|| "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ 👑🌎☠",


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
