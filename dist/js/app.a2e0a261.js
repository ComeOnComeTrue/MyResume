(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],l=0,h=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i={app:0},a=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-00c42a08":"05ea419d","chunk-4da03340":"bf8cc424","chunk-6c0efbdc":"34594487"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-00c42a08":1,"chunk-4da03340":1,"chunk-6c0efbdc":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-00c42a08":"5ce50232","chunk-4da03340":"87393ab7","chunk-6c0efbdc":"7a10eb0d"}[t]+".css",i=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],d.parentNode.removeChild(d),n(a)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var h=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,n[1](h)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"39d3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main-wrapper"},[t._m(0),n("div",{staticClass:"content-right"},[n("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},[n("router-view")],1)],1),n("right-menu-nav",{attrs:{menuHoverInfoAll:t.menuHoverInfoAll,curPathIndex:t.curPathIndex,isSelectMenuArr:t.isSelectMenuArr},on:{changeRouterIndex:t.changeRouterIndex}})],1)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-left"},[r("div",{staticClass:"head-img"},[r("div",{staticClass:"img-box"},[r("img",{attrs:{src:n("b064"),alt:"头像"}})])]),r("div",{staticClass:"head-info"},[r("h3",[t._v("性别：男")]),r("h3",[t._v("年龄：21")]),r("h3",[t._v("姓名：钟钱胜")]),r("h3",{staticClass:"iconfont icon-lianxi"},[t._v(": 17820238305")]),r("h3",[t._v("专业：计算机运用技术")])])])}],a=(n("4160"),n("a434"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("ul",{staticClass:"menu-hover-box"},t._l(t.menuHoverInfoAll,(function(e){return n("li",{key:e,staticClass:"menu-hover"},[t._v(t._s(e))])})),0),n("ul",{staticClass:"menu-top"},t._l(4,(function(e,r){return n("li",{key:r,staticClass:"btn iconfont",class:{active:1==t.isSelectMenuArr[r],"icon-home":0==r,"icon-zujian":1==r,"icon-icon-project":2==r,"icon-geren":3==r},on:{mouseenter:function(e){return t.showMenuInfo(r)},mouseleave:function(e){return t.hideMenuInfo(r)},click:function(e){return t.handleMenuClick(r)}}})})),0),n("ul",{staticClass:"lastAndNext-bottom"},[n("li",{staticClass:"next iconfont icon-qian",on:{click:function(e){return t.routerLastAndNext("next")}}}),n("li",{staticClass:"last iconfont icon-houtui",on:{click:function(e){return t.routerLastAndNext("last")}}})])])}),c=[],s=(n("a9e3"),{props:{menuHoverInfoAll:{type:Array,default:["首页","组件","作品","个人信息"]},curPathIndex:{type:Number,default:0},isSelectMenuArr:{type:Array,default:[!0,!1,!1,!1]}},methods:{showMenuInfo:function(t){var e=this.$(".menu-hover").eq(t);e.css({opacity:1,left:"-70px"})},hideMenuInfo:function(t){var e=this.$(".menu-hover").eq(t);e.css({opacity:0,left:"0px"})},handleMenuClick:function(t){t!=this.curPathIndex&&this.routerPath(t)},routerLastAndNext:function(t){"next"==t?3==this.curPathIndex?this.$emit("changeRouterIndex",0):this.$emit("changeRouterIndex",t):0==this.curPathIndex?this.$emit("changeRouterIndex",3):this.$emit("changeRouterIndex",t)},routerPath:function(t){this.$emit("changeRouterIndex",t)}}}),u=s,l=(n("9e89"),n("2877")),h=Object(l["a"])(u,a,c,!1,null,null,null),d=h.exports,f={components:{RightMenuNav:d},data:function(){return{menuHoverInfoAll:["首页","组件","作品","其它信息"],curPathIndex:0,isSelectMenuArr:[!0,!1,!1,!1],randomDirection:1}},created:function(){"/home"!=this.$router.history.current.path&&this.changeRouterIndex(this.curPathIndex)},methods:{changeRouterIndex:function(t){var e=this;"next"==t?t=++this.curPathIndex:"last"==t?t=--this.curPathIndex:this.curPathIndex=t,this.isSelectMenuArr.forEach((function(t,n){return e.isSelectMenuArr[n]=!1})),this.isSelectMenuArr.splice(t,1,!0),0===t?this.$router.push("home"):1===t?this.$router.push("component"):2===t?this.$router.push("works"):3===t&&this.$router.push("my")},beforeEnter:function(t){this.randomDirection=Math.ceil(4*Math.random()),1==this.randomDirection?t.style.left="-500px":2==this.randomDirection&&(t.style.bottom="-500px"),t.style.opacity=0},enter:function(t,e){1==this.randomDirection?Velocity(t,{left:0,opacity:1},{duration:900,complete:e}):2==this.randomDirection?Velocity(t,{bottom:0,opacity:1},{duration:900,complete:e}):3==this.randomDirection?Velocity(t,{opacity:1},{duration:900,complete:e}):(Velocity(t,{right:0,opacity:.3},{duration:600}),Velocity(t,{right:0,opacity:1},{duration:300,complete:e}))},leave:function(t,e){var n=t.offsetWidth;1==this.randomDirection?Velocity(t,{translateX:"".concat(n,"px"),opacity:0},{duration:600,complete:e}):2==this.randomDirection?Velocity(t,{translateY:"-".concat(n,"px"),opacity:0},{duration:600,complete:e}):3==this.randomDirection?Velocity(t,{scale:"0,0",rotateZ:"400deg",opacity:0},{duration:600,complete:e}):(Velocity(t,{scale:"0.8,0.8",opacity:.7},{duration:300}),Velocity(t,{translateX:"-".concat(n+100,"px"),opacity:0},{duration:300,complete:e}))}}},p=f,v=(n("5c0b"),Object(l["a"])(p,o,i,!1,null,null,null)),m=v.exports,_=(n("d3b7"),n("8c4f")),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-box"},[n("div",{staticClass:"home"},[n("div",{staticClass:"direction"},[n("h2",[t._v("应聘岗位")]),n("p",[t._v("目前方向："),n("i",[t._v("web前端")])])]),n("div",{staticClass:"skillList"},[n("h2",[t._v("专业技能")]),n("p",{staticClass:"skill"},[t._v("1. 熟悉使用 "),n("i",[t._v("HTML、CSS")]),t._v(" 代码编写，熟悉 "),n("i",[t._v("W3C")]),t._v(" 标准，能够根据UI设计图还原页面。")]),n("p",{staticClass:"skill"},[t._v("2. 熟悉 "),n("i",[t._v("javascript")]),t._v(" 数据类型及常用API，深入理解原型链、闭包、this等特性。")]),n("p",{staticClass:"skill"},[t._v("3. 熟悉 "),n("i",[t._v("jQuery")]),t._v(" 及常用API。")]),n("p",{staticClass:"skill"},[t._v("4. 熟悉 "),n("i",[t._v("Ajax")]),t._v(" 实现异步获取数据，"),n("i",[t._v("JSONP")]),t._v("实现跨域请求。")]),n("p",{staticClass:"skill"},[t._v("5. 熟悉 "),n("i",[t._v("HTML5、CSS3、ES6")]),t._v(" 新特性。")]),n("p",{staticClass:"skill"},[t._v("6. 熟悉 "),n("i",[t._v("CSS")]),t._v(" 扩展语言 "),n("i",[t._v("less")]),t._v("。")]),n("p",{staticClass:"skill"},[t._v("7. 熟悉构建工具 "),n("i",[t._v(" wepbak、")]),t._v("包管理器"),n("i",[t._v(" npm、")]),t._v("版本控制工具"),n("i",[t._v(" git")]),t._v("。")]),n("p",{staticClass:"skill"},[t._v("8. 熟悉 "),n("i",[t._v("Vue")]),t._v(" 核心知识及常用API，会利用 "),n("i",[t._v("Vue-cli")]),t._v(" 脚手架搭建项目。")])])])])}],g={components:{}},x=g,C=(n("a092"),Object(l["a"])(x,y,b,!1,null,"950f8328",null)),k=C.exports;r["a"].use(_["a"]);var I=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:k},{path:"/component",name:"Component",component:function(){return n.e("chunk-6c0efbdc").then(n.bind(null,"2a09"))}},{path:"/works",name:"Works",component:function(){return n.e("chunk-00c42a08").then(n.bind(null,"1822"))}},{path:"/my",name:"My",component:function(){return n.e("chunk-4da03340").then(n.bind(null,"4c41"))}}],A=new _["a"]({base:"/",routes:I}),P=A,w=n("2f62");r["a"].use(w["a"]);var S=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=n("1157"),$=n.n(M);n("b059"),n("ef62"),n("589d");r["a"].prototype.$=$.a,r["a"].config.productionTip=!1,new r["a"]({router:P,store:S,$:$.a,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},"9e89":function(t,e,n){"use strict";var r=n("d533"),o=n.n(r);o.a},a092:function(t,e,n){"use strict";var r=n("39d3"),o=n.n(r);o.a},b059:function(t,e,n){},b064:function(t,e,n){t.exports=n.p+"img/clipboard.a9c232ca.png"},d533:function(t,e,n){},ef62:function(t,e,n){}});
//# sourceMappingURL=app.a2e0a261.js.map