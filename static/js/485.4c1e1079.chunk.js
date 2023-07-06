"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{9554:function(n,t,e){e.d(t,{Y:function(){return h},H:function(){return m}});var r,o,a,c,i=e(168),s=e(7402),u=e(1087),p=s.Z.img(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: auto;\n"]))),f=s.Z.div(o||(o=(0,i.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);\n  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n  }\n"]))),d=s.Z.p(a||(a=(0,i.Z)(["\n  height: 30px;\n  font-weight: 500;\n  padding: 10px 10px 5px;\n  display: flex;\n  align-items: center;\n  color: gray;\n"]))),x=(0,s.Z)(u.rU)(c||(c=(0,i.Z)(["\n  text-decoration: none;\n  color: gray;\n"]))),l=e(184),h="https://image.tmdb.org/t/p/w500";function m(n){var t=n.movie,e=t.poster_path,r=t.title,o=t.name,a=t.id,c=t.vote_average,i=n.location;return(0,l.jsx)("li",{children:(0,l.jsx)(x,{to:"/movies/".concat(a),state:{from:i},children:(0,l.jsxs)(f,{children:[(0,l.jsx)(p,{src:e?"".concat(h)+e:"https://static7.depositphotos.com/1021974/739/i/950/depositphotos_7397821-stock-photo-cinema.jpg",alt:r||o}),(0,l.jsx)(d,{style:{fontSize:"20px"},children:r||o}),(0,l.jsxs)(d,{children:["Rate: ",c.toFixed(1)," / 10"]})]})})})}},4146:function(n,t,e){e.d(t,{e:function(){return u}});var r,o=e(7689),a=e(9554),c=e(168),i=e(7402).Z.ul(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-gap: 30px;\n  margin: 30px auto;\n  background-color: #333;\n  padding: 30px;\n  border-radius: 10px;\n  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);\n"]))),s=e(184);function u(n){var t=n.movies,e=(0,o.TH)();return(0,s.jsx)(i,{children:t.map((function(n){return(0,s.jsx)(a.H,{movie:n,location:e},n.id)}))})}},3485:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,o,a=e(9439),c=e(8215),i=e(2791),s=e(4146),u=e(168),p=e(1087),f=e(7402),d=((0,f.Z)(p.OL)(r||(r=(0,u.Z)(["\n  text-decoration: none;\n  font-size: 24px;\n  color: #333;\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: gray;\n  }\n"]))),f.Z.h1(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 68px;\n  color: black;\n  margin-bottom: 20px;\n  background-color: #333;\n  padding: 20px;\n  border-radius: 10px;\n  border: black;\n  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);\n  font-family: 'Inter', sans-serif;\n  animation: fadeIn 1s ease;\n\n  @keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n  }\n"])))),x=e(184);function l(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],o=(0,i.useState)(null),u=(0,a.Z)(o,2),p=u[0],f=u[1];return(0,i.useEffect)((function(){(0,c.Df)().then((function(n){return r(n.data.results)})).catch((function(n){return f(n.message)}))}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{children:"Trending today"}),p&&"Something wrong, reload the page",(0,x.jsx)(s.e,{movies:e})]})}},8215:function(n,t,e){e.d(t,{Df:function(){return l},TP:function(){return v},UN:function(){return m},Wd:function(){return b},tx:function(){return w}});var r=e(5861),o=e(4687),a=e.n(o),c=e(2388),i="feccc6c807d31e1cfff77740c9278751",s="https://api.themoviedb.org/3/",u="trending/movie/day",p="search/movie",f="movie/",d="movie/",x="movie/";function l(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(u,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(p,"?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(f).concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(d).concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(x).concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=485.4c1e1079.chunk.js.map