(this["webpackJsonpip-adress-tracker"]=this["webpackJsonpip-adress-tracker"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(6),i=a.n(s),r=(a(12),a(5)),o=a.n(r),l=a(7),d=a(2),j=(a(14),a.p+"static/media/icon-arrow.2eaaa5ee.svg"),u=(a(15),a(0));var b=function(e){return Object(u.jsxs)("form",{className:"form",onSubmit:e.onSubmit,children:[Object(u.jsx)("label",{className:"sr-only",for:"IpAddress-Domain",children:"Search for any IP adress or domain"}),Object(u.jsx)("input",{id:"ipAddress-Domain",onChange:function(t){e.onChange(t.target.value),t.preventDefault()},value:e.value,type:"text",placeholder:"Search for any IP adress or domain"}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)("img",{src:j,alt:"arrow icon"})})]})};a(17);var p=function(e){return Object(u.jsxs)("div",{className:"infos grid",children:[Object(u.jsxs)("div",{className:"infos__item",children:[Object(u.jsx)("span",{children:"IP address"}),Object(u.jsx)("p",{children:e.data.ip})]}),Object(u.jsxs)("div",{className:"infos__item",children:[Object(u.jsx)("span",{children:"Location"}),Object(u.jsxs)("p",{children:[e.data.location.city,", ",e.data.location.country," ",e.data.location.postalCode]})]}),Object(u.jsxs)("div",{className:"infos__item",children:[Object(u.jsx)("span",{children:"Timezone"}),Object(u.jsxs)("p",{children:["UTC ",e.data.location.timezone]})]}),Object(u.jsxs)("div",{className:"infos__item",children:[Object(u.jsx)("span",{children:"ISP"}),Object(u.jsx)("p",{children:e.data.isp})]})]})},f=(a(18),a(3)),m=a.n(f),O={ip:"...",location:{city:"...",country:"...",postalCode:"...",timezone:"...",lat:999,lng:999},isp:"..."},h={ip:"---",location:{city:"---",country:"---",postalCode:"---",timezone:"---",lat:999,lng:999},isp:"---"};var x=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){s(m.a.map("map",{center:[47,4],zoom:4,layers:[m.a.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]}))}),[]),Object(n.useEffect)((function(){e.data.location.lat!==h.location.lat&&(""!==o&&c.removeLayer(o),c.setView([e.data.location.lat,e.data.location.lng],7),l(m.a.marker([e.data.location.lat,e.data.location.lng]).addTo(c)))}),[e.data]),Object(u.jsx)("div",{id:"map"})};var v=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),r=i[0],j=i[1],f=Object(n.useState)(O),m=Object(d.a)(f,2),v=m[0],y=m[1],g=Object(n.useState)("ipAddress"),S=Object(d.a)(g,2),k=S[0],_=S[1];return Object(n.useEffect)((function(){y(O);var e="https://geo.ipify.org/api/v2/country,city?apiKey=".concat("at_Py1LEZfTizACSCjPb5k0nZSuUkmi6","&").concat(k,"=").concat(r),t=function(){var t=Object(l.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if(200!==(a=t.sent).status){t.next=11;break}return t.next=7,a.json();case 7:n=t.sent,y(n),t.next=13;break;case 11:y(h),alert("Unable to get IP details");case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),alert("Request failed");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsxs)("div",{className:"home__text flex",children:[Object(u.jsx)("h1",{className:"text-white fs-700 fw-500",children:"IP Address Tracker"}),Object(u.jsx)(b,{onChange:function(e){c(e)},onSubmit:function(e){e.preventDefault(),a.match(/[a-zA-Z]/g)?_("domain"):_("ipAddress"),j(a)},value:a}),Object(u.jsx)(p,{data:v})]}),Object(u.jsx)(x,{data:v})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.8bafc748.chunk.js.map