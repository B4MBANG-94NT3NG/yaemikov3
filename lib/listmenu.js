const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Owner Menu 』
┆★.self 🅞
┆★.public 🅞
┆★.join 🅞
┆★.bctext 🅞
┆★.poll 🅞
┆★.bcimage 🅞
┆★.bcvideo 🅞
┆★.creategc 🅞
┆★.setexif 🅞
┆★.userjid 🅞
┆★.setbotname 🅞
┆★.setbotbio 🅞
┆★.delppbot 🅞
┆★.shutdown 🅞
┆★.setppbot 🅞
┆★.addprem 🅞
┆★.delprem 🅞
┆★.addowner 🅞
┆★.delowner 🅞
┆★.addvn 🅞
┆★.addapk 🅞
┆★.addzip 🅞
┆★.addpdf 🅞
┆★.delapk 🅞
┆★.delzip 🅞
┆★.delpdf 🅞
┆★.delvn 🅞
┆★.addsticker 🅞
┆★.delsticker 🅞
┆★.addimage 🅞
┆★.delimage 🅞
┆★.addvideo 🅞
┆★.delvideo 🅞
┆★.upswtext 🅞
┆★.upswvideo 🅞
┆★.upswimage 🅞
┆★.upswaudio 🅞
┆★.block 🅞
┆★.unblock del 🅞
┆★.leavegc 🅞
┆★.pushcontact 🅞
┆★.pushcontactv2 🅞
╰–––––––––––––––༓

╭––『 Group Menu 』
┆★.mute 🅖
┆★.antilink 🅖
┆★.antiwame 🅖
┆★.grouplink 🅖
┆★.invite 🅖
┆★.ephemeral 🅖
┆★.delete 🅖
┆★.setppgroup 🅖
┆★.delppgroup 🅖
┆★.setngroupname 🅖
┆★.setdesc 🅖
┆★.add 🅖
┆★.kick 🅖
┆★.promote 🅖
┆★.demote 🅖
┆★.getcontact 🅞
┆★.savecontact 🅞
┆★.sendcontact 🅞
┆★.contactag 🅞
┆★.hidetag 🅖
┆★.totag 🅖
┆★.tagall 🅖
┆★.editinfo 🅖
┆★.opentime 🅖
┆★.closetime 🅖
┆★.resetlink 🅖
┆★.getbio 🅖
┆★.vote 🅖
┆★.upvote 🅖
┆★.downvote 🅖
┆★.checkvote 🅖
┆★.delvote 🅖
┆★.autostickergc 🅖
┆★.antilinkgc 🅖
┆★.antiwame 🅖
┆★.antilinkall 🅖
┆★.antilinktiktok 🅖
┆★.antilinkfb 🅖
┆★.antilinktwitter 🅖
┆★.antilinkig 🅖
┆★.antlinktg 🅖
┆★.antilinkytvid 🅖
┆★.antilinkytch 🅖
┆★.antivirus 🅖
┆★.antitoxic 🅖
┆★.nsfw 🅖
┆★.react 🅖
╰–––––––––––––––༓

╭––『 Download Menu 』
┆★.ttsearch  🅕
┆★.teraboxdl  🅕
┆★.snackvideo  🅕
┆★.capcutdl  🅕
┆★.ytsearch 🅕
┆★.play 🅕
┆★.ytmp3 🅕
┆★.ytmp4 🅕
┆★.tiktokaudio 🅕
┆★.tiktok 🅕
┆★.igvideo 🅕
┆★.igimage 🅕
┆★.apk 🅕
┆★.google 🅕
┆★.imdb 🅕
┆★.weather 🅕
┆★.wanumber 🅕
┆★.spotify 🅟
┆★.gitclone 🅕
┆★.happymod 🅕
┆★.gdrive 🅕
┆★.pinterest 🅕
┆★.ringtone 🅕
╰–––––––––––––––༓

╭––『 Random Video 』
┆★.tiktokgirl 🅕
┆★.tiktoknukthy 🅕
┆★.tiktokkayes 🅕
┆★.tiktokpanrika 🅕
┆★.tiktoknotnot 🅕
┆★.tiktokghea 🅕
┆★.tiktoksantuy 🅕
┆★.tiktokbocil 🅕
╰–––––––––––––––༓

╭––『 Stalker 』
┆★.igstalk 🅕
┆★.ffstalk 🅕
┆★.mlstalk 🅕
┆★.npmstalk 🅕
┆★.ghstalk 🅕
╰–––––––––––––––༓

╭––『 OpenAI 』
┆★.openai 🅕
┆★.ai2 🅕
┆★.blackboxai 🅕
┆★.bard 🅕
┆★.hdvid 🅕
┆★.gptimg 🅕
┆★.cai 🅕
┆★.remini 🅕
┆★.jadianime 🅕
┆★.removebg 🅕
┆★.bingimg 🅕
╰–––––––––––––––༓

╭––『 Fun Menu 』
┆★.tebakkata  🅕
┆★.tebaktebakan  🅕
┆★.tebaklirik  🅕
┆★.tebakgambar  🅕
┆★.tebaklagu  🅕
┆★.tebakkimia  🅕
┆★.asahotak  🅕
┆★.siapaaku  🅕
┆★.susunkata  🅕
┆★.tekateki  🅕
┆★.tebakbendera  🅕
┆★.tebakbenderav2  🅕
┆★.tebakkabupaten  🅕
┆★.caklontong  🅕
┆★.family100  🅕
┆★.define 🅕
┆★.qc 🅕
┆★.lyrics 🅕
┆★.suit 🅕
┆★.math 🅕
┆★.tictactoe 🅕
┆★.fact 🅕
┆★.truth 🅕
┆★.dare 🅕
┆★.couple 🅕
┆★.soulmate 🅕
┆★.stupidcheck 🅕
┆★.handsomecheck 🅕
┆★.uncleancheck 🅕
┆★.hotcheck 🅕
┆★.smartcheck 🅕
┆★.greatcheck 🅕
┆★.evilcheck 🅕
┆★.dogcheck 🅕
┆★.coolcheck 🅕
┆★.waifucheck 🅕
┆★.awesomecheck 🅕
┆★.gaycheck 🅕
┆★.cutecheck 🅕
┆★.lesbiancheck 🅕
┆★.hornycheck 🅕
┆★.prettycheck 🅕
┆★.lovelycheck 🅕
┆★.uglycheck 🅕
┆★.pick 🅕
┆★.quotes 🅕
┆★.can 🅕
┆★.is 🅕
┆★.when 🅕
┆★.where 🅕
┆★.what 🅕
┆★.how 🅕
┆★.rate 🅕
┆★.cry 🅕
┆★.kill 🅕
┆★.hug 🅕
┆★.pat 🅕
┆★.lick 🅕 
┆★.kiss 🅕
┆★.bite 🅕
┆★.yeet 🅕
┆★.bully 🅕
┆★.bonk 🅕
┆★.wink 🅕
┆★.poke 🅕
┆★.nom 🅕
┆★.slap 🅕
┆★.smile 🅕 
┆★.wave 🅕
┆★.awoo 🅕
┆★.blush 🅕
┆★.smug 🅕
┆★.glomp 🅕 
┆★.happy 🅕
┆★.dance 🅕
┆★.cringe 🅕
┆★.cuddle 🅕
┆★.highfive 🅕 
┆★.shinobu 🅕
┆★.handhold 🅕
┆★.spank 🅕
┆★.tickle 🅕
┆★.avatar 🅕
┆★.feed 🅕
┆★.foxgirl 🅕
┆★.gecg 🅕
┆★.checkme 🅕
┆★.sound1 - sound161 🅕
╰–––––––––––––––༓

╭––『 Random Photo 』
┆★.aesthetic 🅕
┆★.coffee 🅕
┆★.wikimedia 🅕
┆★.wallpaper 🅕
┆★.art 🅕
┆★.bts 🅕
┆★.dogwoof 🅕
┆★.catmeow 🅕
┆★.lizardpic 🅕
┆★.goosebird 🅕
┆★.8ballpool 🅕
┆★.cosplay 🅕
┆★.hacker 🅕
┆★.cyber 🅕
┆★.gamewallpaper 🅕
┆★.islamic 🅕
┆★.jennie 🅕
┆★.jiso 🅕
┆★.satanic 🅕
┆★.justina 🅕
┆★.cartoon 🅕
┆★.pentol 🅕
┆★.cat 🅕
┆★.kpop 🅕
┆★.exo 🅕
┆★.lisa 🅕
┆★.space 🅕
┆★.car 🅕
┆★.technology 🅕
┆★.bike 🅕
┆★.shortquote 🅕
┆★.antiwork 🅕
┆★.hacking 🅕
┆★.boneka 🅕
┆★.rose 🅕
┆★.ryujin 🅕
┆★.ulzzangboy 🅕
┆★.ulzzan🅕irl 🅕
┆★.wallml 🅕
┆★.wallphone 🅕
┆★.mountain 🅕
┆★.goose 🅕
┆★.profilepic 🅕
┆★.couplepp 🅕
┆★.programming 🅕
┆★.pubg 🅕
┆★.blackpink 🅕
┆★.randomboy 🅕  
┆★.randomgirl 🅕
┆★.hijab 🅕  
┆★.chinese 🅕
┆★.indo 🅕
┆★.japanese 🅕
┆★.korean 🅕
┆★.malay 🅕
┆★.thai 🅕
┆★.vietnamese 🅕
╰–––––––––––––––༓

╭––『 Sticker 』
┆★.goose 🅕
┆★.woof 🅕
┆★.8ball 🅕
┆★.lizard 🅕
┆★.meow 🅕
┆★.gura 🅕
┆★.doge 🅕
┆★.patrick 🅕
┆★.lovestick 🅕
┆★.telestick 🅕
╰–––––––––––––––༓

╭––『 Anime 』
┆★.akira 🅕
┆★.akiyama 🅕
┆★.ana 🅕
┆★.asuna 🅕
┆★.ayuzawa 🅕
┆★.boruto 🅕
┆★.chiho 🅕
┆★.chitoge 🅕
┆★.cosplayloli 🅕
┆★.cosplaysagiri 🅕
┆★.deidara 🅕
┆★.doraemon 🅕
┆★.elaina 🅕
┆★.emilia 🅕
┆★.erza 🅕
┆★.gremory 🅕
┆★.hestia 🅕
┆★.husbu 🅕
┆★.inori 🅕
┆★.isuzu 🅕
┆★.itachi 🅕
┆★.itori 🅕
┆★.kaga 🅕
┆★.kagura 🅕
┆★.kakasih 🅕
┆★.kaori 🅕
┆★.keneki 🅕
┆★.kotori 🅕
┆★.kurumi 🅕
┆★.loli 🅕
┆★.madara 🅕
┆★.megumin 🅕
┆★.mikasa 🅕
┆★.mikey 🅕
┆★.miku 🅕
┆★.minato 🅕
┆★.naruto 🅕
┆★.neko 🅕
┆★.neko2 🅕
┆★.nekonime 🅕
┆★.nezuko 🅕
┆★.onepiece 🅕
┆★.pokemon 🅕
┆★.randomnime 🅕
┆★.randomnime2 🅕
┆★.rize 🅕
┆★.sagiri 🅕
┆★.sakura 🅕
┆★.sasuke 🅕
┆★.shina 🅕
┆★.shinka 🅕
┆★.shinomiya 🅕
┆★.shizuka 🅕
┆★.shota 🅕
┆★.tejina 🅕
┆★.toukachan 🅕
┆★.tsunade 🅕
┆★.waifu 🅕
┆★.animewall 🅕
┆★.yotsuba 🅕
┆★.yuki 🅕
┆★.yulibocil 🅕
┆★.yumeko 🅕
┆★.8ball 🅕
┆★.tickle 🅕
┆★.gecg 🅕
┆★.feed 🅕
┆★.animeawoo 🅕
┆★.animemegumin 🅕
┆★.animeshinobu 🅕
┆★.animehandhold 🅕
┆★.animehighfive 🅕
┆★.animecringe 🅕
┆★.animedance 🅕
┆★.animehappy 🅕
┆★.animeglomp 🅕
┆★.animeblush 🅕
┆★.animesmug 🅕
┆★.animewave 🅕
┆★.animesmille 🅕
┆★.animepoke 🅕
┆★.animewink 🅕
┆★.animebonk 🅕
┆★.animebully 🅕
┆★.animeyeet 🅕
┆★.animebite 🅕
┆★.animelick 🅕
┆★.animekill 🅕
┆★.animecry 🅕
┆★.animewlp 🅕
┆★.animekiss 🅕
┆★.animehug 🅕
┆★.animeneko 🅕
┆★.animepat 🅕
┆★.animeslap 🅕
┆★.animecuddle 🅕
┆★.animewaifu 🅕
┆★.animenom 🅕
┆★.animefoxgirl 🅕
┆★.animegecg 🅕
┆★.animetickle 🅕
┆★.animefeed 🅕
┆★.animeavatar 🅕
┆★.genshin 🅕
┆★.anime 🅕
╰–––––––––––––––༓

╭––『 Anime NSFW 』
┆★.hentai 🅕
┆★.gifhentai 🅕
┆★.gifblowjob 🅕
┆★.hentaivid 🅕
┆★.hneko 🅕
┆★.nwaifu 🅕
┆★.animespank 🅕
┆★.trap 🅕
┆★.gasm 🅕
┆★.ahegao 🅕
┆★.ass 🅕
┆★.bdsm 🅕
┆★.blowjob 🅕
┆★.cuckold 🅕
┆★.cum 🅕
┆★.milf 🅕
┆★.eba 🅕
┆★.ero 🅕
┆★.femdom 🅕
┆★.foot 🅕
┆★.gangbang 🅕
┆★.glasses 🅕
┆★.jahy 🅕
┆★.masturbation 🅕
┆★.manga 🅕
┆★.neko-hentai 🅕
┆★.neko-hentai2 🅕
┆★.nsfwloli 🅕
┆★.orgy 🅕
┆★.panties 🅕 
┆★.pussy 🅕
┆★.tentacles 🅕
┆★.thighs 🅕
┆★.yuri 🅕
┆★.zettai 🅕
╰–––––––––––––––༓

╭––『 Textpro Menu 』
┆★.papertext 🅕
┆★.metallic 🅕
┆★.circuit 🅕
┆★.discovery 🅕
┆★.fiction 🅕
┆★.light 🅕
┆★.stone 🅕 
┆★.magma 🅕
┆★.berry 🅕
┆★.glossy 🅕
┆★.christmas 🅕
┆★.bear 🅕
┆★.devil 🅕
┆★.neon 🅕
┆★.blood 🅕
┆★.glue  🅕
┆★.dropwater  🅕
┆★.firework  🅕
┆★.carbon  🅕
┆★.blackpink  🅕
┆★.gradient 🅕
┆★.broken 🅕
┆★.harrypotter 🅕
┆★.embossed 🅕
┆★.imglitch 🅕
┆★.aglitch text1|text2 🅕
┆★.transformer 🅕
┆★.greenhorror 🅕
┆★.videogame 🅕
┆★.sketch  🅕
┆★.skeleton 🅕
┆★.layered text1|text2 🅕
┆★.pornhub text1|text2 🅕
┆★.captainamerica text1|text2 🅕
┆★.choror text1|text2 🅕
┆★.spooky text1|text2 🅕
╰–––––––––––––––༓

╭––『 PhotoOxy Maker 』
┆★.shadow 🅕 
┆★.write 🅕 
┆★.romantic 🅕 
┆★.burnpaper 🅕
┆★.smoke 🅕 
┆★.narutobanner 🅕 
┆★.love 🅕 
┆★.undergrass 🅕
┆★.doublelove 🅕 
┆★.coffecup 🅕
┆★.underwaterocean 🅕
┆★.smokyneon 🅕
┆★.starstext 🅕
┆★.rainboweffect 🅕
┆★.balloontext 🅕
┆★.metalliceffect 🅕
┆★.embroiderytext 🅕
┆★.flamingtext 🅕
┆★.stonetext 🅕
┆★.writeart 🅕
┆★.summertext 🅕
┆★.wolfmetaltext 🅕
┆★.nature3dtext 🅕
┆★.rosestext 🅕
┆★.naturetypography 🅕
┆★.quotesunder 🅕
┆★.shinetext 🅕
╰–––––––––––––––༓

╭––『 Ephoto360 Maker 』
┆★.glitchtext 🅕
┆★.writetext 🅕
┆★.advancedglow 🅕
┆★.typographytext 🅕
┆★.pixelglitch 🅕
┆★.neonglitch 🅕
┆★.flagtext 🅕
┆★.flag3dtext 🅕
┆★.deletingtext 🅕
┆★.blackpinkstyle 🅕
┆★.glowingtext 🅕
┆★.underwatertext 🅕
┆★.logomaker 🅕
┆★.cartoonstyle 🅕
┆★.papercutstyle 🅕
┆★.watercolortext 🅕
┆★.effectclouds 🅕
┆★.blackpinklogo 🅕
┆★.gradienttext 🅕
┆★.summerbeach 🅕
┆★.luxurygold 🅕
┆★.multicoloredneon 🅕
┆★.sandsummer 🅕
┆★.galaxywallpaper 🅕
┆★.1917style 🅕
┆★.makingneon 🅕
┆★.royaltext 🅕
┆★.freecreate 🅕
┆★.galaxystyle 🅕
┆★.lighteffects 🅕
╰–––––––––––––––༓

╭––『 Database 』
┆★.setcmd 🅕
┆★.delcmd 🅕
┆★.listcmd 🅕
┆★.lockcmd 🅕
┆★.addmsg 🅕
┆★.delmsg 🅕
┆★.getmsg 🅕
┆★.listmsg 🅕
╰–––––––––––––––༓

╭––『 Bug & War 』
┆★.amountbug 🅟
┆★.pmbug 🅟
┆★.delaybug 🅟
┆★.docubug 🅟
┆★.unlimitedbug 🅟
┆★.bombug 🅟
┆★.lagbug 🅟
┆★.trollybug 🅟
┆★.gcbug 🅟
┆★.delaygcbug 🅟
┆★.la🅕cbug 🅟
┆★.bomgcbug 🅟
┆★.unlimitedgcbug 🅟
┆★.trollygcbug 🅟
┆★.docugcbug 🅟
┆★.verif 🅟
┆★.banv1 🅟
┆★.banv2 🅟
┆★.banv3 🅟
┆★.banv4 🅟
┆★.banv5 🅟
┆★.banv6 🅟
┆★.unbanv1 🅟
┆★.unbanv2 🅟
┆★.unbanv3 🅟
┆★.unbanv4 🅟
┆★.unbanv5 🅟
╰–––––––––––––––༓

╭––『 Islami 』
┆★.kisahnabi 🅕
┆★.asmaulhusna 🅕
┆★.bacaansholat 🅕
┆★.audiosurah 🅕
┆★.ayatkursi 🅕
┆★.doaharian 🅕
┆★.niatsholat 🅕
┆★.quotesislami 🅕
┆★.doatahlil 🅕
╰–––––––––––––––༓

╭––『 Other Menu 』
┆★.ping 🅕
┆★.menu 🅕
┆★.myip 🅕
┆★.reportbug 🅕
┆★.listpem 🅕
┆★.liststicker 🅕
┆★.listimage 🅕
┆★.listvideo 🅕
┆★.listvn 🅕
┆★.listapk 🅕
┆★.listzip 🅕
┆★.listpdf 🅕
┆★.listbadword 🅕
┆★.listpc 🅕
┆★.listgc 🅕
┆★.idgroup 🅕
┆★.owner 🅕
┆★.rentbot 🅕
┆★.listrentbot 🅕
┆★.donate 🅕
┆★.friend 🅕
┆★.obfuscate 🅕
┆★.styletext 🅕
┆★.fliptext 🅕
┆★.tts 🅕
┆★.say 🅕
┆★.togif 🅕
┆★.toqr 🅕
┆★.bass 🅕
┆★.blown 🅕
┆★.deep 🅕
┆★.earrape 🅕
┆★.fast 🅕
┆★.fat 🅕
┆★.nightcore 🅕
┆★.reverse 🅕
┆★.robot 🅕
┆★.slow 🅕
┆★.smooth 🅕
┆★.squirrel 🅕
┆★.tinyurl 🅕
┆★.tinyurl 🅕
┆★.tovn 🅕
┆★.toaudio 🅕
┆★.tomp3 🅕
┆★.tomp4🅕
┆★.toimg 🅕
┆★.toonce 🅕
┆★.sticker 🅕
┆★.take 🅟
┆★.emoji 🅕
┆★.volume 🅕
┆★.ebinary 🅕
┆★.dbinary 🅕
┆★.ssweb 🅕
┆★.quoted 🅕
┆★.runtime 🅕
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Anime 』
┆★.akira 🅕
┆★.akiyama 🅕
┆★.ana 🅕
┆★.asuna 🅕
┆★.ayuzawa 🅕
┆★.boruto 🅕
┆★.chiho 🅕
┆★.chitoge 🅕
┆★.cosplayloli 🅕
┆★.cosplaysagiri 🅕
┆★.deidara 🅕
┆★.doraemon 🅕
┆★.elaina 🅕
┆★.emilia 🅕
┆★.erza 🅕
┆★.gremory 🅕
┆★.hestia 🅕
┆★.husbu 🅕
┆★.inori 🅕
┆★.isuzu 🅕
┆★.itachi 🅕
┆★.itori 🅕
┆★.kaga 🅕
┆★.kagura 🅕
┆★.kakasih 🅕
┆★.kaori 🅕
┆★.keneki 🅕
┆★.kotori 🅕
┆★.kurumi 🅕
┆★.loli 🅕
┆★.madara 🅕
┆★.megumin 🅕
┆★.mikasa 🅕
┆★.mikey 🅕
┆★.miku 🅕
┆★.minato 🅕
┆★.naruto 🅕
┆★.neko 🅕
┆★.neko2 🅕
┆★.nekonime 🅕
┆★.nezuko 🅕
┆★.onepiece 🅕
┆★.pokemon 🅕
┆★.randomnime 🅕
┆★.randomnime2 🅕
┆★.rize 🅕
┆★.sagiri 🅕
┆★.sakura 🅕
┆★.sasuke 🅕
┆★.shina 🅕
┆★.shinka 🅕
┆★.shinomiya 🅕
┆★.shizuka 🅕
┆★.shota 🅕
┆★.tejina 🅕
┆★.toukachan 🅕
┆★.tsunade 🅕
┆★.waifu 🅕
┆★.animewall 🅕
┆★.yotsuba 🅕
┆★.yuki 🅕
┆★.yulibocil 🅕
┆★.yumeko 🅕
┆★.8ball 🅕
┆★.tickle 🅕
┆★.gecg 🅕
┆★.feed 🅕
┆★.animeawoo 🅕
┆★.animemegumin 🅕
┆★.animeshinobu 🅕
┆★.animehandhold 🅕
┆★.animehighfive 🅕
┆★.animecringe 🅕
┆★.animedance 🅕
┆★.animehappy 🅕
┆★.animeglomp 🅕
┆★.animeblush 🅕
┆★.animesmug 🅕
┆★.animewave 🅕
┆★.animesmille 🅕
┆★.animepoke 🅕
┆★.animewink 🅕
┆★.animebonk 🅕
┆★.animebully 🅕
┆★.animeyeet 🅕
┆★.animebite 🅕
┆★.animelick 🅕
┆★.animekill 🅕
┆★.animecry 🅕
┆★.animewlp 🅕
┆★.animekiss 🅕
┆★.animehug 🅕
┆★.animeneko 🅕
┆★.animepat 🅕
┆★.animeslap 🅕
┆★.animecuddle 🅕
┆★.animewaifu 🅕
┆★.animenom 🅕
┆★.animefoxgirl 🅕
┆★.animegecg 🅕
┆★.animetickle 🅕
┆★.animefeed 🅕
┆★.animeavatar 🅕
┆★.genshin 🅕
┆★.anime 🅕
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Owner Menu 』
┆★.self 🅞
┆★.public 🅞
┆★.join 🅞
┆★.bctext 🅞
┆★.poll 🅞
┆★.bcimage 🅞
┆★.bcvideo 🅞
┆★.creategc 🅞
┆★.userjid 🅞
┆★.setexif 🅞
┆★.setbotname 🅞
┆★.setbotbio 🅞
┆★.delppbot 🅞
┆★.shutdown 🅞
┆★.setppbot 🅞
┆★.addprem 🅞
┆★.delprem 🅞
┆★.addowner 🅞
┆★.delowner 🅞
┆★.addvn 🅞
┆★.addapk 🅞
┆★.addzip 🅞
┆★.addpdf 🅞
┆★.delapk 🅞
┆★.delzip 🅞
┆★.delpdf 🅞
┆★.delvn 🅞
┆★.addsticker 🅞
┆★.delsticker 🅞
┆★.addimage 🅞
┆★.delimage 🅞
┆★.addvideo 🅞
┆★.delvideo 🅞
┆★.upswtext 🅞
┆★.upswvideo 🅞
┆★.upswimage 🅞
┆★.upswaudio 🅞
┆★.block 🅞
┆★.unblock del 🅞
┆★.leavegc 🅞
┆★.pushcontact 🅞
┆★.pushcontactv2 🅞
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Islami 』
┆★.kisahnabi 🅕
┆★.asmaulhusna 🅕
┆★.bacaansholat 🅕
┆★.audiosurah 🅕
┆★.ayatkursi 🅕
┆★.doaharian 🅕
┆★.niatsholat 🅕
┆★.quotesislami 🅕
┆★.doatahlil 🅕
╰–––––––––––––––༓

╭––『 Other Menu 』
┆★.ping 🅕
┆★.menu 🅕
┆★.myip 🅕
┆★.reportbug 🅕
┆★.listpem 🅕
┆★.liststicker 🅕
┆★.listimage 🅕
┆★.listvideo 🅕
┆★.listvn 🅕
┆★.listapk 🅕
┆★.listzip 🅕
┆★.listpdf 🅕
┆★.listbadword 🅕
┆★.listpc 🅕
┆★.listgc 🅕
┆★.isgroup 🅕
┆★.owner 🅕
┆★.rentbot 🅕
┆★.listrentbot 🅕
┆★.donate 🅕
┆★.friend 🅕
┆★.obfuscate 🅕
┆★.styletext 🅕
┆★.fliptext 🅕
┆★.tts 🅕
┆★.say 🅕
┆★.togif 🅕
┆★.toqr 🅕
┆★.bass 🅕
┆★.blown 🅕
┆★.deep 🅕
┆★.earrape 🅕
┆★.fast 🅕
┆★.fat 🅕
┆★.nightcore 🅕
┆★.reverse 🅕
┆★.robot 🅕
┆★.slow 🅕
┆★.smooth 🅕
┆★.squirrel 🅕
┆★.tinyurl 🅕
┆★.tinyurl 🅕
┆★.tovn 🅕
┆★.toaudio 🅕
┆★.tomp3 🅕
┆★.tomp4🅕
┆★.toimg 🅕
┆★.toonce 🅕
┆★.sticker 🅕
┆★.take 🅟
┆★.emoji 🅕
┆★.volume 🅕
┆★.ebinary 🅕
┆★.dbinary 🅕
┆★.ssweb 🅕
┆★.quoted 🅕
┆★.runtime 🅕
┆★.sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Download Menu 』
┆★.ttsearch  🅕
┆★.teraboxdl  🅕
┆★.snackvideo  🅕
┆★.capcutdl  🅕
┆★.ytsearch 🅕
┆★.play 🅕
┆★.ytmp3 🅕
┆★.ytmp4 🅕
┆★.tiktokaudio 🅕
┆★.tiktok 🅕
┆★.igvideo 🅕
┆★.igimage 🅕
┆★.apk 🅕
┆★.google 🅕
┆★.imdb 🅕
┆★.weather 🅕
┆★.wanumber 🅕
┆★.spotify 🅟
┆★.gitclone 🅕
┆★.happymod 🅕
┆★.gdrive 🅕
┆★.pinterest 🅕
┆★.ringtone 🅕
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Group Menu 』
┆★.mute 🅖
┆★.antilink 🅖
┆★.antiwame 🅖
┆★.grouplink 🅖
┆★.invite 🅖
┆★.ephemeral 🅖
┆★.delete 🅖
┆★.setppgroup 🅖
┆★.delppgroup 🅖
┆★.setgroupname 🅖
┆★.setdesc 🅖
┆★.add 🅖
┆★.kick 🅖
┆★.promote 🅖
┆★.demote 🅖
┆★.getcontact 🅞
┆★.savecontact 🅞
┆★.sendcontact 🅞
┆★.contactag 🅞
┆★.hidetag 🅖
┆★.totag 🅖
┆★.tagall 🅖
┆★.editinfo 🅖
┆★.opentime 🅖
┆★.closetime 🅖
┆★.resetlink 🅖
┆★.getbio 🅖
┆★.vote 🅖
┆★.upvote 🅖
┆★.downvote 🅖
┆★.checkvote 🅖
┆★.delvote 🅖
┆★.autostickergc 🅖
┆★.antilinkgc 🅖
┆★.antiwame 🅖
┆★.antilinkall 🅖
┆★.antilinktiktok 🅖
┆★.antilinkfb 🅖
┆★.antilinktwitter 🅖
┆★.antilinkig 🅖
┆★.antlinktg 🅖
┆★.antilinkytvid 🅖
┆★.antilinkytch 🅖
┆★.antivirus 🅖
┆★.antitoxic 🅖
┆★.nsfw 🅖
┆★.react 🅖
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Fun Menu 』
┆★.tebakkata  🅕
┆★.tebaktebakan  🅕
┆★.tebaklirik  🅕
┆★.tebakgambar  🅕
┆★.tebaklagu  🅕
┆★.tebakkimia  🅕
┆★.asahotak  🅕
┆★.siapaaku  🅕
┆★.susunkata  🅕
┆★.tekateki  🅕
┆★.tebakbendera  🅕
┆★.tebakbenderav2  🅕
┆★.tebakkabupaten  🅕
┆★.caklontong  🅕
┆★.family100  🅕
┆★.define 🅕
┆★.qc 🅕
┆★.lyrics 🅕
┆★.tictactoe 🅕
┆★.suit 🅕
┆★.math 🅕
┆★.fact 🅕
┆★.truth 🅕
┆★.dare 🅕
┆★.couple 🅕
┆★.soulmate 🅕
┆★.stupidcheck 🅕
┆★.handsomecheck 🅕
┆★.uncleancheck 🅕
┆★.hotcheck 🅕
┆★.smartcheck 🅕
┆★.greatcheck 🅕
┆★.evilcheck 🅕
┆★.dogcheck 🅕
┆★.coolcheck 🅕
┆★.waifucheck 🅕
┆★.awesomecheck 🅕
┆★.gaycheck 🅕
┆★.cutecheck 🅕
┆★.lesbiancheck 🅕
┆★.hornycheck 🅕
┆★.prettycheck 🅕
┆★.lovelycheck 🅕
┆★.uglycheck 🅕
┆★.pick 🅕
┆★.quotes 🅕
┆★.can 🅕
┆★.is 🅕
┆★.when 🅕
┆★.where 🅕
┆★.what 🅕
┆★.how 🅕
┆★.rate 🅕
┆★.cry 🅕
┆★.kill 🅕
┆★.hug 🅕
┆★.pat 🅕
┆★.lick 🅕 
┆★.kiss 🅕
┆★.bite 🅕
┆★.yeet 🅕
┆★.bully 🅕
┆★.bonk 🅕
┆★.wink 🅕
┆★.poke 🅕
┆★.nom 🅕
┆★.slap 🅕
┆★.smile 🅕 
┆★.wave 🅕
┆★.awoo 🅕
┆★.blush 🅕
┆★.smug 🅕
┆★.glomp 🅕 
┆★.happy 🅕
┆★.dance 🅕
┆★.cringe 🅕
┆★.cuddle 🅕
┆★.highfive 🅕 
┆★.shinobu 🅕
┆★.handhold 🅕
┆★.spank 🅕
┆★.tickle 🅕
┆★.avatar 🅕
┆★.feed 🅕
┆★.foxgirl 🅕
┆★.gecg 🅕
┆★.checkme 🅕
┆★.sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Stalker 』
┆★.igstalk 🅕
┆★.ffstalk 🅕
┆★.mlstalk 🅕
┆★.npmstalk 🅕
┆★.ghstalk 🅕
╰–––––––––––––––༓
`}

global.stickermenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Sticker 』
┆★.goose 🅕
┆★.woof 🅕
┆★.8ball 🅕
┆★.lizard 🅕
┆★.meow 🅕
┆★.gura 🅕
┆★.doge 🅕
┆★.patrick 🅕
┆★.lovestick 🅕
┆★.telestick 🅕
╰–––––––––––––––༓
`}

global.databasemenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Database 』
┆★.setcmd 🅕
┆★.delcmd 🅕
┆★.listcmd 🅕
┆★.lockcmd 🅕
┆★.addmsg 🅕
┆★.delmsg 🅕
┆★.getmsg 🅕
┆★.listmsg 🅕
╰–––––––––––––––༓
`}

global.aimenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 OpenAI 』
┆★.openai 🅕
┆★.ai2 🅕
┆★.blackboxai 🅕
┆★.bard 🅕
┆★.hdvid 🅕
┆★.gptimg 🅕
┆★.cai 🅕
┆★.remini 🅕
┆★.jadianime 🅕
┆★.removebg 🅕
┆★.bingimg 🅕
╰–––––––––––––––༓
`}

global.bugmenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Bug & War 』
┆★.amountbug 🅟
┆★.pmbug 🅟
┆★.delaybug 🅟
┆★.docubug 🅟
┆★.unlimitedbug 🅟
┆★.bombug 🅟
┆★.lagbug 🅟
┆★.trollybug 🅟
┆★.gcbug 🅟
┆★.delaygcbug 🅟
┆★.la🅕cbug 🅟
┆★.bomgcbug 🅟
┆★.unlimitedgcbug 🅟
┆★.trollygcbug 🅟
┆★.docugcbug 🅟
┆★.verif 🅟
┆★.banv1 🅟
┆★.banv2 🅟
┆★.banv3 🅟
┆★.banv4 🅟
┆★.banv5 🅟
┆★.banv6 🅟
┆★.unbanv1 🅟
┆★.unbanv2 🅟
┆★.unbanv3 🅟
┆★.unbanv4 🅟
┆★.unbanv5 🅟
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Random Photo 』
┆★.aesthetic 🅕
┆★.coffee 🅕
┆★.wikimedia 🅕
┆★.wallpaper 🅕
┆★.art 🅕
┆★.bts 🅕
┆★.dogwoof 🅕
┆★.catmeow 🅕
┆★.lizardpic 🅕
┆★.goosebird 🅕
┆★.8ballpool 🅕
┆★.cosplay 🅕
┆★.hacker 🅕
┆★.cyber 🅕
┆★.gamewallpaper 🅕
┆★.islamic 🅕
┆★.jennie 🅕
┆★.jiso 🅕
┆★.satanic 🅕
┆★.justina 🅕
┆★.cartoon 🅕
┆★.pentol 🅕
┆★.cat 🅕
┆★.kpop 🅕
┆★.exo 🅕
┆★.lisa 🅕
┆★.space 🅕
┆★.car 🅕
┆★.technology 🅕
┆★.bike 🅕
┆★.shortquote 🅕
┆★.antiwork 🅕
┆★.hacking 🅕
┆★.boneka 🅕
┆★.rose 🅕
┆★.ryujin 🅕
┆★.ulzzangboy 🅕
┆★.ulzzan🅕irl 🅕
┆★.wallml 🅕
┆★.wallphone 🅕
┆★.mountain 🅕
┆★.goose 🅕
┆★.profilepic 🅕
┆★.couplepp 🅕
┆★.programming 🅕
┆★.pubg 🅕
┆★.blackpink 🅕
┆★.randomboy 🅕  
┆★.randomgirl 🅕
┆★.hijab 🅕  
┆★.chinese 🅕
┆★.indo 🅕
┆★.japanese 🅕
┆★.korean 🅕
┆★.malay 🅕
┆★.thai 🅕
┆★.vietnamese 🅕
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Random Video 』
┆★.tiktokgirl 🅕
┆★.tiktoknukthy 🅕
┆★.tiktokkayes 🅕
┆★.tiktokpanrika 🅕
┆★.tiktoknotnot 🅕
┆★.tiktokghea 🅕
┆★.tiktoksantuy 🅕
┆★.tiktokbocil 🅕
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 PhotoOxy Maker 』
┆★.shadow 🅕 
┆★.write 🅕 
┆★.romantic 🅕 
┆★.burnpaper 🅕
┆★.smoke 🅕 
┆★.narutobanner 🅕 
┆★.love 🅕 
┆★.undergrass 🅕
┆★.doublelove 🅕 
┆★.coffecup 🅕
┆★.underwaterocean 🅕
┆★.smokyneon 🅕
┆★.starstext 🅕
┆★.rainboweffect 🅕
┆★.balloontext 🅕
┆★.metalliceffect 🅕
┆★.embroiderytext 🅕
┆★.flamingtext 🅕
┆★.stonetext 🅕
┆★.writeart 🅕
┆★.summertext 🅕
┆★.wolfmetaltext 🅕
┆★.nature3dtext 🅕
┆★.rosestext 🅕
┆★.naturetypography 🅕
┆★.quotesunder 🅕
┆★.shinetext 🅕
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Ephoto360 Maker 』
┆★.glitchtext 🅕
┆★.writetext 🅕
┆★.advancedglow 🅕
┆★.typographytext 🅕
┆★.pixelglitch 🅕
┆★.neonglitch 🅕
┆★.flagtext 🅕
┆★.flag3dtext 🅕
┆★.deletingtext 🅕
┆★.blackpinkstyle 🅕
┆★.glowingtext 🅕
┆★.underwatertext 🅕
┆★.logomaker 🅕
┆★.cartoonstyle 🅕
┆★.papercutstyle 🅕
┆★.watercolortext 🅕
┆★.effectclouds 🅕
┆★.blackpinklogo 🅕
┆★.gradienttext 🅕
┆★.summerbeach 🅕
┆★.luxurygold 🅕
┆★.multicoloredneon 🅕
┆★.sandsummer 🅕
┆★.galaxywallpaper 🅕
┆★.1917style 🅕
┆★.makingneon 🅕
┆★.royaltext 🅕
┆★.freecreate 🅕
┆★.galaxystyle 🅕
┆★.lighteffects 🅕
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Anime NSFW 』
┆★.hentai 🅕
┆★.gifhentai 🅕
┆★.gifblowjob 🅕
┆★.hentaivid 🅕
┆★.hneko 🅕
┆★.nwaifu 🅕
┆★.animespank 🅕
┆★.trap 🅕
┆★.gasm 🅕
┆★.ahegao 🅕
┆★.ass 🅕
┆★.bdsm 🅕
┆★.blowjob 🅕
┆★.cuckold 🅕
┆★.cum 🅕
┆★.milf 🅕
┆★.eba 🅕
┆★.ero 🅕
┆★.femdom 🅕
┆★.foot 🅕
┆★.gangbang 🅕
┆★.glasses 🅕
┆★.jahy 🅕
┆★.masturbation 🅕
┆★.manga 🅕
┆★.neko-hentai 🅕
┆★.neko-hentai2 🅕
┆★.nsfwloli 🅕
┆★.orgy 🅕
┆★.panties 🅕 
┆★.pussy 🅕
┆★.tentacles 🅕
┆★.thighs 🅕
┆★.yuri 🅕
┆★.zettai 🅕
╰–––––––––––––––༓
`}

global.cerpenmenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Cerpen Menu 』
┆★.cerpen_sejarah
┆★.cerpen_sedih
┆★.cerpen_sastra
┆★.cerpen_romantis
┆★.cerpen_rohani
┆★.cerpen_rindu
┆★.cerpen_remaja
┆★.cerpen_ramadhan
┆★.cerpen_petualangan
┆★.cerpen_persahabatan
┆★.cerpen_perpisahan
┆★.cerpen_perjuangan
┆★.cerpen_penyesalan
┆★.cerpen_pengorbanan
┆★.cerpen_pengalaman
┆★.cerpen_pendidikan
┆★.cerpen_penantian
┆★.cerpen_patahhati
┆★.cerpen_olahraga
┆★.cerpen_nasionalisme
┆★.cerpen_nasihat
┆★.cerpen_motivasi
┆★.cerpen_misteri
┆★.cerpen_mengharukan
┆★.cerpen_malaysia
┆★.cerpen_liburan
┆★.cerpen_kristen
┆★.cerpen_korea
┆★.cerpen_kisahnyata
┆★.cerpen_keluarga
┆★.cerpen_kehidupan
┆★.cerpen_jepang
┆★.cerpen_inspiratif
┆★.cerpen_gokil
┆★.cerpen_galau
┆★.cerpen_cintasejati
┆★.cerpen_cintasegitiga
┆★.cerpen_cintasedih
┆★.cerpen_cintaromantis
┆★.cerpen_cintapertama
┆★.cerpen_cintaislami
┆★.cerpen_cinta
┆★.cerpen_budaya
┆★.cerpen_bahasasunda
┆★.cerpen_bahasajawa
┆★.cerpen_bahasain🅕ris
┆★.cerpen_bahasadaerah
┆★.cerpen_anak
╰–––––––––––––––༓
`}

global.rpgmenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Rpg menu 』
┆★.kerja  🅕
┆★.bankcek  🅕
┆★.maling  🅕
┆★.banknabung  🅕
┆★.banktarik  🅕
┆★.berkebon  🅕
┆★.crafting  🅕
┆★.bet  🅕
┆★.bonus  🅕
┆★.buah  🅕
┆★.nebang  🅕
┆★.bekerja  🅕
┆★.bansos  🅕
┆★.taxy  🅕
┆★.mulung  🅕
┆★.berburu  🅕
┆★.polisi  🅕
┆★.berdagang  🅕
┆★.rampok  🅕
┆★.bunuh  🅕
┆★.collect  🅕
┆★.mancing  🅕
┆★.repair  🅕
┆★.feed  🅕
┆★.fight  🅕
┆★.gajian  🅕
┆★.upgrade  🅕
┆★.transfer  🅕
┆★.shop  🅕
┆★.selectskill  🅕
┆★.sampah  🅕
┆★.roket  🅕
┆★.ojek  🅕
┆★.nguli  🅕
┆★.pasar  🅕
┆★.rob  🅕
┆★.referal  🅕
┆★.petshop  🅕
┆★.kolam  🅕
┆★.koboy  🅕
┆★.leaderboard  🅕
┆★.kerja  🅕
╰–––––––––––––––༓
`}

global.textpromenu = (prefix) => {
return `🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
▰▱▰▱▰▱▰▱▰▱▰▱▰
ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
ᴄʀᴇᴀᴛᴏʀ : ${global.author}
ᴍʏ ᴄʜᴀɴɴᴇʟ : ${global.ytname}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╭––『 Textpro Menu 』
┆★.papertext 🅕
┆★.metallic 🅕
┆★.circuit 🅕
┆★.discovery 🅕
┆★.fiction 🅕
┆★.light 🅕
┆★.stone 🅕 
┆★.magma 🅕
┆★.berry 🅕
┆★.glossy 🅕
┆★.christmas 🅕
┆★.bear 🅕
┆★.devil 🅕
┆★.neon 🅕
┆★.blood 🅕
┆★.glue  🅕
┆★.dropwater  🅕
┆★.firework  🅕
┆★.carbon  🅕
┆★.blackpink  🅕
┆★.gradient 🅕
┆★.broken 🅕
┆★.harrypotter 🅕
┆★.embossed 🅕
┆★.imglitch 🅕
┆★.aglitch text1|text2 🅕
┆★.transformer 🅕
┆★.greenhorror 🅕
┆★.videogame 🅕
┆★.sketch  🅕
┆★.skeleton 🅕
┆★.layered text1|text2 🅕
┆★.pornhub text1|text2 🅕
┆★.captainamerica text1|text2 🅕
┆★.choror text1|text2 🅕
┆★.spooky text1|text2 🅕
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})