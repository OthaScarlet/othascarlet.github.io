(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"067f":function(e,t,n){},"1e66":function(e,t,n){"use strict";var r=n("dec8"),a=n.n(r);a.a},"2d5d":function(e,t,n){},"416f":function(e,t,n){},"4d97":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Game Projects")]),n("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" The following are some VideoGames I've made or somehow I contributed to. ")]),n("ProjectsList",{attrs:{projects:e.projects}})],1)},a=[],i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[n("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(n){return e.showDetails(t)}}},[n("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),n("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[n("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),n("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.visible?n("div",[n("div",{staticClass:"overlay"}),n("div",{staticClass:"dialog",style:{"background-color":e.color}},[n("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),n("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[n("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),n("div",{staticClass:"dialog-content"},[n("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),n("div",{staticClass:"dialog-bottom"},[n("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},l=[],u=i["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),d=u,p=(n("1e66"),n("2877")),m=Object(p["a"])(d,c,l,!1,null,"e66acff8",null),h=m.exports,f=i["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:h},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),v=f,g=(n("5935"),Object(p["a"])(v,s,o,!1,null,"190958aa",null)),y=g.exports,b=function(){function e(e,t,n,r,a,i,s){void 0===a&&(a="#000000"),void 0===i&&(i=!1),void 0===s&&(s=!1),this.id=e,this.name=t,this.htmlDescription=r,this.iconUrl=n,this.isHigh=i,this.isWide=s,this.accentColor=a}return e}(),w=b,C=[new w("project-1","Untitled Mystery VR Game","img/projects/UMVRG-thumbnail.jpg",'\n    <div class="paragraph">\n     <strong>Welcome to 2044, 10 years since the police service was no longer public, cults are starting to rise all around the country. \n\n     You are a rookie inspector called Amy who starts her first day of work with her auntie Agatha, a freelance police officer because getting accepted nowadays in the private police force business is hard.\n     \n     What should be a simple suicide case of a paranoid man ends up uncovering a sinister plot, something that will change Amy’s life forever. \n    </div>\n\n     <div class="paragraph center">\n     <iframe class="youtube" src="https://www.youtube-nocookie.com/embed/RStpR08CNYQ" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n            <li>Adventure/Mystery Game for VR!</li>\n            <li>Use your Virtual AR tools to investigate the case.</li>\n            <li>Discover the mystery behind the paranoid man\'s death</li>\n            <li>Compatible with almost every headset thanks to OpenXR!</li>\n            <li>Features FMOD & Oculus Occlusion for Audio Immersion</li>\n        </ul>\n    </div>\n    <div class="paragraph" >\n    <div class="notice center">\n    Available on <a href="https://othascarlet.itch.io/untitled-mystery-vr-game" target="_blank">Itch.io</a>.\n    </div>\n    </div>\n    <div class="paragraph">\n    Compatible With:<br/>\n    <img class="pc-screenshot" src="img/Trademarks/SteamVR.png" alt="SteamVR Logo" />\n    <img class="pc-screenshot" src="img/Trademarks/OpenXR.png" alt="OpenXR Logo" />\n    </div>\n    <div class="paragraph center">Screenshots:<br/>\n        <img class="pc-screenshot" src="img/projects/UMVRG/pic-00.jpg" alt="Screenshot 1" />\n        <img class="pc-screenshot" src="img/projects/UMVRG/pic-04.jpg" alt="Screenshot 2" />\n        <img class="pc-screenshot" src="img/projects/UMVRG/pic-08.jpg" alt="Screenshot 3" />\n        <img class="pc-screenshot" src="img/projects/UMVRG/pic-07.jpg" alt="Screenshot 4" />\n    </div>\n    \n    <div class="small center">\n    Steam, SteamVR, the Steam logo and the SteamVR logo are\n    trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.<br/>\n   FMOD and the FMOD logo are trademarks and/or registered trademarks of Firelight Technologies Pty Ltd in the U.S. and/or other countries.<br/>\n   Oculus and its logo are trademarks or registered trademarks of FACEBOOK TECHNOLOGIES, LLC, Inc in the US and elsewhere.<br/>\n   OpenXR™ is a trademark owned by The Khronos Group Inc. and is registered as a trademark in China, the European Union, Japan and the United Kingdom<br/>\n   </div>\n    ',"#23bd69",!0,!0)],j=i["a"].extend({name:"GameProjects",components:{ProjectsList:y},data:function(){return{projects:C}}}),S=j,k=Object(p["a"])(S,r,a,!1,null,null,null);t["default"]=k.exports},5935:function(e,t,n){"use strict";var r=n("416f"),a=n.n(r);a.a},"60a8":function(e,t,n){"use strict";var r=n("bbbe"),a=n.n(r);a.a},"8cdb":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"http-404"},[e._v("404 🙈")])},a=[],i=(n("60a8"),n("2877")),s={},o=Object(i["a"])(s,r,a,!1,null,"40ac290c",null);t["default"]=o.exports},b6d1:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("Text: "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$route.query.message,expression:"$route.query.message"}],attrs:{id:"message",rows:"5",cols:"33"},domProps:{value:e.$route.query.message},on:{input:function(t){t.target.composing||e.$set(e.$route.query,"message",t.target.value)}}})]),n("div",[e._v("Signature: "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$route.query.signature,expression:"$route.query.signature"}],attrs:{id:"signature",rows:"5",cols:"33"},domProps:{value:e.$route.query.signature},on:{input:function(t){t.target.composing||e.$set(e.$route.query,"signature",t.target.value)}}})]),n("div",[n("button",{on:{click:function(t){return e.VerifySignature()}}},[e._v("Verify Signature")])]),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"result"}},[n("a")])}],i=n("2b0e"),s="IUt+ajJnM0s/LlJeYVJqPX4kYHQ=",o=new Uint8Array([115,254,73,245,128,46,70,153,186,249,214,205,114,144,136,34]),c=new Uint8Array([227,205,119,193,117,37,56,121,52,103,207,251,121,24,199,51,29,225,179,0,88,176,157,12,76,99,242,75,12,4,176,78,110,215,192,202,240,241,182,42,141,161,42,6,153,76,66,13,55,76,149,227,29,136,40,241,240,25,133,97,247,111,144,60,14,231,154,92,224,50,163,140,48,152,150,148,182,57,105,196,166,145,113,202,102,133,83,29,204,203,225,30,175,103,2,185,73,88,250,226,10,177,90,59,200,243,231,122,136,167,68,31,154,66,92,242,98,211,212,95,182,169,102,200,117,105,168,145,122,97,30,173,200,83,10,220,168,176,23,222,154,58,122,209,123,186,244,132,58,157,244,197,252,234,188,86,135,55,181,176,128,223,101,23,232,67,179,39,215,179,211,6,198,161,22,232,75,98,122,101,84,32,3,148,234,16,69,95,86,49,161,136,46,133,219,108,0,190,156,181,98,199,120,253,0,100,10,65,243,13,131,43,53,53,112,50,94,144,254,122,146,237,252,211,195,57,136,53,161,232]),l=new Uint8Array([58,224,183,31,201,168,56,74,5,203,39,46]),u=new TextEncoder;function d(){return crypto.subtle.importKey("raw",u.encode(atob(s)),{name:"PBKDF2"},!1,["deriveBits","deriveKey"])}function p(e,t){return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:1e5,hash:"SHA-256"},e,{name:"AES-GCM",length:256},!0,["wrapKey","unwrapKey"])}var m=function(){var e=this;d().then((function(t){p(t,o).then((function(t){crypto.subtle.unwrapKey("jwk",c.buffer,t,{name:"AES-GCM",iv:l},{name:"ECDSA",namedCurve:"P-384",hash:{name:"SHA-384"}},!0,["verify"]).then((function(t){e.publickeyimported=t}))}))}))},h=function(){var e=document.getElementById("signature").value.split(","),t=new Uint8Array(new ArrayBuffer(1*e.length));t.forEach((function(n,r){t[r]=parseInt(e[r])})),crypto.subtle.verify({name:"ECDSA",hash:{name:"SHA-384"}},this.publickeyimported,t,u.encode(document.getElementById("message").value)).then((function(e){document.getElementById("result").innerText="Result: "+e}))},f=i["a"].extend({name:"VerifySignature",data:function(){return{publickeyimported:CryptoKey}},beforeCreate:m,methods:{VerifySignature:h}}),v=f,g=(n("c1a5"),n("2877")),y=Object(g["a"])(v,r,a,!1,null,"e29ffe08",null);t["default"]=y.exports},bbbe:function(e,t,n){},c1a5:function(e,t,n){"use strict";var r=n("2d5d"),a=n.n(r);a.a},dec8:function(e,t,n){},f539:function(e,t,n){"use strict";var r=n("067f"),a=n.n(r);a.a},f820:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},a=[],i=(n("f539"),n("2877")),s={},o=Object(i["a"])(s,r,a,!1,null,"faa5a2ea",null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.b791cb21.js.map