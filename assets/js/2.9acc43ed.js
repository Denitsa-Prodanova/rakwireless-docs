(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{291:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return h})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return g})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return v}));n(21),n(63),n(158),n(308),n(155),n(37),n(20),n(292),n(38),n(157),n(64);var i=n(150),r=/#.*$/,a=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function u(t){return decodeURI(t).replace(r,"").replace(a,"")}function c(t){return o.test(t)}function l(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function p(t){if(c(t))return t;var e=t.match(r),n=e?e[0]:"",i=u(t);return s.test(i)?t:i+".html"+n}function f(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&u(t.path)===u(e)}function d(t,e,n){if(c(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=u(e),r=0;r<t.length;r++)if(u(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:p(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function g(t,e,n,r){var a=n.pages,s=n.themeConfig,o=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var u=o.sidebar||s.sidebar;if(u){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,u),l=c.base,h=c.config;return h?h.map((function(t){return function t(e,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,r);if(Array.isArray(e))return Object.assign(d(n,e[0],r),{title:e[1]});var s=e.children||[],o={};if(0===s.length&&e.path)return o=Object.assign(d(n,e.path,r),{title:e.title});var u=null;return e.path&&((u=d(n,e.path,r)).nested=!0),o={type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,n,r,a+1)})),collapsable:!1!==e.collapsable},o=Object(i.a)({},u,{},o)}(t,a,l)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},292:function(t,e,n){"use strict";var i=n(90),r=n(9),a=n(16),s=n(15),o=n(91),u=n(92);i("match",1,(function(t,e,n){return[function(e){var n=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=r(t),c=String(this);if(!s.global)return u(s,c);var l=s.unicode;s.lastIndex=0;for(var h,p=[],f=0;null!==(h=u(s,c));){var d=String(h[0]);p[f]=d,""===d&&(s.lastIndex=o(c,a(s.lastIndex),l)),f++}return 0===f?null:p}]}))},293:function(t,e,n){},294:function(t,e,n){},295:function(t,e,n){},296:function(t,e,n){},297:function(t,e,n){},298:function(t,e,n){},299:function(t,e,n){},300:function(t,e,n){},301:function(t,e,n){},302:function(t,e,n){},303:function(t,e,n){},304:function(t,e,n){},305:function(t,e,n){},308:function(t,e,n){n(1)({target:"Array",stat:!0},{isArray:n(41)})},309:function(t,e,n){var i=n(7),r=n(4),a=n(159),s=n(318),o=n(8).f,u=n(62).f,c=n(95),l=n(154),h=n(161),p=n(26),f=n(2),d=n(39).set,g=n(319),m=n(3)("match"),v=r.RegExp,b=v.prototype,k=/a/g,_=/a/g,x=new v(k)!==k,y=h.UNSUPPORTED_Y;if(i&&a("RegExp",!x||y||f((function(){return _[m]=!1,v(k)!=k||v(_)==_||"/a/i"!=v(k,"i")})))){for(var C=function(t,e){var n,i=this instanceof C,r=c(t),a=void 0===e;if(!i&&r&&t.constructor===C&&a)return t;x?r&&!a&&(t=t.source):t instanceof C&&(a&&(e=l.call(t)),t=t.source),y&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=s(x?new v(t,e):v(t,e),i?this:b,C);return y&&n&&d(o,{sticky:n}),o},$=function(t){t in C||o(C,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},L=u(v),S=0;L.length>S;)$(L[S++]);b.constructor=C,C.prototype=b,p(r,"RegExp",C)}g("RegExp")},310:function(t,e,n){"use strict";var i=n(26),r=n(9),a=n(2),s=n(154),o=RegExp.prototype,u=o.toString,c=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(c||l)&&i(RegExp.prototype,"toString",(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in o)?s.call(t):n)}),{unsafe:!0})},311:function(t,e){t.exports=function(t){return null==t}},312:function(t,e,n){"use strict";n.r(e);n(89);var i=n(291),r=n(313);n(156),n(37);function a(t,e,n,i,r){var a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(a.style={"padding-left":r+"rem"}),t("RouterLink",a,n)}function s(t,e,n,r,o){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||u>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,n+"#"+e.slug,e.title,c,e.level-1),s(t,e.children,n,r,o,u+1)])})))}var o={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,o=(n.$site,n.$route),u=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,h=l.item,p=l.sidebarDepth,f=Object(i.e)(o,h.path),d="auto"===h.type?f||h.children.some((function(t){return Object(i.e)(o,h.basePath+"#"+t.slug)})):f,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):a(t,h.path,h.title||h.path,d),m=[r.frontmatter.sidebarDepth,p,c.sidebarDepth,u.sidebarDepth,1].find((function(t){return void 0!==t})),v=c.displayAllHeaders||u.displayAllHeaders;if("auto"===h.type)return[g,s(t,h.children,h.basePath,o,m)];if((d||v)&&h.headers&&!i.d.test(h.path)){var b=Object(i.c)(h.headers);return h.nested?!r.path!==h.path?[s(t,b,h.path,o,m)]:[]:[g,s(t,b,h.path,o,m)]}return g}},u=(n(333),n(19)),c=Object(u.a)(o,void 0,void 0,!1,null,null,null).exports,l={name:"SidebarGroup",components:{DropdownTransition:r.a,SidebarLink:c},props:["item","open","collapsable","depth","sidebarDepth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(312).default},methods:{isActive:i.e}};n(334);function h(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?h(t,e):"page"===e.type&&Object(i.e)(t,e.path)}))}var p={name:"SidebarLinks",components:{SidebarGroup:Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.item.nested&&t.$page.path===t.item.path?n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:t.item}}):t._e()],1),t._v(" "),n("DropdownTransition",[n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}})],1)],1)}),[],!1,null,null,null).exports,SidebarLink:c},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(h(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},f=Object(u.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i,attrs:{id:"group"!==e.type?e.path:null}},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth,"sidebar-depth":t.sidebarDepth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=f.exports},313:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(325),n(19)),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},314:function(t,e,n){"use strict";var i=n(1),r=n(315);i({target:"String",proto:!0,forced:n(316)("link")},{link:function(t){return r(this,"a","href",t)}})},315:function(t,e,n){var i=n(15),r=/"/g;t.exports=function(t,e,n,a){var s=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"}},316:function(t,e,n){var i=n(2);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},317:function(t,e,n){"use strict";var i=n(293);n.n(i).a},318:function(t,e,n){var i=n(6),r=n(160);t.exports=function(t,e,n){var a,s;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&r(t,s),t}},319:function(t,e,n){"use strict";var i=n(40),r=n(8),a=n(3),s=n(7),o=a("species");t.exports=function(t){var e=i(t),n=r.f;s&&e&&!e[o]&&n(e,o,{configurable:!0,get:function(){return this}})}},320:function(t,e,n){"use strict";var i,r=n(1),a=n(27).f,s=n(16),o=n(94),u=n(15),c=n(96),l=n(28),h="".endsWith,p=Math.min,f=c("endsWith");r({target:"String",proto:!0,forced:!!(l||f||(i=a(String.prototype,"endsWith"),!i||i.writable))&&!f},{endsWith:function(t){var e=String(u(this));o(t);var n=arguments.length>1?arguments[1]:void 0,i=s(e.length),r=void 0===n?i:p(s(n),i),a=String(t);return h?h.call(e,a,r):e.slice(r-a.length,r)===a}})},321:function(t,e,n){"use strict";var i=n(1),r=n(165).trim;i({target:"String",proto:!0,forced:n(322)("trim")},{trim:function(){return r(this)}})},322:function(t,e,n){var i=n(2),r=n(98);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},323:function(t,e,n){"use strict";var i=n(294);n.n(i).a},324:function(t,e,n){"use strict";var i=n(295);n.n(i).a},325:function(t,e,n){"use strict";var i=n(296);n.n(i).a},326:function(t,e,n){"use strict";var i=n(297);n.n(i).a},327:function(t,e,n){"use strict";var i=n(298);n.n(i).a},328:function(t,e,n){"use strict";var i=n(299);n.n(i).a},329:function(t,e,n){"use strict";var i=n(300);n.n(i).a},330:function(t,e,n){var i=n(29),r=n(11),a=n(22);t.exports=function(t){return"string"==typeof t||!r(t)&&a(t)&&"[object String]"==i(t)}},331:function(t,e,n){"use strict";var i=n(301);n.n(i).a},332:function(t,e,n){"use strict";var i=n(302);n.n(i).a},333:function(t,e,n){"use strict";var i=n(303);n.n(i).a},334:function(t,e,n){"use strict";var i=n(304);n.n(i).a},335:function(t,e,n){"use strict";var i=n(305);n.n(i).a},341:function(t,e,n){"use strict";n.r(e);n(89),n(61),n(314);var i=n(291),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=n(19),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink||"/en-us/#features",text:this.data.actionText}}}},u=(n(317),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column full-width no-wrap",staticStyle:{height:"100vh","margin-top":"50px"}},[n("div",{staticClass:"column"},[n("div",{staticClass:"flex flex-center q-pa-sm"},[t.data.heroImage?n("img",{staticStyle:{height:"5rem"},attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e()]),t._v(" "),n("div",{staticClass:"q-pa-sm text-center column items-center q-gutter-y-md",staticStyle:{"line-height":"normal"}},[null!==t.data.heroText?n("div",{staticClass:"text-weight-medium",staticStyle:{"font-size":"2.3rem"}},[t._v("\n        "+t._s(t.data.heroText||t.$title||"Hello")+"\n      ")]):t._e(),t._v(" "),null!==t.data.tagline?n("div",{staticClass:"text-weight-regular text-grey-7",staticStyle:{"max-width":"40rem"}},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e()]),t._v(" "),n("div",{staticClass:"flex flex-center q-pa-sm"},[n("q-btn",{attrs:{label:t.actionLink.text,to:t.actionLink.link,color:"primary",size:"1rem"}})],1)]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"flex flex-center",staticStyle:{"max-width":"60rem",margin:"auto"}},[n("div",{staticClass:"row justify-center"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"row no-wrap q-pa-sm col-11 col-sm-4 col-md-3",staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[n("q-card",{staticClass:"column fit"},[n("q-card-section",{staticClass:"q-py-sm text-grey-10 text-weight-medium",staticStyle:{"font-size":"1.15rem"}},[t._v(t._s(e.title))]),t._v(" "),n("q-card-section",{staticClass:"col text-grey-8",staticStyle:{"font-size":"0.9rem"}},[t._v(t._s(e.details))]),t._v(" "),n("q-card-actions",{attrs:{align:"left"}},[n("q-btn",{attrs:{label:e.actionLabel||"Learn More",to:e.actionLink||"#",size:"0.7rem",color:"primary","no-caps":""}})],1)],1)],1)})),0)]):t._e(),t._v(" "),n("div",{staticClass:"col"},[n("Content",{staticClass:"theme-default-content custom"})],1),t._v(" "),n("rk-home")],1)}),[],!1,null,null,null).exports),c=(n(164),n(21),n(156),n(97),n(158),n(308),n(155),n(37),n(309),n(20),n(310),n(320),n(292),n(38),n(157),n(321),n(35)),l=n(162),h=n.n(l),p=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t})),r=t.endsWith(" ");return new RegExp(i.map((function(t,e){return i.length!==e+1||r?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},f=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=h()(e,"title","");return h()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),p(t,i)},d=["s","/"],g={name:"RkSearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0,counter:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&Object.keys(this.suggestions).length},suggestions:function(){var t=this;if(this.query){this.counter=0;for(var e=this.query.trim().toLowerCase(),n=function(e){return t.$site.themeConfig.test.find((function(t){return e.path.match(t)}))},i=function(e,i){var r=n(i);i.pk=t.counter++,e[r]||(e[r]=[]),e[r].push(i)},r=this.$site.pages,a=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,o={},u=0;u<r.length;u++){var c=r[u],l=n(c);if(!(o[l]&&o[l].length>=a)&&(this.getPageLocalePath(c)===s&&this.isSearchable(c)))if(f(e,c))i(o,c);else if(c.headers)for(var h=0;h<c.headers.length&&!(o[l]&&o[l].length>=a);h++){var p=c.headers[h];p.title&&f(e,c,p.title)&&i(o,Object.assign({},c,{path:c.path+"#"+p.slug,header:p}))}}return o}},suggestionList:function(){var t=[];for(var e in this.suggestions)t.push.apply(t,Object(c.a)(this.suggestions[e]));return t},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{clean:function(t){return t.split("/").find((function(t){return""!==t})).replace("-"," ")},getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=this.$site.themeConfig.test||null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&d.includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onEnter:function(){this.$router.push(this.$refs["pk-".concat(this.focusIndex)][0].to),this.query=null,this.focusIndex=0,this.$refs.qinput.blur()},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.counter-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.counter-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestionList[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},m=(n(323),Object(a.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions q-pa-none",class:{"align-right":!1},on:{mouseleave:t.unfocus}},t._l(this.$site.themeConfig.test,(function(e,i){return n("li",{key:e+"-"+i,staticClass:"q-pa-xs"},[n("div",{staticClass:"q-pa-xs bg-light-blue-10 text-white text-weight-medium rounded-borders",staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(t.clean(e)))]),t._v(" "),n("ul",{staticClass:"column",staticStyle:{"list-style":"none"}},t._l(t.suggestions[e],(function(e,i){return n("li",{key:i,staticClass:"suggestion full-width q-pa-xs",class:{focused:t.focusIndex===e.pk},on:{mousedown:function(n){return t.go(e.pk)},mouseenter:function(n){return t.focus(e.pk)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0)])})),0):t._e()])}),[],!1,null,null,null).exports),v=(n(324),Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),b=(n(93),n(313)),k=n(163),_=n.n(k),x={name:"DropdownLink",components:{NavLink:s,DropdownTransition:b.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return _()(e)===t}}},y=(n(326),{name:"NavLinks",components:{NavLink:s,DropdownLink:Object(a.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(a){var s,o=e[a],u=r[a]&&r[a].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,a),i.some((function(t){return t.path===s}))||(s=a)),{text:u,link:s}}))};return[].concat(Object(c.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),C=(n(327),Object(a.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function $(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var L={name:"Navbar",components:{SidebarButton:v,NavLinks:C,RkSearchBox:m,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt($(this.$el,"paddingLeft"))+parseInt($(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},S=(n(328),Object(a.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("rk-search-box"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),w=n(311),O=n.n(w),I={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=O()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,r=void 0===i?"":i,a=e.docsBranch,s=void 0===a?"master":a,o=e.docsRepo,u=void 0===o?n:o;return t&&u&&this.$page.relativePath?this.createEditLink(n,u,r,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,a){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a}}},j=(n(329),Object(a.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),E=n(330),T=n.n(E),N={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return A(P.PREV,this)},next:function(){return A(P.NEXT,this)}}};var P={NEXT:{resolveLink:function(t,e){return R(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return R(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function A(t,e){var n=e.$themeConfig,r=e.$page,a=e.$route,s=e.$site,o=e.sidebarItems,u=t.resolveLink,c=t.getThemeLinkConfig,l=t.getPageLinkConfig,h=c(n),p=l(r),f=O()(p)?h:p;return!1===f?void 0:T()(f)?Object(i.k)(s.pages,f,a.path):u(r,o)}function R(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[r+n]}}var D=N,q=(n(331),{components:{PageEdit:j,PageNav:Object(a.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),U=(n(332),Object(a.a)(q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content",attrs:{id:"nodeToRenderAsPDF"}}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._l(t.$site.themeConfig.pageFooter,(function(e,i){return n("div",{key:"footer-"+i,staticClass:"q-mx-md text-center text-grey-8",staticStyle:{"font-size":"0.90rem"}},[t._v("\n    "+t._s(e)+"\n  ")])})),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),H={name:"Sidebar",props:["items"],components:{SidebarLinks:n(312).default,NavLinks:C},data:function(){return{thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2}}},methods:{setInitialScroll:function(){var t=this.$page.path,e=document.getElementById(t);e&&this.$refs.scrollArea.setScrollPosition(e.offsetTop)}},mounted:function(){this.setInitialScroll()},watch:{$page:function(t){this.setInitialScroll()}}},W=(n(335),{name:"Layout",components:{Home:u,Page:U,Sidebar:Object(a.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("q-scroll-area",{ref:"scrollArea",staticClass:"fit",attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),n("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)],1)}),[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1,mounted:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1})),this.mounted=!0},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),B=Object(a.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.mounted?n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1):t._e()}),[],!1,null,null,null);e.default=B.exports}}]);