(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{112:function(e,t,c){},147:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),l=c(34),n=c.n(l),i=c(81),r=c(16),d=(c(112),c(162)),j=c(163),o=c(165),b=c(164),h=c(59),x=c(60),m=c(74),O=c(69),p=c(161),g=c(14),f=c(13),u=c(0),v=function(e){Object(m.a)(c,e);var t=Object(O.a)(c);function c(e){return Object(h.a)(this,c),t.call(this,e)}return Object(x.a)(c,[{key:"render",value:function(){var e="#B9B5BE",t="#B9B5BE",c="#B9B5BE",s="500",a="500",l="500",n=Object(u.jsx)(p.a,{size:"sm",color:"secondary"}),i=Object(u.jsx)(p.a,{size:"sm",color:"secondary"}),r=Object(u.jsx)(p.a,{size:"sm",color:"secondary"});return this.props.docReceived&&(e="green",n=Object(u.jsx)(f.a,{icon:g.b,style:{color:"green",fontSize:"1.38rem"}}),s="500"),this.props.docDataValidated&&(t="green",i=Object(u.jsx)(f.a,{icon:g.b,style:{color:"green",fontSize:"1.38rem"}}),a="500"),this.props.docIssuerValidated&&(c="green",r=Object(u.jsx)(f.a,{icon:g.b,style:{color:"green",fontSize:"1.38rem"}}),l="500"),Object(u.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-loader",alt:"logo"}),Object(u.jsx)("div",{className:"mt-4 mb-3",children:Object(u.jsx)(p.a,{size:"lg",style:{color:"rgba(5,104,57,0.5)"},type:"grow"})}),Object(u.jsx)("h4",{className:"mb-3",style:{color:"#676D75",fontWeight:"550"},children:"Loading Data ..."}),Object(u.jsxs)("div",{style:{width:"fit-content",textAlign:"left",whiteSpace:"nowrap",margin:0,padding:0},children:[Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:n}),Object(u.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:e,fontWeight:s},children:"   Retrieving Certificate"})})]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:i}),Object(u.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:t,fontWeight:a},children:"   Checking Data Correctness"})})]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:r}),Object(u.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:c,fontWeight:l},children:"   Verifying Authenticity of Issuer"})})]})]})]})})}}]),c}(s.Component),y=function(e){Object(m.a)(c,e);var t=Object(O.a)(c);function c(e){return Object(h.a)(this,c),t.call(this,e)}return Object(x.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-err",alt:"logo"}),!0===this.props.isUnableRetrieveCert&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{class:"mt-5",style:{overflowWrap:"break-word",color:"rgb(103, 109, 117)",fontWeight:"600"},children:"Cannot retrieve the requested certificate"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{style:{paddingLeft:"4%",paddingRight:"4%",overflowWrap:"break-word",textAlign:"center"},children:"If you are recently issued with a certificate, please wait one working day before the certificate is ready. For further information, please contact DDC Thailand."})]}),0!==this.props.isCertCanceled&&!0!==this.props.isUnableRetrieveCert&&Object(u.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is invalid"}),0===this.props.isCertCanceled&&!0!==this.props.isUnableRetrieveCert&&Object(u.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is canceled"})]})})}}]),c}(s.Component),_=c(96),N=c.n(_),w=function(e){var t=e.result,c=null,a=!1,l=Object(s.useState)(null),n=Object(r.a)(l,2),h=n[0],x=n[1],m=Object(s.useState)(!0),O=Object(r.a)(m,2),p=O[0],_=O[1],w=Object(s.useState)(!0),C=Object(r.a)(w,2),S=C[0],k=C[1],A=Object(s.useState)(!0),D=Object(r.a)(A,2),z=D[0],R=D[1],T=Object(s.useState)(null),W=Object(r.a)(T,2),I=(W[0],W[1]),V=Object(s.useState)(!0),F=Object(r.a)(V,2),L=F[0],B=F[1],M=Object(s.useState)(!1),H=Object(r.a)(M,2),U=H[0],P=H[1],E=Object(s.useState)(null),Y=Object(r.a)(E,2),J=Y[0],X=Y[1],G=Object(s.useState)(!1),q=Object(r.a)(G,2),K=(q[0],q[1],Object(s.useState)(null)),Z=Object(r.a)(K,2),Q=Z[0],$=Z[1],ee=Object(s.useState)(!1),te=Object(r.a)(ee,2),ce=te[0],se=te[1],ae=Object(s.useState)([]),le=Object(r.a)(ae,2),ne=le[0],ie=le[1],re=Object(s.useState)({3:"Meningococcal Disease",4:"Influenza",2:"Yellow Fever",5:"Cholera","COVID-19":"Coronavirus disease (COVID-19)"}),de=Object(r.a)(re,2),je=de[0];de[1];function oe(e){var t=new Intl.DateTimeFormat("en-u-ca-islamic",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).reduce((function(e,t){return"literal"!=t.type&&(e[t.type]=t.value),e}),Object.create(null)),c=t.year,s=t.month,a=t.day;return"".concat(a,"-").concat(s,"-").concat(c," AH")}if(Object(s.useEffect)((function(){window.scrollTo(0,0);var e=t.replace(/'/g,'"'),c=(e=JSON.parse(e)).qr_token;X(c),c&&fetch("/hjj_get_user_data/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){if("results"in e&&"data not found"===e.results&&(P(!0),se(!0)),_(!1),0===e.cert_status)$(e.cert_status),P(!0);else{var t=function(e){(e=e.replace(/^0x/,"")).length%2!=0&&console.log("WARNING: expecting an even number of characters in the hexString");var t=e.match(/[G-Z\s]/i);t&&console.log("WARNING: found non-hex characters",t);var c=e.match(/[\dA-F]{2}/gi).map((function(e){return parseInt(e,16)}));return new Uint8Array(c).buffer},c=function(e){return(new TextEncoder).encode(e)};$(e.cert_status);var s=e.signature.public_key,l=e.signature.sig_val,n=t(l),i=c(e.user_data);window.crypto.subtle.importKey("jwk",s,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]).then((function(s){window.crypto.subtle.verify({name:"RSA-PSS",saltLength:32},s,n,i).then((function(s){if(s){x(JSON.parse(e.user_data));var l=JSON.parse(e.user_data),n=l.citizen_no;fetch("/hjj_get_covid_data/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if("results"in e&&"data not found"===e.results&&(console.log("Covid-19 data cannot be found"),a=!0),1===e.cert_status){var s=e.signature.public_key,n=e.signature.sig_val,i=t(n),r=c(e.user_data);window.crypto.subtle.importKey("jwk",s,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]).then((function(t){window.crypto.subtle.verify({name:"RSA-PSS",saltLength:32},t,i,r).then((function(t){if(t){var c=JSON.parse(e.user_data);l.l_name.replaceAll(" ","").toUpperCase()===c.l_name.replaceAll(" ","").toUpperCase()&&l.f_name.replaceAll(" ","").toUpperCase()===c.f_name.replaceAll(" ","").toUpperCase()&&(ie(c.vaccines),a=!0,I(c.version))}else a=!0})).catch((function(e){a=!0,console.log("Covid-19 data is invalid")}))})).catch((function(e){a=!0,console.log("Covid-19 data is invalid")}))}else a=!0})).catch((function(e){a=!0,console.log("Covid-19 data is invalid")})),setTimeout((function(){return k(!1)}),400),setTimeout((function(){return R(!1)}),700),setTimeout((function(){a&&B(!1)}),1e3)}else setTimeout((function(){P(!0),B(!1)}),400)})).catch((function(e){console.error(e),P(!0),B(!1)}))})).catch((function(e){console.error(e),P(!0),B(!1)}))}})).catch((function(e){console.log(e),P(!0),B(!1)}))}),[]),U)return Object(u.jsx)(y,{isCertCanceled:Q,isUnableRetrieveCert:ce});if(p||S||z||L)return Object(u.jsx)(v,{docReceived:!p,docDataValidated:!S,docIssuerValidated:!z});if(h){var be,he=[];0!=h.vaccines.length&&(he=(he=[].concat(Object(i.a)(h.vaccines),Object(i.a)(ne))).sort((function(e,t){return Date.parse(new Date(e.vacc_date.split("-").reverse().join("-")))-Date.parse(new Date(t.vacc_date.split("-").reverse().join("-")))}))),be=document.createElement("canvas"),N.a.toCanvas(be,"https://cert-intervac.ddc.moph.go.th/hajj/"+J,{errorCorrectionLevel:"H"});var xe=be.toDataURL();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header mt-4 mb-1",children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo-full.png",className:"App-logo mb-1",alt:"logo"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"title-div",style:{marginTop:"2%"},children:Object(u.jsx)("h3",{className:"title",children:"International Vaccination Certificate"})}),Object(u.jsx)("div",{className:"d-block d-md-none",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:[Object(u.jsx)("img",{src:xe,style:{width:"75%",maxWidth:"220px",minWidth:"200px"}}),Object(u.jsx)("h6",{className:"mt-2",children:Object(u.jsxs)("b",{children:[h.pre_name," ",h.f_name," ",h.l_name]})})]})}),Object(u.jsx)("div",{className:"d-none d-md-block",style:{position:"absolute",top:10,right:"7vw"},children:Object(u.jsx)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:Object(u.jsx)("img",{src:xe,style:{width:"16vw",maxWidth:"170px",minWidth:"152px"}})})}),Object(u.jsx)("div",{className:"container-header",style:{width:"100%"},children:Object(u.jsxs)("div",{style:{width:"100%"},children:[Object(u.jsx)("div",{className:"d-none d-md-block",children:Object(u.jsxs)(d.a,{className:"row-styling mb-1",style:{marginLeft:"max(5px,0.1%)"},children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"3",sm:"3",md:"2",lg:"2",xl:"2",children:Object(u.jsx)("h5",{className:"info-title",children:"Name :  "})}),Object(u.jsx)(j.a,{xs:"8",sm:"8",md:"9",lg:"9",xl:"9",children:Object(u.jsx)("h6",{children:Object(u.jsxs)("b",{children:[h.pre_name," ",h.f_name," ",h.l_name]})})})]})}),Object(u.jsxs)(d.a,{xs:"1",sm:"1",md:"2",lg:"2",xl:"2",children:[Object(u.jsxs)(j.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(u.jsxs)(d.a,{className:"row-styling mt-2 mb-3",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(u.jsx)("h5",{className:"info-title-strip",children:"User Info"})})]}),Object(u.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Nationality"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:h.is_thai?"Thai":h.nation})})]}),Object(u.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Passport Number"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:h.passport_no})})]}),Object(u.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Date of Birth"})}),Object(u.jsxs)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:[Object(u.jsxs)("p",{children:[h.has_bd_day?h.birth_date.split("-")[0]:"XX","-",h.has_bd_month?h.birth_date.split("-")[1]:"XX","-",h.birth_date.split("-")[2]]}),h.has_bd_month&&h.has_bd_day?null:Object(u.jsxs)("p",{style:{marginTop:2},children:["(",Math.ceil(1.03*(parseInt(h.birth_date.split("-")[2])-622))," AH)"]}),h.has_bd_month&&h.has_bd_day?Object(u.jsxs)("p",{style:{marginTop:2},children:["(",oe(new Date(h.birth_date.split("-")[2],h.birth_date.split("-")[1],h.birth_date.split("-")[0])),")"]}):null]})]}),Object(u.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Sex"})}),Object(u.jsxs)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:[("m"===h.sex||"M"===h.sex)&&Object(u.jsx)("p",{children:"Male"}),("f"===h.sex||"F"===h.sex)&&Object(u.jsx)("p",{children:"Female"}),"m"!==h.sex&&"M"!==h.sex&&"f"!==h.sex&&"F"!==h.sex&&Object(u.jsx)("p",{children:h.sex.toUpperCase()})]})]})]}),Object(u.jsxs)(j.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(u.jsxs)(d.a,{className:"row-styling mt-2 mb-3",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(u.jsx)("h5",{className:"info-title-strip",children:"Certificate Info"})})]}),Object(u.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Certificate Identifier"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:h.cert_id})})]})]})]}),Object(u.jsxs)(d.a,{className:"row-styling mt-5",children:[Object(u.jsx)(j.a,{className:"d-none d-md-block",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{className:"d-none d-md-block",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsx)("h5",{className:"info-title",children:"Vaccination Record"})}),Object(u.jsx)(j.a,{className:"d-block d-md-none",style:{paddingLeft:"max(5%,10px)"},children:Object(u.jsxs)(d.a,{className:"row-styling mt-2 mb-3",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"6",sm:"6",md:"6",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(u.jsx)("h5",{className:"info-title-strip",style:{paddingTop:"1px",paddingBottom:"1px"},children:"Vaccination Record"})})]})})]}),Object(u.jsxs)(d.a,{className:"row-styling pt-1 mb-3",style:{backgroundColor:"#f0f0f0"},children:[Object(u.jsx)(j.a,{style:{padding:"0",margin:"0"},xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsxs)(j.a,{className:"d-block d-md-none",style:{paddingRight:"5%"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:[0==he.length&&Object(u.jsx)(d.a,{children:Object(u.jsx)("p",{style:{color:"red"},children:Object(u.jsx)("i",{children:"Record not found"})})}),he.length>0&&Object.keys(je).map((function(e,t){var s=[];he.find((function(t){String(t.vacc_disease_id)!==e&&String(t.vacc_disease)!==e||s.push(t)}));var a=["col-dose-n-blue","col-dose-n-orange","col-dose-n-yellow","col-dose-n-tomato","col-dose-n-green"],l=["col-vc-detail-white"],n=[];return s.map((function(e,i){e.vacc_exp_date?(0==i&&(null!=c&&(n.push(Object(u.jsx)("p",{style:{textAlign:"right",color:"gray"},children:c})),c=null),1==s.length&&Date.parse(new Date(e.vacc_exp_date.split("-").reverse().join("-")))<Date.parse(new Date)||n.push(Object(u.jsx)("h4",{className:"detail-txt-focus mb-2 pb-1 mt-3 pt-1",children:je[String(e.vacc_disease_id)]},"DiseaseTitle-"+i))),Date.parse(new Date(e.vacc_exp_date.split("-").reverse().join("-")))>=Date.parse(new Date)&&n.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(d.a,{className:"shadow mb-2 ",style:{borderRadius:"6px"},children:[Object(u.jsx)(j.a,{className:"pt-3 pb-3 ".concat(a[t%a.length]),xs:"2",sm:"2",children:Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h5",{children:"Dose"}),Object(u.jsx)("span",{style:{fontSize:11},children:"Number"}),Object(u.jsx)("h2",{className:"mt-2",children:i+1})]})}),Object(u.jsxs)(j.a,{className:"pt-4 pb-3 ".concat(l[t%l.length]),xs:"10",sm:"10",children:[Object(u.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(f.a,{icon:g.d})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Name"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("h5",{className:"detail-txt-focus",children:e.vacc_name})})]}),Object(u.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)("p",{className:"detail-txt-focus",style:{whiteSpace:"nowrap"},children:Object(u.jsx)("span",{style:{color:"black",fontSize:"0.86em"},children:"FROM"})})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Effective From"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsxs)("p",{className:"detail-title",children:[e.vacc_eff_date,Object(u.jsxs)("span",{className:"detail-txt",style:{color:"black",fontSize:"0.92em",fontWeight:"normal"},children:[" ","(",oe(new Date(e.vacc_eff_date.split("-")[2],e.vacc_eff_date.split("-")[1],e.vacc_eff_date.split("-")[0])),")"]})]})}),Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)("p",{className:"detail-txt-focus",style:{whiteSpace:"nowrap",marginTop:3},children:Object(u.jsx)("span",{style:{color:"black",fontSize:"0.86em"},children:"UNTIL"})})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",style:{marginTop:3},children:"Valid Until"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsxs)("p",{className:"detail-title",style:{marginTop:3},children:[e.vacc_exp_date,"  ",Object(u.jsxs)("span",{className:"detail-txt",style:{fontSize:"0.92em",fontWeight:"normal"},children:["(",oe(new Date(e.vacc_exp_date.split("-")[2],e.vacc_exp_date.split("-")[1],e.vacc_exp_date.split("-")[0])),")"]})]})})]}),Object(u.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Batch Number"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.vacc_lotno})})]}),Object(u.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(f.a,{icon:g.a})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Manufacturer"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsxs)("p",{children:[e.vacc_manufac,e.vacc_manufac_country?", ":null,e.vacc_manufac_country?e.vacc_manufac_country:null]})})]}),Object(u.jsxs)(d.a,{className:"row-vc-detail",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(f.a,{icon:g.c})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Administering Center"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.adm_center})})]}),e.authorize_by&&Object(u.jsxs)(d.a,{className:"row-vc-detail",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(f.a,{icon:g.e})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Authorizer"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsxs)("p",{children:[e.authorize_by," ","(",e.authorize_position?e.authorize_position:"Doctor",")"]})})]})]})]},"DiseaseContent-"+i)})),Date.parse(new Date(e.vacc_exp_date.split("-").reverse().join("-")))<Date.parse(new Date)&&s.length>1&&(c=0==i?i+1+" dose of vaccine was no longer effective":i+1+" doses of vaccine were no longer effective")):(0==i&&(null!=c&&(n.push(Object(u.jsx)("p",{style:{textAlign:"right"},children:Object(u.jsx)("span",{style:{color:"gray",fontSize:"0.8em"},children:c})})),c=null),n.push(Object(u.jsx)("h4",{className:"detail-txt-focus mb-2 pb-1 mt-3 pt-1",children:je[String(e.vacc_disease_id)]?je[String(e.vacc_disease_id)]:je[String(e.vacc_disease)]},"DiseaseTitle2-"+i))),n.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(d.a,{className:"shadow mb-2 ",style:{borderRadius:"6px"},children:[Object(u.jsx)(j.a,{className:"pt-3 pb-3 ".concat(a[t%a.length]),xs:"2",sm:"2",children:Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h5",{children:"Dose"}),Object(u.jsx)("span",{style:{fontSize:11},children:"Number"}),Object(u.jsx)("h2",{className:"mt-2",children:i+1})]})}),Object(u.jsxs)(j.a,{className:"pt-4 pb-3 ".concat(l[t%l.length]),xs:"10",sm:"10",children:[Object(u.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(f.a,{icon:g.d})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Name"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("h5",{className:"detail-txt-focus",children:e.vacc_name})})]}),Object(u.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)("p",{className:"detail-txt-focus",style:{whiteSpace:"nowrap"},children:Object(u.jsx)("span",{style:{color:"black",fontSize:"0.86em"},children:"FROM"})})}),Object(u.jsx)("div",{className:"d-block d-sm-none icon-align"}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Effective From"})})]}),Object(u.jsxs)(j.a,{xs:"10",sm:"7",children:[e.vacc_eff_date?null:Object(u.jsxs)("p",{className:"detail-title",children:[e.vacc_date,Object(u.jsxs)("span",{className:"detail-txt",style:{color:"black",fontSize:"0.92em",fontWeight:"normal"},children:[" ","(",oe(new Date(e.vacc_date.split("-")[2],e.vacc_date.split("-")[1],e.vacc_date.split("-")[0])),")"]})]}),e.vacc_eff_date?Object(u.jsxs)("p",{className:"detail-title",children:[e.vacc_eff_date,Object(u.jsxs)("span",{className:"detail-txt",style:{color:"black",fontSize:"0.92em",fontWeight:"normal"},children:[" ","(",oe(new Date(e.vacc_eff_date.split("-")[2],e.vacc_eff_date.split("-")[1],e.vacc_eff_date.split("-")[0])),")"]})]}):null]})]}),Object(u.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Batch Number"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.vacc_lotno})})]}),Object(u.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(f.a,{icon:g.a})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Manufacturer"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsxs)("p",{children:[e.vacc_manufac,e.vacc_manufac_country?", ":null,e.vacc_manufac_country?e.vacc_manufac_country:null]})})]}),Object(u.jsxs)(d.a,{className:"row-vc-detail",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(f.a,{icon:g.c})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Administering Center"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.adm_center})})]}),e.authorize_by&&Object(u.jsxs)(d.a,{className:"row-vc-detail",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(f.a,{icon:g.e})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Authorizer"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsxs)("p",{children:[e.authorize_by," ","(",e.authorize_position?e.authorize_position:"Doctor",")"]})})]})]})]},"DiseaseContent2-"+i)})))})),n}))]}),Object(u.jsx)(j.a,{className:"d-none d-md-block",style:{paddingRight:"2%",overflowX:"scroll"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsxs)(o.a,{size:"large",className:"shadow",children:[Object(u.jsx)(o.a.Header,{children:Object(u.jsxs)(o.a.Row,{children:[Object(u.jsx)(o.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Dose Number"})}),Object(u.jsx)(o.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Name of Vaccine"})}),Object(u.jsx)(o.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Vaccine Effective Date / Valid Until"})}),Object(u.jsx)(o.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Vaccine Batch Number"})}),Object(u.jsx)(o.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Vaccine Manufacturer"})}),Object(u.jsx)(o.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Administering Center"})}),Object(u.jsx)(o.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Authorizer"})})]})}),Object(u.jsxs)(o.a.Body,{children:[0==he.length&&Object(u.jsx)(o.a.Row,{children:Object(u.jsx)(o.a.Cell,{colSpan:"7",textAlign:"center",children:Object(u.jsx)("p",{children:Object(u.jsx)("i",{children:"Record not found"})})})}),he.length>0&&Object.keys(je).map((function(e,t){var s=[];he.find((function(t){String(t.vacc_disease_id)!==e&&String(t.vacc_disease)!==e||s.push(t)}));var a=["white"],l=["linear-gradient(#3391c7,#3391c7)","linear-gradient(#db703c,#db703c)","linear-gradient(#e3c92b,#e3c92b)","linear-gradient(#e27c6f,#e27c6f)","linear-gradient(#5c873f,#5c873f)"],n=[];return s.map((function(e,i){e.vacc_exp_date?(0==i&&(null!=c&&(n.push(Object(u.jsx)(o.a.Row,{children:Object(u.jsx)(o.a.Cell,{colSpan:"7",textAlign:"left",style:{backgroundColor:"#f0f0f0",borderWidth:0},children:Object(u.jsx)("p",{style:{textAlign:"right",color:"gray"},children:c})},"DiseaseRemark1-"+i)})),c=null),1==s.length&&Date.parse(new Date(e.vacc_exp_date.split("-").reverse().join("-")))<Date.parse(new Date)||n.push(Object(u.jsx)(o.a.Row,{children:Object(u.jsx)(o.a.Cell,{colSpan:"7",textAlign:"left",style:{backgroundColor:"#f0f0f0"},children:Object(u.jsx)("h5",{className:"mt-1",style:{fontWeight:"550"},children:je[String(e.vacc_disease_id)]})},"DiseaseTitle3-"+i)}))),Date.parse(new Date(e.vacc_exp_date.split("-").reverse().join("-")))>=Date.parse(new Date)&&n.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(o.a.Row,{children:[Object(u.jsx)(o.a.Cell,{style:{backgroundImage:l[t%l.length]},children:Object(u.jsx)(b.a,{className:"table-dose-title",as:"h5",textAlign:"center",children:i+1})}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},singleLine:!0,children:Object(u.jsx)("p",{style:{fontWeight:"550",whiteSpace:"initial"},children:e.vacc_name})}),Object(u.jsxs)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:[Object(u.jsxs)("p",{children:[e.vacc_eff_date," ","/"," ",Object(u.jsx)("br",{}),e.vacc_exp_date]}),Object(u.jsx)("n",{}),Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{style:{whiteSpace:"nowrap",fontSize:"0.9em"},children:[" ","(",oe(new Date(e.vacc_eff_date.split("-")[2],e.vacc_eff_date.split("-")[1],e.vacc_eff_date.split("-")[0]))]})," ","/"," ",Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{whiteSpace:"nowrap",fontSize:"0.9em"},children:oe(new Date(e.vacc_exp_date.split("-")[2],e.vacc_exp_date.split("-")[1],e.vacc_exp_date.split("-")[0]))}),")"]})]}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_lotno})}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:Object(u.jsxs)("p",{children:[e.vacc_manufac,e.vacc_manufac_country?", ":null,e.vacc_manufac_country?e.vacc_manufac_country:null]})}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.adm_center})}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:e.authorize_by?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:e.authorize_by}),Object(u.jsx)("n",{}),Object(u.jsxs)("p",{children:["(",e.authorize_position?e.authorize_position:"Doctor",")"]})]}):Object(u.jsx)("p",{children:"-"})})]},"DiseaseContent3-"+i)})),Date.parse(new Date(e.vacc_exp_date.split("-").reverse().join("-")))<Date.parse(new Date)&&s.length>1&&(c=0==i?i+1+" dose of vaccine was no longer effective":i+1+" doses of vaccine were no longer effective")):(0==i&&(null!=c&&(n.push(Object(u.jsx)(o.a.Row,{children:Object(u.jsx)(o.a.Cell,{colSpan:"7",textAlign:"left",style:{backgroundColor:"#f0f0f0",borderWidth:0},children:Object(u.jsx)("p",{style:{textAlign:"right",color:"gray"},children:c})},"DiseaseRemark1-"+i)})),c=null),n.push(Object(u.jsx)(o.a.Row,{children:Object(u.jsx)(o.a.Cell,{colSpan:"7",textAlign:"left",style:{backgroundColor:"#f0f0f0"},children:Object(u.jsx)("h5",{className:"mt-1",style:{fontWeight:"550"},children:je[String(e.vacc_disease_id)]?je[String(e.vacc_disease_id)]:je[String(e.vacc_disease)]})})},"DiseaseTitle4-"+i))),n.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(o.a.Row,{children:[Object(u.jsx)(o.a.Cell,{style:{backgroundImage:l[t%l.length]},children:Object(u.jsx)(b.a,{className:"table-dose-title",as:"h5",textAlign:"center",children:i+1})}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},singleLine:!0,children:Object(u.jsx)("p",{style:{fontWeight:"550",whiteSpace:"initial"},children:e.vacc_name})}),e.vacc_eff_date?null:Object(u.jsxs)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:[Object(u.jsx)("p",{children:e.vacc_date}),Object(u.jsx)("n",{}),Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{style:{whiteSpace:"nowrap",fontSize:"0.9em"},children:[" ","(",oe(new Date(e.vacc_date.split("-")[2],e.vacc_date.split("-")[1],e.vacc_date.split("-")[0]))]}),")"]})]}),e.vacc_eff_date?Object(u.jsxs)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:[Object(u.jsx)("p",{children:e.vacc_eff_date}),Object(u.jsx)("n",{}),Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{style:{whiteSpace:"nowrap",fontSize:"0.9em"},children:[" ","(",oe(new Date(e.vacc_eff_date.split("-")[2],e.vacc_eff_date.split("-")[1],e.vacc_eff_date.split("-")[0]))]}),")"]})]}):null,Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_lotno})}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:Object(u.jsxs)("p",{children:[e.vacc_manufac,e.vacc_manufac_country?", ":null,e.vacc_manufac_country?e.vacc_manufac_country:null]})}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.adm_center})}),Object(u.jsx)(o.a.Cell,{style:{backgroundColor:a[t%a.length]},textAlign:"center",children:e.authorize_by?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:e.authorize_by}),Object(u.jsx)("n",{}),Object(u.jsxs)("p",{children:["(",e.authorize_position?e.authorize_position:"Doctor",")"]})]}):Object(u.jsx)("p",{children:"-"})})]},"DiseaseContent4-"+i)})))})),n}))]})]})}),Object(u.jsx)(j.a,{className:"d-none d-md-block",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{className:"d-none d-md-block",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsx)("p",{className:"mt-4",style:{color:"black"},children:"* Date Format: DD-MM-YYYY"})}),Object(u.jsx)(j.a,{className:"d-block d-md-none",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{className:"d-block d-md-none",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsx)("p",{className:"mt-0 mb-2",style:{color:"gray"},children:"* Date Format: DD-MM-YYYY"})})]}),he.length>0&&Object(u.jsxs)("div",{className:"d-block d-sm-none",style:{margin:"0 5% 5% 8%"},children:[Object(u.jsx)("h5",{className:"mb-2 mt-0",style:{textAlign:"left"},children:"Icon Representation"}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(f.a,{icon:g.d})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Name of Vaccine"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Batch Number"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(f.a,{icon:g.a})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Manufacturer"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(f.a,{icon:g.c})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Administering Center"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(f.a,{icon:g.e})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Authorizer"})]})]})]})}),Object(u.jsxs)("footer",{className:"mb-2 mt-5",style:{paddingLeft:"6%",paddingRight:"6%"},children:[Object(u.jsx)("hr",{}),Object(u.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"The electronic certificate is provided by Department of Disease Control Ministry of Public Health, Thailand."}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"Certificate authenticity is protected by an RSA digital signature"}),Object(u.jsx)("p",{style:{color:"gray",marginTop:10},children:"DDC , MOPH THAILAND"})]})]})]})}},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,166)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),l(e),n(e)}))};c(146);n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{result:document.getElementById("content").getAttribute("result")})}),document.getElementById("root")),C()}},[[147,1,2]]]);
//# sourceMappingURL=main.6773c107.chunk.js.map