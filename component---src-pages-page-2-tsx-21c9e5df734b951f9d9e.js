(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(151),o=n(154),l=n(150),i=n(157);t.default=function(){return a.createElement(i.a,null,a.createElement(o.a,null,a.createElement(l.a,null,a.createElement("h1",null,"Hi from the second page"),a.createElement("p",null,"Welcome to page 2"),a.createElement("ul",null,a.createElement("li",null,a.createElement(r.Link,{to:"/a-markdown-page/"},"Show me some Markdown!")),a.createElement("li",null,a.createElement(r.Link,{to:"/"},"Take me back home."))))))}},149:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"e",function(){return l}),n.d(t,"c",function(){return i});var a={primary100:"#003894",gray100:"#4B5058",gray80:"#7A7F86",gray50:"#A9ADB2",gray15:"#E2E4EB",gray10:"#EFF0F5",gray5:"#F7F8FC",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},r={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},o={xs:0,sm:576,md:768,lg:992,xl:1200},l={md:720,lg:940,xl:1140},i={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.5,heading:1.2}}},150:function(e,t,n){"use strict";var a=n(0),r=n(147),o=n(149),l=n(152),i=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(l.a)(o.e.lg),"rem;");t.a=function(e){var t=e.children,n=e.className;return a.createElement(i,{className:n},t)}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return g});var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(148),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var s=n(26);n.d(t,"waitForRouteChange",function(){return s.c});var d=n(153),m=n.n(d);n.d(t,"PageRenderer",function(){return m.a});var h=n(37);n.d(t,"parsePath",function(){return h.a});var u=r.a.createContext({}),g=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(149),r=function(e){return e/a.c.fontSize.regular}},153:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},154:function(e,t,n){"use strict";var a=n(0),r=n(147),o=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:0;margin-bottom:3rem;");t.a=function(e){var t=e.children,n=e.className;return a.createElement(o,{className:n},t)}},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Mesh Korea Makers Blog",description:"메쉬코리아에서 기술, 유저 경험 및 공간 디자인, 서비스 기획 등 물류플랫폼을 만들기 위한 과정에 대한 고민과 그 해결을 담은 블로그입니다."}}}}},156:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(49),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},157:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(155),l=n(0),i=n(159),c=n.n(i),s=n(151),d=n(13),m=(n(160),n(79)),h=n(149),u=n(152);Object(m.injectGlobal)("html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}html{font-size:",h.c.fontSize.regular,"px !important;line-height:",h.c.lineHeight.regular," !important;}body{width:100%;overflow-x:hidden;overflow-y:scroll;font-family:",h.d.sansSerif,";color:",h.b.gray100,";background-color:",h.b.white,";-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a{color:",h.b.primary100,";text-decoration:none;&:hover,&:focus{text-decoration:underline;}}img{max-width:100%;object-fit:contain;position:relative;}figure{margin:2rem 0;}figcaption{font-size:80%;}table{width:100%;margin-bottom:1rem;border:1px solid ",h.b.ui.light,";font-size:85%;border-collapse:collapse;}td,th{padding:.25rem .5rem;border:1px solid ",h.b.ui.light,";}th{text-align:left;}tbody{tr{&:nth-child(odd){td{background-color:",h.b.ui.whisper,";}tr{background-color:",h.b.ui.whisper,";}}}}h1,h2,h3,h4,h5,h6{margin-top:1.414rem;margin-bottom:.5rem;color:inherit;font-weight:600;line-height:",h.c.lineHeight.heading,";text-rendering:optimizeLegibility;}h1{margin-top:0;font-size:",h.c.headingSizes.h1,"rem;}h2{font-size:",h.c.headingSizes.h2,"rem;}h3{font-size:",h.c.headingSizes.h3,"rem;}h4,h5,h6{font-size:",h.c.headingSizes.h4,"rem;}p{margin-top:0;margin-bottom:1rem;}strong{color:inherit;}ul,ol,dl{margin-top:0;margin-bottom:1rem;}dt{font-weight:bold;}dd{margin-bottom:.5rem;}hr{position:relative;margin:1.5rem 0;border:0;border-top:1px solid ",h.b.ui.light,";}blockquote{margin:.8rem 0;padding:.5rem 1rem;border-left:.25rem solid ",h.b.ui.light,";p{&:last-child{margin-bottom:0;}}@media (min-width:",Object(u.a)(h.a.md),'em){padding-right:5rem;padding-left:1.25rem;}}code[class*="language-"],pre[class*="language-"]{color:black;background:none;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}@media print{code[class*="language-"],pre[class*="language-"]{text-shadow:none;}}pre[class*="language-"]{padding:1em;margin:.5em 0;overflow:auto;}:not(pre) > code[class*="language-"]{padding:.1em;border-radius:.3em;white-space:normal;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:.7;}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#905;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#690;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#9a6e3a;background:hsla(0,0%,100%,.5);}.token.atrule,.token.attr-value,.token.keyword{color:#07a;}.token.function,.token.class-name{color:#DD4A68;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}');var g=n(147),p=n(150),f=(n(36),n(158)),b=n.n(f),y=(n(161),{ADDRESS:l.createElement(l.Fragment,null,l.createElement("rect",{x:"21",y:"5",width:"1",height:"14"}),l.createElement("path",{d:"M12,21A9,9,0,0,1,12,3H23V1H12a11,11,0,0,0,0,22H23V21Z"}),l.createElement("path",{d:"M13.83,7.78H15v3.89h0a2.35,2.35,0,0,1,2.26-1.26,2.4,2.4,0,0,1,2.5,2.64v4.59H18.62V13.27a1.58,1.58,0,0,0-1.68-1.81,1.86,1.86,0,0,0-1.92,2v4.14H13.83Z"})),APP_STORE:l.createElement(l.Fragment,null,l.createElement("path",{d:"M5.57,17.55a1.73,1.73,0,0,0-1.51.27l-1,1.67A1.46,1.46,0,1,0,5.62,21l1.44-2.49C7.16,18.28,6,17.74,5.57,17.55Z"}),l.createElement("path",{d:"M21.83,14.34H18.32l-4-7a4.39,4.39,0,0,0-.89,1.28,4.11,4.11,0,0,0-.11,2.91l1.6,2.79,1.69,2.93L18.73,21a1.48,1.48,0,0,0,2.56-1.48L20,17.28h1.81a1.47,1.47,0,1,0,0-2.94Z"}),l.createElement("path",{d:"M13.9,14.34H9.44L15.3,4.18a1.45,1.45,0,1,0-2.52-1.45l-.58,1-.57-1A1.48,1.48,0,0,0,9.06,4.22l1.43,2.47L6.07,14.34H2.47a1.47,1.47,0,1,0,0,2.93H15.1a1.27,1.27,0,0,0,.27-.9A2.54,2.54,0,0,0,13.9,14.34Z"})),CARET_LEFT:l.createElement("path",{d:"M4,8a1,1,0,0,1,.29-.71l5-5a1,1,0,1,1,1.42,1.42L6.41,8l4.3,4.29a1,1,0,0,1-1.42,1.42l-5-5A1,1,0,0,1,4,8Z"}),CARET_RIGHT:l.createElement("path",{d:"M12,8a1,1,0,0,1-.29.71l-5,5a1,1,0,0,1-1.42-1.42L9.59,8,5.29,3.71A1,1,0,0,1,6.71,2.29l5,5A1,1,0,0,1,12,8Z"}),CARET_SMALL_LEFT:l.createElement("path",{d:"M3,6a1,1,0,0,1,.29-.71l4-4A1,1,0,0,1,8.71,2.71L5.41,6l3.3,3.29a1,1,0,0,1-1.42,1.42l-4-4A1,1,0,0,1,3,6Z"}),CARET_SMALL_RIGHT:l.createElement("path",{d:"M9,6a1,1,0,0,1-.29.71l-4,4A1,1,0,0,1,3.29,9.29L6.59,6,3.29,2.71A1,1,0,0,1,4.71,1.29l4,4A1,1,0,0,1,9,6Z"}),FACEBOOK:l.createElement("path",{d:"M22.68,0H1.32A1.32,1.32,0,0,0,0,1.32V22.67A1.33,1.33,0,0,0,1.32,24H12.83V14.72H9.7V11.08h3.13V8.41c0-3.1,1.89-4.79,4.66-4.79.93,0,1.86,0,2.79.14V7H18.37c-1.5,0-1.8.72-1.8,1.77v2.31h3.6l-.47,3.63H16.55V24h6.13A1.33,1.33,0,0,0,24,22.67h0V1.32A1.32,1.32,0,0,0,22.68,0Z"}),GITHUB:l.createElement("path",{d:"M12,0A12,12,0,0,0,8.21,23.39c.6.11.82-.26.82-.58s0-1,0-2c-3.34.72-4-1.61-4-1.61A3.21,3.21,0,0,0,3.64,17.4c-1.09-.74.08-.73.08-.73a2.55,2.55,0,0,1,1.84,1.24,2.56,2.56,0,0,0,3.49,1,2.59,2.59,0,0,1,.76-1.61C7.15,17,4.34,16,4.34,11.37A4.63,4.63,0,0,1,5.58,8.15,4.28,4.28,0,0,1,5.7,5s1-.33,3.3,1.23a11.18,11.18,0,0,1,6,0C17.3,4.65,18.3,5,18.3,5a4.28,4.28,0,0,1,.12,3.17,4.63,4.63,0,0,1,1.23,3.22c0,4.61-2.8,5.63-5.47,5.92A2.88,2.88,0,0,1,15,19.52c0,1.6,0,2.89,0,3.29s.21.69.82.58A12,12,0,0,0,12,0Z"}),LINK:l.createElement(l.Fragment,null,l.createElement("path",{d:"M15.88,9.27a4.39,4.39,0,0,0-.51-.63h0a4.81,4.81,0,0,0-1.25-.88L12.59,9.29a2.93,2.93,0,0,1,1.36.76,2.8,2.8,0,0,1,.45.59l0,.1a3.12,3.12,0,0,1,.38,1.43A3,3,0,0,1,14,14.3L8.84,19.41,8.3,20A3,3,0,0,1,4.05,15.7L6,13.78a6.54,6.54,0,0,1-.27-2.56L2.64,14.29a5,5,0,0,0,0,7.07,5,5,0,0,0,7.07,0l3.07-3.07,2.59-2.58A5,5,0,0,0,15.88,9.27Z"}),l.createElement("path",{d:"M8.12,14.73a4.39,4.39,0,0,0,.51.63h0a4.81,4.81,0,0,0,1.25.88l1.53-1.53A2.93,2.93,0,0,1,10.05,14a2.8,2.8,0,0,1-.45-.59l0-.1a3.12,3.12,0,0,1-.38-1.43,3,3,0,0,1,.88-2.13l5.11-5.11.54-.54A3,3,0,0,1,20,8.3L18,10.22a6.54,6.54,0,0,1,.27,2.56l3.07-3.07a5,5,0,0,0,0-7.07,5,5,0,0,0-7.07,0L11.22,5.71,8.63,8.29A5,5,0,0,0,8.12,14.73Z"})),LOGO:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0,5.87V18.12L10.17,24l10.17-5.88V5.87L10.17,0ZM16.76,7.94v8.11l-2,1.16V11.39L10.17,14l-4.6-2.66h0v5.83l-2-1.15V7.94l6.59,3.8Z"}),l.createElement("polygon",{points:"34.41 11.64 30.89 4.98 28.36 4.98 28.36 17.8 31.06 17.8 31.06 10.53 33.61 15.54 35.28 15.46 37.73 10.49 37.73 17.8 40.45 17.8 40.45 4.98 37.77 5.06 34.41 11.64"}),l.createElement("polygon",{points:"42.19 17.8 50.29 17.8 50.29 15.37 45.02 15.37 45.02 12.38 49.74 12.38 49.74 9.96 45.02 9.96 45.02 7.43 50.29 7.43 50.29 4.98 42.19 4.98 42.19 17.8"}),l.createElement("path",{d:"M56.61,10.18c-1.76-.44-2.36-.87-2.36-1.7s.58-1.23,1.62-1.23a2.4,2.4,0,0,1,2.35,1.2l.08.13,2.14-1.53-.07-.12a5,5,0,0,0-4.52-2.11c-2.77,0-4.43,1.37-4.43,3.66,0,2.07,1.22,3.36,3.82,4,2.07.53,2.45,1,2.45,1.75s-.62,1.25-1.8,1.25a3,3,0,0,1-2.61-1.2l-.09-.1L51,15.73l.09.12C52.22,17.31,53.75,18,56.05,18c2.76,0,4.47-1.45,4.47-3.79C60.52,12,59.42,10.88,56.61,10.18Z"}),l.createElement("polygon",{points:"68.92 9.96 64.86 9.96 64.86 4.98 62.03 4.98 62.03 17.8 64.86 17.8 64.86 12.38 68.92 12.38 68.92 17.8 71.75 17.8 71.75 4.98 68.92 4.98 68.92 9.96"}),l.createElement("polygon",{points:"88.26 4.98 84.85 5.04 81.15 10.1 81.15 4.98 78.32 4.98 78.32 17.8 81.15 17.8 81.12 14.42 82.48 12.62 85.69 17.8 88.98 17.8 84.26 10.28 88.26 4.98"}),l.createElement("path",{d:"M94,4.82c-3.19,0-4.94,2-4.94,5.68v1.78C89,15.89,90.82,18,94,18s5-2.07,5-5.68V10.5C98.91,6.83,97.15,4.82,94,4.82Zm2.13,7.46c0,2.22-.68,3.25-2.13,3.25s-2.11-1-2.11-3.25V10.5c0-2.22.67-3.25,2.11-3.25s2.13,1,2.13,3.25Z"}),l.createElement("path",{d:"M110.09,9c0-2.52-1.76-4-4.83-4h-4.63V17.8h2.83V12.87l1.76-.08,2.38,5h3L108,12.39A3.5,3.5,0,0,0,110.09,9ZM105,10.45h-1.56v-3H105c1.62,0,2.24.43,2.24,1.52S106.65,10.45,105,10.45Z"}),l.createElement("polygon",{points:"111.75 17.8 119.85 17.8 119.85 15.37 114.58 15.37 114.58 12.38 119.3 12.38 119.3 9.96 114.58 9.96 114.58 7.43 119.85 7.43 119.85 4.98 111.75 4.98 111.75 17.8"}),l.createElement("path",{d:"M127.59,5h-2.53L120.6,17.8h3l.76-2.38h4l.76,2.38h3Zm-2.43,8,1.22-3.8L127.6,13Z"})),MORE:l.createElement(l.Fragment,null,l.createElement("path",{d:"M9,1A8,8,0,1,1,1,9,8,8,0,0,1,9,1M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"}),l.createElement("circle",{cx:"5",cy:"9",r:"1"}),l.createElement("circle",{cx:"9",cy:"9",r:"1"}),l.createElement("circle",{cx:"13",cy:"9",r:"1"})),PLAY_STORE:l.createElement(l.Fragment,null,l.createElement("path",{d:"M2.1.7a.79.79,0,0,0-.1.4V22.3a3.09,3.09,0,0,0,.2.9L13.4,11.9Z"}),l.createElement("path",{d:"M17.3,7.7,4.3.3A1.42,1.42,0,0,0,3.7.1H3.5c0-.1-.2-.1-.3-.1H3.1C3,0,2.9,0,2.9.1l11,11.1Z"}),l.createElement("path",{d:"M2.8,23.9c.1,0,.2,0,.2.1h.7c.2-.1.4-.1.6-.2l13.2-7.5-3.6-3.7Z"}),l.createElement("path",{d:"M22.4,10.7,18.2,8.3,14.6,12l3.7,3.8,4.1-2.3a1.56,1.56,0,0,0,.8-.8,1,1,0,0,0,.2-.7A1.44,1.44,0,0,0,22.4,10.7Z"})),SEARCH:l.createElement("path",{d:"M15.21,13.79l-3.32-3.32A6,6,0,1,0,7,13a6,6,0,0,0,3.47-1.12l3.32,3.33ZM3,7a4,4,0,1,1,4,4A4,4,0,0,1,3,7Z"}),TWITTER:l.createElement("path",{d:"M7.89,21A12.84,12.84,0,0,0,20.82,8.07c0-.2,0-.39,0-.59a9.18,9.18,0,0,0,2.26-2.35,9.08,9.08,0,0,1-2.61.71,4.54,4.54,0,0,0,2-2.51,9.05,9.05,0,0,1-2.88,1.1,4.55,4.55,0,0,0-7.86,3.11,5.1,5.1,0,0,0,.11,1A12.9,12.9,0,0,1,2.47,3.83,4.54,4.54,0,0,0,3.87,9.9a4.59,4.59,0,0,1-2-.57v.06a4.54,4.54,0,0,0,3.64,4.45,4.7,4.7,0,0,1-1.2.16,4.8,4.8,0,0,1-.85-.08,4.54,4.54,0,0,0,4.24,3.15A9.09,9.09,0,0,1,2,19,9.51,9.51,0,0,1,.93,19a12.82,12.82,0,0,0,7,2"}),WEB:l.createElement(l.Fragment,null,l.createElement("path",{d:"M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm6.3,19.6L9.7,14.3l-.1-.1-4.5-9c-.1-.3.3-.7.6-.5L14.3,10l.1.1,4.5,9C19,19.4,18.6,19.8,18.3,19.6Z"}),l.createElement("circle",{cx:"12",cy:"12",r:"2"}))}),E=Object(g.a)("i",{target:"e9yvw600"})({position:"relative",display:"inline-block","& > svg":{verticalAlign:"top"}},function(e){return{lineHeight:e.height+"px",color:e.color||"inherit","& > svg":{fill:e.color||"currentColor"}}}),w=function(e){var t=e.name,n=e.className,a=e.color,r=e.width,o=void 0===r?24:r,i=e.height,c=void 0===i?24:i,s=e.offsetLeft,d=void 0===s?0:s,m=e.offsetTop,h=void 0===m?0:m,u=e.viewboxLeft,g=void 0===u?o:u,p=e.viewboxTop,f=void 0===p?c:p,w=(e.ref,e.unselectable,b()(e,["name","className","color","width","height","offsetLeft","offsetTop","viewboxLeft","viewboxTop","ref","unselectable"]));return l.createElement(E,Object.assign({className:n,height:c,color:a},w),l.createElement("svg",{width:o,height:c,xmlns:"http://www.w3.org/2000/svg",viewBox:d+" "+h+" "+g+" "+f},function(e){return y[e]}(t)))},x=Object(g.a)("header",{target:"e14yya1q0"})("position:",function(e){return e.folded?"fixed":"absolute"},";top:",function(e){return e.folded?"-125px":"0"},";left:0;right:0;z-index:100;height:240px;padding:100px 0 0;color:",h.b.gray100,";border-bottom:1px solid ",h.b.gray15,";background-color:",h.b.gray10,";"),v=Object(g.a)("div",{target:"e14yya1q1"})("width:133px;height:24px;"),k=Object(g.a)("h1",{target:"e14yya1q2"})("font-size:3rem;margin:6px 0 0;font-weight:700;line-height:1.2;letter-spacing:-0.015em;"),A=Object(g.a)(p.a,{target:"e14yya1q3"})("display:flex;"),L=Object(g.a)("h1",{target:"e14yya1q4"})("padding-top:7px;font-size:inherit;flex:1;i{margin-right:14px;> svg{transition:fill 0.5s;}}"),M=Object(g.a)("div",{target:"e14yya1q5"})("z-index:105;position:fixed;top:0;left:0;right:0;margin:0;height:70px;padding-top:26px;font-size:1.125rem;font-weight:700;line-height:1.2;color:",function(e){return e.show?h.b.gray100:h.b.gray10},";background-color:",h.b.gray10,";transition:color 0.5s;"),O=Object(g.a)("div",{target:"e14yya1q6"})("font-size:1rem;text-align:right;color:",h.b.primary100,";> a{display:inline-block;min-width:36px;height:36px;padding-top:6px;text-align:center;line-height:24px;border-radius:18px;transition:color 0.3s,background 0.5s;&:hover,&:focus{color:",h.b.white,";text-decoration:none;background:",h.b.primary100,";}}"),S=Object(g.a)("a",{target:"e14yya1q7"})("margin-left:12px;padding-top:5px !important;padding-left:20px;padding-right:20px;font-weight:600;border:1px solid ",h.b.primary100,";"),j=Object(g.a)(s.Link,{target:"e14yya1q8"})("color:inherit;&:hover,&:focus{text-decoration:none;}"),z=Object(g.a)("div",{target:"e14yya1q9"})("display:flex;margin-top:19px;"),H=Object(g.a)("ul",{target:"e14yya1q10"})("flex:1;margin:0;padding:0;list-style:none;list-style-image:none;font-weight:500;color:",h.b.gray80,";"),Z=Object(g.a)("li",{target:"e14yya1q11"})("display:inline-block;margin-right:20px;"),T=Object(g.a)("div",{target:"e14yya1q12"})("position:relative;"),q=Object(g.a)("label",{target:"e14yya1q13"})("position:absolute;top:6px;left:11px;line-height:16px;color:",h.b.gray50,";"),C=Object(g.a)("input",{target:"e14yya1q14"})("width:200px;height:28px;padding-left:36px;border:0;border-radius:14px;&:focus{outline:none;}"),F=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isFolded:!1},t.handleOnScroll=function(){!t.state.isFolded&&window.scrollY>125?t.setState({isFolded:!0}):t.state.isFolded&&window.scrollY<125&&t.setState({isFolded:!1})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.home&&(this.handleOnScroll(),window.addEventListener("scroll",this.handleOnScroll))},n.componentWillUnmount=function(){this.props.home&&window.removeEventListener("scroll",this.handleOnScroll)},n.render=function(){var e=!this.props.home||this.state.isFolded;return l.createElement(x,{folded:e},l.createElement(M,{show:e},l.createElement(A,null,l.createElement(L,null,l.createElement(w,{name:"LOGO",width:26,height:30,viewboxLeft:20.8,viewboxTop:24,color:e?h.b.primary100:h.b.gray10}),l.createElement(j,{to:"/"},"Mesh Korea Makers Blog")),l.createElement(O,null,l.createElement("a",{href:"https://github.com/meshkorea",target:"_blank"},l.createElement(w,{name:"GITHUB"})),l.createElement(S,{href:"https://www.wanted.co.kr/company/676",target:"_blank"},"지금 지원하러 가기")))),l.createElement(p.a,null,l.createElement(v,null,l.createElement(w,{name:"LOGO",width:133,height:24,color:h.b.primary100})),l.createElement(k,null,l.createElement(j,{to:"/"},"Makers Blog")),l.createElement(z,null,l.createElement(H,null,l.createElement(Z,null,"#lorem_ipsum"),l.createElement(Z,null,"#dolor"),l.createElement(Z,null,"#sit"),l.createElement(Z,null,l.createElement(w,{name:"MORE",width:18,height:18}))),l.createElement(T,null,l.createElement(q,null,l.createElement(w,{name:"SEARCH",width:16,height:16})),l.createElement(C,null)))))},t}(l.PureComponent),R=Object(g.a)("div",{target:"e17su9850"})("display:flex;flex-direction:column;min-height:100vh;"),V=function(e){var t=e.children,n=e.className;return l.createElement(R,{className:n},t)},G=Object(g.a)("main",{target:"e1qy7fsr0"})("display:flex;flex-direction:column;flex:1;padding-top:",function(e){return e.home?"240px":"115px"},";"),N=function(e){var t=e.children,n=e.className,a=e.home;return l.createElement(G,{home:a,className:n},t)},P=Object(g.a)("footer",{target:"eaf1f5d0"})("padding-top:2.187rem;padding-bottom:1.187rem;"),_=Object(g.a)("div",{target:"eaf1f5d1"})("float:left;width:160px;"),B=Object(g.a)("div",{target:"eaf1f5d2"})("margin-left:160px;"),I=function(){return l.createElement(P,null,l.createElement(p.a,null,l.createElement(_,null,l.createElement(w,{name:"LOGO",width:133,height:24,color:h.b.primary100})),l.createElement(B,null,l.createElement("p",null,"프리미엄 배달대행 부릉을 운영하는 메쉬코리아는 투명하고 유연하게 라이더를 연결하는 물류플랫폼을 지향합니다.",l.createElement("br",null),"물류플랫폼을 함께 만들어갈 능력있는 사람들과 함께할 사람들을 찾습니다."),l.createElement("p",null,l.createElement("a",{href:"https://www.wanted.co.kr/company/676",target:"_blank"},"지금 지원하러 가기 ",l.createElement(w,{width:16,height:16,name:"CARET_RIGHT"}))))))},D=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).renderPage=function(e){return l.createElement(d.Location,null,function(n){var a=n.location;return l.createElement(V,null,l.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"Mesh Korea, 메쉬코리아, 블로그, 기술 블로그, tech blog, makers blog, PO, Product Owner, 기획, 디자인, 개발, QA, 서버, 프론트엔드, 안드로이드, 웹, AWS, 머신러닝"}]}),l.createElement(F,{home:"/"===a.pathname,title:e.site.siteMetadata.title}),l.createElement(N,{home:"/"===a.pathname},t.props.children),l.createElement(I,null))})},t}return r()(t,e),t.prototype.render=function(){return l.createElement(s.StaticQuery,{query:"1504356506",render:this.renderPage,data:o})},t}(l.Component);t.a=D}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-21c9e5df734b951f9d9e.js.map