(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{QeBL:function(e,t,a){"use strict";a.r(t);var r=a("DZdY"),i=(a("q1tI"),a("Wbzz")),l=a("Xswm"),c=a("D4bG"),n=a("IgHk"),o=a("NqE+"),s=a("qhaX"),d=a("TBFr"),b=a("+ego"),m=a("N7jl"),g=a("qR4i"),p=a("jN9k"),u=a("AeFk");var h=Object(r.a)("div",{target:"e4zds5015",label:"RecentPageWrapper"})("position:relative;height:280px;overflow:hidden;color:",g.b.white,";word-break:keep-all;text-shadow:0 2px 4px rgba(0, 0, 0, 0.5);@media (max-width: ",Object(m.c)(g.a.md),"em){height:360px;}@media (max-width: ",Object(m.c)(g.a.sm),"em){height:480px;}"),j=Object(r.a)(d.a,{target:"e4zds5014",label:"RecentPageContainer"})({name:"bm8kat",styles:"position:relative;display:flex;flex-direction:column;height:100%;padding:20px"}),O=Object(r.a)("div",{target:"e4zds5013",label:"BackgroundContainer"})("position:absolute;width:100%;height:100%;background-color:",g.b.gray60,";background-position:50% 50%;background-size:cover;background-image:",(function(e){return e.src?"url("+e.src+")":"none"}),";filter:brightness(85%);transition:transform 0.5s;div:hover>&{transform:scale(1.05);}"),f=Object(r.a)("aside",{target:"e4zds5012",label:"RecentBadge"})({name:"bii669",styles:"flex:1;font-size:0.875rem;>strong{font-weight:500;}"}),x=Object(r.a)("h2",{target:"e4zds5011",label:"RecentTitle"})("font-size:2.5rem;>sup{margin-left:20px;font-size:1rem;top:-1.2rem;}@media (max-width: ",Object(m.c)(g.a.xl),"em){font-size:2rem;>sup{top:-0.8rem;}}"),w=Object(r.a)("summary",{target:"e4zds5010",label:"RecentExcerpt"})({name:"5mr6hz",styles:"max-width:620px"}),z=Object(r.a)("ul",{target:"e4zds509",label:"PostList"})("display:flex;flex-wrap:wrap;flex:2;margin:0;padding:0;list-style:none;list-style-image:none;@media (max-width: ",Object(m.c)(g.a.xl),"em){margin-top:30px;}"),y=Object(r.a)("li",{target:"e4zds508",label:"ListItem"})("margin:0 10px 40px;width:300px;color:",g.b.gray80,";a{color:inherit;}@media (max-width: ",Object(m.c)(g.a.xl),"em){margin-left:0;margin-right:0;width:50%;padding-left:10px;padding-right:10px;}@media (max-width: ",Object(m.c)(g.a.sm),"em){width:100%;}"),v=Object(r.a)("h3",{target:"e4zds507",label:"ListItemTitle"})("margin:10px 0 0;font-size:1.25rem;transition:color 0.5s;color:",g.b.gray100,";a:hover &{color:",g.b.primary100,";}"),k=Object(r.a)("figure",{target:"e4zds506",label:"ListItemImgWrapper"})({name:"zzwcbp",styles:"margin:0;width:100%;height:200px;overflow:hidden"}),L=Object(r.a)("div",{target:"e4zds505",label:"ListItemImg"})("width:100%;height:100%;background-color:",g.b.gray40,";background-position:50% 50%;background-size:cover;background-image:",(function(e){return e.src?"url("+e.src+")":"none"}),";transition:transform 0.5s,filter 0.5s;a:hover &{transform:scale(1.15);filter:brightness(110%);}"),I=Object(r.a)("div",{target:"e4zds504",label:"GridWrapper"})("position:relative;display:flex;flex-direction:column;margin:50px -10px 0;@media (max-width: ",Object(m.c)(g.a.xl),"em){flex-wrap:wrap;}"),T=Object(r.a)("aside",{target:"e4zds503",label:"TagListWrapper"})("position:absolute;right:0;width:140px;font-size:0.875em;@media (max-width: ",Object(m.c)(g.a.xl),"em){position:static;flex:0;margin-top:10px;width:100%;padding:0;}"),R=Object(r.a)("h3",{target:"e4zds502",label:"TagListTitle"})("margin:0;font-size:1em;text-transform:uppercase;@media (max-width: ",Object(m.c)(g.a.xl),"em){margin:0 10px;padding-top:16px;}"),E=Object(r.a)("ul",{target:"e4zds501",label:"TagList"})(m.d,";margin:10px 0 0 0;padding:0;@media (max-width: ",Object(m.c)(g.a.xl),"em){margin:10px 10px 0;}"),C=Object(r.a)("li",{target:"e4zds500",label:"TagItem"})('margin:0;padding:0;&::before{content:"-";margin-right:10px;color:',g.b.gray60,";}a{color:",g.b.gray100,";i{margin-left:0.25em;font-size:0.875em;font-style:normal;color:",g.b.gray80,";}}a:hover{color:",g.b.gray80,";}@media (max-width: ",Object(m.c)(g.a.xl),"em){display:inline-block;&+&{margin-left:20px;}}");t.default=function(e){var t=e.data;if(!t.posts||!t.posts.edges.length)return Object(u.c)(b.a,null,Object(u.c)(o.a,null,Object(u.c)(d.a,null,"No Content")));var a=t.posts.edges[0].node,r=t.posts.edges.filter((function(e,t){return t>0&&t<10})),m=t.posts.edges.length>10;return Object(u.c)(b.a,null,Object(u.c)(o.a,null,Object(u.c)(i.Link,{to:a.fields.slug},Object(u.c)(h,null,Object(u.c)(O,{src:a.frontmatter.titleImage.childImageSharp.original.src}),Object(u.c)(j,null,Object(u.c)(f,null,Object(u.c)("strong",null,"RECENT"),"  |  ",(a.frontmatter.tags||[]).map((function(e){return"#"+e.trim()})).join(" ")),Object(u.c)(x,null,a.frontmatter.title,Object(u.c)("sup",null,"by ",a.frontmatter.author.id)),Object(u.c)(w,null,a.longerExcerpt)))),Object(u.c)(d.a,null,Object(u.c)(I,null,Object(u.c)(z,null,r.map((function(e){var t=e.node;return Object(u.c)(y,{key:t.fields.slug},Object(u.c)(i.Link,{to:t.fields.slug},Object(u.c)(k,null,Object(u.c)(L,{src:t.frontmatter.titleImage.childImageSharp.resize.src})),Object(u.c)(v,null,t.frontmatter.title),Object(u.c)(s.e,null,Object(p.a)(t.frontmatter.tags,!0)),Object(u.c)("summary",null,t.excerpt),Object(u.c)(l.d,null,Object(u.c)(l.a,{src:t.frontmatter.author.avatar.children[0].fixed.src}),Object(u.c)(l.c,null,t.frontmatter.author.name),Object(u.c)(l.b,null,t.frontmatter.date))))}))),m&&Object(u.c)(n.b,null,Object(u.c)(n.a,{prev:!0,to:"/pages/2"},Object(u.c)(c.a,{name:"CARET_SMALL_LEFT",width:16,height:12}),"Older")),Object(u.c)(T,null,Object(u.c)(R,null,"Tags"),Object(u.c)(E,null,t.tagsGroup.tags.map((function(e){var t=e.tag,a=e.count;return Object(u.c)(C,{key:t},Object(u.c)("a",{href:"/tags/"+t},t,Object(u.c)("i",null,"(",a,")")))}))))))))}}}]);