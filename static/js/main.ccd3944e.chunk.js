(this["webpackJsonptmdb-clone"]=this["webpackJsonptmdb-clone"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(26),a=n.n(c),s=(n(33),n(34),n(0));function i(){return Object(s.jsx)("footer",{className:"container-fluid",children:Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer-items ",children:[Object(s.jsx)("img",{width:"100px",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"logo"}),Object(s.jsx)("p",{className:"footer-btn",children:"join the community"})]}),Object(s.jsxs)("div",{className:"footer-items",children:[Object(s.jsx)("h3",{children:"COMMUNITY"}),Object(s.jsx)("p",{children:" Guidelines"}),Object(s.jsx)("p",{children:" Discussions"}),Object(s.jsx)("p",{children:" Leaderboard "}),Object(s.jsx)("p",{children:" Twitter "})]}),Object(s.jsxs)("div",{className:"footer-items",children:[Object(s.jsx)("h3",{children:"LEGAL"}),Object(s.jsx)("p",{children:" Terms of Use"}),Object(s.jsx)("p",{children:" API Terms of Use"}),Object(s.jsx)("p",{children:" Support Forums "})]}),Object(s.jsxs)("div",{className:"footer-items",children:[Object(s.jsx)("h3",{children:"THE BASICS"}),Object(s.jsx)("p",{children:" About TMDB "}),Object(s.jsx)("p",{children:" Contact Us "}),Object(s.jsx)("p",{children:" Support Forums "}),Object(s.jsx)("p",{children:" API "}),Object(s.jsx)("p",{children:" System Status "})]})]})})}function o(){return Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"container-fluid content",children:Object(s.jsxs)("div",{className:"nav-menu",children:[Object(s.jsxs)("div",{className:"submenu-left",children:[Object(s.jsx)("span",{children:Object(s.jsx)("a",{to:"/",children:Object(s.jsx)("img",{height:"20px",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"logo"})})}),Object(s.jsxs)("span",{className:"nav-link",children:[Object(s.jsx)("a",{to:"/",className:"link",children:"Movies"}),Object(s.jsx)("a",{to:"/",className:"link",children:"TV Shows"}),Object(s.jsx)("a",{to:"/",className:"link",children:"More"})]})]}),Object(s.jsxs)("div",{className:"submenu-right",children:[Object(s.jsx)("a",{to:"/",className:"link",style:{border:"0.5px solid white",borderRadius:"5px",padding:"3px"},children:"EN"}),Object(s.jsx)("a",{to:"/",className:"link",children:"Login"}),Object(s.jsx)("a",{to:"/",className:"link",children:"Join TMDB"})]})]})})})}var l=n(3),u=n(7),d=n(27),j=n.n(d),f=n(28),b=j()(Object(f.devtools)((function(e){return{populars:[],topRated:[],trending:[],allMovies:[],topRatedMovies:[],pagenumber:1,currenttext:"",favouritelist:[],loading:!1,genres:[],currentgenre:"All Genres",newmovies:[],genresid:[],trailerKey:"",modalIsOpen:!1,setPopulars:function(t){return e((function(){return{populars:t}}))},settopRated:function(t){return e((function(){return{topRated:t}}))},setTrending:function(t){return e((function(){return{trending:t}}))},setAllMovies:function(t){return e((function(){return{allMovies:t}}))},setTopRatedMovies:function(t){return e((function(){return{topRatedMovies:t}}))},setPagenumber:function(){return e((function(e){return{pagenumber:e.pagenumber+1}}))},setLoading:function(){return e((function(){return{loading:!0}}))},setCurrenttext:function(t){return e((function(){return{currenttext:t}}))},setFavouritelist:function(t){return e((function(){return{favouritelist:Object(u.a)(t)}}))},setgenres:function(t){return e((function(){return{genres:Object(u.a)(t)}}))},setcurrentgenre:function(t){return e((function(){return{currentgenre:t}}))},setnewmovies:function(t){return e((function(){return{newmovies:Object(u.a)(t)}}))},setgenresid:function(t){return e((function(){return{genresid:Object(u.a)(t)}}))},setTrailerKey:function(t){return e((function(){return{trailerKey:t}}))},openModal:function(){return e((function(){return{modalIsOpen:!0}}))},closeModal:function(){return e((function(){return{modalIsOpen:!1}}))}}}))),h=n(2),p=n.n(h),m=n(6),v=n(4),x=n.n(v),O="bdd243ea847239dc0799805e63e189f0";x.a.defaults.baseURL="https://api.themoviedb.org/3/",x.a.defaults.customHeaders=!0,x.a.defaults.defaultErrorHandler=!0;var g=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("trending/all/day",{params:{api_key:O,language:"hi-IN"}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("trending/all/week",{params:{api_key:O}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/now_playing/",{params:{api_key:O}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/popular",{params:{api_key:O,language:"en-US",page:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/tv/popular",{params:{api_key:O,language:"en-US",page:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/discover/movie/",{params:{api_key:O,language:"en-US",sort_by:"vote_count.desc",page:t,include_video:"false",include_adult:"false",with_watch_monetization_types:"free"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/discover/tv/",{params:{api_key:O,language:"en-US",sort_by:"vote_count.desc",page:t,include_video:"false",include_adult:"false",with_watch_monetization_types:"free"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/discover/movie/",{params:{api_key:O,language:"en-US",sort_by:"vote_count.desc",page:t,include_video:"false",include_adult:"false",with_watch_monetization_types:"rent"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=(n(17),n(9)),M=(n(12),n(15));function z(){return Object(s.jsx)(M.a,{baseColor:"#B8B8B8",highlightColor:"#C8C8C8",children:Object(u.a)(Array(20)).map((function(e,t){return Object(s.jsxs)("div",{className:"scroller_wrap",style:{margin:"5px 10px"},children:[Object(s.jsx)("span",{children:Object(s.jsx)(M.b,{duration:2,direction:"ltr",height:225,width:150})},t),Object(s.jsx)("span",{children:Object(s.jsx)(M.b,{duration:2,direction:"ltr",count:3})},t)]})}))})}function F(){var e=b((function(e){return e.setLoading})),t=b((function(e){return e.pagenumber})),n=b((function(e){return e.topRated})),c=b((function(e){return e.settopRated})),a=Object(r.useState)(""),i=Object(l.a)(a,2),o=i[0],u=i[1];Object(r.useEffect)((function(){k(t).then((function(e){return c(n.concat(e.data.results))})),e(),u("movies")}),[t]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container-fluid main-content",children:[Object(s.jsxs)("div",{className:"column_header",children:[Object(s.jsx)("div",{className:"HeadingContainer",children:Object(s.jsx)("span",{className:"section-title",children:"Free To Watch"})}),Object(s.jsxs)("div",{className:"selector_wrapper ",children:[Object(s.jsx)("div",{className:"anchor ".concat("movies"===o?"selected":null),onClick:function(){return k(t).then((function(e){return c(e.data.results)})),void u("movies")},children:"Movies"}),Object(s.jsx)("div",{className:"anchor ".concat("tv"===o?"selected":null),onClick:function(){return C(t).then((function(e){return c(e.data.results)})),void u("tv")},children:"TV Shows"})]})]}),Object(s.jsx)("div",{className:"card-horizontal scroller_wrap should_fade",children:n.length?n.sort().map((function(e,t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"movie-card img-fluid",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:""})}),Object(s.jsxs)("div",{className:"content-details",children:[Object(s.jsx)("span",{className:"circular-progress-bar",children:Object(s.jsx)(T.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(s.jsx)("div",{className:"item-title",children:e.name||e.title}),Object(s.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]},t)})})):Object(s.jsx)("div",{style:{display:"flex"},children:Object(s.jsx)(z,{})})})]})})}function R(){var e=b((function(e){return e.setLoading})),t=b((function(e){return e.pagenumber})),n=b((function(e){return e.trending})),c=b((function(e){return e.setTrending})),a=Object(r.useState)(""),i=Object(l.a)(a,2),o=i[0],u=i[1];Object(r.useEffect)((function(){g(t).then((function(e){return c(n.concat(e.data.results))})),e(),u("today")}),[t]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container-fluid main-content",children:[Object(s.jsxs)("div",{className:"column_header",children:[Object(s.jsx)("div",{className:"HeadingContainer",children:Object(s.jsx)("span",{className:"section-title",children:"Trending"})}),Object(s.jsxs)("div",{className:"selector_wrapper ",children:[Object(s.jsx)("div",{className:"anchor ".concat("today"===o?"selected":null),onClick:function(){return g(t).then((function(e){return c(e.data.results)})),void u("today")},children:"Today"}),Object(s.jsx)("div",{className:"anchor ".concat("week"===o?"selected":null),onClick:function(){return N(t).then((function(e){return c(e.data.results)})),void u("week")},children:"This Week"})]})]}),Object(s.jsx)("div",{className:"card-horizontal scroller_wrap should_fade",children:n.length?n.sort().map((function(e,t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"movie-card img-fluid",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"poster"})}),Object(s.jsxs)("div",{className:"content-details",children:[Object(s.jsx)("span",{className:"circular-progress-bar",children:Object(s.jsx)(T.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(s.jsx)("div",{className:"item-title",children:e.title||e.name}),Object(s.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]},t)})})):Object(s.jsx)("div",{style:{display:"flex"},children:Object(s.jsx)(z,{})})})]})})}function I(){var e=b((function(e){return e.setLoading})),t=b((function(e){return e.pagenumber})),n=b((function(e){return e.populars})),c=b((function(e){return e.setPopulars})),a=Object(r.useState)(""),i=Object(l.a)(a,2),o=i[0],u=i[1];Object(r.useEffect)((function(){w(t).then((function(e){return c(n.concat(e.data.results))})),e(),u("Streaming")}),[t]);return console.log("populars",n),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container-fluid main-content",children:[Object(s.jsxs)("div",{className:"column_header",children:[Object(s.jsx)("div",{className:"HeadingContainer",children:Object(s.jsx)("span",{className:"section-title",children:"What's Popular"})}),Object(s.jsxs)("div",{className:"selector_wrapper ",children:[Object(s.jsx)("div",{className:"anchor ".concat("Streaming"===o?"selected":""),onClick:function(){return w(t).then((function(e){return c(e.data.results)})),void u("Streaming")},children:"Streaming"}),Object(s.jsx)("div",{className:"anchor ".concat("tv"===o?"selected":""),onClick:function(){return y(t).then((function(e){return c(e.data.results)})),void u("tv")},children:"On TV"}),Object(s.jsx)("div",{className:"anchor ".concat("rent"===o?"selected":""),onClick:function(){return S(t).then((function(e){return c(e.data.results)})),void u("rent")},children:"For Rent"}),Object(s.jsx)("div",{className:"anchor ".concat("theater"===o?"selected":""),onClick:function(){return _(t).then((function(e){return c(e.data.results)})),void u("theater")},children:"In Theaters"})]})]}),Object(s.jsx)("div",{className:"card-horizontal scroller_wrap should_fade",children:n.length?n.sort().map((function(e,t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"movie-card img-fluid",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:""})}),Object(s.jsxs)("div",{className:"content-details",children:[Object(s.jsx)("span",{className:"circular-progress-bar",children:Object(s.jsx)(T.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(s.jsx)("div",{className:"item-title",children:e.name||e.title}),Object(s.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]},t)})})):Object(s.jsx)("div",{style:{display:"flex"},children:Object(s.jsx)(z,{})})})]})})}var U=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(I,{}),Object(s.jsx)(F,{}),Object(s.jsx)(R,{}),Object(s.jsx)(i,{})]})},L=n(29);a.a.render(Object(s.jsx)(L.a,{children:Object(s.jsx)(U,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.ccd3944e.chunk.js.map