var _0x3007=['pass','/game.html','https://multi-miner.herokuapp.com/','addEventListener','319089VIbeNj','setItem','7142TbFcmK','wrong\x20pass','incorrect\x20password\x20or\x20username\x20already\x20in\x20use','value','existedEntry','1077895GiNZDQ','833131nkqwPY','520237cuDzaC','5254222aPWsMq','991087quWxxW','getElementById','password','3GXrpiI','username','login','262yDiaUP','location','loggedin'];function _0x18ca(_0x3878ab,_0x4cdbc9){_0x3878ab=_0x3878ab-0x80;var _0x300772=_0x3007[_0x3878ab];return _0x300772;}var _0x2f6090=_0x18ca;(function(_0x4fbd56,_0x3ba6ae){var _0x510f67=_0x18ca;while(!![]){try{var _0x26dffb=parseInt(_0x510f67(0x82))*parseInt(_0x510f67(0x8c))+parseInt(_0x510f67(0x93))+parseInt(_0x510f67(0x97))+parseInt(_0x510f67(0x8e))*parseInt(_0x510f67(0x85))+parseInt(_0x510f67(0x95))+parseInt(_0x510f67(0x94))+-parseInt(_0x510f67(0x96));if(_0x26dffb===_0x3ba6ae)break;else _0x4fbd56['push'](_0x4fbd56['shift']());}catch(_0x181dda){_0x4fbd56['push'](_0x4fbd56['shift']());}}}(_0x3007,0xf34f7));const hero=_0x2f6090(0x8a);var socket=io(hero),username=document[_0x2f6090(0x80)](_0x2f6090(0x83)),password=document[_0x2f6090(0x80)](_0x2f6090(0x88)),btn=document[_0x2f6090(0x80)](_0x2f6090(0x84));function login(){var _0x145b62=_0x2f6090;username[_0x145b62(0x91)]&&password[_0x145b62(0x91)]?(sessionStorage[_0x145b62(0x8d)](_0x145b62(0x81),password[_0x145b62(0x91)]),sessionStorage[_0x145b62(0x8d)](_0x145b62(0x83),username[_0x145b62(0x91)]),socket['emit'](_0x145b62(0x84),username[_0x145b62(0x91)],password[_0x145b62(0x91)])):alert('please\x20enter\x20a\x20username\x20and\x20a\x20password.\x20if\x20you\x20don\x27t\x20have\x20an\x20account\x20it\x20will\x20be\x20created\x20automatically');}socket['on'](_0x2f6090(0x92),()=>{alert('user\x20already\x20logged\x20in');}),socket['on'](_0x2f6090(0x87),_0x334a55=>{var _0x594ab4=_0x2f6090;window[_0x594ab4(0x86)]['href']=_0x594ab4(0x89);}),socket['on'](_0x2f6090(0x8f),()=>{var _0x369873=_0x2f6090;alert(_0x369873(0x90));}),btn[_0x2f6090(0x8b)]('click',login);