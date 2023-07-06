"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{9554:function(n,t,e){e.d(t,{Y:function(){return f},H:function(){return g}});var r,o,i,c,a=e(168),s=e(7402),p=e(1087),u=s.Z.img(r||(r=(0,a.Z)(["\n  width: 100%;\n  height: auto;\n"]))),l=s.Z.div(o||(o=(0,a.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);\n  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n  }\n"]))),d=s.Z.p(i||(i=(0,a.Z)(["\n  height: 30px;\n  font-weight: 500;\n  padding: 10px 10px 5px;\n  display: flex;\n  align-items: center;\n  color: gray;\n"]))),h=(0,s.Z)(p.rU)(c||(c=(0,a.Z)(["\n  text-decoration: none;\n  color: gray;\n"]))),x=e(184),f="https://image.tmdb.org/t/p/w500";function g(n){var t=n.movie,e=t.poster_path,r=t.title,o=t.name,i=t.id,c=t.vote_average,a=n.location;return(0,x.jsx)("li",{children:(0,x.jsx)(h,{to:"/movies/".concat(i),state:{from:a},children:(0,x.jsxs)(l,{children:[(0,x.jsx)(u,{src:e?"".concat(f)+e:"https://static7.depositphotos.com/1021974/739/i/950/depositphotos_7397821-stock-photo-cinema.jpg",alt:r||o}),(0,x.jsx)(d,{style:{fontSize:"20px"},children:r||o}),(0,x.jsxs)(d,{children:["Rate: ",c.toFixed(1)," / 10"]})]})})})}},9257:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var r,o,i,c,a,s,p,u,l,d,h,x=e(9439),f=e(7689),g=e(8215),m=e(9554),v=e(2791),Z=e(168),b=e(7402),w=e(1087),j=b.Z.div(r||(r=(0,Z.Z)(["\n  display: block;\n"]))),y=b.Z.img(o||(o=(0,Z.Z)(["\n  width: 400px;\n  margin-right: 40px;\n  border-radius: 5px;\n  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);\n"]))),k=b.Z.h1(i||(i=(0,Z.Z)(["\n  font-size: 55px;\n  margin-bottom: 20px;\n  color: black;\n"]))),_=b.Z.p(c||(c=(0,Z.Z)(["\n  font-weight: 500;\n  font-size: 24px;\n  margin-bottom: 20px;\n  color: #666;\n"]))),z=b.Z.h2(a||(a=(0,Z.Z)(["\n  margin-bottom: 10px;\n  font-size: 28px;\n  color: black;\n"]))),S=b.Z.p(s||(s=(0,Z.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #666;\n"]))),U=b.Z.p(p||(p=(0,Z.Z)(["\n  font-size: 20px;\n  color: #666;\n"]))),C=(0,b.Z)(w.OL)(u||(u=(0,Z.Z)(["\n  padding: 8px 16px;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10px;\n  font-size: 30px;\n  font-weight: 500;\n  color: black;\n  transition: color 0.3s ease, background-color 0.3s ease;\n    border-radius: 10px;\n  border: 3px solid;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: gray;\n  }\n\n  &.active {\n    color: white;\n    background-color: gray;\n  }\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),O=(0,b.Z)(w.rU)(l||(l=(0,Z.Z)(["\n  text-decoration: none;\n  margin-bottom: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 30px;\n  font-weight: 500;\n  color: black;\n  transition: color 0.3s ease;\n\n  &:hover,\n  &:focus {\n    color: white;\n  }\n"]))),T=b.Z.div(d||(d=(0,Z.Z)(["\n  padding: 20px 0;\n"]))),B=b.Z.p(h||(h=(0,Z.Z)(["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 20px;\n  color: black;\n"]))),F=e(6355),H=e(184);function L(){var n,t,e=(0,v.useState)(null),r=(0,x.Z)(e,2),o=r[0],i=r[1],c=(0,f.UO)().movieId,a=(0,v.useState)(null),s=(0,x.Z)(a,2),p=s[0],u=s[1],l=null!==(n=null===(t=(0,f.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,v.useEffect)((function(){(0,g.TP)(Number(c)).then((function(n){return i(n.data)})).catch((function(n){return u(n.message)}))}),[c]),(0,H.jsxs)(H.Fragment,{children:[p&&"Something wrong, reload the page...",o&&(0,H.jsxs)(j,{children:[(0,H.jsxs)(O,{to:l,children:[(0,H.jsx)(F.x_l,{}),"Back to movies"]}),(0,H.jsxs)("div",{style:{display:"flex",marginBottom:"20px"},children:[(0,H.jsx)(y,{src:o.poster_path?"".concat(m.Y)+o.poster_path:"https://static7.depositphotos.com/1021974/739/i/950/depositphotos_7397821-stock-photo-cinema.jpg",alt:o.title||o.name}),(0,H.jsxs)("div",{style:{padding:"30px 0"},children:[(0,H.jsx)(k,{children:o.title||o.name}),(0,H.jsxs)(_,{children:["(",o.release_date,")"]}),(0,H.jsx)(z,{children:"Overview"}),(0,H.jsx)(S,{children:o.overview}),(0,H.jsx)(z,{children:"Genres"}),(0,H.jsx)(U,{children:o.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,H.jsxs)(T,{children:[(0,H.jsx)(B,{children:"Additional information"}),(0,H.jsx)(C,{to:"cast",children:"Cast"}),(0,H.jsx)(C,{to:"reviews",children:"Reviews"})]})]}),(0,H.jsx)(v.Suspense,{fallback:(0,H.jsx)("div",{children:"Loading subpage..."}),children:(0,H.jsx)(f.j3,{})})]})}},8215:function(n,t,e){e.d(t,{Df:function(){return x},TP:function(){return v},UN:function(){return g},Wd:function(){return b},tx:function(){return j}});var r=e(5861),o=e(4687),i=e.n(o),c=e(2388),a="feccc6c807d31e1cfff77740c9278751",s="https://api.themoviedb.org/3/",p="trending/movie/day",u="search/movie",l="movie/",d="movie/",h="movie/";function x(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(p,"?api_key=").concat(a));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(u,"?api_key=").concat(a,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(l).concat(t,"?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(d).concat(t,"/credits?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s).concat(h).concat(t,"/reviews?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=257.83773911.chunk.js.map