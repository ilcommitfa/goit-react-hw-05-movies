"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[501],{501:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r,a,c,u=e(439),o=e(791),i=e(689),s=e(256),p=e(168),f=e(444),h=f.ZP.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  margin: 0 auto 0 0;\n  padding: 0 15px;\n"]))),d=f.ZP.h2(a||(a=(0,p.Z)(["\n  font-size: 16px;\n"]))),v=f.ZP.p(c||(c=(0,p.Z)(["\n  font-size: 14px;\n"]))),l=e(184),m=function(){var t=(0,i.UO)().movieId,n=(0,o.useState)([]),e=(0,u.Z)(n,2),r=e[0],a=e[1];return(0,o.useEffect)((function(){(0,s.Hx)(t).then((function(t){a(t.results)})).catch((function(t){console.log(t)}))}),[t]),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Reviews"}),(0,l.jsx)(h,{children:0!==r.length?r.map((function(t){return(0,l.jsxs)("li",{children:[(0,l.jsxs)(d,{children:["Author: ",t.author]}),(0,l.jsxs)(v,{children:[t.content," "]})]},t.id)})):"We don't have any reviews for this movie"})]})}},256:function(t,n,e){e.d(n,{Hx:function(){return h},Y5:function(){return p},wr:function(){return i},xc:function(){return f},z1:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="1c946dce2b60cb636de6f72a25cb04da",i=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&page=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=501.4343b4a6.chunk.js.map