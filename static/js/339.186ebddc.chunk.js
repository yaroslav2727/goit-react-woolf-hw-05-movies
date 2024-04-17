"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[339],{639:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(477),a="Loader_loader__+lRPl",c=r(184),s=function(){return(0,c.jsx)(n.B7,{wrapperClass:a})}},339:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),u=r(689),o=r(218),p=r(798),f=r(349),v=r(639),h="MovieCasts_list__sQarr",d="MovieCasts_image__VkYEK",l="MovieCasts_text__Aw51B",m=r(184),x=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],x=(0,i.useState)(!0),w=(0,a.Z)(x,2),Z=w[0],_=w[1],M=(0,u.UO)().movieId;return(0,i.useEffect)((function(){if(M){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,p.Z.fetchCreditsByMovieId(M);case 4:t=e.sent,r=t.cast,c(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o.Am.error(e.t0.message);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[M]),(0,m.jsxs)(m.Fragment,{children:[Z&&(0,m.jsx)(v.Z,{}),(null===r||void 0===r?void 0:r.length)>0&&(0,m.jsx)("ul",{className:h,children:r.map((function(e){var t=e.name,r=e.profile_path,n=e.id;return(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{className:d,src:r?"https://image.tmdb.org/t/p/w500".concat(r):f.Z,alt:t,width:"200"}),(0,m.jsx)("p",{className:l,children:t})]},n)}))}),!Z&&!r.length&&(0,m.jsx)("p",{children:"No cast for this movie can be found in our database..."})]})}},349:function(e,t){t.Z="https://t1.pixers.pics/img-c676e9e9/posters-cinema-poster-design-template.jpg?H4sIAAAAAAAAA42PSU7FMAxAr5NKbe2MTXqAv_1HqDL1U-ikpEDF6UkBsUNCXniQ_awHr2u2YwQf1yMmWKYQ5gjjNJcu9ynm6SMSrKVUVV-mM0HEqt_eYvJp20lDOa8byWrJulqhrvp3Wy4Xm17I03HsuQfIvN2ns-BK8hn8koEh7QA1SKONkV6IgD4Me5MPuwabQiPwVNju66PGK_6P1UARpAvUKacDCqcHxvCU2PwSvrAcZZHSF_pHskOsu0vuSNNCiu1Wtg_yvD8q-OPndw3lCm53UAYUBSHB6Gs03O7KKCqK4xAM03a0VHvWxYCcRyutj06hs2NA3ZYvn9u-UAeKAQAA"},798:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),s=r(294),i="https://api.themoviedb.org/3",u={headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWZkNTU4ZjExYWMwZjBmODdjZmIxMmQwYzJhNzQ4OCIsInN1YiI6IjY2MWY4OWU4YTM5ZDBiMDE2MzU1OGM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gcke1f6Y6QxhMeW1vKZN0Qi2tdpPIxlxLcN0PWMGeSc")}},o=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/trending/movie/day"),u);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/search/movie?query=").concat(t),u);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t),u);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"/credits"),u);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),u);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={fetchTrendingMovies:o,fetchMovieByQuery:p,fetchMovieDetailsByMovieId:f,fetchCreditsByMovieId:v,fetchReviewsByMovieId:h};t.Z=d}}]);
//# sourceMappingURL=339.186ebddc.chunk.js.map