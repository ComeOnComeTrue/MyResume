(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,h=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o={app:0},a=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-3f396311":"5de853be","chunk-5a35608e":"d06bab81","chunk-f874d754":"f6cbacc6"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-3f396311":1,"chunk-5a35608e":1,"chunk-f874d754":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-3f396311":"7a10eb0d","chunk-5a35608e":"5ce50232","chunk-f874d754":"87393ab7"}[t]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){i[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var h=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",h.name="ChunkLoadError",h.type=r,h.request=i,n[1](h)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/MyResume/dist/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11c9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("a133"),n("ed0d"),n("f09c"),n("e117");var r=n("0261"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main-wrapper"},[t._m(0),n("div",{staticClass:"content-right"},[n("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},[n("router-view")],1)],1),n("right-menu-nav",{attrs:{menuHoverInfoAll:t.menuHoverInfoAll,curPathIndex:t.curPathIndex,isSelectMenuArr:t.isSelectMenuArr},on:{changeRouterIndex:t.changeRouterIndex}})],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-left"},[n("div",{staticClass:"head-img"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:"https://ae01.alicdn.com/kf/He52f32df74b242a39fc78d1ee4e37363b.jpg",alt:"头像"}})])]),n("div",{staticClass:"head-info"},[n("h3",[t._v("性别：男")]),n("h3",[t._v("年龄：21")]),n("h3",[t._v("姓名：钟钱胜")]),n("h3",{staticClass:"iconfont icon-lianxi"},[t._v(": 17820238305")]),n("h3",[t._v("专业：计算机运用技术")])])])}],a=(n("fe59"),n("ea69"),n("08ba"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("ul",{staticClass:"menu-hover-box"},t._l(t.menuHoverInfoAll,(function(e){return n("li",{key:e,staticClass:"menu-hover"},[t._v(t._s(e))])})),0),n("ul",{staticClass:"menu-top"},t._l(4,(function(e,r){return n("li",{key:r,staticClass:"btn iconfont",class:{active:1==t.isSelectMenuArr[r],"icon-home":0==r,"icon-zujian":1==r,"icon-icon-project":2==r,"icon-geren":3==r},on:{mouseenter:function(e){return t.showMenuInfo(r)},mouseleave:function(e){return t.hideMenuInfo(r)},click:function(e){return t.handleMenuClick(r)}}})})),0),n("ul",{staticClass:"lastAndNext-bottom"},[n("li",{staticClass:"next iconfont icon-qian",on:{click:function(e){return t.routerLastAndNext("next")}}}),n("li",{staticClass:"last iconfont icon-houtui",on:{click:function(e){return t.routerLastAndNext("last")}}})])])}),c=[],s=(n("513c"),{props:{menuHoverInfoAll:{type:Array,default:["首页","组件","作品","个人信息"]},curPathIndex:{type:Number,default:0},isSelectMenuArr:{type:Array,default:[!0,!1,!1,!1]}},methods:{showMenuInfo:function(t){var e=this.$(".menu-hover").eq(t);e.css({opacity:1,left:"-70px"})},hideMenuInfo:function(t){var e=this.$(".menu-hover").eq(t);e.css({opacity:0,left:"0px"})},handleMenuClick:function(t){t!=this.curPathIndex&&this.routerPath(t)},routerLastAndNext:function(t){"next"==t?3==this.curPathIndex?this.$emit("changeRouterIndex",0):this.$emit("changeRouterIndex",t):0==this.curPathIndex?this.$emit("changeRouterIndex",3):this.$emit("changeRouterIndex",t)},routerPath:function(t){this.$emit("changeRouterIndex",t)}}}),u=s,l=(n("9e89"),n("4023")),h=Object(l["a"])(u,a,c,!1,null,null,null),f=h.exports,d={components:{RightMenuNav:f},data:function(){return{menuHoverInfoAll:["首页","组件","作品","其它信息"],curPathIndex:0,isSelectMenuArr:[!0,!1,!1,!1],randomDirection:1}},created:function(){"/home"!=this.$router.history.current.path&&this.changeRouterIndex(this.curPathIndex)},methods:{changeRouterIndex:function(t){var e=this;"next"==t?t=++this.curPathIndex:"last"==t?t=--this.curPathIndex:this.curPathIndex=t,this.isSelectMenuArr.forEach((function(t,n){return e.isSelectMenuArr[n]=!1})),this.isSelectMenuArr.splice(t,1,!0),0===t?this.$router.push("home"):1===t?this.$router.push("component"):2===t?this.$router.push("works"):3===t&&this.$router.push("my")},beforeEnter:function(t){this.randomDirection=Math.ceil(4*Math.random()),1==this.randomDirection?t.style.left="-500px":2==this.randomDirection&&(t.style.bottom="-500px"),t.style.opacity=0},enter:function(t,e){1==this.randomDirection?Velocity(t,{left:0,opacity:1},{duration:900,complete:e}):2==this.randomDirection?Velocity(t,{bottom:0,opacity:1},{duration:900,complete:e}):3==this.randomDirection?Velocity(t,{opacity:1},{duration:900,complete:e}):(Velocity(t,{right:0,opacity:.3},{duration:600}),Velocity(t,{right:0,opacity:1},{duration:300,complete:e}))},leave:function(t,e){var n=t.offsetWidth;1==this.randomDirection?Velocity(t,{translateX:"".concat(n,"px"),opacity:0},{duration:600,complete:e}):2==this.randomDirection?Velocity(t,{translateY:"-".concat(n,"px"),opacity:0},{duration:600,complete:e}):3==this.randomDirection?Velocity(t,{scale:"0,0",rotateZ:"400deg",opacity:0},{duration:600,complete:e}):(Velocity(t,{scale:"0.8,0.8",opacity:.7},{duration:300}),Velocity(t,{translateX:"-".concat(n+100,"px"),opacity:0},{duration:300,complete:e}))}}},p=d,v=(n("5c0b"),Object(l["a"])(p,i,o,!1,null,null,null)),m=v.exports,_=(n("e18c"),n("3f11")),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-box"},[n("div",{staticClass:"home"},[n("div",{staticClass:"direction"},[n("h2",[t._v("应聘岗位")]),n("p",[t._v("目前方向："),n("i",[t._v("web前端")])])]),n("div",{staticClass:"skillList"},[n("h2",[t._v("专业技能")]),n("p",{staticClass:"skill"},[t._v("1. 熟悉使用 "),n("i",[t._v("HTML、CSS")]),t._v(" 代码编写，熟悉 "),n("i",[t._v("W3C")]),t._v(" 标准，能够根据UI设计图还原页面。")]),n("p",{staticClass:"skill"},[t._v("2. 熟悉 "),n("i",[t._v("javascript")]),t._v(" 数据类型及常用API，深入理解原型链、闭包、this等特性。")]),n("p",{staticClass:"skill"},[t._v("3. 熟悉 "),n("i",[t._v("jQuery")]),t._v(" 及常用API。")]),n("p",{staticClass:"skill"},[t._v("4. 熟悉 "),n("i",[t._v("Ajax")]),t._v(" 实现异步获取数据，"),n("i",[t._v("JSONP")]),t._v("实现跨域请求。")]),n("p",{staticClass:"skill"},[t._v("5. 熟悉 "),n("i",[t._v("HTML5、CSS3、ES6")]),t._v(" 新特性。")]),n("p",{staticClass:"skill"},[t._v("6. 熟悉 "),n("i",[t._v("CSS")]),t._v(" 扩展语言 "),n("i",[t._v("less")]),t._v("。")]),n("p",{staticClass:"skill"},[t._v("7. 熟悉构建工具 "),n("i",[t._v(" wepbak、")]),t._v("包管理器"),n("i",[t._v(" npm、")]),t._v("版本控制工具"),n("i",[t._v(" git")]),t._v("。")]),n("p",{staticClass:"skill"},[t._v("8. 熟悉 "),n("i",[t._v("Vue")]),t._v(" 核心知识及常用API，会利用 "),n("i",[t._v("Vue-cli")]),t._v(" 脚手架搭建项目。")])])])])}],g={components:{}},x=g,k=(n("a092"),Object(l["a"])(x,y,b,!1,null,"950f8328",null)),C=k.exports;r["a"].use(_["a"]);var I=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:C},{path:"/component",name:"Component",component:function(){return n.e("chunk-3f396311").then(n.bind(null,"2a09"))}},{path:"/works",name:"Works",component:function(){return n.e("chunk-5a35608e").then(n.bind(null,"1822"))}},{path:"/my",name:"My",component:function(){return n.e("chunk-f874d754").then(n.bind(null,"4c41"))}}],A=new _["a"]({base:"/MyResume/dist/",routes:I}),P=A,w=n("ae8c");r["a"].use(w["a"]);var M=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("b059"),n("ef62"),n("306b");r["a"].config.productionTip=!1,new r["a"]({router:P,store:M,$:$,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("a037"),i=n.n(r);i.a},"9e89":function(t,e,n){"use strict";var r=n("11c9"),i=n.n(r);i.a},a037:function(t,e,n){},a092:function(t,e,n){"use strict";var r=n("a8b5"),i=n.n(r);i.a},a8b5:function(t,e,n){},b059:function(t,e,n){},ef62:function(t,e,n){}});