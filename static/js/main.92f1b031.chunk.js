(this.webpackJsonpbabynameapp=this.webpackJsonpbabynameapp||[]).push([[0],{113:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t(71),l=t(26),o=t(43),c=t.n(o),i=t(24),m=t(0),s=t.n(m),u=t(30),d=t(29),p=t(171),g=t(9),E=t.n(g),b=t(75),h=t(38),f=t(152),y=t(153),v=t(155),j=t(175),w=t(156),C=t(157),O=t(158),k=t(159),N=t(76),x=t.n(N),A=t(77),S=t.n(A),D=["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/meaningful-baby-boy-names-lead-1551415072.jpg?crop=0.669xw:1.00xh;0.137xw,0&resize=640:*","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-portrait-of-toddler-baby-boy-in-sunny-roomm-royalty-free-image-932825718-1544565020.jpg","https://images-na.ssl-images-amazon.com/images/I/61rBLjzUBXL._SY550_.jpg","https://images-na.ssl-images-amazon.com/images/I/41E-piOipFL.jpg","https://i.ebayimg.com/images/g/IZUAAOSw4UtWTsxz/s-l400.jpg"],M=Object(b.a)((function(e){return{root:{textAlign:"center"},list:Object(n.a)({width:"50%",margin:"auto"},e.breakpoints.down("sm"),{width:"95%"}),listItem:{border:"1px solid black",margin:"5px 0","&:hover":{backgroundColor:e.palette.primary.light}}}})),I=function(e){var a=e.handleClick,t=e.handleButton,n=e.handleChecked,r=e.nameList,l=(e.currentURL,e.url0,M());return s.a.createElement("div",{className:l.root},s.a.createElement(h.a,{variant:"h6",style:{marginTop:15}},"Random Names"),s.a.createElement(f.a,{className:l.list},r?r.sort((function(e,a){return e.name?e.name.localeCompare(a.name):e.localeCompare(a)})).map((function(e){return s.a.createElement(y.a,{key:(e.surname?e.surname.length:e.length)*Math.random(55),className:l.listItem},s.a.createElement(v.a,null,s.a.createElement(j.a,{alt:D[Math.floor(4*Math.random())],src:D[Math.floor(4*Math.random())]})),s.a.createElement(w.a,{primary:e.name?e.name+" Corbeil":e+" Corbeil"}),s.a.createElement(C.a,{onClick:a,id:e.name?e.name:e},s.a.createElement(O.a,{edge:"end",color:"primary"},n(e.name?e.name:e)?s.a.createElement(x.a,null):s.a.createElement(S.a,null))))})):null),s.a.createElement(k.a,{variant:"contained",size:"large",color:"primary",onClick:t,style:{width:"95%",margin:10}},r.length>0?"NEXT PAGE":"GENERATE NAMES"))},B=t(78),z=t.n(B),T=Object(b.a)((function(e){return{root:{textAlign:"center"},list:Object(n.a)({width:"50%",margin:"auto"},e.breakpoints.down("sm"),{width:"95%"}),listItem:{border:"1px solid black",margin:"5px 0","&:hover":{backgroundColor:e.palette.primary.light}}}})),G=function(e){var a=e.handleClickOpen,t=e.favNames,n=T();return s.a.createElement("div",{className:n.root},s.a.createElement(h.a,{variant:"h6",style:{marginTop:15}},"Favorites"),s.a.createElement(f.a,{className:n.list},t?t.sort((function(e,a){return e.name.localeCompare(a.name)})).map((function(e){return s.a.createElement(y.a,{key:e.name,className:n.listItem},s.a.createElement(v.a,null,s.a.createElement(j.a,{alt:D[Math.floor(4*Math.random())],src:D[Math.floor(4*Math.random())]})),s.a.createElement(w.a,{primary:e.name+" Corbeil"}),s.a.createElement(C.a,{onClick:a,id:e.name},s.a.createElement(O.a,{edge:"end",color:"secondary"},s.a.createElement(z.a,null))))})):null))},L=t(174),P=t(80),R=t.n(P),F=t(79),U=t.n(F),K=Object(b.a)((function(e){return{close:{padding:e.spacing(.5)}}}));function J(e){var a=e.popMessage,t=e.setPopMessage,n=e.message,r=e.msgGood,l=K(),o=function(e,a){"clickaway"!==a&&t(!1)};return s.a.createElement("div",null,s.a.createElement(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a||!1,autoHideDuration:3e3,onClose:o,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},n),action:[s.a.createElement(O.a,{key:"close","aria-label":"close",className:l.close,onClick:o},r?s.a.createElement(U.a,{style:{color:"green"}}):s.a.createElement(R.a,{style:{color:"rgb(220, 0, 78)"}}))]}))}var W=t(161),X=t(163),q=t(164),H=t(172),V=t(165);function Y(e){var a=e.handleNameClose,t=e.addNameOpen,n=e.handleClick;return s.a.createElement("div",null,s.a.createElement(W.a,{open:t,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},s.a.createElement(X.a,{id:"alert-dialog-title"},"Add Baby Name"),s.a.createElement(q.a,null,s.a.createElement(H.a,{id:"manual-name",label:"Enter Name"})),s.a.createElement(V.a,null,s.a.createElement(k.a,{onClick:a,color:"primary"},"Cancel"),s.a.createElement(k.a,{onClick:function(){var e=document.getElementById("manual-name").value;n(null,e),a()},color:"primary",autoFocus:!0},"Add"))))}var _=t(166);function Q(e){var a=e.handleDelete,t=e.handleClose,n=e.open,r=e.currentId;return s.a.createElement("div",null,s.a.createElement(W.a,{open:n,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},s.a.createElement(X.a,{id:"alert-dialog-title"},"Confirm Delete"),s.a.createElement(q.a,null,s.a.createElement(_.a,{id:"alert-dialog-description"},"Are you sure you want to delete ",r,"?")),s.a.createElement(V.a,null,s.a.createElement(k.a,{onClick:t,color:"primary"},"Cancel"),s.a.createElement(k.a,{onClick:function(){return a(r)},color:"primary",autoFocus:!0},"Yes"))))}var Z=t(167),$=t(168),ee=t(176),ae=t(82),te=t.n(ae),ne=t(84),re=t.n(ne),le=t(85),oe=t.n(le),ce=Object(b.a)((function(e){return{root:{flexGrow:1,textAlign:"center"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),ie=function(e){var a=e.toggleDrawer,t=e.handleAddName,n=ce();return s.a.createElement("div",{className:n.root},s.a.createElement(Z.a,{position:"static"},s.a.createElement($.a,null,s.a.createElement(ee.a,{title:"Menu","aria-label":"Menu"},s.a.createElement(O.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu",onClick:a("left",!0)},s.a.createElement(te.a,null))),s.a.createElement(h.a,{variant:"h6",color:"inherit",className:n.title,component:u.b,to:"/",style:{textDecoration:"none"}},s.a.createElement(re.a,null),"Baby Name Generator"),s.a.createElement(ee.a,{title:"Manual Add Name","aria-label":"Add Name"},s.a.createElement(O.a,{color:"inherit",onClick:t},s.a.createElement(oe.a,null))))))},me=t(169),se=t(173),ue=t(87),de=t.n(ue),pe=t(86),ge=t.n(pe),Ee=Object(b.a)((function(e){return{root:Object(n.a)({},e.breakpoints.down("xs"),{}),title:{margin:5,textAlign:"center"}}}));function be(e){var a,t=e.toggleDrawer,n=e.drawerSide,r=Ee();return s.a.createElement("div",null,s.a.createElement(se.a,{open:n.left,onClose:t("left",!1),onOpen:t("left",!0)},(a="left",s.a.createElement("div",{style:{width:250},role:"presentation",onClick:t(a,!1),onKeyDown:t(a,!1)},s.a.createElement("span",{className:r.title},s.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Baby Name Generator"),s.a.createElement(h.a,{variant:"overline",display:"block",gutterBottom:!0},"v1.0")),s.a.createElement(me.a,null),s.a.createElement(f.a,null,s.a.createElement(y.a,{button:!0,component:u.b,to:"/favorites",style:{textDecoration:"none"}},s.a.createElement(v.a,null,s.a.createElement(ge.a,null)),s.a.createElement(w.a,{primary:"Favorites"})),s.a.createElement(y.a,{button:!0,component:u.b,to:"/",style:{textDecoration:"none"}},s.a.createElement(v.a,null,s.a.createElement(de.a,null)),s.a.createElement(w.a,{primary:"Name Generator"})))))))}var he=t(170),fe=Object(b.a)((function(e){return{root:{margin:"15vh auto",textAlign:"center"}}}));function ye(){var e=fe();return s.a.createElement("div",{className:e.root},s.a.createElement(he.a,{size:100}),s.a.createElement(h.a,{variant:"h6"},"Please wait..."))}var ve=t(58),je=t.n(ve);t(110);t.d(a,"default",(function(){return Oe}));je.a.initializeApp({apiKey:"AIzaSyDlWRHcPXK00VRsPVvrKIbCWs0S1PL-BJQ",authDomain:"babynamegenerator2.firebaseapp.com",databaseURL:"https://babynamegenerator2.firebaseio.com",projectId:"babynamegenerator2",storageBucket:"babynamegenerator2.appspot.com",messagingSenderId:"715007263850",appId:"1:715007263850:web:a1eda4c0d161db2177f613"});var we=je.a.database().ref("namelist/"),Ce=[];function Oe(){var e=Object(m.useState)([]),a=Object(i.a)(e,2),t=a[0],o=a[1],g=Object(m.useState)([]),E=Object(i.a)(g,2),b=E[0],h=E[1],f=Object(m.useState)(""),y=Object(i.a)(f,2),v=y[0],j=y[1],w=Object(m.useState)(!0),C=Object(i.a)(w,2),O=C[0],k=C[1],N=Object(m.useState)(!1),x=Object(i.a)(N,2),A=x[0],S=x[1],D=Object(m.useState)(!1),M=Object(i.a)(D,2),B=M[0],z=M[1],T=Object(m.useState)(!1),L=Object(i.a)(T,2),P=L[0],R=L[1],F=Object(m.useState)(),U=Object(i.a)(F,2),K=U[0],W=U[1],X=Object(m.useState)("https://namey.muffinlabs.com/name.json?count=50&type=male&frequency=all"),q=Object(i.a)(X,2),H=q[0];q[1];var V=function(){!function(){var e,a;c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.awrap(fetch(H));case 3:return e=t.sent,t.next=6,c.a.awrap(e.json());case 6:return a=t.sent,t.next=9,c.a.awrap(o(a));case 9:window.scrollTo(0,0),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert("Too Many Request Try Again Later");case 15:case"end":return t.stop()}}),null,null,[[0,12]])}()};Object(m.useEffect)((function(){we.on("value",(function(e){Ce=e.val(),h(null===Ce?[]:Ce)}),(function(e){console.log("Error!",e)}))}),[]);var _=function(e,a){var t,n={name:t=P?a:e.currentTarget.id};if(0===b.filter((function(e){return e.name===String(t)})).length){var r=[].concat(Object(l.a)(b),[n]);h(r),we.set(r),k(!0),j(t+" added To Favorites!"),S(!0)}else k(!1),j("Duplicate Name"),S(!0)},Z=function(){R(!0)},$=function(){R(!1)},ee=Object(m.useState)({left:!1}),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],re=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&ne(Object(r.a)({},te,Object(n.a)({},e,a)))}};return s.a.createElement(p.a,null,s.a.createElement(u.a,null,s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/favorites"},s.a.createElement(ie,{toggleDrawer:re,handleAddName:Z}),s.a.createElement(be,{toggleDrawer:re,drawerSide:te}),s.a.createElement(G,{favNames:b,handleClickOpen:function(e){var a=e.currentTarget.id;W(a),z(!0)}}),s.a.createElement(J,{popMessage:A,setPopMessage:S,message:v,msgGood:O}),s.a.createElement(Y,{handleAddName:Z,handleNameClose:$,addNameOpen:P,currentId:K,handleClick:_}),s.a.createElement(Q,{handleDelete:function(e){var a=b.filter((function(a){return a.name!==e?a:null}));h(a),we.set(a),k(!1),j(e+" Deleted!"),S(!0),z(!1)},handleClose:function(){z(!1)},open:B,currentId:K})),s.a.createElement(d.a,{path:"/loading"},s.a.createElement(ie,{toggleDrawer:re,handleAddName:Z}),s.a.createElement(be,{toggleDrawer:re,drawerSide:te}),s.a.createElement(ye,null)),s.a.createElement(d.a,{path:"/"},s.a.createElement(ie,{toggleDrawer:re,handleAddName:Z}),s.a.createElement(be,{toggleDrawer:re,drawerSide:te}),s.a.createElement(I,{handleButton:function(){V()},handleClick:_,handleChecked:function(e){return!!(b.filter((function(a){return a.name===e})).length>0)},nameList:t,currentURL:H}),s.a.createElement(Y,{handleAddName:Z,handleNameClose:$,addNameOpen:P,currentId:K,handleClick:_}),s.a.createElement(J,{popMessage:A,setPopMessage:S,message:v,msgGood:O})))))}E.a.render(s.a.createElement(Oe,null),document.getElementById("root"))},99:function(e,a,t){e.exports=t(113)}},[[99,1,2]]]);
//# sourceMappingURL=main.92f1b031.chunk.js.map