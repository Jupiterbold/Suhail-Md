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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_56_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc4LFxuICAgICAgICA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNixcbiAgICAgICAgMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLYUNjQVRaR0VyUk5kbEJJOXRNemRTUnJpUVJwc0N2aFU0Ym14MlRsUFdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLek1hLVgxeFRFLUhvOFFITm1SSUlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxMjU2OGIzLTMwMmEtNGUwNS1hMTYzLWM0MmExOGJhMmMxZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxNDgsXG4gICAgICAxMjksXG4gICAgICAxNDAsXG4gICAgICAxNDIsXG4gICAgICAxMDEsXG4gICAgICA5MyxcbiAgICAgIDE2OSxcbiAgICAgIDIzNCxcbiAgICAgIDE5NyxcbiAgICAgIDIwNixcbiAgICAgIDI0NixcbiAgICAgIDksXG4gICAgICAxMDYsXG4gICAgICAxMDMsXG4gICAgICAxMjEsXG4gICAgICA0MSxcbiAgICAgIDIxMixcbiAgICAgIDIxOSxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDM4LFxuICAgICAgMjM0LFxuICAgICAgMTI1LFxuICAgICAgNjksXG4gICAgICA2MCxcbiAgICAgIDEyMixcbiAgICAgIDg1LFxuICAgICAgMTg0LFxuICAgICAgMzUsXG4gICAgICAxNTQsXG4gICAgICAxOTYsXG4gICAgICAxMjMsXG4gICAgICAxNjIsXG4gICAgICA0MyxcbiAgICAgIDI0OSxcbiAgICAgIDk3LFxuICAgICAgMTcxLFxuICAgICAgMjUzLFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVOVENNSDRSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg0NjQ0MTgyOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDMwMjY5OTk5MDIzNzk6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHJ2L1A0R0VMMmh4N1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZTWgyZGs4SG9mbVU2QXFVRWNsbkNoUkdLWEkrMGd6aTNBL01YZUN5am5JPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlUzNnRXVWgzUGlLMExXdU0zVDlzTWVXWHdLQkZ4YXZuZlpqNmN6WUhXS0NRZThxNmhVOFJ6Wmlja0tUeGJ4ZzYzSStKQ25rQ1VNSXRjMzhwWmFHS0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNJQlIxNWNpVHU1R2drMU4waVNWQlUxcUxTQkhWTzBlZDdPSm5EaTNXTVl5RTErdlBPVnlPcE01ZFhucDVNZzMySXZVWWFoQnlrRjBmdCt1QjBqeEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODQ2NDQxODI6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODMyMTkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRENrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEQ2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsWjE5WWw3R3Z1N0FISnY2bHJaai9zUnhWZmR3c2dNN016YnF4elRLUmQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzY4OTk3NzAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDgyNjgyNDc0MVwifSIKfQ=="


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
