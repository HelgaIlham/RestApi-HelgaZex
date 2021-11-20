__path = process.cwd()

// Jan asal ubah ngab
var express = require('express');
var db = require(__path + '/database/db');
try {
var kuhong = db.get('ojan'); // jan diubah
} catch (e) {
	console.log('WELCOME TO HelgaZex API!') // boleh diubah
}

var creatorList = ['Helga Zex']; // Nama Lu Ngab
var creator = creatorList[Math.floor(Math.random() * creatorList.length)]; // Ini jan diubah
var key = 'HelgaZex' // Apikey Lu Ngab

// Required Modules :
var ffmpeg = require('fluent-ffmpeg');
var brainly = require('brainly-scraper-v2');
var imageToBase64 = require('image-to-base64');
var upload = require(__path + '/lib/upload.js');
var axios = require('axios');
var FormData = require('form-data');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var qrcode = require('qrcode');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require('scrape-yt');
var gtts = require('node-gtts');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var yts = require('yt-search');
var fs = require('fs');
var util = require('util');
var router  = express.Router();

var { tts, wait, simih, getBuffer, h2k, banner, getRandom, start, info, success, close, pickRandom } = require(__path + '/lib/functions.js');
var { RemoveBg } = require('remove.bg');
var { tahta } = require(__path + '/lib/tahta.js');
var { createHash } = require('crypto')
var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var { recognize } = require(__path + '/lib/ocr.js')
var options = require(__path + '/lib/options.js');
var { Vokal, Base, Searchnabi, Gempa } = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

// loghandler :
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter apikey!'
    },
    notnama: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nama'
    },
    notimg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter img'
    },
    notemoji: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter emoji'
    },
    notangka: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter angka'
    },
    notnomor: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nomor'
    },
    notjumlah: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter jumlah'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter url'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter query'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter kata'
    },
    notlang: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter bahasa'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Tema tidak tersedia silahkan masukkan texmaker/list atau baca dokumentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: `Apikey tidak ditemukan! Silahkan kontak Owner untuk dapatkan Apikey wa.me/6285157740529`
    },
    invalidLink: {
        status: false,
        creator: `${creator}`,
        message: 'Masukan link yang valid!'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'Kata tidak valid'
    },
    invalidtext: {
    	status: false,
        creator: `${creator}`,
        message: 'Teks tidak valid'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    notbase64: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter teks base64'
    },
    number: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Teks harus berupa angka!'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Erorr! Mungkin Sedang dalam perbaikan'
    }
}

var error = __path + '/views/error.html' // Error
var invalidKey = __path + '/views/invalidKey.html' // Apikey Invalid

// Api Features :
        var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------kuhong-api-storage'+'HelgaZex';


router.get('/cekapikey', async (req, res, next) => {
    var apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	var limit = 'undefined'
        if (apikeyInput == `${key}`) { limit = 'Unlimited!' }

try {
	res.json({
               status : `active`,
                apikey : apikeyInput,
                limit : limit
            })
 
} catch (e) {
	res.sendFile(error)
   }
})

router.get('/changekey', (req, res, next) => {
    var apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)

    try {
        kuhong.insert({
            apikey: apikeyInput
        })
        .then(() => {
              res.json({
                  status: true,
                  result: `Apikey "${apikeyInput}" Berhasil ditambahkan!`
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(error)
    }
})

router.get('/removekey', (req, res, next) => {
    var apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)

    try {
        kuhong.remove({
            apikey: apikeyInput
        })
        .then(() => {
             res.json({
                  status: true,
                  result: `Apikey "${apikeyInput}" Berhasil dihapus!`
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(error)
    }
})

router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidLink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "Username tidak ditemukan!"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://api.zeks.xyz/api/quote?apikey=alpin1234567`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa Subscribe Youtube ${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/jadwal-bioskop', (req, res) => {
var apikeyInput = req.query.apikey

if(!apikeyInput) return res.json(loghandler.notparam)
if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
const cheerio = require('cheerio')

axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     var title = []
     var url = []
     var img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     var result = []
     for (var i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.send({
     creator:  `${creator}`,
     status: true,
     result: result
     })
  })
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa Subscribe Youtube ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidLink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'Masukan parameter type, type yang tersedia : base4 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
					result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.sendFile(error)
			}
})

router.get('/nulis', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json(loghandler.nottext)

   try {
	   var fontPath = __path + '/lib/font/Zahraaa.ttf'
           var inputPath = __path + '/lib/kertas/nulis.jpg'
           var outputPath = __path + '/tmp/hasil.jpg'
      spawn('convert', [
            inputPath,
            '-font',
            fontPath,
            '-size',
            '700x960',
            '-pointsize',
            '30',
            '-interline-spacing',
            '-7',
            '-annotate',
            '+170+222',
            text,
            outputPath
         ])
         .on('error', () => console.log('Error Nulis'))
         .on('exit', () =>
         {
	         res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.json(loghandler.erorr)
   }
})

router.get('/nulis2', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

   try {
	   var d = new Date
           var tgl = d.toLocaleDateString('id-Id')
           var hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
	   var fontPath = __path + '/lib/font/Zahraaa.ttf'
           var inputPath = __path + '/lib/kertas/nulis2.jpg'
           var outputPath = __path + '/tmp/hasil2.jpg'
      spawn('convert', [
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    text,
    outputPath
  ])
  .on('error', () => console.log('Error Nulis2'))
  .on('exit', () => {

	          res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.json(loghandler.erorr)
           }
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
			    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    res.json({
                                              status : true,
                                              creator : creator,
                                              result : data.data.url
                                       })
                                })
                           })
                       }
                   })
     } catch (e) {
          console.log(e);
        res.sendFile(error)
            }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return rs.jso(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h =$(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effcts/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                               })
                       })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.sendFile(error)
		})
})

router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.sendFile(error)
		})
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
     })
})
 
router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/fbdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.om/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnai").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/flaming', async (req, res, next) => {
         var text = req.query.text,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

  try {
         var json = await (await fetch(`http://zekais-api.herokuapp.com/photooxy/flaming?text=${text}`)).json()
	 var buffer = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.result}&name=HelgaZex`)).json()
	   await fs.writeFileSync(__path + '/tmp/flaming.png', await getBuffer(buffer.data.url))
	  
	res.sendFile(__path + '/tmp/flaming.png')
   } catch (e) {
       console.log(e);
     res.sendFile(error)
       }
})

router.get('/neon', async (req, res, next) => {
         var text = req.query.text,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

  try {
         var json = await (await fetch(`http://zekais-api.herokuapp.com/photooxy/neon?text=${text}`)).json()
	 var buffer = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.result}&name=HelgaZex`)).json()
	   await fs.writeFileSync(__path + '/tmp/neon.png', await getBuffer(buffer.data.url))
	  
	res.sendFile(__path + '/tmp/neon.png')
   } catch (e) {
       console.log(e);
     res.sendFile(error)
       }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.jon(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput =req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQ-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.searc
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
            res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/liriklagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kata"})

        var json = await (await fetch(`https://scrap.terhambar.com/lirik?word=${lagu}`)).json()
        var result = json.result
             res.json({
		 creatos : creator,
                 result : result
             })
})

router.get('/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(!kata) return res.json({ status : false, creator: `${creator}`, message : "Masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => responsejson())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infocuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    provinsi = req.query.provinsi
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	if(!provinsi) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter provinsi"})
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/${provinsi}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infocuaca/bandara', async (req, rs, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infocuaca/dunia', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infotsunami', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = dta;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;            res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/caklontong?apikey=yogipw`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/kuis/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://api.zeks.xyz/api/tebakgambar?apikey=alpin1234567`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/news/cnn', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/cnbc', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
           
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/republika', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/tempo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.verce.app/v1/tempo-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/antara', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/kumparan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/filmapik/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/filmapik/kategori', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/filmapik/play', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            id = req.query.id
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!id) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter id"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
            res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/filmapik/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
            res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter film"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/playstore', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            namaapk = req.query.namaapk
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!namaapk) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter nama apk"})

       fetch(encodeURI(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${namaapk}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/happymod', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            namaapk = req.query.namaapk
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!namaapk) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter nama apk"})

       fetch(encodeURI(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${namaapk}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/Gsm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            ygdicarik = req.query.ygdicarik
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!ygdicarik) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter nama ygdicarik"})

       fetch(encodeURI(`https://api.zeks.xyz/api/gsmArena?apikey=apivinz&q=${ygdicarik}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/sticker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter nama"})

       fetch(encodeURI(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${nama}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/sticker/line', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            link = req.query.link
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!link) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter link"})

       fetch(encodeURI(`https://api.zeks.xyz/api/linesticker?link=${link}&apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/sticker/telegram', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            link = req.query.link
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!link) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter link"})

       fetch(encodeURI(`https://api.zeks.xyz/api/telegram-sticker?apikey=apivinz&url={link}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/jadwal/tv', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            channel = req.query.channel
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!channel) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter channel"})

       fetch(encodeURI(`https://api.zeks.xyz/api/jadwaltv?channel=${channel}&apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/iguser', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter nama"})

       fetch(encodeURI(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${nama}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/lk21/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/comingsoon', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/tvseries', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/year', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tahun = req.query.tahun
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!tahun) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter tahun"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${tahun}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/country', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            negara = req.query.negara
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!negara) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter negara"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${negara}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/genre', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tipe = req.query.tipe
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!tipe) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter tipe"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${tipe}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/textmaker/random', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'text-burn' && theme != 'art-quote') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'text-burn') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'art-quote') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
               headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
			    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/roses', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wooden-boarch' && theme != 'golden') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wooden-boarch') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
               headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'golden') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = heerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/yutub/video', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       fetch(encodeURI(`https://api.zeks.xyz/api/ytmp4?url=${url}&apikey=alpin1234567`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/yutub/audio', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       fetch(encodeURI(`https://api.zeks.xyz/api/ytmp3?url=${url}&apikey=alpin1234567`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/ig/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter username"})

       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/comik', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter username"})

       fetch(encodeURI(`https://api.zeks.xyz/api/bacakomik?apikey=alpin1234567&q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/dork', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            dork = req.query.dork
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!dork) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter dork"})

       fetch(encodeURI(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/pastebin', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/maker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker4', async (rq, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3d', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3d/no2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3d/no3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.qery.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3d/no4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/yutub/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            video = req.query.video
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!video) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter video"})

       fetch(encodeURI(`https://api.zeks.xyz/api/yts?q=${video}&apikey=alpin1234567`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker/special/transformer', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})
 try {
       var json = await (await fetch(`https://textmaker-api-zahirr.herokuapp.com/api/special/transformer?text=${text}`)).json()
       var buffer = await getBuffer(json.results)
	 await fs.writeFileSync(__path + '/tmp/transformer.png', buffer)

             res.sendFile(__path + '/tmp/transformer.png')
 } catch (e) {
	 console.log(e)
    res.sendFile(error)
  }
})

router.get('/maker/special/epep', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

 try {
       var json = await (await fetch(`https://textmaker-api-zahirr.herokuapp.com/api/special/sertifikatepep?text=${text}`)).json()
       var buffer = await getBuffer(json.results)
	 await fs.writeFileSync(__path + '/tmp/epepserti.png', buffer)

             res.sendFile(__path + '/tmp/epepserti.png')
 } catch (e) {
	 console.log(e)
    res.sendFile(error)
      }
})

router.get('/tomp4', async (req, res, next) => {
        var url = req.query.url,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!url) return res.json(loghandler.noturl)
	if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

try {
   axios.get(`https://ezgif.com/webp-to-mp4?url=${url}`).then(({ data }) => {
           var $ = cheerio.load(data)
           var bodyFormThen = new FormData()
           var file = $('input[name="file"]').attr('value')
	   var token = $('input[name="token"]').attr('value')
           var convert = $('input[name="file"]').attr('value')
           var gotdata = {
                         file: file,
                         token: token,
                         convert: convert
                         }
                         bodyFormThen.append('file', gotdata.file)
                         bodyFormThen.append('token', gotdata.token)
                         bodyFormThen.append('convert', gotdata.convert)
                         axios({
                         method: 'post',
                         url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                         data: bodyFormThen,
                         headers: {
                         'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                         }}).then(({ data }) => {
                         var $ = cheerio.load(data)
                         var result = 'https:' + $('div#output > p.outfile > video > source').attr('src')

	                       res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result : result
                                        })
                             })
                     })

 } catch (e) {
          console.log(e);
      res.sendFile(error)
   }
})

router.get('/ocr', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
        img = req.query.img;
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!img) return res.json(loghandler.notimg)
	if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

  try {
	var enc = await imageToBase64(img)
	var media = Buffer.from(enc, 'base64')
	  await fs.writeFileSync(__path + '/tmp/ocr.png', media)
   await recognize(`${__path}/tmp/ocr.png`, { lang: 'eng+ind', oem: 1, psm: 3 })
        .then(hasil => {

             res.json({
                status : true,
                creator : `${creator}`,
                message : `jangan lupa Subscribe Youtube ${creator}`,
                result : `${hasil}`
             })
       })
          .catch(err => {
                res.sendFile(error)
   })
  } catch (e) {
        console.log(e);
      res.sendFile(error)
   }
})

router.get('/removebg', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
        img = req.query.img;

  try {
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!img) return res.json(loghandler.notimg)
	if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

	var encmedia = await imageToBase64(img)
	var media = Buffer.from(encmedia, 'base64')
	   await fs.writeFileSync(__path + '/tmp/nobg.png', media)
	      var rbg = RemoveBg('HCVrssExQw8DuaWpj2vE5359', 'error.log')
              rbg.remove_background_from_img_file(__path + '/tmp/nobg.png')

	  res.sendFile(__path + '/tmp/nobg.png')
 } catch (e) {
          console.log(e);
      res.sendFile(error)
   }
})

router.get('/simsimi', async (req, res, next) => {
        var kata = req.query.kata,
	apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!kata) return res.json(loghandler.notkata)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${kata}`)).json()
        var result = json.success
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
	console.log(e)
    res.sendFile(error)
   }
})

router.get('/binary', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
       text = req.query.encode

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://some-random-api.ml/binary?encode=${text}`)).json()
        var result = json.binary
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/binary', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        text = req.query.decode;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://some-random-api.ml/binary?decode=${text}`)).json()
        var result = json.text
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/tobase64', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        img = req.query.img;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!img) return res.json(loghandler.notimg)

 try {
           var result = await imageToBase64(img)
                res.json({
                   	status : true,
                       creator : `${creator}`,
                       result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/tomedia', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        base64 = req.query.base64;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!base64) return res.json(loghandler.notbase64)
    if (base64.startsWith('data')) return res.json({ message : `Gunakan teks base64 tanpa data:image/jpeg!` })

 try {
           var result = Buffer.from(base64, 'base64')
                res.sendFile(result)
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/ttp', async (req, res, next) => {
     var text = req.query.text,
     apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
         var json = await (await fetch(`https://api.areltiyan.site/sticker_maker?text=${text}`)).json()
         var hasil = json.base64.split`,`[1]
         await fs.writeFileSync(__path + `/tmp/ttp.png`, hasil, 'base64')

    res.sendFile(__path + '/tmp/ttp.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/dadu', async (req, res, next) => {
	var apikeyInput = req.query.apikey

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

      var random = Math.floor(Math.random() * 6) + 1
      var hasil = 'https://www.random.org/dice/dice' + random + '.png'
      var data = await (await fetch(hasil)).buffer()

         await fs.writeFileSync(__path + '/tmp/dadu.png', data)
   res.sendFile(__path + '/tmp/dadu.png')
})

router.get('/repeat', (req, res, next) => {

const repeat = (text, total) => {
		return text.repeat(total)
	}
      var text = req.query.text,
             jumlah = req.query.jumlah,
            apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if (!jumlah) return res.json(loghandler.notjumlah)
  if (isNaN(jumlah)) return res.json(loghandler.number)
  if (jumlah > 10000) return res.json({ message: `Maximal 10rb Kali!` })

  var result = repeat(text, jumlah)
       res.json({
             status: true,
             creator: `${creator}`,
             result: result
       })
})

router.get('/reverse', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://videfikri.com/api/hurufterbalik/?query=${text}`)).json()
        var result = json.result.kata
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/spamcall', async (req, res, next) => {
       var nomor = req.query.nomor,
	   apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!nomor) return res.json(loghandler.notnomor)
	if (isNaN(nomor)) return res.json(loghandler.number)

 try {
       var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/spamcall?no=${nomor}`)).json()
             res.json(json)

} catch (e) {
    res.sendFile(error)
   }
})

router.get('/spamsms', async (req, res, next) => {
       var nomor = req.query.nomor,
              jumlah = req.query.jumlah,
	         apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nomor) return res.json(loghandler.notnomor)
    if (isNaN(nomor)) return res.json(loghandler.number)
    if (!jumlah) return res.json(loghandler.notjumlah)
    if (isNaN(jumlah)) return res.json(loghandler.number)
    if (jumlah > 20) return res.json({ message: `Maximal 20 Bang` })

 try {
       var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/spamsms?no=${nomor}&jum=${jumlah}`)).json()
         res.json(json)

} catch (e) {
    res.sendFile(error)
   }
})

router.get('/bokep', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/pussy`)).json()
	 var hasil = await getBuffer(json.result)
            await fs.writeFileSync(__path + '/tmp/bokep.png', hasil)

    res.sendFile(__path + '/tmp/bokep.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/googleimage', async (req, res, next) => {
	var q = req.query.q,
     apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=${q}`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/image.png', hasil)

    res.sendFile(__path + '/tmp/image.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/say', async (req, res, next) => {
     var apikeyInput = req.query.apikey,
            text = req.query.text;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       res.json({
       	status : true,
           creator : `${creator}`,
       	result : text
       })
})

router.get('/md5', async (req, res, next) => {
     var apikeyInput = req.query.apikey,
            text = req.query.text;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var result = await createHash('md5').update(text).digest('hex')
       res.json({
       	status : true,
           creator : `${creator}`,
           result : result
       })
})

router.get('/tahta', async (req, res, next) => {
   var text = req.query.text,
          apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/hartatahta?text=${text}&apikey=apivinz`)).buffer()
       await fs.writeFileSync(__path + '/tmp/tahta.png', hasil)

    res.sendFile(__path + '/tmp/tahta.png')
})

router.get('/customtahta', async (req, res, next) => {
   var text = req.query.text,
          apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/tahta?text=${text}&apikey=apivinz`)).buffer()
       await fs.writeFileSync(__path + '/tmp/cstahta.png', hasil)

    res.sendFile(__path + '/tmp/cstahta.png')
})

router.get('/anime/random', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=anime`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/anime.png', hasil)

    res.sendFile(__path + '/tmp/anime.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/kpop/random', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=kpop`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/kpop.png', hasil)

    res.sendFile(__path + '/tmp/kpop.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/random/manga', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=manga`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/manga.png', hasil)

    res.sendFile(__path + '/tmp/manga.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/triggered', async (req, res, next) => {
       var img = req.query.img,
	   apikeyInput = req.query.apikey;
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

 try {
	 var result = await imageToBase64(`http://zekais-api.herokuapp.com/trigger?url=${img}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/trigger.gif', hasil)

    res.sendFile(__path + '/tmp/trigger.gif')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/emojitopng', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               emoji = req.query.emoji;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!emoji) return res.json(loghandler.notemoji)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${encodeURIComponent(emoji)}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/emojitopng.png', hasil)

         res.sendFile(__path + '/tmp/emojitopng.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)   }
})

router.get('/brainly', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var json = await (await fetch(`https://api.zeks.xyz/api/brainly?apikey=apivinz&q=${text}&count=5`)).json()
       res.json(json)
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/pantun', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/pantun?apikey=apivinz`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/memeindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)).json()
     var hasil = await getBuffer(json.result)
       await fs.writeFileSync(__path + '/tmp/memeindo.png', hasil)

         res.sendFile(__path + '/tmp/memeindo.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})	

router.get('/artinama', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               nama = req.query.nama;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!nama) return res.json(loghandler.notnama)	

 request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'http://www.primbon.com/arti_nama.php?nama1=' + nama + '&proses=+Submit%21+',
      }, function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');

var result = `Arti dari namamu adalah\n\nNama *${nama}*\n${h}`
         res.json({
	        status : true,
                creator : `${creator}`,
                result : result
             })
   })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/cekjodoh', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
	    pasangan = req.query.pasangan;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!nama) return res.json(loghandler.notnama)
  if (!pasangan) return res.json({ message : `Masukan nama pacarmu,, ehh pasangan :v` })

 request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + nama + '&nama2='+ pasangan +'&proses=+Submit%21+',

    }, function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')

var result = `Kecocokan Berdasarkan Nama :\n\n${d}`
         res.json({
	        status : true,
                creator : `${creator}`,
                result : result
             })
   })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/caklontong?apikey=yogipw`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/ptlvid`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/cerpen', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/cerpen`)).json()
         res.json({
		 status : true,
		 creator : creator,
		 judul : json.title,
		 pengarang : json.pengarang,
		 kategori : json.category,
		 cerpen : json.post
      })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/mediafire', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${url}`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/tts', async (req, res, next) => {
       var text = req.query.text,
	   lang = req.query.lang,
	   apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if (!lang) return res.json(loghandler.notlang)
  if (lang > 4) return res.json({ error : `Kode bahasa tidak valid!` })

  try {
         var ress = await imageToBase64(`http://zekais-api.herokuapp.com/speech?lang=${lang}&text=${text}`)
	 var tts = Buffer.from(ress, 'base64')
	   await fs.writeFileSync(__path + '/tmp/tts.opus', tts)

       res.sendFile(__path + '/tmp/tts.opus')
  } catch (e) {
	console.log(e)
	  res.sendFile(error)
     }
})

router.get('/darkjokes', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)).json()
     var hasil = await getBuffer(json.result)
       await fs.writeFileSync(__path + '/tmp/darkjokes.png', hasil)

         res.sendFile(__path + '/tmp/darkjokes.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/splaybutton', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/playbutton.png', hasil)

         res.sendFile(__path + '/tmp/playbutton.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/gplaybutton', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/playbutton2.png', hasil)

         res.sendFile(__path + '/tmp/playbutton2.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/textpantai', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/pantai.png', hasil)

         res.sendFile(__path + '/tmp/pantai.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/textsalju', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var json = await (await fetch(`https://api.zeks.xyz/api/snowwrite?text1=${t1}&text2=${t2}&apikey=apivinz`)).json()
       await fs.writeFileSync(__path + '/tmp/salju.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/salju.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/alay', async (req, res, next) => {
        var kata = req.query.kata,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!kata) return res.json(loghandler.notkata)
      var json = await (await fetch(`https://api.terhambar.com/bpk?kata=${kata}`)).json()
         res.json({
		 status : true,
		 creator : creator,
		 result : json.text
	   })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/firework', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/firework.png', hasil)

         res.sendFile(__path + '/tmp/firework.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/retro', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2,
	    t3 = req.query.t3;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)
  if (!t3) return res.json(loghandler.nottext3)

     var json = await (await fetch(`https://api.zeks.xyz/api/retro?text1=${t1}&text2=${t2}&text3=${t3}&apikey=apivinz`)).json()
       await fs.writeFileSync(__path + '/tmp/retro.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/retro.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/matrix', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/matrix.png', hasil)

         res.sendFile(__path + '/tmp/matrix.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/text3d', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/3d.png', hasil)

         res.sendFile(__path + '/tmp/3d.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/kuis/family100', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/reyhangans/Zhirrr-Api/main/lib/family100.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	 result  
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/pornlogo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${t1}&text2=${t2}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/pornhub.png', hasil)

         res.sendFile(__path + '/tmp/pornhub.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/marvel', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;
try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${t1}&text2=${t2}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/marvel.png', hasil)

         res.sendFile(__path + '/tmp/marvel.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/blackpink', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/bp.png', hasil)

         res.sendFile(__path + '/tmp/bp.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/avengers', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;
try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${t1}&text2=${t2}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/avenger.png', hasil)

         res.sendFile(__path + '/tmp/avenger.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/thunder', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/thundertext?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/thunder.png', hasil)

         res.sendFile(__path + '/tmp/thunder.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/news', async (req, res) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

	var data = fs.readFileSync(__path + '/lib/utils/news.js')
	var json = JSON.parse(data)

     res.json(json)
})

router.get('/ssweb', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await getBuffer(`http://nurutomo.herokuapp.com/api/ssweb?url=${url}`)
       await fs.writeFileSync(__path + '/tmp/screenshot.png', hasil)

         res.sendFile(__path + '/tmp/screenshot.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/calculator', async (req, res) => {
    var angka = req.query.angka,
	apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!angka) return res.json(loghanlder.notangka)

    var val = angka
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  var format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    var result = (new Function('return ' + val))()
    if (!result) res.json({ message : result })

	res.json({
		status : true,
		creator : creator,
		result : result
	  })
  } catch (e) {
    if (e == undefined) res.json({ error : `Kesalahan Terjadi!` })
        res.json({ message : `Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport` })
  }
})

router.get('/hd', async (req, res) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

try {
     var media = await getBuffer(img)
     var body = new FormData
         body.append('image', media, 'image')
         var ress = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
            method: 'POST',
            body
            })
  if (ress.status !== 200) return await res.json(ress)
    await fs.writeFileSync(__path + '/tmp/hd.png', await ress.buffer())

    res.sendFile(__path + '/tmp/hd.png')
   } catch (e) {
	 console.log(e)
    res.sendFile(error)
  }
})

router.get('/dare', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     result : json.Dare
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/quotemaker', async (req, res, next) => {
        var quote = req.query.quote,
	    author = req.query.author,
	    theme = req.query.theme,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!quote) return res.json({ message : `Masukan parameter quote (kata quotes)` })
  if (!author) return res.json({ message : `Masukan parameter author` })
  if (!theme) return res.json(loghandler.nottheme)

     var json = await (await fetch(`https://terhambar.com/aw/qts/?kata=${quote}&author=${author}&tipe=${theme}`)).json()
       await fs.writeFileSync(__path + '/tmp/quotemaker.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/quotemaker.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/attp', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
	 var result = await imageToBase64(`https://api.xteam.xyz/attp?file&text=${text}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/attp.webp', hasil)

    res.sendFile(__path + '/tmp/attp.webp')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/ttp2', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
	 var result = await imageToBase64(`https://api.xteam.xyz/ttp?file&text=${text}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/ttp.webp', hasil)

    res.sendFile(__path + '/tmp/ttp.webp')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/futureneon', async (req, res, next) => {
        var text = req.query.text,
           apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

 try {
       request.post({
            url: "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                if (!e) {
                 var $ = cheerio.load(b)
                 $('.thumbnail').find('img').each(function() {
	             h = $(this).attr("src")
                 var result = 'https://textpro.me/save-images/'+h
                     fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${result}&name=${randomTextNumber}`))
                       .then(response => response.json())
                       .then(data => {
                          res.json({
                          	status: true,
                          	creator : creator,
                          	result : data.data.url
                             })
                         })
                      })
                    }
                 })
  } catch (e) {
          console.log(e);
    res.sendFile(error)
       }
})

router.get('/spotify', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    q = req.query.q;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

     var json = await (await fetch(`https://api.zeks.xyz/api/spotify?apikey=apivinz&q=${q}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/instagram', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

     var json = await (await fetch(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${url}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/towebp', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/pngtowebp?url=${url}`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     result : json.result
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/math', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    mode = req.query.mode;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!mode) return res.json({ message : `Silahkan masukan modenya,, Mode tersedia : 1. very_easy, 2. easy, 3. medium, 4. hard, 5. extreme, 6. impossible` })

     var json = await (await fetch(`http://zekais-api.herokuapp.com/math?mode=${mode}`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     info : json.message,
	     soal : json.soal,
	     jawaban : json.jawaban,
	     poin : 25000
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/math2', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://salism3api.pythonanywhere.com/math`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     soal : json.image,
	     jawaban : json.answer,
	     poin : 50000
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/toimg', async (req, res, next) => {
        var webp = req.query.webp,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!webp) return res.json(loghandler.notimg)
  if (!webp.startsWith('http')) return res.json(loghandler.invalidLink)

    var img = await getBuffer(webp)
    var bufs = []
    var im = spawn('convert', ['webp:-', 'png:-'])
    im.on('error',e => res.sendFile(error))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(img)
    im.stdin.end()
    im.on('exit', () => {
      var encmedia = imageToBase64(Buffer.concat(bufs))
      var media = Buffer.from(encmedia, 'base64')
        fs.writeFileSync(__path + '/tmp/toimg.png', media)

     res.sendFile(__path + '/tmp/toimg.png')
   })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/qrcode', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var qr = await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 })
     var hasil = qr.split`,`[1]
        await fs.writeFileSync(__path + '/tmp/qr.png', hasil, 'base64')
          res.sendFile(__path + '/tmp/qr.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/imgbb', async (req, res, next) => {
        var url = req.query.url,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.imgbb.com/1/upload?expiration=180&key=761ea2d5575581057a799d14e9c78e28&image=${url}&name=imgbb-uploader`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     info : 'url otomatis akan hilang dalam 3 menit',
	     url : json.data.url_viewer,
	     display_url : json.data.url,
	     delete_url : json.data.delete_url
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/createcode', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

  var len = 25
  var arr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210'
  var random = ''
  var random2 = ''

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }
        var lenn = 10
        var code = '';
        for (var i = lenn; i > 0; i--) {
            random2 += arr[Math.floor(Math.random() * arr.length)];
        }
   var encode = random + random2 + code

       res.json({
       	     status : true,
             creator : creator,
             text : text,
             code : encode
        })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/bucin', async (req, res, next) => {
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/bucin`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     bucin : json.result
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/memegen', async (req, res, next) => {
  var img = req.query.img,
      t1 = req.query.t1,
      t2 = req.query.t2;
      apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if(!t1) return res.json(loghandler.nottext)
  if(!t2) return res.json(loghandler.nottext2)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/mgen?text1=${t1}&text2=${t2}&url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/memegen.png', hasil)

     res.sendFile(__path + '/tmp/memegen.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})


// End of script
module.exports = router
