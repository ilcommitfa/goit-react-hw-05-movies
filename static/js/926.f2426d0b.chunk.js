"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[926],{256:function(t,e,n){n.d(e,{Hx:function(){return h},Y5:function(){return u},wr:function(){return l},xc:function(){return p},z1:function(){return c}});var r=n(861),o=n(757),s=n.n(o),i=n(243),a="1c946dce2b60cb636de6f72a25cb04da",l=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a,"&page=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},926:function(t,e,n){n.r(e),n.d(e,{default:function(){return M}});var r,o,s,i,a,l,c=n(433),u=n(439),p=n(791),h=n(256),d=n(947),f=n(689),m=n(168),v=n(444),g=v.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),w=v.ZP.li(o||(o=(0,m.Z)(["\n  width: calc((100% - 40px)/5);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n  cursor: zoom-in;\n  }\n"]))),y=((0,v.ZP)(d.rU)(s||(s=(0,m.Z)(["\n  height: 100%;\n  display: block;\n  margin-right: auto;\n  color: #3f3f3f;\n  text-decoration: none;\n  :hover {\n    opacity: 0.7;\n  }\n"]))),v.ZP.img(i||(i=(0,m.Z)(["\n  display: block;\n  width: 100%;\n"])))),b=v.ZP.h2(a||(a=(0,m.Z)(["\n  font-size: 18px;\n"]))),T=v.ZP.p(l||(l=(0,m.Z)(["\n  font-size: 14px;\n"]))),E=function(t,e){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},E(t,e)};var S=function(){return S=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},S.apply(this,arguments)};var x="Pixel",_="Percent",L={unit:_,value:.8};function D(t){return"number"===typeof t?{unit:_,value:100*t}:"string"===typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:x,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:_,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),L):(console.warn("scrollThreshold should be string or number"),L)}var Y=function(t){function e(e){var n=t.call(this,e)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(t){n.lastScrollTop||(n.dragging=!0,t instanceof MouseEvent?n.startY=t.pageY:t instanceof TouchEvent&&(n.startY=t.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(t){n.dragging&&(t instanceof MouseEvent?n.currentY=t.pageY:t instanceof TouchEvent&&(n.currentY=t.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(t){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(t)}),0);var e=n.props.height||n._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(e,n.props.scrollThreshold):n.isElementAtBottom(e,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=e.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:e.dataLength},n.throttledOnScrollListener=function(t,e,n,r){var o,s=!1,i=0;function a(){o&&clearTimeout(o)}function l(){var l=this,c=Date.now()-i,u=arguments;function p(){i=Date.now(),n.apply(l,u)}function h(){o=void 0}s||(r&&!o&&p(),a(),void 0===r&&c>t?p():!0!==e&&(o=setTimeout(r?h:p,void 0===r?t-c:t)))}return"boolean"!==typeof e&&(r=n,n=e,e=void 0),l.cancel=function(){a(),s=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(t,e){function n(){this.constructor=t}E(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(t,e){return t.dataLength!==e.prevDataLength?S(S({},e),{prevDataLength:t.dataLength}):null},e.prototype.isElementAtTop=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=D(e);return r.unit===x?t.scrollTop<=r.value+n-t.scrollHeight+1:t.scrollTop<=r.value/100+n-t.scrollHeight+1},e.prototype.isElementAtBottom=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=D(e);return r.unit===x?t.scrollTop+n>=t.scrollHeight-r.value:t.scrollTop+n>=r.value/100*t.scrollHeight},e.prototype.render=function(){var t=this,e=S({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return p.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},p.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return t._infScroll=e},style:e},this.props.pullDownToRefresh&&p.createElement("div",{style:{position:"relative"},ref:function(e){return t._pullDown=e}},p.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(p.Component),Z=Y,k=n(184),M=function(){var t=(0,p.useState)([]),e=(0,u.Z)(t,2),n=e[0],r=e[1],o=(0,p.useState)(1),s=(0,u.Z)(o,2),i=s[0],a=s[1],l=(0,p.useState)(1),m=(0,u.Z)(l,2),v=m[0],E=m[1],S=(0,f.TH)();(0,p.useEffect)((function(){(0,h.wr)(i).then((function(t){r(1===i?t.results:function(e){return[].concat((0,c.Z)(e),(0,c.Z)(t.results))}),E(t.total_pages)})).catch((function(t){console.log(t)}))}),[i]);return(0,k.jsxs)("div",{children:[(0,k.jsx)("h1",{children:"Trending Movies"}),(0,k.jsx)(Z,{dataLength:n.length,next:function(){i<v&&a((function(t){return t+1}))},hasMore:!(v<=1||v===i),loader:(0,k.jsx)("h4",{children:"Loading..."}),children:(0,k.jsx)(g,{children:n.map((function(t){return(0,k.jsx)(w,{children:(0,k.jsxs)(d.rU,{to:"movies/".concat(t.id),state:{from:S},children:[(0,k.jsx)(y,{src:"https://image.tmdb.org/t/p/w185".concat(t.poster_path),alt:t.title}),(0,k.jsx)(b,{children:t.title}),(0,k.jsxs)(T,{children:["Rating: ",t.vote_average]})]})},t.id)}))})})]})}}}]);
//# sourceMappingURL=926.f2426d0b.chunk.js.map