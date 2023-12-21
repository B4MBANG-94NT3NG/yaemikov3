const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Owner Menu* 』───⚝
│々 .self 
│々 .public 
│々 .join 
│々 .bctext 
│々 .poll 
│々 .bcimage 
│々 .bcvideo 
│々 .creategc 
│々 .setexif 
│々 .userjid 
│々 .setbotname 
│々 .setbotbio 
│々 .delppbot 
│々 .shutdown 
│々 .setppbot 
│々 .addprem 
│々 .delprem 
│々 .addowner 
│々 .delowner 
│々 .addvn 
│々 .addapk 
│々 .addzip 
│々 .addpdf 
│々 .delapk 
│々 .delzip 
│々 .delpdf 
│々 .delvn 
│々 .addsticker 
│々 .delsticker 
│々 .addimage 
│々 .delimage 
│々 .addvideo 
│々 .delvideo 
│々 .upswtext 
│々 .upswvideo 
│々 .upswimage 
│々 .upswaudio 
│々 .block 
│々 .unblock del 
│々 .leavegc 
│々 .pushcontact 
│々 .pushcontactv2 
╰──────────⳹

⚝───『 *Group Menu* 』───⚝
│々 .mute 
│々 .antilink 
│々 .antiwame 
│々 .grouplink 
│々 .invite 
│々 .ephemeral 
│々 .delete 
│々 .setppgroup 
│々 .delppgroup 
│々 .setngroupname 
│々 .setdesc 
│々 .add 
│々 .kick 
│々 .promote 
│々 .demote 
│々 .getcontact 
│々 .savecontact 
│々 .sendcontact 
│々 .contactag 
│々 .hidetag 
│々 .totag 
│々 .tagall 
│々 .editinfo 
│々 .opentime 
│々 .closetime 
│々 .resetlink 
│々 .getbio 
│々 .vote 
│々 .upvote 
│々 .downvote 
│々 .checkvote 
│々 .delvote 
│々 .autostickergc 
│々 .antilinkgc 
│々 .antiwame 
│々 .antilinkall 
│々 .antilinktiktok 
│々 .antilinkfb 
│々 .antilinktwitter 
│々 .antilinkig 
│々 .antlinktg 
│々 .antilinkytvid 
│々 .antilinkytch 
│々 .antivirus 
│々 .antitoxic 
│々 .nsfw 
│々 .react 
╰──────────⳹

⚝───『 *Download Menu* 』───⚝
│々 .ttsearch  
│々 .teraboxdl  
│々 .snackvideo  
│々 .capcutdl  
│々 .ytsearch 
│々 .play 
│々 .ytmp3 
│々 .ytmp4 
│々 .tiktokaudio 
│々 .tiktok 
│々 .igvideo 
│々 .igimage 
│々 .apk 
│々 .google 
│々 .imdb 
│々 .weather 
│々 .wanumber 
│々 .spotify 🅟
│々 .gitclone 
│々 .happymod 
│々 .gdrive 
│々 .pinterest 
│々 .ringtone 
╰──────────⳹

⚝───『 *Random Video* 』───⚝
│々 .tiktokgirl 
│々 .tiktoknukthy 
│々 .tiktokkayes 
│々 .tiktokpanrika 
│々 .tiktoknotnot 
│々 .tiktokghea 
│々 .tiktoksantuy 
│々 .tiktokbocil 
╰──────────⳹

⚝───『 *Stalker* 』───⚝
│々 .igstalk 
│々 .ffstalk 
│々 .mlstalk 
│々 .npmstalk 
│々 .ghstalk 
╰──────────⳹

⚝───『 *Open Ai* 』───⚝
│々 .openai 
│々 .ai2 
│々 .blackboxai 
│々 .bard 
│々 .hdvid 
│々 .gptimg 
│々 .cai 
│々 .remini 
│々 .jadianime 
│々 .removebg 
│々 .bingimg 
╰──────────⳹

⚝───『 *Fun Menu* 』───⚝
│々 .tebakkata  
│々 .tebaktebakan  
│々 .tebaklirik  
│々 .tebakgambar  
│々 .tebaklagu  
│々 .tebakkimia  
│々 .asahotak  
│々 .siapaaku  
│々 .susunkata  
│々 .tekateki  
│々 .tebakbendera  
│々 .tebakbenderav2  
│々 .tebakkabupaten  
│々 .caklontong  
│々 .family100  
│々 .define 
│々 .qc 
│々 .lyrics 
│々 .suit 
│々 .math 
│々 .tictactoe 
│々 .fact 
│々 .truth 
│々 .dare 
│々 .couple 
│々 .soulmate 
│々 .stupidcheck 
│々 .handsomecheck 
│々 .uncleancheck 
│々 .hotcheck 
│々 .smartcheck 
│々 .greatcheck 
│々 .evilcheck 
│々 .dogcheck 
│々 .coolcheck 
│々 .waifucheck 
│々 .awesomecheck 
│々 .gaycheck 
│々 .cutecheck 
│々 .lesbiancheck 
│々 .hornycheck 
│々 .prettycheck 
│々 .lovelycheck 
│々 .uglycheck 
│々 .pick 
│々 .quotes 
│々 .can 
│々 .is 
│々 .when 
│々 .where 
│々 .what 
│々 .how 
│々 .rate 
│々 .cry 
│々 .kill 
│々 .hug 
│々 .pat 
│々 .lick  
│々 .kiss 
│々 .bite 
│々 .yeet 
│々 .bully 
│々 .bonk 
│々 .wink 
│々 .poke 
│々 .nom 
│々 .slap 
│々 .smile  
│々 .wave 
│々 .awoo 
│々 .blush 
│々 .smug 
│々 .glomp  
│々 .happy 
│々 .dance 
│々 .cringe 
│々 .cuddle 
│々 .highfive  
│々 .shinobu 
│々 .handhold 
│々 .spank 
│々 .tickle 
│々 .avatar 
│々 .feed 
│々 .foxgirl 
│々 .gecg 
│々 .checkme 
│々 .sound1 - sound161 
╰──────────⳹

⚝───『 *Random Photo* 』───⚝
│々 .aesthetic 
│々 .coffee 
│々 .wikimedia 
│々 .wallpaper 
│々 .art 
│々 .bts 
│々 .dogwoof 
│々 .catmeow 
│々 .lizardpic 
│々 .goosebird 
│々 .8ballpool 
│々 .cosplay 
│々 .hacker 
│々 .cyber 
│々 .gamewallpaper 
│々 .islamic 
│々 .jennie 
│々 .jiso 
│々 .satanic 
│々 .justina 
│々 .cartoon 
│々 .pentol 
│々 .cat 
│々 .kpop 
│々 .exo 
│々 .lisa 
│々 .space 
│々 .car 
│々 .technology 
│々 .bike 
│々 .shortquote 
│々 .antiwork 
│々 .hacking 
│々 .boneka 
│々 .rose 
│々 .ryujin 
│々 .ulzzangboy 
│々 .ulzzanirl 
│々 .wallml 
│々 .wallphone 
│々 .mountain 
│々 .goose 
│々 .profilepic 
│々 .couplepp 
│々 .programming 
│々 .pubg 
│々 .blackpink 
│々 .randomboy   
│々 .randomgirl 
│々 .hijab   
│々 .chinese 
│々 .indo 
│々 .japanese 
│々 .korean 
│々 .malay 
│々 .thai 
│々 .vietnamese 
╰──────────⳹

⚝───『 *Sticker* 』───⚝
│々 .goose 
│々 .woof 
│々 .8ball 
│々 .lizard 
│々 .meow 
│々 .gura 
│々 .doge 
│々 .patrick 
│々 .lovestick 
│々 .telestick 
╰──────────⳹

⚝───『 *Anime Menu* 』───⚝
│々 .akira 
│々 .akiyama 
│々 .ana 
│々 .asuna 
│々 .ayuzawa 
│々 .boruto 
│々 .chiho 
│々 .chitoge 
│々 .cosplayloli 
│々 .cosplaysagiri 
│々 .deidara 
│々 .doraemon 
│々 .elaina 
│々 .emilia 
│々 .erza 
│々 .gremory 
│々 .hestia 
│々 .husbu 
│々 .inori 
│々 .isuzu 
│々 .itachi 
│々 .itori 
│々 .kaga 
│々 .kagura 
│々 .kakasih 
│々 .kaori 
│々 .keneki 
│々 .kotori 
│々 .kurumi 
│々 .loli 
│々 .madara 
│々 .megumin 
│々 .mikasa 
│々 .mikey 
│々 .miku 
│々 .minato 
│々 .naruto 
│々 .neko 
│々 .neko2 
│々 .nekonime 
│々 .nezuko 
│々 .onepiece 
│々 .pokemon 
│々 .randomnime 
│々 .randomnime2 
│々 .rize 
│々 .sagiri 
│々 .sakura 
│々 .sasuke 
│々 .shina 
│々 .shinka 
│々 .shinomiya 
│々 .shizuka 
│々 .shota 
│々 .tejina 
│々 .toukachan 
│々 .tsunade 
│々 .waifu 
│々 .animewall 
│々 .yotsuba 
│々 .yuki 
│々 .yulibocil 
│々 .yumeko 
│々 .8ball 
│々 .tickle 
│々 .gecg 
│々 .feed 
│々 .animeawoo 
│々 .animemegumin 
│々 .animeshinobu 
│々 .animehandhold 
│々 .animehighfive 
│々 .animecringe 
│々 .animedance 
│々 .animehappy 
│々 .animeglomp 
│々 .animeblush 
│々 .animesmug 
│々 .animewave 
│々 .animesmille 
│々 .animepoke 
│々 .animewink 
│々 .animebonk 
│々 .animebully 
│々 .animeyeet 
│々 .animebite 
│々 .animelick 
│々 .animekill 
│々 .animecry 
│々 .animewlp 
│々 .animekiss 
│々 .animehug 
│々 .animeneko 
│々 .animepat 
│々 .animeslap 
│々 .animecuddle 
│々 .animewaifu 
│々 .animenom 
│々 .animefoxgirl 
│々 .animegecg 
│々 .animetickle 
│々 .animefeed 
│々 .animeavatar 
│々 .genshin 
│々 .anime 
╰──────────⳹

⚝───『 *Anime NSFW* 』───⚝
│々 .hentai 
│々 .gifhentai 
│々 .gifblowjob 
│々 .hentaivid 
│々 .hneko 
│々 .nwaifu 
│々 .animespank 
│々 .trap 
│々 .gasm 
│々 .ahegao 
│々 .ass 
│々 .bdsm 
│々 .blowjob 
│々 .cuckold 
│々 .cum 
│々 .milf 
│々 .eba 
│々 .ero 
│々 .femdom 
│々 .foot 
│々 .gangbang 
│々 .glasses 
│々 .jahy 
│々 .masturbation 
│々 .manga 
│々 .neko-hentai 
│々 .neko-hentai2 
│々 .nsfwloli 
│々 .orgy 
│々 .panties  
│々 .pussy 
│々 .tentacles 
│々 .thighs 
│々 .yuri 
│々 .zettai 
╰──────────⳹

⚝───『 *Textpro Menu* 』───⚝
│々 .papertext 
│々 .metallic 
│々 .circuit 
│々 .discovery 
│々 .fiction 
│々 .light 
│々 .stone  
│々 .magma 
│々 .berry 
│々 .glossy 
│々 .christmas 
│々 .bear 
│々 .devil 
│々 .neon 
│々 .blood 
│々 .glue  
│々 .dropwater  
│々 .firework  
│々 .carbon  
│々 .blackpink  
│々 .gradient 
│々 .broken 
│々 .harrypotter 
│々 .embossed 
│々 .imglitch 
│々 .aglitch text1|text2 
│々 .transformer 
│々 .greenhorror 
│々 .videogame 
│々 .sketch  
│々 .skeleton 
│々 .layered text1|text2 
│々 .pornhub text1|text2 
│々 .captainamerica text1|text2 
│々 .choror text1|text2 
│々 .spooky text1|text2 
╰──────────⳹

⚝───『 *Photooxy Menu* 』───⚝
│々 .shadow  
│々 .write  
│々 .romantic  
│々 .burnpaper 
│々 .smoke  
│々 .narutobanner  
│々 .love  
│々 .undergrass 
│々 .doublelove  
│々 .coffecup 
│々 .underwaterocean 
│々 .smokyneon 
│々 .starstext 
│々 .rainboweffect 
│々 .balloontext 
│々 .metalliceffect 
│々 .embroiderytext 
│々 .flamingtext 
│々 .stonetext 
│々 .writeart 
│々 .summertext 
│々 .wolfmetaltext 
│々 .nature3dtext 
│々 .rosestext 
│々 .naturetypography 
│々 .quotesunder 
│々 .shinetext 
╰──────────⳹

⚝───『 *Ephoto360 Menu* 』───⚝
│々 .glitchtext 
│々 .writetext 
│々 .advancedglow 
│々 .typographytext 
│々 .pixelglitch 
│々 .neonglitch 
│々 .flagtext 
│々 .flag3dtext 
│々 .deletingtext 
│々 .blackpinkstyle 
│々 .glowingtext 
│々 .underwatertext 
│々 .logomaker 
│々 .cartoonstyle 
│々 .papercutstyle 
│々 .watercolortext 
│々 .effectclouds 
│々 .blackpinklogo 
│々 .gradienttext 
│々 .summerbeach 
│々 .luxurygold 
│々 .multicoloredneon 
│々 .sandsummer 
│々 .galaxywallpaper 
│々 .1917style 
│々 .makingneon 
│々 .royaltext 
│々 .freecreate 
│々 .galaxystyle 
│々 .lighteffects 
╰──────────⳹

⚝───『 *Database* 』───⚝
│々 .setcmd 
│々 .delcmd 
│々 .listcmd 
│々 .lockcmd 
│々 .addmsg 
│々 .delmsg 
│々 .getmsg 
│々 .listmsg 
╰──────────⳹

⚝───『 *Bug & War Menu* 』───⚝
│々 .amountbug 🅟
│々 .pmbug 🅟
│々 .delaybug 🅟
│々 .docubug 🅟
│々 .un*Limit*edbug 🅟
│々 .bombug 🅟
│々 .lagbug 🅟
│々 .trollybug 🅟
│々 .gcbug 🅟
│々 .delaygcbug 🅟
│々 .lacbug 🅟
│々 .bomgcbug 🅟
│々 .un*Limit*edgcbug 🅟
│々 .trollygcbug 🅟
│々 .docugcbug 🅟
│々 .verif 🅟
│々 .banv1 🅟
│々 .banv2 🅟
│々 .banv3 🅟
│々 .banv4 🅟
│々 .banv5 🅟
│々 .banv6 🅟
│々 .unbanv1 🅟
│々 .unbanv2 🅟
│々 .unbanv3 🅟
│々 .unbanv4 🅟
│々 .unbanv5 🅟
╰──────────⳹

⚝───『 *Islami Menu* 』───⚝
│々 .kisahnabi 
│々 .asmaulhusna 
│々 .bacaansholat 
│々 .audiosurah 
│々 .ayatkursi 
│々 .doaharian 
│々 .niatsholat 
│々 .quotesislami 
│々 .doatahlil 
╰──────────⳹

⚝───『 *Other Menu* 』───⚝
│々 .ping 
│々 .menu 
│々 .myip 
│々 .reportbug 
│々 .listpem 
│々 .liststicker 
│々 .listimage 
│々 .listvideo 
│々 .listvn 
│々 .listapk 
│々 .listzip 
│々 .listpdf 
│々 .listbadword 
│々 .listpc 
│々 .listgc 
│々 .idgroup 
│々 .owner 
│々 .rentbot 
│々 .listrentbot 
│々 .donate 
│々 .friend 
│々 .obfuscate 
│々 .styletext 
│々 .fliptext 
│々 .tts 
│々 .say 
│々 .togif 
│々 .toqr 
│々 .bass 
│々 .blown 
│々 .deep 
│々 .earrape 
│々 .fast 
│々 .fat 
│々 .nightcore 
│々 .reverse 
│々 .robot 
│々 .slow 
│々 .smooth 
│々 .squirrel 
│々 .tinyurl 
│々 .tinyurl 
│々 .tovn 
│々 .toaudio 
│々 .tomp3 
│々 .tomp4
│々 .toimg 
│々 .toonce 
│々 .sticker 
│々 .take 🅟
│々 .emoji 
│々 .volume 
│々 .ebinary 
│々 .dbinary 
│々 .ssweb 
│々 .quoted 
│々 .runtime 
╰──────────⳹
`}

global.animemenu = (prefix) => {
return `
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Anime Menu* 』───⚝
│々 .akira 
│々 .akiyama 
│々 .ana 
│々 .asuna 
│々 .ayuzawa 
│々 .boruto 
│々 .chiho 
│々 .chitoge 
│々 .cosplayloli 
│々 .cosplaysagiri 
│々 .deidara 
│々 .doraemon 
│々 .elaina 
│々 .emilia 
│々 .erza 
│々 .gremory 
│々 .hestia 
│々 .husbu 
│々 .inori 
│々 .isuzu 
│々 .itachi 
│々 .itori 
│々 .kaga 
│々 .kagura 
│々 .kakasih 
│々 .kaori 
│々 .keneki 
│々 .kotori 
│々 .kurumi 
│々 .loli 
│々 .madara 
│々 .megumin 
│々 .mikasa 
│々 .mikey 
│々 .miku 
│々 .minato 
│々 .naruto 
│々 .neko 
│々 .neko2 
│々 .nekonime 
│々 .nezuko 
│々 .onepiece 
│々 .pokemon 
│々 .randomnime 
│々 .randomnime2 
│々 .rize 
│々 .sagiri 
│々 .sakura 
│々 .sasuke 
│々 .shina 
│々 .shinka 
│々 .shinomiya 
│々 .shizuka 
│々 .shota 
│々 .tejina 
│々 .toukachan 
│々 .tsunade 
│々 .waifu 
│々 .animewall 
│々 .yotsuba 
│々 .yuki 
│々 .yulibocil 
│々 .yumeko 
│々 .8ball 
│々 .tickle 
│々 .gecg 
│々 .feed 
│々 .animeawoo 
│々 .animemegumin 
│々 .animeshinobu 
│々 .animehandhold 
│々 .animehighfive 
│々 .animecringe 
│々 .animedance 
│々 .animehappy 
│々 .animeglomp 
│々 .animeblush 
│々 .animesmug 
│々 .animewave 
│々 .animesmille 
│々 .animepoke 
│々 .animewink 
│々 .animebonk 
│々 .animebully 
│々 .animeyeet 
│々 .animebite 
│々 .animelick 
│々 .animekill 
│々 .animecry 
│々 .animewlp 
│々 .animekiss 
│々 .animehug 
│々 .animeneko 
│々 .animepat 
│々 .animeslap 
│々 .animecuddle 
│々 .animewaifu 
│々 .animenom 
│々 .animefoxgirl 
│々 .animegecg 
│々 .animetickle 
│々 .animefeed 
│々 .animeavatar 
│々 .genshin 
│々 .anime 
╰──────────⳹
`}

global.ownermenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Owner Menu* 』───⚝
│々 .self 
│々 .public 
│々 .join 
│々 .bctext 
│々 .poll 
│々 .bcimage 
│々 .bcvideo 
│々 .creategc 
│々 .userjid 
│々 .setexif 
│々 .setbotname 
│々 .setbotbio 
│々 .delppbot 
│々 .shutdown 
│々 .setppbot 
│々 .addprem 
│々 .delprem 
│々 .addowner 
│々 .delowner 
│々 .addvn 
│々 .addapk 
│々 .addzip 
│々 .addpdf 
│々 .delapk 
│々 .delzip 
│々 .delpdf 
│々 .delvn 
│々 .addsticker 
│々 .delsticker 
│々 .addimage 
│々 .delimage 
│々 .addvideo 
│々 .delvideo 
│々 .upswtext 
│々 .upswvideo 
│々 .upswimage 
│々 .upswaudio 
│々 .block 
│々 .unblock del 
│々 .leavegc 
│々 .pushcontact 
│々 .pushcontactv2 
╰──────────⳹
`}

global.othermenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Islami Menu* 』───⚝
│々 .kisahnabi 
│々 .asmaulhusna 
│々 .bacaansholat 
│々 .audiosurah 
│々 .ayatkursi 
│々 .doaharian 
│々 .niatsholat 
│々 .quotesislami 
│々 .doatahlil 
╰──────────⳹

⚝───『 *Other Menu* 』───⚝
│々 .ping 
│々 .menu 
│々 .myip 
│々 .reportbug 
│々 .listpem 
│々 .liststicker 
│々 .listimage 
│々 .listvideo 
│々 .listvn 
│々 .listapk 
│々 .listzip 
│々 .listpdf 
│々 .listbadword 
│々 .listpc 
│々 .listgc 
│々 .isgroup 
│々 .owner 
│々 .rentbot 
│々 .listrentbot 
│々 .donate 
│々 .friend 
│々 .obfuscate 
│々 .styletext 
│々 .fliptext 
│々 .tts 
│々 .say 
│々 .togif 
│々 .toqr 
│々 .bass 
│々 .blown 
│々 .deep 
│々 .earrape 
│々 .fast 
│々 .fat 
│々 .nightcore 
│々 .reverse 
│々 .robot 
│々 .slow 
│々 .smooth 
│々 .squirrel 
│々 .tinyurl 
│々 .tinyurl 
│々 .tovn 
│々 .toaudio 
│々 .tomp3 
│々 .tomp4
│々 .toimg 
│々 .toonce 
│々 .sticker 
│々 .take 🅟
│々 .emoji 
│々 .volume 
│々 .ebinary 
│々 .dbinary 
│々 .ssweb 
│々 .quoted 
│々 .runtime 
│々 .sound1 - sound161 
╰──────────⳹
`}

global.downloadmenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Download Menu* 』───⚝
│々 .ttsearch  
│々 .teraboxdl  
│々 .snackvideo  
│々 .capcutdl  
│々 .ytsearch 
│々 .play 
│々 .ytmp3 
│々 .ytmp4 
│々 .tiktokaudio 
│々 .tiktok 
│々 .igvideo 
│々 .igimage 
│々 .apk 
│々 .google 
│々 .imdb 
│々 .weather 
│々 .wanumber 
│々 .spotify 🅟
│々 .gitclone 
│々 .happymod 
│々 .gdrive 
│々 .pinterest 
│々 .ringtone 
╰──────────⳹
`}

global.groupmenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Group Menu* 』───⚝
│々 .mute 
│々 .antilink 
│々 .antiwame 
│々 .grouplink 
│々 .invite 
│々 .ephemeral 
│々 .delete 
│々 .setppgroup 
│々 .delppgroup 
│々 .setgroupname 
│々 .setdesc 
│々 .add 
│々 .kick 
│々 .promote 
│々 .demote 
│々 .getcontact 
│々 .savecontact 
│々 .sendcontact 
│々 .contactag 
│々 .hidetag 
│々 .totag 
│々 .tagall 
│々 .editinfo 
│々 .opentime 
│々 .closetime 
│々 .resetlink 
│々 .getbio 
│々 .vote 
│々 .upvote 
│々 .downvote 
│々 .checkvote 
│々 .delvote 
│々 .autostickergc 
│々 .antilinkgc 
│々 .antiwame 
│々 .antilinkall 
│々 .antilinktiktok 
│々 .antilinkfb 
│々 .antilinktwitter 
│々 .antilinkig 
│々 .antlinktg 
│々 .antilinkytvid 
│々 .antilinkytch 
│々 .antivirus 
│々 .antitoxic 
│々 .nsfw 
│々 .react 
╰──────────⳹
`}

global.funmenu = (prefix) => {
return `
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Fun Menu* 』───⚝
│々 .tebakkata  
│々 .tebaktebakan  
│々 .tebaklirik  
│々 .tebakgambar  
│々 .tebaklagu  
│々 .tebakkimia  
│々 .asahotak  
│々 .siapaaku  
│々 .susunkata  
│々 .tekateki  
│々 .tebakbendera  
│々 .tebakbenderav2  
│々 .tebakkabupaten  
│々 .caklontong  
│々 .family100  
│々 .define 
│々 .qc 
│々 .lyrics 
│々 .tictactoe 
│々 .suit 
│々 .math 
│々 .fact 
│々 .truth 
│々 .dare 
│々 .couple 
│々 .soulmate 
│々 .stupidcheck 
│々 .handsomecheck 
│々 .uncleancheck 
│々 .hotcheck 
│々 .smartcheck 
│々 .greatcheck 
│々 .evilcheck 
│々 .dogcheck 
│々 .coolcheck 
│々 .waifucheck 
│々 .awesomecheck 
│々 .gaycheck 
│々 .cutecheck 
│々 .lesbiancheck 
│々 .hornycheck 
│々 .prettycheck 
│々 .lovelycheck 
│々 .uglycheck 
│々 .pick 
│々 .quotes 
│々 .can 
│々 .is 
│々 .when 
│々 .where 
│々 .what 
│々 .how 
│々 .rate 
│々 .cry 
│々 .kill 
│々 .hug 
│々 .pat 
│々 .lick  
│々 .kiss 
│々 .bite 
│々 .yeet 
│々 .bully 
│々 .bonk 
│々 .wink 
│々 .poke 
│々 .nom 
│々 .slap 
│々 .smile  
│々 .wave 
│々 .awoo 
│々 .blush 
│々 .smug 
│々 .glomp  
│々 .happy 
│々 .dance 
│々 .cringe 
│々 .cuddle 
│々 .highfive  
│々 .shinobu 
│々 .handhold 
│々 .spank 
│々 .tickle 
│々 .avatar 
│々 .feed 
│々 .foxgirl 
│々 .gecg 
│々 .checkme 
│々 .sound1 - sound161 
╰──────────⳹
`}

global.stalkermenu = (prefix) => {
return `
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Sticker* 』───⚝
│々 .goose 
│々 .woof 
│々 .8ball 
│々 .lizard 
│々 .meow 
│々 .gura 
│々 .doge 
│々 .patrick 
│々 .lovestick 
│々 .telestick 
╰──────────⳹
`}

global.databasemenu = (prefix) => {
return ` = For Group
 = For Free User
🅟 = For *Premium* User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ* ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

⚝───『 *Database* 』───⚝
│々 .setcmd 
│々 .delcmd 
│々 .listcmd 
│々 .lockcmd 
│々 .addmsg 
│々 .delmsg 
│々 .getmsg 
│々 .listmsg 
╰──────────⳹
`}

global.aimenu = (prefix) => {
return `
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Open Ai* 』───⚝
│々 .openai 
│々 .ai2 
│々 .blackboxai 
│々 .bard 
│々 .hdvid 
│々 .gptimg 
│々 .cai 
│々 .remini 
│々 .jadianime 
│々 .removebg 
│々 .bingimg 
╰──────────⳹
`}

global.bugmenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Bug & Warr* 』───⚝
│々 .amountbug 🅟
│々 .pmbug 🅟
│々 .delaybug 🅟
│々 .docubug 🅟
│々 .un*Limit*edbug 🅟
│々 .bombug 🅟
│々 .lagbug 🅟
│々 .trollybug 🅟
│々 .gcbug 🅟
│々 .delaygcbug 🅟
│々 .lacbug 🅟
│々 .bomgcbug 🅟
│々 .un*Limit*edgcbug 🅟
│々 .trollygcbug 🅟
│々 .docugcbug 🅟
│々 .verif 🅟
│々 .banv1 🅟
│々 .banv2 🅟
│々 .banv3 🅟
│々 .banv4 🅟
│々 .banv5 🅟
│々 .banv6 🅟
│々 .unbanv1 🅟
│々 .unbanv2 🅟
│々 .unbanv3 🅟
│々 .unbanv4 🅟
│々 .unbanv5 🅟
╰──────────⳹
`}

global.randphotomenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Random Photo* 』───⚝
│々 .aesthetic 
│々 .coffee 
│々 .wikimedia 
│々 .wallpaper 
│々 .art 
│々 .bts 
│々 .dogwoof 
│々 .catmeow 
│々 .lizardpic 
│々 .goosebird 
│々 .8ballpool 
│々 .cosplay 
│々 .hacker 
│々 .cyber 
│々 .gamewallpaper 
│々 .islamic 
│々 .jennie 
│々 .jiso 
│々 .satanic 
│々 .justina 
│々 .cartoon 
│々 .pentol 
│々 .cat 
│々 .kpop 
│々 .exo 
│々 .lisa 
│々 .space 
│々 .car 
│々 .technology 
│々 .bike 
│々 .shortquote 
│々 .antiwork 
│々 .hacking 
│々 .boneka 
│々 .rose 
│々 .ryujin 
│々 .ulzzangboy 
│々 .ulzzanirl 
│々 .wallml 
│々 .wallphone 
│々 .mountain 
│々 .goose 
│々 .profilepic 
│々 .couplepp 
│々 .programming 
│々 .pubg 
│々 .blackpink 
│々 .randomboy   
│々 .randomgirl 
│々 .hijab   
│々 .chinese 
│々 .indo 
│々 .japanese 
│々 .korean 
│々 .malay 
│々 .thai 
│々 .vietnamese 
╰──────────⳹
`}

global.randvideomenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Random Video* 』───⚝
│々 .tiktokgirl 
│々 .tiktoknukthy 
│々 .tiktokkayes 
│々 .tiktokpanrika 
│々 .tiktoknotnot 
│々 .tiktokghea 
│々 .tiktoksantuy 
│々 .tiktokbocil 
╰──────────⳹
`}

global.photooxymenu = (prefix) => {
return `
 ┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Photooxy Menu* 』───⚝
│々 .shadow  
│々 .write  
│々 .romantic  
│々 .burnpaper 
│々 .smoke  
│々 .narutobanner  
│々 .love  
│々 .undergrass 
│々 .doublelove  
│々 .coffecup 
│々 .underwaterocean 
│々 .smokyneon 
│々 .starstext 
│々 .rainboweffect 
│々 .balloontext 
│々 .metalliceffect 
│々 .embroiderytext 
│々 .flamingtext 
│々 .stonetext 
│々 .writeart 
│々 .summertext 
│々 .wolfmetaltext 
│々 .nature3dtext 
│々 .rosestext 
│々 .naturetypography 
│々 .quotesunder 
│々 .shinetext 
╰──────────⳹
`}

global.ephoto360menu = (prefix) => {
return `
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Ephoto360 Menu* 』───⚝
│々 .glitchtext 
│々 .writetext 
│々 .advancedglow 
│々 .typographytext 
│々 .pixelglitch 
│々 .neonglitch 
│々 .flagtext 
│々 .flag3dtext 
│々 .deletingtext 
│々 .blackpinkstyle 
│々 .glowingtext 
│々 .underwatertext 
│々 .logomaker 
│々 .cartoonstyle 
│々 .papercutstyle 
│々 .watercolortext 
│々 .effectclouds 
│々 .blackpinklogo 
│々 .gradienttext 
│々 .summerbeach 
│々 .luxurygold 
│々 .multicoloredneon 
│々 .sandsummer 
│々 .galaxywallpaper 
│々 .1917style 
│々 .makingneon 
│々 .royaltext 
│々 .freecreate 
│々 .galaxystyle 
│々 .lighteffects 
╰──────────⳹
`}

global.nsfwmenu = (prefix) => {
return `
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Anime NSFW* 』───⚝
│々 .hentai 
│々 .gifhentai 
│々 .gifblowjob 
│々 .hentaivid 
│々 .hneko 
│々 .nwaifu 
│々 .animespank 
│々 .trap 
│々 .gasm 
│々 .ahegao 
│々 .ass 
│々 .bdsm 
│々 .blowjob 
│々 .cuckold 
│々 .cum 
│々 .milf 
│々 .eba 
│々 .ero 
│々 .femdom 
│々 .foot 
│々 .gangbang 
│々 .glasses 
│々 .jahy 
│々 .masturbation 
│々 .manga 
│々 .neko-hentai 
│々 .neko-hentai2 
│々 .nsfwloli 
│々 .orgy 
│々 .panties  
│々 .pussy 
│々 .tentacles 
│々 .thighs 
│々 .yuri 
│々 .zettai 
╰──────────⳹
`}

global.cerpenmenu = (prefix) => {
return `
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Cerpen Menu* 』───⚝
│々 .cerpen_sejarah
│々 .cerpen_sedih
│々 .cerpen_sastra
│々 .cerpen_romantis
│々 .cerpen_rohani
│々 .cerpen_rindu
│々 .cerpen_remaja
│々 .cerpen_ramadhan
│々 .cerpen_petualangan
│々 .cerpen_persahabatan
│々 .cerpen_perpisahan
│々 .cerpen_perjuangan
│々 .cerpen_penyesalan
│々 .cerpen_pengorbanan
│々 .cerpen_pengalaman
│々 .cerpen_pendidikan
│々 .cerpen_penantian
│々 .cerpen_patahhati
│々 .cerpen_olahraga
│々 .cerpen_nasionalisme
│々 .cerpen_nasihat
│々 .cerpen_motivasi
│々 .cerpen_misteri
│々 .cerpen_mengharukan
│々 .cerpen_malaysia
│々 .cerpen_liburan
│々 .cerpen_kristen
│々 .cerpen_korea
│々 .cerpen_kisahnyata
│々 .cerpen_keluarga
│々 .cerpen_kehidupan
│々 .cerpen_jepang
│々 .cerpen_inspiratif
│々 .cerpen_gokil
│々 .cerpen_galau
│々 .cerpen_cintasejati
│々 .cerpen_cintasegitiga
│々 .cerpen_cintasedih
│々 .cerpen_cintaromantis
│々 .cerpen_cintapertama
│々 .cerpen_cintaislami
│々 .cerpen_cinta
│々 .cerpen_budaya
│々 .cerpen_bahasasunda
│々 .cerpen_bahasajawa
│々 .cerpen_bahasainris
│々 .cerpen_bahasadaerah
│々 .cerpen_anak
╰──────────⳹
`}

global.rpgmenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *RPG Menu* 』───⚝
│々 .kerja  
│々 .bankcek  
│々 .maling  
│々 .banknabung  
│々 .banktarik  
│々 .berkebon  
│々 .crafting  
│々 .bet  
│々 .bonus  
│々 .buah  
│々 .nebang  
│々 .bekerja  
│々 .bansos  
│々 .taxy  
│々 .mulung  
│々 .berburu  
│々 .polisi  
│々 .berdagang  
│々 .rampok  
│々 .bunuh  
│々 .collect  
│々 .mancing  
│々 .repair  
│々 .feed  
│々 .fight  
│々 .gajian  
│々 .upgrade  
│々 .transfer  
│々 .shop  
│々 .selectskill  
│々 .sampah  
│々 .roket  
│々 .ojek  
│々 .nguli  
│々 .pasar  
│々 .rob  
│々 .referal  
│々 .petshop  
│々 .kolam  
│々 .koboy  
│々 .leaderboard  
│々 .kerja  
╰──────────⳹
`}

global.textpromenu = (prefix) => {
return ` 
┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓛ* = *Limit*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『 *Textpro Menu* 』───⚝
│々 .papertext 
│々 .metallic 
│々 .circuit 
│々 .discovery 
│々 .fiction 
│々 .light 
│々 .stone  
│々 .magma 
│々 .berry 
│々 .glossy 
│々 .christmas 
│々 .bear 
│々 .devil 
│々 .neon 
│々 .blood 
│々 .glue  
│々 .dropwater  
│々 .firework  
│々 .carbon  
│々 .blackpink  
│々 .gradient 
│々 .broken 
│々 .harrypotter 
│々 .embossed 
│々 .imglitch 
│々 .aglitch text1|text2 
│々 .transformer 
│々 .greenhorror 
│々 .videogame 
│々 .sketch  
│々 .skeleton 
│々 .layered text1|text2 
│々 .pornhub text1|text2 
│々 .captainamerica text1|text2 
│々 .choror text1|text2 
│々 .spooky text1|text2 
╰──────────⳹
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})