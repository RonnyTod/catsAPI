(function(e){function t(t){for(var r,a,s=t[0],u=t[1],l=t[2],c=0,p=[];c<s.length;c++)a=s[c],i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1b67148e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"4ad079ea"}[e]+".css",i=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],c=l.getAttribute("data-href");if(c===r||c===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=o);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e),l=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}i[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/catsAPI/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fdc":function(e,t,n){"use strict";var r=n("4daf"),a=n.n(r);a.a},"10bd":function(e,t,n){},"4daf":function(e,t,n){},"549f":function(e,t,n){"use strict";var r=n("10bd"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("router-view")],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Cats")])])}],o=(n("5c0b"),n("2877")),s={},u=Object(o["a"])(s,a,i,!1,null,null,null),l=u.exports,c=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Filters"),n("Elements")],1)},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticStyle:{height:"1px"}}),e._l(e.items,function(e){return n("Elem",{attrs:{item:e}})}),n("infinite-loading",{attrs:{distance:0,identifier:e.filterOptions},on:{infinite:e.infiniteHandler}},[n("div",{staticClass:"spinner",attrs:{slot:"spinner"},slot:"spinner"},[n("h1",[e._v("Hmm... (·.·)")])])])],2)},m=[],v=n("e166"),h=n.n(v),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ElemWrapper"},[n("router-link",{staticClass:"Elem",attrs:{to:"/item/"+e.item.id}},[n("div",{style:{backgroundImage:"url("+e.item.url+")"}})])],1)},b=[],y={name:"Elem",props:{item:Object}},_=y,O=(n("9928"),Object(o["a"])(_,g,b,!1,null,"7afa6d28",null)),E=O.exports,w=n("1157"),C=n.n(w),j={name:"Elements",components:{Elem:E,InfiniteLoading:h.a},created:function(){var e=this;EventBus.$on("Filters:Options",function(t){e.filterOptions=t})},mounted:function(){this.filterOptions={}},data:function(){return{filterOptions:{Breed:null,Categories:null,ImageType:null},items:[]}},methods:{infiniteHandler:function(e){var t=this,n="https://api.thecatapi.com/v1/images/search",r="6dd98ac3-a5c0-44ce-bb23-1f816ddbb071";console.log(1),C.a.ajax(n,{method:"GET",headers:{"x-api-key":r},data:{limit:25,breed_id:this.filterOptions.Breed,category_ids:this.filterOptions.Categories,mime_types:this.filterOptions.ImageType}}).done(function(n){t.items=t.items.concat(n),e.loaded()})}},watch:{filterOptions:function(){this.items=[]}}},x=j,T=(n("c299"),n("0fdc"),Object(o["a"])(x,d,m,!1,null,"566378a2",null)),B=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",[n("div",[n("p",[e._v("Categories")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.Categories,expression:"Categories"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.Categories=t.target.multiple?n:n[0]}}},[n("option",{domProps:{value:null}},[e._v("All")]),e._l(e.CategoriesOptions,function(t){return n("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]),n("div",[n("p",[e._v("Image type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.ImageType,expression:"ImageType"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.ImageType=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"jpg,png,gif"}},[e._v("All")]),n("option",{attrs:{value:"jpg,png"}},[e._v("Static")]),n("option",{attrs:{value:"gif"}},[e._v("Animated")])])]),n("div",[n("p",[e._v("Breed")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.Breed,expression:"Breed"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.Breed=t.target.multiple?n:n[0]}}},[n("option",{domProps:{value:null}},[e._v("All")]),e._l(e.BreedOptions,function(t){return n("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)])])},I=[],P={name:"Filters",created:function(){var e=this,t="https://api.thecatapi.com/v1/categories",n="https://api.thecatapi.com/v1/breeds",r="6dd98ac3-a5c0-44ce-bb23-1f816ddbb071";C.a.ajax(t,{method:"GET",headers:{"x-api-key":r}}).done(function(t){e.CategoriesOptions=t}),C.a.ajax(n,{method:"GET",headers:{"x-api-key":r}}).done(function(t){e.BreedOptions=t})},data:function(){var e=null;return{Categories:e,ImageType:"jpg,png,gif",Breed:e,CategoriesOptions:[],BreedOptions:[]}},computed:{filterOptions:function(){return{Categories:this.Categories,ImageType:this.ImageType,Breed:this.Breed}}},watch:{filterOptions:function(e){EventBus.$emit("Filters:Options",e)}}},k=P,S=(n("549f"),Object(o["a"])(k,A,I,!1,null,"51f3ce8c",null)),$=S.exports,N={name:"Main",components:{Elements:B,Filters:$}},F=N,M=(n("9e44"),Object(o["a"])(F,p,f,!1,null,"89ba106c",null)),L=M.exports;r["a"].use(c["a"]);var H=new c["a"]({mode:"history",base:"/catsAPI/",routes:[{path:"/",name:"Main",component:L},{path:"/item/:id",props:!0,name:"Item",component:function(){return n.e("about").then(n.bind(null,"f0df"))}}]}),G=n("2f62");r["a"].use(G["a"]);var q=new G["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,window.EventBus=new r["a"],new r["a"]({router:H,store:q,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"6ff7":function(e,t,n){},9928:function(e,t,n){"use strict";var r=n("bcd6"),a=n.n(r);a.a},"9e44":function(e,t,n){"use strict";var r=n("6ff7"),a=n.n(r);a.a},bcd6:function(e,t,n){},c299:function(e,t,n){"use strict";var r=n("e112"),a=n.n(r);a.a},e112:function(e,t,n){}});
//# sourceMappingURL=app.36257fb6.js.map