"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[838],{639:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(477),a="Loader_loader__+lRPl",c=r(184),u=function(){return(0,c.jsx)(n.B7,{wrapperClass:a})}},838:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(791),o=r(689),s=r(218),f=r(798),v=r(639),p=r(184);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,i.useState)(!0),d=(0,a.Z)(h,2),l=d[0],x=d[1],Z=(0,o.UO)().movieId;return(0,i.useEffect)((function(){if(Z){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,f.Z.fetchReviewsByMovieId(Z);case 4:t=e.sent,(r=t.results).length>0&&c(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s.Am.error(e.t0.message);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z]),(0,p.jsxs)(p.Fragment,{children:[l&&(0,p.jsx)(v.Z,{}),(null===r||void 0===r?void 0:r.length)>0&&(0,p.jsx)("ul",{children:r.map((function(e){var t=e.content,r=e.author,n=e.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:r}),(0,p.jsx)("p",{children:t})]},n)}))}),!l&&!r.length&&(0,p.jsx)("p",{children:"No reviews for this movie can be found in our database..."})]})}},798:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),u=r(294),i="https://api.themoviedb.org/3",o={headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWZkNTU4ZjExYWMwZjBmODdjZmIxMmQwYzJhNzQ4OCIsInN1YiI6IjY2MWY4OWU4YTM5ZDBiMDE2MzU1OGM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gcke1f6Y6QxhMeW1vKZN0Qi2tdpPIxlxLcN0PWMGeSc")}},s=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/trending/movie/day"),o);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/search/movie?query=").concat(t),o);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t),o);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits"),o);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),o);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={fetchTrendingMovies:s,fetchMovieByQuery:f,fetchMovieDetailsByMovieId:v,fetchCreditsByMovieId:p,fetchReviewsByMovieId:h};t.Z=d}}]);
//# sourceMappingURL=838.1554bcad.chunk.js.map