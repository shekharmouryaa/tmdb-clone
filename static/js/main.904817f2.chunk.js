(this["webpackJsonptmdb-clone"]=this["webpackJsonptmdb-clone"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(26),a=n.n(c),s=(n(33),n(34),n(0));function i(){return Object(s.jsx)("footer",{className:"container-fluid",children:Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer-items ",children:[Object(s.jsx)("img",{width:"100px",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"logo"}),Object(s.jsx)("p",{className:"footer-btn",children:"join the community"})]}),Object(s.jsxs)("div",{className:"footer-items",children:[Object(s.jsx)("h3",{children:"COMMUNITY"}),Object(s.jsx)("p",{children:" Guidelines"}),Object(s.jsx)("p",{children:" Discussions"}),Object(s.jsx)("p",{children:" Leaderboard "}),Object(s.jsx)("p",{children:" Twitter "})]}),Object(s.jsxs)("div",{className:"footer-items",children:[Object(s.jsx)("h3",{children:"LEGAL"}),Object(s.jsx)("p",{children:" Terms of Use"}),Object(s.jsx)("p",{children:" API Terms of Use"}),Object(s.jsx)("p",{children:" Support Forums "})]}),Object(s.jsxs)("div",{className:"footer-items",children:[Object(s.jsx)("h3",{children:"THE BASICS"}),Object(s.jsx)("p",{children:" About TMDB "}),Object(s.jsx)("p",{children:" Contact Us "}),Object(s.jsx)("p",{children:" Support Forums "}),Object(s.jsx)("p",{children:" API "}),Object(s.jsx)("p",{children:" System Status "})]})]})})}var o=n(7),l=n(27),u=n.n(l),d=n(28),j=u()(Object(d.devtools)((function(e){return{populars:[],topRated:[],trending:[],allMovies:[],topRatedMovies:[],pagenumber:1,currenttext:"",favouritelist:[],loading:!1,genres:[],currentgenre:"All Genres",newmovies:[],genresid:[],trailerKey:"",modalIsOpen:!1,setPopulars:function(t){return e((function(){return{populars:t}}))},settopRated:function(t){return e((function(){return{topRated:t}}))},setTrending:function(t){return e((function(){return{trending:t}}))},setAllMovies:function(t){return e((function(){return{allMovies:t}}))},setTopRatedMovies:function(t){return e((function(){return{topRatedMovies:t}}))},setPagenumber:function(){return e((function(e){return{pagenumber:e.pagenumber+1}}))},setLoading:function(){return e((function(){return{loading:!0}}))},setCurrenttext:function(t){return e((function(){return{currenttext:t}}))},setFavouritelist:function(t){return e((function(){return{favouritelist:Object(o.a)(t)}}))},setgenres:function(t){return e((function(){return{genres:Object(o.a)(t)}}))},setcurrentgenre:function(t){return e((function(){return{currentgenre:t}}))},setnewmovies:function(t){return e((function(){return{newmovies:Object(o.a)(t)}}))},setgenresid:function(t){return e((function(){return{genresid:Object(o.a)(t)}}))},setTrailerKey:function(t){return e((function(){return{trailerKey:t}}))},openModal:function(){return e((function(){return{modalIsOpen:!0}}))},closeModal:function(){return e((function(){return{modalIsOpen:!1}}))}}}))),b=n(3),h=n(2),f=n.n(h),p=n(6),m=n(4),x=n.n(m),v="bdd243ea847239dc0799805e63e189f0";x.a.defaults.baseURL="https://api.themoviedb.org/3/",x.a.defaults.customHeaders=!0,x.a.defaults.defaultErrorHandler=!0;var O=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("trending/all/day",{params:{api_key:v,language:"hi-IN"}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("trending/all/week",{params:{api_key:v}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/now_playing/",{params:{api_key:v}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/popular",{params:{api_key:v,language:"en-US",page:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/tv/popular",{params:{api_key:v,language:"en-US",page:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/discover/movie/",{params:{api_key:v,language:"en-US",sort_by:"vote_count.desc",page:t,include_video:"false",include_adult:"false",with_watch_monetization_types:"free"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/discover/tv/",{params:{api_key:v,language:"en-US",sort_by:"vote_count.desc",page:t,include_video:"false",include_adult:"false",with_watch_monetization_types:"free"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/discover/movie/",{params:{api_key:v,language:"en-US",sort_by:"vote_count.desc",page:t,include_video:"false",include_adult:"false",with_watch_monetization_types:"rent"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=(n(17),n(9)),T=(n(12),n(15));function M(){return Object(s.jsx)(T.a,{baseColor:"#B8B8B8",highlightColor:"#C8C8C8",children:Object(o.a)(Array(20)).map((function(e,t){return Object(s.jsxs)("div",{className:"scroller_wrap",style:{margin:"5px 10px"},children:[Object(s.jsx)("span",{children:Object(s.jsx)(T.b,{duration:2,direction:"ltr",height:225,width:150})},t),Object(s.jsx)("span",{children:Object(s.jsx)(T.b,{duration:2,direction:"ltr",count:3})},t)]})}))})}function z(){var e=j((function(e){return e.setLoading})),t=j((function(e){return e.pagenumber})),n=j((function(e){return e.topRated})),c=j((function(e){return e.settopRated})),a=Object(r.useState)(""),i=Object(b.a)(a,2),o=i[0],l=i[1];Object(r.useEffect)((function(){y(t).then((function(e){return c(n.concat(e.data.results))})),e(),l("movies")}),[t]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container-fluid main-content",children:[Object(s.jsxs)("div",{className:"column_header",children:[Object(s.jsx)("div",{className:"HeadingContainer",children:Object(s.jsx)("span",{className:"section-title",children:"Free To Watch"})}),Object(s.jsxs)("div",{className:"selector_wrapper ",children:[Object(s.jsx)("div",{className:"anchor ".concat("movies"===o?"selected":null),onClick:function(){return y(t).then((function(e){return c(e.data.results)})),void l("movies")},children:"Movies"}),Object(s.jsx)("div",{className:"anchor ".concat("tv"===o?"selected":null),onClick:function(){return k(t).then((function(e){return c(e.data.results)})),void l("tv")},children:"TV Shows"})]})]}),Object(s.jsx)("div",{className:"card-horizontal scroller_wrap should_fade",children:n.length?n.sort().map((function(e,t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"movie-card img-fluid",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:""})}),Object(s.jsxs)("div",{className:"content-details",children:[Object(s.jsx)("span",{className:"circular-progress-bar",children:Object(s.jsx)(C.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(s.jsx)("div",{className:"item-title",children:e.name||e.title}),Object(s.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]},t)})})):Object(s.jsx)("div",{style:{display:"flex"},children:Object(s.jsx)(M,{})})})]})})}function F(){var e=j((function(e){return e.setLoading})),t=j((function(e){return e.pagenumber})),n=j((function(e){return e.trending})),c=j((function(e){return e.setTrending})),a=Object(r.useState)(""),i=Object(b.a)(a,2),o=i[0],l=i[1];Object(r.useEffect)((function(){O(t).then((function(e){return c(n.concat(e.data.results))})),e(),l("today")}),[t]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container-fluid main-content",children:[Object(s.jsxs)("div",{className:"column_header",children:[Object(s.jsx)("div",{className:"HeadingContainer",children:Object(s.jsx)("span",{className:"section-title",children:"Trending"})}),Object(s.jsxs)("div",{className:"selector_wrapper ",children:[Object(s.jsx)("div",{className:"anchor ".concat("today"===o?"selected":null),onClick:function(){return O(t).then((function(e){return c(e.data.results)})),void l("today")},children:"Today"}),Object(s.jsx)("div",{className:"anchor ".concat("week"===o?"selected":null),onClick:function(){return g(t).then((function(e){return c(e.data.results)})),void l("week")},children:"This Week"})]})]}),Object(s.jsx)("div",{className:"card-horizontal scroller_wrap should_fade",children:n.length?n.sort().map((function(e,t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"movie-card img-fluid",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"poster"})}),Object(s.jsxs)("div",{className:"content-details",children:[Object(s.jsx)("span",{className:"circular-progress-bar",children:Object(s.jsx)(C.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(s.jsx)("div",{className:"item-title",children:e.title||e.name}),Object(s.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]},t)})})):Object(s.jsx)("div",{style:{display:"flex"},children:Object(s.jsx)(M,{})})})]})})}function I(){var e=j((function(e){return e.setLoading})),t=j((function(e){return e.pagenumber})),n=j((function(e){return e.populars})),c=j((function(e){return e.setPopulars})),a=Object(r.useState)(""),i=Object(b.a)(a,2),o=i[0],l=i[1];Object(r.useEffect)((function(){_(t).then((function(e){return c(n.concat(e.data.results))})),e(),l("Streaming")}),[t]);return console.log("populars",n),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container-fluid main-content",children:[Object(s.jsxs)("div",{className:"column_header",children:[Object(s.jsx)("div",{className:"HeadingContainer",children:Object(s.jsx)("span",{className:"section-title",children:"What's Popular"})}),Object(s.jsxs)("div",{className:"selector_wrapper ",children:[Object(s.jsx)("div",{className:"anchor ".concat("Streaming"===o?"selected":""),onClick:function(){return _(t).then((function(e){return c(e.data.results)})),void l("Streaming")},children:"Streaming"}),Object(s.jsx)("div",{className:"anchor ".concat("tv"===o?"selected":""),onClick:function(){return w(t).then((function(e){return c(e.data.results)})),void l("tv")},children:"On TV"}),Object(s.jsx)("div",{className:"anchor ".concat("rent"===o?"selected":""),onClick:function(){return S(t).then((function(e){return c(e.data.results)})),void l("rent")},children:"For Rent"}),Object(s.jsx)("div",{className:"anchor ".concat("theater"===o?"selected":""),onClick:function(){return N(t).then((function(e){return c(e.data.results)})),void l("theater")},children:"In Theaters"})]})]}),Object(s.jsx)("div",{className:"card-horizontal scroller_wrap should_fade",children:n.length?n.sort().map((function(e,t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"movie-card img-fluid",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:""})}),Object(s.jsxs)("div",{className:"content-details",children:[Object(s.jsx)("span",{className:"circular-progress-bar",children:Object(s.jsx)(C.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(s.jsx)("div",{className:"item-title",children:e.name||e.title}),Object(s.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]},t)})})):Object(s.jsx)("div",{style:{display:"flex"},children:Object(s.jsx)(M,{})})})]})})}function R(){var e=j((function(e){return e.populars})),t=e.map((function(e){return e.backdrop_path}))[Math.floor(Math.random()*e.length)];console.log(t);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"inner_content banner",style:{backgroundImage:'linear-gradient(to right,\n      rgba(3, 40, 68, 0.955),\n      rgba(16, 67, 163, 0.438)),\n    url("https://image.tmdb.org/t/p/original'.concat(t,'")')},children:Object(s.jsx)("div",{className:"column_wrapper",children:Object(s.jsxs)("div",{className:"content_wrapper wrap",children:[Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{style:{fontSize:"48px",fontWeight:"600"},children:"Welcome."}),Object(s.jsx)("h3",{style:{fontSize:"32px",fontWeight:"600"},children:"Millions of movies, TV shows and people to discover. Explore now."})]}),Object(s.jsx)("div",{children:Object(s.jsxs)("form",{className:"search",style:{display:"flex",marginTop:"30px"},onSubmit:function(e){return e.preventDefault()},children:[Object(s.jsx)("input",{className:"form-control search-box",type:"search",placeholder:"Search","aria-label":"Search"}),Object(s.jsx)("button",{className:"search-button",children:"Search"})]})})]})})}),Object(s.jsx)(I,{}),Object(s.jsx)(z,{}),Object(s.jsx)(F,{})]})}function U(){return Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"container-fluid content",children:Object(s.jsxs)("div",{className:"nav-menu",children:[Object(s.jsxs)("div",{className:"submenu-left",children:[Object(s.jsx)("span",{children:Object(s.jsx)("a",{to:"/",children:Object(s.jsx)("img",{height:"20px",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"logo"})})}),Object(s.jsxs)("span",{className:"nav-link",children:[Object(s.jsx)("a",{to:"/",className:"link",children:"Movies"}),Object(s.jsx)("a",{to:"/",className:"link",children:"TV Shows"}),Object(s.jsx)("a",{to:"/",className:"link",children:"More"})]})]}),Object(s.jsxs)("div",{className:"submenu-right",children:[Object(s.jsx)("a",{to:"/",className:"link",style:{border:"0.5px solid white",borderRadius:"5px",padding:"3px"},children:"EN"}),Object(s.jsx)("a",{to:"/",className:"link",children:"Login"}),Object(s.jsx)("a",{to:"/",className:"link",children:"Join TMDB"})]})]})})})}var E=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(U,{}),Object(s.jsx)(R,{}),Object(s.jsx)(i,{})]})},L=n(29);a.a.render(Object(s.jsx)(L.a,{children:Object(s.jsx)(E,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.904817f2.chunk.js.map