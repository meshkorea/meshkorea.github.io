(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,n){"use strict";n.r(t);n(36);var r=n(0),a=n(185);t.default=function(e){return r.createElement(a.a,Object.assign({pageTitle:"Page "+e.pathContext.index+" of "+e.pathContext.pageCount},e))}},154:function(e,t,n){var r=n(6),a=n(16),o=n(26),i=/"/g,c=function(e,t,n,r){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},156:function(e,t,n){"use strict";n(162)("trim",function(e){return function(){return e(this,3)}})},158:function(e,t,n){"use strict";n(154)("fixed",function(e){return function(){return e(this,"tt","","")}})},160:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return l});var r=n(149),a=n(152),o=n(150),i=Object(r.b)("aside",{target:"e1jecp8v0"})(a.b," margin-top:10px;"),c=Object(r.b)("figure",{target:"e1jecp8v1"})("float:left;margin:0;width:3rem;height:3rem;border-radius:1.5rem;background-color:",o.b.gray10,";background-position:50% 50%;background-size:cover;background-image:",function(e){return e.src?"url("+e.src+")":"none"},";"),u=Object(r.b)("strong",{target:"e1jecp8v2"})("display:block;margin:4px 0 0 60px;font-weight:600;line-height:1.3;color:",o.b.gray100,";"),l=Object(r.b)("aside",{target:"e1jecp8v3"})("margin-left:60px;font-size:0.875rem;color:",o.b.gray60,";");t.d=i},161:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(156),n(80),n(49);var r=n(7),a=n.n(r),o=n(0),i=n(151),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleOnClick=function(e){e.preventDefault(),e.stopPropagation(),Object(i.navigate)("/tags/"+t.props.tagName)},t}return a()(t,e),t.prototype.render=function(){return o.createElement("span",{onClick:this.handleOnClick},"#",this.props.tagName)},t}(o.PureComponent),u=function(e,t){return void 0===e&&(e=""),t?e.split(",").map(function(e){return o.createElement(c,{key:e,tagName:e.trim()})}):e.split(",").map(function(e){return"#"+e.trim()}).join(" ")}},162:function(e,t,n){var r=n(6),a=n(26),o=n(16),i=n(163),c="["+i+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),s=function(e,t,n){var a={},c=o(function(){return!!i[e]()||"​"!="​"[e]()}),u=a[e]=c?t(g):i[e];n&&(a[n]=u),r(r.P+r.F*c,"String",a)},g=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=s},163:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},175:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return p});var r=n(0),a=n(149),o=n(152),i=n(150),c=Object(a.b)("ul",{target:"e1co9u1j0"})("margin:50px 0 0;padding:0;list-style:none;list-style-image:none;"),u=Object(a.b)("h2",{target:"e1co9u1j1"})("margin:50px 0 5px;font-size:2.5rem;"),l=Object(a.b)("strong",{target:"e1co9u1j2"})("font-weight:400;color:",i.b.gray80,";"),s=Object(a.b)("li",{target:"e1co9u1j3"})(o.b," margin:0 0 40px;a{color:inherit;&:hover h3{text-decoration:underline;}}h3{margin:0;font-size:1.5rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:",i.b.primary100,";}"),g=Object(a.b)("figure",{target:"e1co9u1j4"})("float:right;margin:0 0 0 80px;width:240px;height:160px;overflow:hidden;"),f=Object(a.b)("div",{target:"e1co9u1j5"})("width:100%;height:100%;background-position:50% 50%;background-size:cover;background-image:",function(e){return e.src?"url("+e.src+")":"none"},";transition:transform 0.5s,filter 0.5s;a:hover &{transform:scale(1.15);filter:brightness(110%);}"),m=function(e){var t=e.src;return r.createElement(g,null,r.createElement(f,{src:t}))},p=Object(a.b)("aside",{target:"e1co9u1j6"})("margin-bottom:15px;font-weight:500;font-size:0.875rem;color:",i.b.gray60,";> span{transition:color 0.5s;margin-right:5px;&:hover{color:",i.b.primary100,";}}");t.f=c},185:function(e,t,n){"use strict";n(173),n(158),n(49);var r=n(0),a=n(151),o=n(160),i=n(174),c=n(155),u=n(175),l=n(178),s=n(161);t.a=function(e){var t=e.pageTitle,n=e.pathContext;if(!n||!n.group||!n.group.length)return r.createElement(l.a,null,r.createElement(i.a,null,r.createElement(c.a,null,"No Content")));var g=n.group;return r.createElement(l.a,null,r.createElement(i.a,null,r.createElement(c.a,null,r.createElement(u.b,null,t),r.createElement(u.a,null,"총 ",n.additionalContext.totalItems,"개의 포스트가 있습니다."),r.createElement(u.f,null,g.map(function(e){var t=e.node;return r.createElement(u.c,{key:t.fields.slug},r.createElement(a.Link,{to:t.fields.slug},r.createElement(u.d,{src:t.frontmatter.titleImage.childImageSharp.resize.src}),r.createElement("h3",null,t.frontmatter.title),r.createElement(u.e,null,Object(s.a)(t.frontmatter.tags,!0)),r.createElement("summary",null,t.excerpt),r.createElement(o.d,null,r.createElement(o.a,{src:t.frontmatter.author.avatar.children[0].fixed.src}),r.createElement(o.c,null,t.frontmatter.author.name),r.createElement(o.b,null,t.frontmatter.date))))})),r.createElement("div",null,"Navigation goes here"))))}}}]);
//# sourceMappingURL=component---src-templates-pages-tsx-a031f8dd85142afe3421.js.map