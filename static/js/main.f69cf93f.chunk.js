(this.webpackJsonpvalcomps=this.webpackJsonpvalcomps||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(12),s=n.n(i),o=(n(71),n(72),n(39)),l=n(8),r=n(11),d=n(108),A=n(107),m=n(85),h=n(106),j=n(46),p=n.n(j),u=n(45),b=n.n(u),g=n(44),x=n.n(g),f=n(2),O=function(e){var t=e.size,n=e.agent,a=e.onClick,c=e.winWidth,i="110px",s="6px",o="#FF4655";c<680&&(i="60px",s="4px"),"small"===t&&(i="80px",s="4px",o="#232C34",c<680&&(i="55px",s="2px"));var l={backgroundImage:"url("+n.img+")",backgroundRepeat:"noRepeat",backgroundSize:"contain",borderRadius:"50%",width:i,height:i,border:"".concat(s," solid ").concat(o),cursor:"pointer"};return Object(f.jsx)("button",{style:l,onClick:a})},k=n(112),v=n(54),y=n.n(v),S=function(e){var t=e.onClose,n=e.open,a=e.agent1,i=e.agent2,s=e.agent3,o=e.agent4,l=e.agent5,r=c.a.useRef(null),d=window.location.origin+"/valcomps/#/"+a.code+i.code+s.code+o.code+l.code;return Object(f.jsx)(k.a,{id:"shareTeamDialog",onClose:t,"aria-labelledby":"share-team-dialog-title",open:n,fullWidth:!0,children:Object(f.jsxs)("div",{style:{padding:"15px",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[Object(f.jsx)(h.a,{id:"share-team-dialog-title",component:"h1",variant:"h4",children:"Share team"}),Object(f.jsx)("textarea",{ref:r,value:d,style:{width:"280px",height:"2em"},readOnly:!0}),Object(f.jsx)(A.a,{variant:"contained",color:"default",startIcon:Object(f.jsx)(y.a,{}),onClick:function(){r.current.select(),document.execCommand("copy")},children:"Copy share link to clipboard"})]})})},C=n(55),w=n.n(C),N=n(56),z=n.n(N),T={duelists:"No duelists: this team may struggle to win engagements",controllers:"No controllers: this team may struggle to slice up territory",initiators:"No initiators: this team may struggle to enter contested ground",sentinels:"No sentinels: this team may struggle to lock areas down",flashes:"No flashes: this team may struggle to contest angles",smokes:"No smokes: this team may struggle to block line of sight"},J=function(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)},W={height:"".concat(110,"px"),width:"".concat(350,"px"),border:"".concat(5,"px solid #FF4655"),position:"relative"},I={position:"absolute",width:"0",top:"-".concat(5,"px"),right:"-".concat(5,"px"),borderTop:"35px solid #101823",borderLeft:"30px solid #FF4655"},M={position:"absolute",backgroundColor:"#FF4655",color:"white",width:"".concat(325,"px"),height:"30px",textAlign:"center",fontSize:"20px",margin:"auto"},E={display:"flex",color:"white",fontSize:"20px",marginTop:"40px",marginLeft:"5px",marginRight:"5px",alignItems:"center"},F={display:"flex",flexDirection:"column",gap:"10px",marginLeft:"5px"},Z=function(e){var t=e.agent1,n=e.agent2,a=e.agent3,i=e.agent4,s=e.agent5,o=c.a.useState(Object.values(T)),l=Object(r.a)(o,2),d=l[0],A=l[1];c.a.useEffect((function(){for(var e=Object.values(T),c=0,o=[t,n,a,i,s];c<o.length;c++){var l=o[c];switch(l.role){case"Duelist":J(e,T.duelists);break;case"Controller":J(e,T.controllers);break;case"Initiator":J(e,T.initiators);break;case"Sentinel":J(e,T.sentinels)}l.smoke&&J(e,T.smokes),l.flash&&J(e,T.flashes)}A(e)}),[t,n,a,i,s]);var m=c.a.useState(0),j=Object(r.a)(m,2),p=j[0],u=j[1];return Object(f.jsxs)("div",{style:W,children:[Object(f.jsx)("div",{style:I}),Object(f.jsxs)("div",{style:M,children:[d.length," ",1===d.length?"warning":"warnings"]}),0===d.length?Object(f.jsx)("div",{style:E,children:Object(f.jsx)(h.a,{style:{textAlign:"center"},variant:"subtitle",children:"No warnings, this is a well balanced team!"})}):Object(f.jsxs)("div",{style:E,children:[Object(f.jsx)(h.a,{style:{textAlign:"center"},variant:"subtitle",children:d[p]}),Object(f.jsxs)("div",{style:F,children:[Object(f.jsx)(w.a,{onClick:function(){u(0===p?d.length-1:p-1)}}),Object(f.jsx)(z.a,{onClick:function(){p===d.length-1?u(0):u(p+1)}})]})]})]})},H=n(57),R=n.p+"static/media/jett.6f551b09.png",Y=n.p+"static/media/phoenix.3ac33b34.png",Q=n.p+"static/media/raze.354cb378.png",B=n.p+"static/media/reyna.677ef511.png",D=n.p+"static/media/yoru.ffd75c5c.png",K=n.p+"static/media/astra.1cc2e9a7.png",L=n.p+"static/media/brimstone.e4e67805.png",P=n.p+"static/media/omen.dec655ae.png",U=n.p+"static/media/viper.358b1f66.png",G=n.p+"static/media/breach.7f93d266.png",V=n.p+"static/media/skye.b22fc735.png",X=n.p+"static/media/sova.0e620108.png",q=n.p+"static/media/cypher.c8949c46.png",_=n.p+"static/media/killjoy.6f79f337.png",$=n.p+"static/media/sage.b62f9aed.png",ee=n.p+"static/media/kayo.7a43985e.png",te=n.p+"static/media/chamber.2e89f445.png",ne={img:"data:image/png;base64,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",name:"Agent",code:"oo",role:null,smoke:!1,flash:!1},ae={img:R,name:"Jett",code:"je",role:"Duelist",smoke:!0,flash:!1},ce={img:Y,name:"Phoenix",code:"ph",role:"Duelist",smoke:!1,flash:!0},ie={img:Q,name:"Raze",code:"ra",role:"Duelist",smoke:!1,flash:!1},se={img:B,name:"Reyna",code:"re",role:"Duelist",smoke:!1,flash:!0},oe={img:D,name:"Yoru",code:"yo",role:"Duelist",smoke:!1,flash:!0},le={img:K,name:"Astra",code:"as",role:"Controller",smoke:!0,flash:!1},re={img:L,name:"Brimstone",code:"bs",role:"Controller",smoke:!0,flash:!1},de={img:P,name:"Omen",code:"om",role:"Controller",smoke:!0,flash:!0},Ae={img:U,name:"Viper",code:"vi",role:"Controller",smoke:!0,flash:!1},me={img:G,name:"Breach",code:"br",role:"Initiator",smoke:!1,flash:!0},he={img:V,name:"Skye",code:"sk",role:"Initiator",smoke:!1,flash:!0},je={img:X,name:"Sova",code:"so",role:"Initiator",smoke:!1,flash:!1},pe={img:q,name:"Cypher",code:"cy",role:"Sentinel",smoke:!0,flash:!1},ue={img:_,name:"Killjoy",code:"kj",role:"Sentinel",smoke:!1,flash:!1},be={img:$,name:"Sage",code:"sa",role:"Sentinel",smoke:!1,flash:!1},ge={img:ee,name:"Kayo",code:"ka",role:"Initiator",smoke:!1,flash:!0},xe={img:te,name:"Chamber",code:"ch",role:"Sentinel",smoke:!1,flash:!1},fe=[ae,ce,ie,se,oe,le,re,de,Ae,me,ge,he,je,xe,pe,ue,be],Oe={display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20px"},ke={display:"flex",width:"90vw",maxWidth:"800px",minWidth:"350px",justifyContent:"space-around",marginBottom:"15px",marginTop:"20px"},ve={display:"flex",flexDirection:"column",alignItems:"center"},ye={display:"flex",flexDirection:"column",gap:"10px"},Se={display:"flex",gap:"10px"},Ce={backgroundColor:"#FF4655",color:"#EBE7E0"},we={display:"flex",width:"90vw",maxWidth:"700px",minWidth:"350px",justifyContent:"space-around",marginBottom:"15px",color:"white"},Ne={display:"flex",gap:"20px"},ze=function(){var e=c.a.useState(ne),t=Object(r.a)(e,2),n=t[0],a=t[1],i=c.a.useState(ne),s=Object(r.a)(i,2),o=s[0],j=s[1],u=c.a.useState(ne),g=Object(r.a)(u,2),k=g[0],v=g[1],y=c.a.useState(ne),C=Object(r.a)(y,2),w=C[0],N=C[1],z=c.a.useState(ne),T=Object(r.a)(z,2),J=T[0],W=T[1],I=c.a.useState(0),M=Object(r.a)(I,2),E=M[0],F=M[1],R=c.a.useState(0),Y=Object(r.a)(R,2),Q=Y[0],B=Y[1],D=c.a.useState(0),K=Object(r.a)(D,2),L=K[0],P=K[1],U=c.a.useState(0),G=Object(r.a)(U,2),V=G[0],X=G[1],q=c.a.useState(!1),_=Object(r.a)(q,2),$=_[0],ee=_[1],te=c.a.useState(0),ze=Object(r.a)(te,2),Te=ze[0],Je=ze[1];c.a.useEffect((function(){var e=function(){Je(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var We=function(){ee(!0)},Ie=[ae,ce,ie,se,oe],Me=[le,re,de,Ae],Ee=[me,ge,he,je],Fe=[xe,pe,ue,be],Ze=function(e){e!==ne&&(function(e){return n===e||o===e||k===e||w===e||J===e}(e)?function(e){n===e?a(ne):o===e?j(ne):k===e?v(ne):w===e?N(ne):J===e&&W(ne)}(e):function(e){n===ne?a(e):o===ne?j(e):k===ne?v(e):w===ne?N(e):J===ne&&W(e)}(e))},He=function(){a(ne),j(ne),v(ne),N(ne),W(ne),F(0),P(0),B(0),X(0)},Re=function(){var e=function(){for(var e=[].concat(fe),t=[];t.length<5;){var n=Math.floor(Math.random()*(e.length-1));t.push(e[n]),e.splice(n,1)}return t}();a(e[0]),j(e[1]),v(e[2]),N(e[3]),W(e[4])},Ye=Object(l.g)().teamId;return c.a.useEffect((function(){if(Ye){var e=function(e){if(10!==e.length)return[ne,ne,ne,ne,ne];var t,n=e.match(/.{2}/g),a=[],c=function(e){a.includes(e)?a.push(ne):a.push(e)},i=Object(H.a)(n);try{for(i.s();!(t=i.n()).done;)switch(t.value){case ae.code:c(ae);break;case ce.code:c(ce);break;case ie.code:c(ie);break;case se.code:c(se);break;case oe.code:c(oe);break;case le.code:c(le);break;case re.code:c(re);break;case de.code:c(de);break;case Ae.code:c(Ae);break;case me.code:c(me);break;case he.code:c(he);break;case je.code:c(je);break;case pe.code:c(pe);break;case ue.code:c(ue);break;case be.code:c(be);break;case ge.code:c(ge);break;case xe.code:c(xe);break;default:a.push(ne)}}catch(s){i.e(s)}finally{i.f()}return a}(Ye);a(e[0]),j(e[1]),v(e[2]),N(e[3]),W(e[4])}}),[Ye]),c.a.useEffect((function(){for(var e=0,t=0,a=0,c=0,i=0,s=[n,o,k,w,J];i<s.length;i++){var l=s[i];Ie.includes(l)?e+=1:Me.includes(l)?t+=1:Ee.includes(l)?a+=1:Fe.includes(l)&&(c+=1)}F(e),B(t),P(a),X(c)}),[n,o,k,w,J]),Object(f.jsxs)(d.a,{component:"main",maxWidth:"md",className:"main",style:{marginTop:"30px"},children:[Object(f.jsxs)("div",{style:Oe,children:[Object(f.jsx)(Z,{agent1:n,agent2:o,agent3:k,agent4:w,agent5:J}),Object(f.jsxs)("div",{style:ke,children:[Object(f.jsx)(O,{agent:n,onClick:function(){return Ze(n)},winWidth:Te}),Object(f.jsx)(O,{agent:o,onClick:function(){return Ze(o)},winWidth:Te}),Object(f.jsx)(O,{agent:k,onClick:function(){return Ze(k)},winWidth:Te}),Object(f.jsx)(O,{agent:w,onClick:function(){return Ze(w)},winWidth:Te}),Object(f.jsx)(O,{agent:J,onClick:function(){return Ze(J)},winWidth:Te})]}),Object(f.jsxs)("div",{style:we,children:[Object(f.jsxs)(h.a,{style:{textAlign:"center",fontSize:"calc(10px + 2vmin)"},children:[E," ",1===E?"Duelist":"Duelists"]}),Object(f.jsxs)(h.a,{style:{textAlign:"center",fontSize:"calc(10px + 2vmin)"},children:[Q," ",1===Q?"Controller":"Controllers"]}),Object(f.jsxs)(h.a,{style:{textAlign:"center",fontSize:"calc(10px + 2vmin)"},children:[L," ",1===L?"Initiator":"Initiators"]}),Object(f.jsxs)(h.a,{style:{textAlign:"center",fontSize:"calc(10px + 2vmin)"},children:[V," ",1===V?"Sentinel":"Sentinels"]})]}),Te>610?Object(f.jsxs)("div",{style:Ne,children:[Object(f.jsx)(A.a,{variant:"contained",onClick:He,startIcon:Object(f.jsx)(x.a,{}),children:"Clear All"}),Object(f.jsx)(A.a,{variant:"contained",onClick:We,style:Ce,startIcon:Object(f.jsx)(b.a,{}),children:"Share Team"}),Object(f.jsx)(A.a,{variant:"contained",onClick:Re,startIcon:Object(f.jsx)(p.a,{}),children:"Randomise"})]}):Object(f.jsxs)("div",{style:Ne,children:[Object(f.jsx)(A.a,{variant:"contained",onClick:He,children:Object(f.jsx)(x.a,{})}),Object(f.jsx)(A.a,{variant:"contained",onClick:We,style:Ce,children:Object(f.jsx)(b.a,{})}),Object(f.jsx)(A.a,{variant:"contained",onClick:Re,children:Object(f.jsx)(p.a,{})})]}),Object(f.jsx)(m.a,{})]}),Object(f.jsx)("div",{style:ve,children:Object(f.jsxs)("div",{style:ye,children:[Object(f.jsx)("div",{style:Se,children:Ie.map((function(e){return Object(f.jsx)(O,{size:"small",agent:e,onClick:function(){return Ze(e)},winWidth:Te})}))}),Object(f.jsx)("div",{style:Se,children:Me.map((function(e){return Object(f.jsx)(O,{size:"small",agent:e,onClick:function(){return Ze(e)},winWidth:Te})}))}),Object(f.jsx)("div",{style:Se,children:Ee.map((function(e){return Object(f.jsx)(O,{size:"small",agent:e,onClick:function(){return Ze(e)},winWidth:Te})}))}),Object(f.jsx)("div",{style:Se,children:Fe.map((function(e){return Object(f.jsx)(O,{size:"small",agent:e,onClick:function(){return Ze(e)},winWidth:Te})}))}),Object(f.jsx)(S,{open:$,onClose:function(){ee(!1)},agent1:n,agent2:o,agent3:k,agent4:w,agent5:J})]})})]})},Te=function(){return Object(f.jsxs)(d.a,{component:"main",maxWidth:"md",className:"main",style:{color:"#FFFFFF"},children:[Object(f.jsx)(h.a,{variant:"h5",noWrap:!0,style:{color:"#FF4655"},children:"About"}),Object(f.jsxs)(h.a,{variant:"body1",children:["Valcomps is a single page web app for planning and sharing your Valorant team comps.",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),"This is a fan-made site and is not associated or affiliated with Riot Games.",Object(f.jsx)("br",{}),"Developed using React.js, react-router and material-ui."]})]})},Je=n(110),We=n(109),Ie=n(111),Me=n(58),Ee=n.n(Me),Fe=function(){var e=Object(l.f)();return Object(f.jsx)(We.a,{position:"sticky",children:Object(f.jsxs)(Je.a,{style:{backgroundColor:"#FF4655"},children:[Object(f.jsx)("h1",{style:{color:"#FFFFFF",cursor:"pointer",margin:"0px"},onClick:function(){e.push("/")},children:"VALCOMPS"}),Object(f.jsx)("div",{style:{flexGrow:"1"}}),Object(f.jsx)(A.a,{color:"inherit",component:o.b,to:"/about",children:"About"}),Object(f.jsx)(Ie.a,{color:"primary","aria-label":"github repository",component:"span",style:{color:"white"},onClick:function(){return window.open("https://github.com/batjuli/valcomps","_blank")},children:Object(f.jsx)(Ee.a,{})})]})})},Ze=function(){return Object(f.jsx)("footer",{className:"footer",children:Object(f.jsx)(d.a,{maxWidth:"sm",children:Object(f.jsx)(h.a,{variant:"body1",children:"Not associated with Riot Games."})})})},He=function(){return Object(f.jsx)(o.a,{basename:"/valcomps",children:Object(f.jsxs)("div",{className:"root",children:[Object(f.jsx)(Fe,{}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/about",children:Object(f.jsx)(Te,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/:teamId",children:Object(f.jsx)(ze,{})}),Object(f.jsx)(l.a,{path:"/",children:Object(f.jsx)(ze,{})})]}),Object(f.jsx)(Ze,{})]})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(He,{})}),document.getElementById("root")),Re()}},[[83,1,2]]]);
//# sourceMappingURL=main.f69cf93f.chunk.js.map