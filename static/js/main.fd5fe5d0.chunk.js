(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{57:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),o=r.n(c),s=r(6),a=r.n(s),i=r(5),b=function(e){var t=e.robot,r=t.id,c=t.name,o=t.email;return Object(n.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(n.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:c}),Object(n.jsx)("p",{children:o})]})]})},d=Object(i.b)((function(e){return{searchField:e.search.searchField,robots:e.robot.robots}}))((function(e){var t=e.searchField,r=e.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(n.jsx)("div",{children:r.map((function(e){return Object(n.jsx)(b,{robot:e},e.id)}))})})),l=r(10),u=r.n(l),j=r(21),h="CHANGE_SEARCH_FIELD",O="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",f="REQUEST_ROBOTS_FAILED",v=r(22),x=r.n(v),g=Object(i.b)(null,{setSearchField:function(e){return function(t){t({type:h,payload:e})}}})((function(e){var t=e.setSearchField;return Object(n.jsx)("div",{className:"pa2",children:Object(n.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:function(e){return t(e.target.value)},name:"searchfield"})})})),m=function(e){return Object(n.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},y=function(){return Object(n.jsx)("h1",{className:"f1",children:"RoboFriends"})},E=(r(56),r(57),Object(i.b)((function(e){return{isPending:e.robot.isPending,error:e.robot.error}}),{requestRobots:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:O}),e.next=4,x.a.get("https://jsonplaceholder.typicode.com/users/");case 4:r=e.sent,n=r.data,t({type:p,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:f,payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isPending,r=e.requestRobots;return Object(c.useEffect)((function(){r()}),[]),Object(n.jsxs)("div",{className:"tc",children:[Object(n.jsx)(y,{}),Object(n.jsx)(g,{}),Object(n.jsx)(m,{children:t?Object(n.jsx)("h1",{children:"LOADING"}):Object(n.jsx)(d,{})})]})}))),S=r(4),w=r(23),R=r(24),F=r(3),N={robots:[],isPending:!1,error:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case O:return Object(F.a)(Object(F.a)({},e),{},{isPending:!0});case p:return Object(F.a)(Object(F.a)({},e),{},{robots:n,isPending:!1});case f:return Object(F.a)(Object(F.a)({},e),{},{error:n,isPending:!1});default:return e}},_={searchField:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case h:return Object(F.a)(Object(F.a)({},e),{},{searchField:n});default:return e}},T=Object(S.combineReducers)({search:C,robot:P}),k=[R.a],D=Object(S.createStore)(T,{},Object(w.composeWithDevTools)(S.applyMiddleware.apply(void 0,k)));a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(i.a,{store:D,children:Object(n.jsx)(E,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.fd5fe5d0.chunk.js.map