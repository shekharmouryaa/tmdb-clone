(this["webpackJsonptmdb-clone"]=this["webpackJsonptmdb-clone"]||[]).push([[0],{44:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(21),s=n.n(a),i=(n(44),n(15)),o=n(3),l=n(12),u=n(38),d=n.n(u),j=n(39),b=d()(Object(j.devtools)((function(e){return{populars:[],topRated:[],trending:[],allMovies:[],freeContent:[],topRatedMovies:[],mediaDetails:[],pagenumber:1,currenttext:"",favouritelist:[],loading:!1,genres:[],currentgenre:"All Genres",newmovies:[],genresid:[],trailerKey:"",mediaId:"",modalIsOpen:!1,setPopulars:function(t){return e((function(){return{populars:t}}))},setFreeContent:function(t){return e((function(){return{freeContent:t}}))},settopRated:function(t){return e((function(){return{topRated:t}}))},setTrending:function(t){return e((function(){return{trending:t}}))},setAllMovies:function(t){return e((function(){return{allMovies:t}}))},setMediaDetails:function(t){return e((function(){return{mediaDetails:t}}))},setTopRatedMovies:function(t){return e((function(){return{topRatedMovies:t}}))},setPagenumber:function(){return e((function(e){return{pagenumber:e.pagenumber+1}}))},setLoading:function(){return e((function(){return{loading:!0}}))},setCurrenttext:function(t){return e((function(){return{currenttext:t}}))},setFavouritelist:function(t){return e((function(){return{favouritelist:Object(l.a)(t)}}))},setgenres:function(t){return e((function(){return{genres:Object(l.a)(t)}}))},setcurrentgenre:function(t){return e((function(){return{currentgenre:t}}))},setnewmovies:function(t){return e((function(){return{newmovies:Object(l.a)(t)}}))},setgenresid:function(t){return e((function(){return{genresid:Object(l.a)(t)}}))},setTrailerKey:function(t){return e((function(){return{trailerKey:t}}))},setMediaId:function(t){return e((function(){return{mediaId:t}}))},openModal:function(){return e((function(){return{modalIsOpen:!0}}))},closeModal:function(){return e((function(){return{modalIsOpen:!1}}))}}}))),h=n(1);function f(){var e=b((function(e){return e.genres})),t=b((function(e){return e.setgenres})),n=b((function(e){return e.currentgenre})),c=b((function(e){return e.setcurrentgenre})),a=b((function(e){return e.newmovies})),s=b((function(e){return e.setnewmovies})),i=b((function(e){return e.currenttext})),o=b((function(e){return e.setCurrenttext})),l=b((function(e){return e.loading})),u=b((function(e){return e.setLoading})),d=b((function(e){return e.setgenresid}));Object(r.useEffect)((function(){var n=[],r=JSON.parse(localStorage.getItem("addedmov")||"[]"),c=r.map((function(e){return e.genre_ids})).flat().filter((function(e,t,n){return n.indexOf(e)===t}));d(c),console.log("localdata",r),console.log("genredID",c),r.forEach((function(e){n.includes(e.genre_ids[0])||n.push(e.genre_ids[0])})),console.log("temparray",n),t(["All Genres"].concat(n)),console.log("genres",e),s(r),console.log("newmovies",a),u(!0)}),[]);var j=[];l&&(j=a.filter((function(e){return e.original_title.toLowerCase().includes(i.toLowerCase())})),"All Genres"!==n&&(j=a.filter((function(e){return e.genre_ids[0]===n}))),console.log("All Genres filtermovies",j));return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"main container-fluid",children:Object(h.jsxs)("div",{className:"row",style:{"--bs-gutter-x":0},children:[Object(h.jsx)("div",{className:"col-md-3 ",children:Object(h.jsx)("ul",{className:"list-group p-3",children:e.map((function(e,t){return n===e?Object(h.jsx)("li",{className:"list-group-item listitems",children:e},t):Object(h.jsx)("li",{className:"list-group-item",onClick:function(){c(e)},children:e},t)}))})}),Object(h.jsx)("div",{className:"col-md-9",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{children:Object(h.jsx)("form",{className:"d-flex",children:Object(h.jsx)("input",{className:"form-control search-box",type:"search",placeholder:"Search Movies","aria-label":"Search",value:i,onChange:function(e){return o(e.target.value)}})})}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"text-center",children:[Object(h.jsx)("th",{scope:"col",children:"Title"}),Object(h.jsx)("th",{scope:"col",children:"Genre"}),Object(h.jsxs)("th",{scope:"col",children:[Object(h.jsx)("i",{className:"fas fa-sort-up m-2 desc-btn",onClick:function(){var e=a;e.sort((function(e,t){return t.vote_average-e.vote_average})),s(e)}}),"Rating",Object(h.jsx)("i",{className:"fas fa-sort-down m-2",onClick:function(){var e=a;e.sort((function(e,t){return e.vote_average-t.vote_average})),s(e)}})]})]})}),Object(h.jsx)("tbody",{children:j.length>0?j.map((function(e,n){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[" ",Object(h.jsx)("img",{className:"img-thumb",src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path),alt:"thumb"}),e.original_title]}),Object(h.jsx)("td",{children:e.genre_ids[0]}),Object(h.jsx)("td",{children:e.vote_average}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var n=[];n=a.filter((function(t){return t.id!==e})),s(n);var r=n.map((function(e){return e.genre_ids[0]})).flat().filter((function(e,t,n){return n.indexOf(e)===t}));t(["All Genres"].concat(r)),localStorage.setItem("addedmov",JSON.stringify(n))}(e.id)},children:"Delete"})})]},n)})):Object(h.jsx)("tr",{children:"No Movie Added to list"})})]})]})})]})})})}function m(){return Object(h.jsxs)("footer",{className:"container-fluid",children:[Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsxs)("div",{className:"footer-items ",children:[Object(h.jsx)("img",{width:"100px",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"logo"}),Object(h.jsx)("p",{className:"footer-btn",children:"join the community"})]}),Object(h.jsxs)("div",{className:"footer-items",children:[Object(h.jsx)("h3",{children:"COMMUNITY"}),Object(h.jsx)("p",{children:" Guidelines"}),Object(h.jsx)("p",{children:" Discussions"}),Object(h.jsx)("p",{children:" Leaderboard "}),Object(h.jsx)("p",{children:" Twitter "})]}),Object(h.jsxs)("div",{className:"footer-items",children:[Object(h.jsx)("h3",{children:"LEGAL"}),Object(h.jsx)("p",{children:" Terms of Use"}),Object(h.jsx)("p",{children:" API Terms of Use"}),Object(h.jsx)("p",{children:" Support Forums "})]}),Object(h.jsxs)("div",{className:"footer-items",children:[Object(h.jsx)("h3",{children:"THE BASICS"}),Object(h.jsx)("p",{children:" About TMDB "}),Object(h.jsx)("p",{children:" Contact Us "}),Object(h.jsx)("p",{children:" Support Forums "}),Object(h.jsx)("p",{children:" API "}),Object(h.jsx)("p",{children:" System Status "})]})]}),Object(h.jsx)("div",{className:"copyright",children:Object(h.jsx)("span",{children:"Copyright @ 2022"})})]})}var p=n(5),x=n(4),O=n.n(x),v=n(9),g=n(7),N=n.n(g),_="bdd243ea847239dc0799805e63e189f0";N.a.defaults.baseURL="https://api.themoviedb.org/3/",N.a.defaults.customHeaders=!0,N.a.defaults.defaultErrorHandler=!0;var w=function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/movie/popular",{params:{api_key:_,page:"".concat(Math.ceil(5*Math.random()))}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/tv/popular",{params:{api_key:_,page:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/discover/movie",{params:{api_key:_,language:"en-US",sort_by:"vote_count.desc",page:t,include_video:"false",include_adult:"false",with_watch_monetization_types:"rent"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/movie/now_playing",{params:{api_key:_}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/discover/movie",{params:{api_key:_,language:"en-US",page:"".concat(Math.ceil(5*Math.random())),include_video:"false",include_adult:"false",with_watch_monetization_types:"free"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/discover/tv",{params:{api_key:_,language:"en-US",page:"".concat(Math.ceil(4*Math.random())),include_video:"false",include_adult:"false",with_watch_monetization_types:"free"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(v.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("trending/all/day",{params:{api_key:_,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(v.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("trending/all/week",{params:{api_key:_,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/movie/".concat(t),{params:{api_key:_,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/movie/".concat(t,"/videos"),{params:{api_key:_,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data.results.filter((function(e){return"Trailer"===e.type}))[0].key);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=(n(23),n(10)),U=(n(18),n(17));function A(){return Object(h.jsx)(U.a,{baseColor:"#B8B8B8",highlightColor:"#C8C8C8",children:Object(l.a)(Array(20)).map((function(e,t){return Object(h.jsxs)("div",{className:"scroller_wrap",style:{margin:"5px 10px"},children:[Object(h.jsx)("span",{children:Object(h.jsx)(U.b,{duration:2,direction:"ltr",height:225,width:150})}),Object(h.jsxs)("span",{children:[Object(h.jsx)(U.b,{width:30,height:30,duration:2,direction:"ltr",circle:!0,count:1}),Object(h.jsx)(U.b,{duration:2,direction:"ltr",count:2})]})]},t)}))})}var F=n(14),G=n.p+"static/media/placeholder.3f04e35d.png";function P(){var e=b((function(e){return e.setLoading})),t=b((function(e){return e.pagenumber})),n=b((function(e){return e.freeContent})),c=b((function(e){return e.setFreeContent})),a=Object(r.useState)(""),s=Object(p.a)(a,2),i=s[0],l=s[1],u=Object(o.f)(),d=b((function(e){return e.setMediaId}));Object(r.useEffect)((function(){S(t).then((function(e){return c(e.data.results)})),e(),l("movies")}),[t]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid main-content",children:[Object(h.jsxs)("div",{className:"column_header",children:[Object(h.jsx)("div",{className:"HeadingContainer",children:Object(h.jsx)("span",{className:"section-title",children:"Free To Watch"})}),Object(h.jsxs)("div",{className:"selector_wrapper ",children:[Object(h.jsx)("div",{className:"anchor ".concat("movies"===i?"selected":null),onClick:function(){return S(t).then((function(e){return c(e.data.results)})),void l("movies")},children:"Movies"}),Object(h.jsx)("div",{className:"anchor ".concat("tv"===i?"selected":null),onClick:function(){return M(t).then((function(e){return c(e.data.results)})),void l("tv")},children:"TV Shows"})]})]}),Object(h.jsx)("div",{className:"card-horizontal scroller_wrap should_fade",children:n.length?n.sort().map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(h.jsx)("div",{onClick:function(){return t=e.id,d(t),localStorage.setItem("movieid",t),void u("/details");var t},children:Object(h.jsx)(F.LazyLoadImage,{className:"movie-card img-fluid",width:150,height:225,alt:"poster",effect:"blur",src:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):G})}),Object(h.jsxs)("div",{className:"content-details",children:[Object(h.jsx)("span",{className:"circular-progress-bar",children:Object(h.jsx)(E.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(h.jsx)("div",{className:"item-title",children:e.name||e.title}),Object(h.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]})},t)})):Object(h.jsx)("div",{style:{display:"flex"},children:Object(h.jsx)(A,{})})})]})})}function R(){var e=b((function(e){return e.setLoading})),t=b((function(e){return e.pagenumber})),n=b((function(e){return e.trending})),c=b((function(e){return e.setTrending})),a=b((function(e){return e.setTrailerKey})),s=b((function(e){return e.openModal})),i=Object(r.useState)(""),o=Object(p.a)(i,2),l=o[0],u=o[1];Object(r.useEffect)((function(){T(t).then((function(e){return c(e.data.results)})),e(),u("today")}),[t]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid main-content",children:[Object(h.jsxs)("div",{className:"column_header",children:[Object(h.jsx)("div",{className:"HeadingContainer",children:Object(h.jsx)("span",{className:"section-title",children:"Trending"})}),Object(h.jsxs)("div",{className:"selector_wrapper ",children:[Object(h.jsx)("div",{className:"anchor ".concat("today"===l?"selected":null),onClick:function(){return T(t).then((function(e){return c(e.data.results)})),void u("today")},children:"Today"}),Object(h.jsx)("div",{className:"anchor ".concat("week"===l?"selected":null),onClick:function(){return I(t).then((function(e){return c(e.data.results)})),void u("week")},children:"This Week"})]})]}),Object(h.jsx)("div",{className:"card-horizontal scroller_wrap should_fade",children:n.length?n.sort().map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(h.jsx)("div",{onClick:function(){return t=e.id,z(t).then((function(e){return a(e)})),void s();var t},children:Object(h.jsx)(F.LazyLoadImage,{className:"movie-card img-fluid",width:150,height:225,alt:"poster",effect:"blur",src:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):G})}),Object(h.jsxs)("div",{className:"content-details",children:[Object(h.jsx)("span",{className:"circular-progress-bar",children:Object(h.jsx)(E.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(h.jsx)("div",{className:"item-title",children:e.title||e.name}),Object(h.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]})},t)})):Object(h.jsx)("div",{style:{display:"flex"},children:Object(h.jsx)(A,{})})})]})})}var D=n(40),B=n.n(D),W={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};function H(){var e=b((function(e){return e.trailerKey})),t=b((function(e){return e.modalIsOpen})),n=b((function(e){return e.closeModal}));return Object(h.jsx)("div",{children:Object(h.jsx)(B.a,{isOpen:t,onRequestClose:n,style:W,contentLabel:"Example Modal",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("p",{className:"close-btn",onClick:n,children:"x"}),Object(h.jsx)("div",{className:"watchScreen__player",children:Object(h.jsx)("iframe",{title:"Video",src:"https://www.youtube.com/embed/".concat(e),frameBorder:0,allowFullScreen:!0,width:"100%",height:"100%"})})]})})})}function K(){var e=b((function(e){return e.setLoading})),t=b((function(e){return e.pagenumber})),n=b((function(e){return e.populars})),c=b((function(e){return e.setPopulars})),a=b((function(e){return e.setMediaId})),s=Object(r.useState)(""),i=Object(p.a)(s,2),l=i[0],u=i[1],d=Object(o.f)();Object(r.useEffect)((function(){w(t).then((function(e){return c(e.data.results)})),e(),u("Streaming")}),[t]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid main-content ",children:[Object(h.jsxs)("div",{className:"column_header",children:[Object(h.jsx)("div",{className:"HeadingContainer",children:Object(h.jsx)("span",{className:"section-title",children:"What's Popular"})}),Object(h.jsxs)("div",{className:"selector_wrapper  ",children:[Object(h.jsx)("div",{className:"anchor ".concat("Streaming"===l?"selected":""),onClick:function(){return w(t).then((function(e){return c(e.data.results)})),void u("Streaming")},children:"Streaming"}),Object(h.jsx)("div",{className:"anchor ".concat("tv"===l?"selected":""),onClick:function(){return y(t).then((function(e){return c(e.data.results)})),void u("tv")},children:"On TV"}),Object(h.jsx)("div",{className:"anchor ".concat("rent"===l?"selected":""),onClick:function(){return k(t).then((function(e){return c(e.data.results)})),void u("rent")},children:"For Rent"}),Object(h.jsx)("div",{className:"anchor ".concat("theater"===l?"selected":""),onClick:function(){return C(t).then((function(e){return c(e.data.results)})),void u("theater")},children:"In Theaters"})]})]}),Object(h.jsx)("div",{className:"card-horizontal scroller_wrap ",children:n.length?n.sort().map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"vertical-card card text-white m-2",children:[Object(h.jsx)("div",{onClick:function(){return t=e.id,a(t),localStorage.setItem("movieid",t),void d("/details/".concat(t));var t},children:Object(h.jsx)(F.LazyLoadImage,{className:"movie-card img-fluid",width:150,height:225,alt:"poster",effect:"blur",src:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):G})}),Object(h.jsxs)("div",{className:"content-details",children:[Object(h.jsx)("span",{className:"circular-progress-bar",children:Object(h.jsx)(E.a,{percent:10*e.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#081c22",colorCircle:"#081c22",fontColor:"#fff",fontSize:"1.8rem",fontWeight:400,size:40,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(h.jsx)("div",{className:"item-title",children:e.name||e.title}),Object(h.jsx)("div",{className:"item-score",children:e.release_date||e.first_air_date})]})]})},t)})):Object(h.jsx)("div",{style:{display:"flex"},children:Object(h.jsx)(A,{})})}),Object(h.jsx)(H,{})]})})}function J(){var e=b((function(e){return e.populars})),t=e.map((function(e){return e.backdrop_path}))[Math.floor(Math.random()*e.length)];return Object(h.jsxs)("div",{className:"page-layout container-fluid ",children:[Object(h.jsx)("div",{className:"inner_content banner",style:{backgroundImage:'linear-gradient(to right,\n            rgba(3, 84, 114, 0.8),rgba(4, 88, 116, 0.7)),\n    url("https://image.tmdb.org/t/p/original'.concat(t,'")')},children:Object(h.jsx)("div",{className:"column_wrapper",children:Object(h.jsxs)("div",{className:"content_wrapper wrap",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h2",{children:"Welcome."}),Object(h.jsx)("h3",{children:"Millions of movies, TV shows and people to discover. Explore now."})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"search",style:{display:"flex",marginTop:"30px"},onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)("input",{className:"form-control search-box",type:"search",placeholder:"Search","aria-label":"Search"}),Object(h.jsx)("button",{className:"search-button",children:"Search"})]})})]})})}),Object(h.jsx)(K,{}),Object(h.jsx)(P,{}),Object(h.jsx)(R,{})]})}var V=n.p+"static/media/youtube.9e6e68be.svg",q=n(25),Y=n(26),Q=function(){var e=localStorage.getItem("movieid"),t=b((function(e){return e.mediaDetails})),n=b((function(e){return e.setMediaDetails})),c=b((function(e){return e.setTrailerKey})),a=b((function(e){return e.openModal})),s=Object(r.useState)(!1),i=Object(p.a)(s,2),o=i[0],l=i[1];Object(r.useEffect)((function(){e&&L(e).then((function(e){n(e.data),l(!0)}))}),[e]);var u;return t&&(u={backgroundImage:"linear-gradient(to right,\n        rgba(3, 84, 114, 0.9),rgba(2, 66, 87, 0.9)),url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")}),Object(h.jsxs)("div",{style:u,className:"container-fluid backdrop_poster",children:[Object(h.jsx)("span",{className:"row "}),Object(h.jsx)("div",{className:"media-content",children:o?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"poster-section",children:Object(h.jsxs)("div",{className:"poster",children:[Object(h.jsx)("img",{className:"img-fluid",src:"https://image.tmdb.org/t/p/original".concat(t.poster_path),alt:""}),Object(h.jsxs)("div",{className:"streaming-platform",onClick:function(){return e=t.id,z(e).then((function(e){return c(e)})),void a();var e},children:[Object(h.jsx)("img",{className:"youtube-logo",src:V,alt:"logo"}),"Play Trailer"]})]})}),Object(h.jsxs)("div",{className:"info-section",children:[Object(h.jsx)("div",{className:"media-title ",children:Object(h.jsxs)("h1",{className:"mediaName",children:[null===t||void 0===t?void 0:t.title," ",Object(h.jsxs)("span",{className:"release-date",children:["(",t.release_date.substring(0,4),")"]})]})}),Object(h.jsxs)("div",{className:"media-genre-info",children:[t.genres.map((function(e,t){return Object(h.jsxs)("span",{style:{marginLeft:"5px"},children:[e.name,", "]},t)})),Object(h.jsxs)("span",{style:{margin:"10px"},children:[" ",t.runtime,"Minutes"]})]}),Object(h.jsxs)("div",{className:"user-section",children:[Object(h.jsx)("div",{children:Object(h.jsx)(E.a,{className:"circular-progressBar",percent:10*t.vote_average,linearGradient:["#18cdb5","#1fb76d"],colorSlice:"#091c22",colorCircle:"#091c22",fontColor:"#fff",fontWeight:400,fontSize:"1.5rem",size:60,cut:0,rotation:-90,opacity:10,fill:"#032541",unit:"%",textPosition:"0.35em"})}),Object(h.jsx)("span",{className:"score",children:"User Score"}),Object(h.jsxs)("div",{className:"user-account",children:[Object(h.jsx)("span",{className:"user-action",children:Object(h.jsx)(q.b,{})}),Object(h.jsx)("span",{className:"user-action",children:Object(h.jsx)(Y.b,{})}),Object(h.jsx)("span",{className:"user-action",children:Object(h.jsx)(Y.a,{})}),Object(h.jsx)("span",{className:"user-action",children:Object(h.jsx)(q.a,{})})]})]}),Object(h.jsxs)("p",{className:"tagline",children:[" ",t.tagline]}),Object(h.jsxs)("div",{className:"overview-section",children:[Object(h.jsxs)("h5",{children:[Object(h.jsx)("b",{children:"Overview"})," "]}),Object(h.jsx)("span",{children:t.overview})]}),Object(h.jsxs)("div",{className:"production-section",children:[Object(h.jsxs)("h5",{children:[Object(h.jsx)("b",{children:"Production By "})," "]}),Object(h.jsx)("span",{children:t.production_companies.map((function(e,t){return Object(h.jsxs)("span",{children:[e.name,","," "]},t)}))})]})]})]}):Object(h.jsx)("h1",{children:'"Loading.."'})}),Object(h.jsx)(H,{})]})};function X(){return Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"container-fluid content",children:Object(h.jsxs)("div",{className:"nav-menu",children:[Object(h.jsxs)("div",{className:"submenu-left",children:[Object(h.jsx)("span",{children:Object(h.jsx)("a",{to:"/",children:Object(h.jsx)("img",{height:"20px",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"logo"})})}),Object(h.jsxs)("span",{className:"nav-link",children:[Object(h.jsx)("a",{to:"/",className:"link",children:"Movies"}),Object(h.jsx)("a",{to:"/",className:"link",children:"TV Shows"}),Object(h.jsx)("a",{to:"/",className:"link",children:"More"})]})]}),Object(h.jsxs)("div",{className:"submenu-right",children:[Object(h.jsx)("a",{to:"/",className:"link",style:{border:"0.5px solid white",borderRadius:"5px",padding:"3px"},children:"EN"}),Object(h.jsx)("a",{to:"/",className:"link",children:"Login"}),Object(h.jsx)("a",{to:"/",className:"link",children:"Join TMDB"})]})]})})})}function Z(){return Object(h.jsx)("div",{children:"SignUp"})}function $(){return c.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(J,{})}),Object(h.jsx)(o.a,{path:"/favouritelist",element:Object(h.jsx)(f,{})}),Object(h.jsx)(o.a,{path:"/signup",element:Object(h.jsx)(Z,{})}),Object(h.jsx)(o.a,{path:"/details/:id",element:Object(h.jsx)(Q,{})})]}),Object(h.jsx)(m,{})]})}n(76);s.a.render(Object(h.jsx)(i.a,{basename:"/tmdb-clone",children:Object(h.jsx)($,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.8b960795.chunk.js.map