"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[649],{649:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var r,a,c,i,u,o=e(439),s=e(791),p=e(689),f=e(256),h=e(168),d=e(444),l=d.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  list-style: none;\n"]))),v=d.ZP.li(a||(a=(0,h.Z)(["\n  width: 200px;\n"]))),m=d.ZP.img(c||(c=(0,h.Z)(["\n  display: block;\n  width: 180px;\n"]))),x=d.ZP.p(i||(i=(0,h.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n"]))),w=d.ZP.p(u||(u=(0,h.Z)(["\n  font-size: 14px;\n  color: grey;\n"]))),Z=e(184),g=function(){var t=(0,p.UO)().movieId,n=(0,s.useState)([]),e=(0,o.Z)(n,2),r=e[0],a=e[1];return(0,s.useEffect)((function(){(0,f.xc)(t).then((function(t){a(t.cast)})).catch((function(t){console.log(t)}))}),[t]),(0,Z.jsxs)("section",{children:[(0,Z.jsx)("h2",{children:"Cast"}),(0,Z.jsx)(l,{className:"cast-list",children:r.map((function(t){return(0,Z.jsxs)(v,{className:"cast-item",children:[(0,Z.jsx)(m,{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:t.name}),(0,Z.jsx)(x,{children:t.name}),(0,Z.jsx)(w,{children:t.character})]},t.id)}))})]})}},256:function(t,n,e){e.d(n,{Hx:function(){return h},Y5:function(){return p},wr:function(){return o},xc:function(){return f},z1:function(){return s}});var r=e(861),a=e(757),c=e.n(a),i=e(243),u="1c946dce2b60cb636de6f72a25cb04da",o=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u,"&page=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=649.e82c111d.chunk.js.map