(this["webpackJsonpmovie-web"]=this["webpackJsonpmovie-web"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(13),c=n.n(a),o=(n(12),n(3)),i=n.n(o),u=n(4),l=n(2),p=(n(20),n(0));function d(e){return Object(p.jsx)("span",{className:"arrow",dangerouslySetInnerHTML:{__html:'\n            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather '.concat(e.left?"left":"",'"}>\n                <line x1="5" y1="12" x2="19" y2="12"></line>\n                <polyline points="12 5 19 12 12 19"></polyline>\n            </svg>\n        ')}})}n(22);function h(e){var t=e.onSubmit,n=e.placeholder,r=s.a.useState(""),a=Object(l.a)(r,2),c=a[0],o=a[1];return Object(p.jsxs)("form",{className:"inputBar",onSubmit:function(e){return e.preventDefault(),t(c),!1},children:[Object(p.jsx)("input",{type:"text",className:"inputTextBox",id:"inputTextBox",placeholder:n,value:c,onChange:function(e){return o(e.target.value)},required:!0}),Object(p.jsx)("button",{className:"inputSearchButton",children:Object(p.jsxs)("span",{className:"text",children:["Search",Object(p.jsx)("span",{className:"arrow",children:Object(p.jsx)(d,{})})]})})]})}var f=n(5),j=s.a.createContext(null);function v(e){var t=s.a.useState("search"),n=Object(l.a)(t,2),r=n[0],a=n[1],c=s.a.useState(""),o=Object(l.a)(c,2),i=o[0],u=o[1],d=s.a.useState({title:"",slug:"",type:"",episodes:[],seasons:[]}),h=Object(l.a)(d,2),v=h[0],b=h[1];return Object(p.jsx)(j.Provider,{value:{navigate:function(e){a(e)},page:r,setStreamUrl:u,streamUrl:i,streamData:v,setStreamData:function(e){b((function(t){return Object(f.a)(Object(f.a)({},t),e)}))}},children:e.children})}function b(e){return s.a.useContext(j)}n(23);function m(e){var t=b().navigate,n=e.size||"big",r=e.accentLink||"",s=e.accent||"";return Object(p.jsxs)("div",{children:[s.length>0?Object(p.jsxs)("p",{onClick:function(){return r.length>0&&t(r)},className:"title-accent ".concat(r.length>0?"title-accent-link":""),children:[r.length>0?Object(p.jsx)(d,{left:!0}):null,s]}):null,Object(p.jsx)("h1",{className:"title "+(n?"title-size-"+n:""),children:e.children})]})}n(24);function x(e){var t=s.a.useState(!1),n=Object(l.a)(t,2),r=n[0],a=n[1],c=s.a.useRef(null),o=s.a.useState(0),i=Object(l.a)(o,2),u=i[0],d=i[1];return s.a.useEffect((function(){(null===c||void 0===c?void 0:c.current)&&(a(e.show),d(c.current.clientHeight))}),[e.show,c]),Object(p.jsx)("div",{className:"card-wrapper ".concat(e.fullWidth?"full":""),style:{height:e.doTransition?r?u:0:"initial"},children:Object(p.jsx)("div",{className:"card ".concat(r?"show":""," ").concat(e.doTransition?"doTransition":""),ref:c,children:e.children})})}n(25);function O(e){var t=e.children;return Object(p.jsx)("div",{class:"errorBanner",children:t})}n(26),n(27);function g(e){var t=e.percentage;return t&&t>3&&(t=Math.max(20,t<90?t:100)),t>0?Object(p.jsx)("div",{class:"progressBar",children:Object(p.jsx)("div",{class:"progressBarInner",style:{width:"".concat(t,"%")}})}):Object(p.jsx)(s.a.Fragment,{})}function y(e){var t,n,r,s,a=JSON.parse(localStorage.getItem("video-progress")||"{}"),c=null;"movie"===e.type&&((t=null===a||void 0===a||null===(n=a.lookmovie)||void 0===n||null===(r=n.movie)||void 0===r||null===(s=r[e.slug])||void 0===s?void 0:s.full)&&(c=Math.floor(t.currentlyAt/t.totalDuration*100)));return Object(p.jsxs)("div",{className:"movieRow",onClick:function(){return e.onClick&&e.onClick()},children:[Object(p.jsxs)("div",{className:"left",children:[e.title,"\xa0",Object(p.jsxs)("span",{className:"year",children:["(",e.year,")"]})]}),Object(p.jsxs)("div",{className:"watch",children:[Object(p.jsxs)("p",{children:["Watch ",e.type]}),Object(p.jsx)(d,{})]}),Object(p.jsx)(g,{percentage:c})]})}n(28);function w(e){return Object(p.jsxs)("div",{className:"progress ".concat(e.show?"":"hide"," ").concat(e.failed?"failed":""),children:[e.text&&e.text.length>0?Object(p.jsx)("p",{children:e.text}):null,Object(p.jsx)("div",{className:"bar",children:Object(p.jsx)("div",{className:"bar-inner",style:{width:(e.progress/e.steps*100).toFixed(0)+"%"}})})]})}var k=n(14),S=n(11),N=n.n(S);function T(e){return"https://hidden-inlet-27205.herokuapp.com/".concat(e)}function C(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(i.a.mark((function e(t){var n,r,s,a,c,o,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:if(n=e.sent,r=Math.floor(Date.now()/1e3),s="","movie"===t.type?s=T("https://lookmovie.io/manifests/movies/json/".concat(t.id,"/").concat(r,"/").concat(n,"/master.m3u8")):"show"===t.type&&(s=T("https://lookmovie.io/manifests/shows/json/".concat(n,"/").concat(r,"/").concat(t.id,"/master.m3u8"))),!s){e.next=14;break}return e.next=9,fetch(s).then((function(e){return e.json()}));case 9:for(a=e.sent,c="",o=0,u=["1080p","1080","720p","720","480p","480","auto"];o<u.length;o++)!a[l=u[o]]||a[l].includes("dummy")||a[l].includes("earth-1984")||c||(c=a[l]);return e.abrupt("return",c.startsWith("/")?T("https://lookmovie.io/".concat(c)):T(c));case 14:return e.abrupt("return","Invalid type.");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(i.a.mark((function e(t){var n,r,s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="","movie"===t.type?r=T("https://lookmovie.io/api/v1/security/movie-access?id_movie=".concat(t.id,"&token=1&sk=&step=1")):"show"===t.type&&(r=T("https://lookmovie.io/api/v1/security/show-access?slug=".concat(t.slug,"&token=&step=2"))),e.next=4,fetch(r).then((function(e){return e.json()}));case 4:if(s=e.sent,!(a=null===s||void 0===s||null===(n=s.data)||void 0===n?void 0:n.accessToken)){e.next=8;break}return e.abrupt("return",a);case 8:return e.abrupt("return","Invalid type provided in config");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(i.a.mark((function e(t){var n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T("https://lookmovie.io/shows/view/".concat(t)),e.next=3,fetch(n).then((function(e){return e.text()}));case 3:return r=e.sent,s=N.a.parse("{"+r.slice(r.indexOf("show_storage")).split("};")[0].split("= {")[1].trim()+"}"),e.abrupt("return",s.seasons);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,n,r){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(i.a.mark((function e(t,n,r,s){var a,c,o,u,l,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=T("https://lookmovie.io/".concat(n,"s/view/").concat(t)),e.next=3,fetch(a).then((function(e){return e.text()}));case 3:if(c=e.sent,o=N.a.parse("{"+c.slice(c.indexOf("".concat(n,"_storage"))).split("};")[0].split("= {")[1].trim()+"}"),u="","movie"===n?u=o.id_movie:"show"===n&&(l=o.seasons.find((function(e){return e.season===r&&e.episode===s})))&&(u=l.id_episode),""!==u){e.next=9;break}return e.abrupt("return",{url:""});case 9:return e.next=11,C({slug:t,id:u,type:n});case 11:return p=e.sent,e.abrupt("return",{url:p});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(i.a.mark((function e(t,n){var r,s,a,c,o,u,l,p,d,h,f,j,v,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=T("https://lookmovie.io/".concat(n,"s/search/?q=").concat(encodeURIComponent(t))),e.next=3,fetch(r).then((function(e){return e.text()}));case 3:if(s=e.sent,a=new DOMParser,c=a.parseFromString(s,"text/html"),o=Array.from(c.querySelectorAll(".movie-item-style-1")),u=o.map((function(e){return{type:n,title:e.querySelector("h6 a").innerText.trim(),year:e.querySelector(".year").innerText.trim(),slug:e.querySelector("a").href.split("/").pop()}})),l=new k.a(u,{threshold:.3,distance:200,keys:["title"]}),0!==(p=l.search(t.toString()).map((function(e){return e.item}))).length){e.next=12;break}return e.abrupt("return",{options:[]});case 12:if(!(p.length>1)){e.next=18;break}return d={options:[]},p.forEach((function(e){return d.options.push({title:e.title,slug:e.slug,type:e.type,year:e.year})})),e.abrupt("return",d);case 18:return h=p[0],f=h.title,j=h.slug,v=h.type,b=h.year,e.abrupt("return",{options:[{title:f,slug:j,type:v,year:b}]});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(29);function A(e){var t=e.setType,n=e.choices,r=e.selected,s=e.noWrap,a=void 0!==s&&s,c=n.findIndex((function(e){return e.value===r})),o={opacity:-1!==c?1:0,transform:"translateX(".concat(-1!==c?7*c:0,"rem)")};return Object(p.jsxs)("div",{className:"typeSelector ".concat(a?"nowrap":""),children:[n.map((function(e){return Object(p.jsx)("div",{className:"choice ".concat(r===e.value?"selected":""),onClick:function(){return t(e.value)},children:e.label},e.value)})),Object(p.jsx)("div",{className:"selectedBar",style:o})]})}n(30);function J(){var e=b(),t=e.navigate,n=e.setStreamUrl,r=e.setStreamData,a=s.a.useState([]),c=Object(l.a)(a,2),o=c[0],f=c[1],j=s.a.useState(0),v=Object(l.a)(j,2),g=v[0],k=v[1],S=s.a.useState(""),N=Object(l.a)(S,2),T=N[0],C=N[1],E=s.a.useState(!1),B=Object(l.a)(E,2),D=B[0],M=B[1],W=s.a.useState(!1),_=Object(l.a)(W,2),J=_[0],q=_[1],H=s.a.useState(!1),R=Object(l.a)(H,2),F=R[0],z=R[1],L=s.a.useState("movie"),V=Object(l.a)(L,2),G=V[0],X=V[1],Y=function(e){k(4),C(e),M(!0)};function K(e,t,n){return Q.apply(this,arguments)}function Q(){return(Q=Object(u.a)(i.a.mark((function e(s,a,c){var o,u,l,p,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(""),e.prev=1,k(2),C('Getting stream for "'.concat(s,'"')),o=[],u=[],"show"!==c){e.next=11;break}return e.next=9,I(a);case 9:e.sent.forEach((function(e){o.includes(e.season)||o.push(e.season),u[e.season]||(u[e.season]=[]),u[e.season].push(e.episode)}));case 11:if(l="","movie"!==c){e.next=20;break}return e.next=15,P(a,c);case 15:if(p=e.sent,""!==(d=p.url)){e.next=19;break}return e.abrupt("return",Y("Not found: ".concat(s)));case 19:l=d;case 20:k(4),n(l),r({title:s,type:c,seasons:o,episodes:u,slug:a}),C("Streaming..."),t("movie"),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(1),Y("Failed to get stream");case 30:case"end":return e.stop()}}),e,null,[[1,27]])})))).apply(this,arguments)}function Z(){return(Z=Object(u.a)(i.a.mark((function e(t,n){var r,s,a,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!1),C("Searching for ".concat(n,' "').concat(t,'"')),k(1),q(!1),e.prev=4,e.next=7,U(t,n);case 7:if(r=e.sent,0!==(s=r.options).length){e.next=13;break}return e.abrupt("return",Y("Could not find that ".concat(n)));case 13:if(!(s.length>1)){e.next=19;break}return k(2),C("Choose your ".concat(n)),f(s),q(!0),e.abrupt("return");case 19:a=s[0],c=a.title,o=a.slug,u=a.type,K(c,o,u),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(4),Y("Failed to watch ".concat(n));case 26:case"end":return e.stop()}}),e,null,[[4,23]])})))).apply(this,arguments)}return s.a.useEffect((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hidden-inlet-27205.herokuapp.com/https://lookmovie.io/",e.next=3,fetch("https://hidden-inlet-27205.herokuapp.com/https://lookmovie.io/").catch((function(){z("Our content provider is currently offline, apologies.")}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"cardView",children:[Object(p.jsxs)(x,{children:[F?Object(p.jsx)(O,{children:F}):"",Object(p.jsx)(m,{accent:"Because watching content legally is boring",children:"What do you wanna watch?"}),Object(p.jsx)(A,{setType:function(e){return X(e)},choices:[{label:"Movie",value:"movie"},{label:"TV Show",value:"show"}],noWrap:!0,selected:G}),Object(p.jsx)(h,{placeholder:"movie"===G?"Hamilton":"Atypical",onSubmit:function(e){return function(e,t){return Z.apply(this,arguments)}(e,G)}}),Object(p.jsx)(w,{show:g>0,failed:D,progress:g,steps:4,text:T})]}),Object(p.jsxs)(x,{show:J,doTransition:!0,children:[Object(p.jsxs)(m,{size:"medium",children:["Whoops, there are a few ",G,"s like that"]}),null===o||void 0===o?void 0:o.map((function(e,t){return Object(p.jsx)(y,{title:e.title,slug:e.slug,type:e.type,year:e.year,season:e.season,episode:e.episode,onClick:function(){q(!1),K(e.title,e.slug,e.type,e.season,e.episode)}},t)}))]}),Object(p.jsx)("div",{className:"topRightCredits",children:Object(p.jsxs)("a",{href:"https://github.com/JamesHawkinss/movie-web",target:"_blank",rel:"noreferrer",children:["Check it out on GitHub ",Object(p.jsx)(d,{})]})})]})}function q(e){return Object(p.jsx)("div",{className:"cardView",children:Object(p.jsx)(x,{children:Object(p.jsx)(m,{accent:"How did you end up here?",children:"Oopsie doopsie"})})})}var H=n(9),R=n.n(H);n(31),n(32);function F(e){return Object(p.jsx)("div",{className:"videoPlaceholder",children:Object(p.jsx)("div",{className:"videoPlaceholderBox",children:Object(p.jsx)("p",{children:e.children})})})}function z(e){var t=e.streamUrl,n=e.loading,r=e.setProgress,a=s.a.useRef(null),c=s.a.useState(!1),o=Object(l.a)(c,2),i=o[0],u=o[1];return s.a.useEffect((function(){if(u(!1),a&&a.current&&t&&0!==t.length&&!n){var e=new R.a;R.a.isSupported()||!a.current.canPlayType("application/vnd.apple.mpegurl")?R.a.isSupported()?(e.attachMedia(a.current),e.loadSource(t)):u(!0):a.current.src=t}}),[a,t,n]),i?Object(p.jsx)(F,{children:"Your browser is not supported"}):n?Object(p.jsx)(F,{children:"Loading episode..."}):t&&0!==t.length?Object(p.jsx)("video",{className:"videoElement",ref:a,controls:!0,autoPlay:!0,onProgress:r}):Object(p.jsx)(F,{children:"No video selected"})}n(33);function L(e){var t=e.setType,n=e.choices,r=e.selected;return Object(p.jsx)("div",{className:"numberSelector",children:n.map((function(e){return Object(p.jsx)("div",{className:"choiceWrapper",children:Object(p.jsxs)("div",{className:"choice ".concat(r&&r===e.value?"selected":""),onClick:function(){return t(e.value)},children:[e.label,Object(p.jsx)(g,{percentage:e.percentage})]})},e.value)}))})}n(34);function V(e){var t=e.setSeason,n=e.setEpisode,r=e.seasons,s=e.season,a=e.episodes,c=e.currentSeason,o=e.currentEpisode,i=(e.slug,a.map((function(e){var t,n,r,a=JSON.parse(localStorage.getItem("video-progress")||"{}"),c=0,o=0,i=null===a||void 0===a||null===(t=a.lookmovie)||void 0===t||null===(n=t.show)||void 0===n||null===(r=n.slug)||void 0===r?void 0:r["".concat(s,"-").concat(e)];i&&(c=i.currentlyAt,o=i.totalDuration);var u=Math.round(c/o*100);return{value:e.toString(),label:e,percentage:u}})));return Object(p.jsxs)("div",{className:"episodeSelector",children:[Object(p.jsx)(A,{setType:t,choices:r.map((function(e){return{value:e.toString(),label:"Season ".concat(e)}})),selected:c}),Object(p.jsx)("br",{}),Object(p.jsx)(L,{setType:function(e){return n({episode:e,season:c})},choices:i,selected:o.season===c?o.episode:null})]})}n(35);function G(e){var t=b(),n=t.streamUrl,r=t.streamData,a=t.setStreamUrl,c=s.a.useState("1"),o=Object(l.a)(c,2),i=o[0],u=o[1],d=s.a.useState([]),h=Object(l.a)(d,2),f=h[0],j=h[1],v=s.a.useState([]),O=Object(l.a)(v,2),g=O[0],y=O[1],w=s.a.useState({episode:null,season:null}),k=Object(l.a)(w,2),S=k[0],N=k[1],T=s.a.useState(!1),C=Object(l.a)(T,2),E=C[0],B=C[1];s.a.useEffect((function(){y(r.episodes[i])}),[i,r.episodes]),s.a.useEffect((function(){"show"===r.type&&(j(r.seasons),u(r.seasons[0]),N({episode:r.episodes[r.seasons[0]][0],season:r.seasons[0]}),y(r.episodes[r.seasons[0]]))}),[r]),s.a.useEffect((function(){var e=!1;return"show"!==r.type?function(){e=!0}:S.episode?(B(!0),P(r.slug,r.type,S.season,S.episode).then((function(t){var n=t.url;e||(a(n),B(!1))})).catch((function(t){e||console.error(t)})),function(){e=!0}):(B(!1),void a(""))}),[S,r,a]);return Object(p.jsx)("div",{className:"cardView showType-".concat(r.type),children:Object(p.jsxs)(x,{fullWidth:!0,children:[Object(p.jsx)(m,{accent:"Return to home",accentLink:"search",children:r.title}),"show"===r.type?Object(p.jsxs)(m,{size:"small",children:["Season ",S.season,": Episode ",S.episode]}):void 0,Object(p.jsx)(z,{streamUrl:n,loading:E,setProgress:function(e){var t=JSON.parse(localStorage.getItem("video-progress")||"{}");t.lookmovie||(t.lookmovie={}),t.lookmovie[r.type]||(t.lookmovie[r.type]={}),t.lookmovie[r.type][r.slug]||(t.lookmovie[r.type][r.slug]={});var n="show"===r.type?"".concat(i,"-").concat(S.episode):"full";t.lookmovie[r.type][r.slug][n]={currentlyAt:Math.floor(e.currentTarget.currentTime),totalDuration:Math.floor(e.currentTarget.duration),updatedAt:Date.now()},"show"===r.type&&(t.lookmovie[r.type][r.slug][n].show={season:i,episode:S.episode}),localStorage.setItem("video-progress",JSON.stringify(t))}}),"show"===r.type?Object(p.jsx)(V,{setSeason:u,setEpisode:N,season:i,seasons:f,episodes:g,slug:r.slug,currentSeason:i,currentEpisode:S}):""]})})}function X(){var e=b().page;return"search"===e?Object(p.jsx)(J,{}):"movie"===e?Object(p.jsx)(G,{}):Object(p.jsx)(q,{})}var Y=function(){return Object(p.jsx)(v,{children:Object(p.jsx)(X,{})})};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(Y,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.1808ff90.chunk.js.map