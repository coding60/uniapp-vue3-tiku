(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-reg-reg"],{"18ac":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={pageHead:a("edc5").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("page-head",{staticClass:"top",attrs:{title:t.title,papersum:t.papersum,liveperson:t.liveperson}}),a("v-uni-view",{staticClass:"loginStatus"},[t._v("欢迎进入60编程！")]),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"zhuce"},[a("v-uni-text",[t._v("注册")]),a("v-uni-input",{attrs:{type:"text",focus:t.userFocus,value:"",placeholder:"请输入用户名",maxlength:"20"},model:{value:t.zUser,callback:function(e){t.zUser=e},expression:"zUser"}}),a("v-uni-input",{attrs:{type:"text",password:"true",value:"",placeholder:"请输入密码",focus:t.passFocus,maxlength:"20"},model:{value:t.zPass,callback:function(e){t.zPass=e},expression:"zPass"}}),a("v-uni-view",{staticClass:"buttlist"},[a("v-uni-view",{staticClass:"butttop"},[a("v-uni-button",{staticClass:"butt",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reg.apply(void 0,arguments)}}},[t._v("注册")])],1),a("v-uni-view",{staticClass:"butttop"},[a("v-uni-navigator",{attrs:{url:"/pages/user/login/login","hover-class":"navigator-hover"}},[a("v-uni-button",{staticClass:"butt",attrs:{type:"default"}},[t._v("登录>>")])],1)],1)],1)],1)],1)],1)},r=[]},"1bc5":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".headall[data-v-ddad304e]{position:fixed;left:0;top:0;right:0;bottom:0;display:flex;flex:1;justify-content:center}.yktlogo[data-v-ddad304e]{width:120px;height:60px;padding-left:20px;padding-right:20px}.head001[data-v-ddad304e]{font-size:%?26?%;line-height:%?30?%;color:#fff;letter-spacing:3px;text-align:justify;border-radius:20px 20px 20px 20px;background:#73ad21;padding:20px;width:20%;height:%?60?%}",""]),t.exports=e},"3aa2":function(t,e,a){"use strict";var n=a("4ea4");a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("ade3")),r=a("fc52"),s=(a("41be"),{data:function(){var t;return t={title:"60编程网",papersum:98766,liveperson:372},(0,i.default)(t,"title","Hello"),(0,i.default)(t,"zUser",""),(0,i.default)(t,"zPass",""),(0,i.default)(t,"userFocus",!0),(0,i.default)(t,"passFocus",!1),t},methods:{reg:function(){if(this.zUser=this.zUser.replace(/[, ]/g,""),this.zPass=this.zPass.replace(/[, ]/g,""),this.zUser&&this.zPass){var t={user:this.zUser,pass:this.zPass},e=uni.getStorageSync("List")?uni.getStorageSync("List"):[];console.log(e);for(var a=0;a<e.length;a++)if(e[a].user==this.zUser){uni.showModal({title:"该用户已存在",showCancel:!1});break}a==e.length&&((0,r.reguser)(this.zUser,this.zPass).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)})),e.push(t),uni.showModal({title:"注册成功",showCancel:!1}),this.zUser="",this.zPass="",uni.setStorageSync("List",e))}else uni.showModal({title:"用户名或密码不能为空",showCancel:!1})}},onLoad:function(t){}});e.default=s},"3abe":function(t,e,a){"use strict";var n=a("8cb3"),i=a.n(n);i.a},"41be":function(t,e,a){"use strict";function n(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var a=parseInt(t/60);t%=60;var n=t;return[e,a,n].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function i(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}a("d81d"),a("d3b7"),a("acd8"),a("e25e"),a("4d63"),a("ac1f"),a("25f0"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatTime=n,e.formatLocation=i,e.isNull=s,e.dateUtils=void 0;var r={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var a in this.UNITS)if(t>=this.UNITS[a]){e=Math.floor(t/this.UNITS[a])+a+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),a=Date.now()-e.getTime();if(a<this.UNITS["天"])return this.humanize(a);var n=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+n(e.getMonth()+1)+"/"+n(e.getDate())+"-"+n(e.getHours())+":"+n(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};function s(t){if(""==t)return!0;var e="^[ ]+$",a=new RegExp(e);return a.test(t)}e.dateUtils=r},"42f5":function(t,e,a){"use strict";a.r(e);var n=a("18ac"),i=a("83fe");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("3abe");var s,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"3c6e6bb3",null,!1,n["a"],s);e["default"]=u.exports},6868:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.top[data-v-3c6e6bb3]{padding:%?100?%}.bishiclick[data-v-3c6e6bb3]{margin-top:%?10?%}.fro[data-v-3c6e6bb3]{margin-top:%?120?%;display:flex}.fro uni-view[data-v-3c6e6bb3]{flex:1;justify-content:center;text-align:center}.fro uni-image[data-v-3c6e6bb3]{width:%?60?%;height:%?60?%}.container[data-v-3c6e6bb3]{width:98%;margin:0 auto;padding:%?6?%;font-size:14px;line-height:24px}.loginStatus[data-v-3c6e6bb3]{margin-top:%?160?%;font-size:%?26?%;line-height:%?30?%;color:#fff;letter-spacing:3px;text-align:center;border-radius:10px 10px 10px 10px;background:#73ad21;padding:10px;width:94%;height:20px}.bigclass[data-v-3c6e6bb3]{width:96%;display:flex;margin-top:%?10?%;font-size:%?46?%;line-height:%?120?%;color:#1c1e36;letter-spacing:3px;justify-content:center;height:60px;border:3px #00f solid;border-radius:10px}.topclass[data-v-3c6e6bb3]{margin:0 auto;background-color:#f2eded;display:flex;justify-content:center;margin-top:%?10?%;font-size:%?46?%;line-height:%?120?%;color:#1c1e36;letter-spacing:3px;height:60px}.funNav[data-v-3c6e6bb3]{width:100%;flex-direction:row;display:flex;padding-left:%?8?%;padding-right:%?8?%;height:auto;margin-top:%?20?%;flex-wrap:wrap}.funNav uni-view[data-v-3c6e6bb3]{width:44%;padding-left:%?8?%;padding-right:%?8?%;margin-left:%?4?%;font-size:%?36?%;line-height:%?120?%;color:#1c1e36;letter-spacing:3px;text-align:center;height:60px;border:3px #00f solid;border-radius:10px}uni-button[data-v-3c6e6bb3]{padding:0;margin:0}uni-button[data-v-3c6e6bb3]::after{border:none}.entertiku[data-v-3c6e6bb3]{font-size:%?20?%;line-height:%?20?%}.content[data-v-3c6e6bb3]{display:flex;flex-direction:column;align-items:center;justify-content:center}.zhuce[data-v-3c6e6bb3],\n.denglu[data-v-3c6e6bb3]{text-align:center}.zhuce uni-text[data-v-3c6e6bb3],\n.denglu uni-text[data-v-3c6e6bb3]{font-size:20px;letter-spacing:4px;color:#18bc37}.zhuce uni-input[data-v-3c6e6bb3],\n.denglu uni-input[data-v-3c6e6bb3]{width:200px;height:40px;margin-top:10px;border:1px #000 solid}.zhuce uni-button[data-v-3c6e6bb3],\n.denglu uni-button[data-v-3c6e6bb3]{width:100px;height:50px;margin-top:20px}.butt[data-v-3c6e6bb3]{font-size:%?28?%;width:%?160?%;height:%?60?%;border:1px red solid}.butttop[data-v-3c6e6bb3]{flex:1;margin-right:%?8?%;height:%?80?%}.buttlist[data-v-3c6e6bb3]{display:flex;width:100%}',""]),t.exports=e},"82bc":function(t,e,a){"use strict";a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.apiResquest=void 0;var n=a("df38"),i=function(t){var e={"content-type":"application/json"},a=null;return"GET"===t.method?e={"content-type":"application/json",token:uni.getStorageSync("token")}:a={data:t.query,token:uni.getStorageSync("token")},new Promise((function(i,r){var s=n.config.base_url+t.url;return uni.showLoading({title:"加载中",mask:!0}),uni.request({url:s,data:a,method:t.method,header:e,success:function(t){uni.hideLoading(),200===t.data.code?i(t.data):uni.showToast({title:"获取数据失败:"+t.data.msg,duration:1e3,icon:"none"})},fail:function(t){r(t),console.log(t),uni.hideLoading()},complete:function(){console.log("请求完成"),uni.hideLoading()}})}))};e.apiResquest=i},"83fe":function(t,e,a){"use strict";a.r(e);var n=a("3aa2"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"8cb3":function(t,e,a){var n=a("6868");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("061500d4",n,!0,{sourceMap:!1,shadowMode:!1})},b67e:function(t,e,a){"use strict";a.r(e);var n=a("e521"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},c99a:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"headall"},[a("v-uni-view",{staticClass:"head001"},[t._v(t._s(t.papersum)+"题")]),a("v-uni-image",{staticClass:"yktlogo",attrs:{src:"/static/ytklogo.png"}}),a("v-uni-view",{staticClass:"head001"},[t._v(t._s(t.liveperson)+"人在线")])],1)},r=[]},deb9:function(t,e,a){"use strict";var n=a("e116"),i=a.n(n);i.a},df38:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.config=void 0;var n={base_url:""};e.config=n},e116:function(t,e,a){var n=a("1bc5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1c43e071",n,!0,{sourceMap:!1,shadowMode:!1})},e521:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""},papersum:{type:Number,default:""},liveperson:{type:Number,default:""}},data:function(){return{}}};e.default=n},edc5:function(t,e,a){"use strict";a.r(e);var n=a("c99a"),i=a("b67e");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("deb9");var s,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"ddad304e",null,!1,n["a"],s);e["default"]=u.exports},fc52:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.reguser=void 0;var n=a("82bc"),i=function(t,e){var a=t,i=e;return(0,n.apiResquest)({url:"/api/reguser?username="+a+"&pass="+i,method:"GET"})};e.reguser=i}}]);