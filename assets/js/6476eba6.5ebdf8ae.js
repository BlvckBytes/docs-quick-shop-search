"use strict";(self.webpackChunkdocs_quick_shop_search=self.webpackChunkdocs_quick_shop_search||[]).push([[722],{4922:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(4848),t=i(8453);const a={sidebar_position:1,slug:"/"},r="Usage",o={id:"usage",title:"Usage",description:"This page will summarize all features related to this shop-browser.",source:"@site/docs/usage.md",sourceDirName:".",slug:"/",permalink:"/docs-quick-shop-search/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"documentationSidebar",next:{title:"Installation",permalink:"/docs-quick-shop-search/installation"}},l={},c=[{value:"Paginated Display",id:"paginated-display",level:2},{value:"Page Navigation",id:"page-navigation",level:3},{value:"Shop Details",id:"shop-details",level:3},{value:"Sorting Results",id:"sorting-results",level:3},{value:"Filtering Results",id:"filtering-results",level:3},{value:"Remote Interaction",id:"remote-interaction",level:3},{value:"Powerful Predicates",id:"powerful-predicates",level:3},{value:"Commands",id:"commands",level:2},{value:"Main Language",id:"main-language",level:3},{value:"Custom Language",id:"custom-language",level:3},{value:"Advertise Command",id:"advertise-command",level:3},{value:"Reload Configuration",id:"reload-configuration",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Performance Concerns",id:"performance-concerns",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"usage",children:"Usage"})}),"\n",(0,n.jsx)(s.p,{children:"This page will summarize all features related to this shop-browser."}),"\n","\n",(0,n.jsx)(s.h2,{id:"paginated-display",children:"Paginated Display"}),"\n",(0,n.jsx)(s.h3,{id:"page-navigation",children:"Page Navigation"}),"\n",(0,n.jsx)(s.p,{children:"Navigate to either the next- or the previous page, or quickly jump to the very first- or last page."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"display pagination",src:i(3763).A+"",width:"536",height:"387"})}),"\n",(0,n.jsx)(s.h3,{id:"shop-details",children:"Shop Details"}),"\n",(0,n.jsx)(s.p,{children:"A rich preview of details regarding each individual shop, which not only offers actions to either teleport to the destination or open the native preview, but also updates in real time."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"display details",src:i(9695).A+"",width:"600",height:"386"})}),"\n",(0,n.jsx)(s.h3,{id:"sorting-results",children:"Sorting Results"}),"\n",(0,n.jsx)(s.p,{children:"Create your very own sorting-setup by choosing from an extensive list of criteria; each entry can either be disabled (taking no effect), or be toggled between ascending (+) and descending (-); to decide sorting-precedence, individual entries may be moved. Your choices will be remembered, as to ensure future results being displayed in a personalized manner. You can reset your selection with merely the click of a button at any time!"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"display sorting",src:i(2433).A+"",width:"600",height:"620"})}),"\n",(0,n.jsx)(s.h3,{id:"filtering-results",children:"Filtering Results"}),"\n",(0,n.jsx)(s.p,{children:"Filter results based on your exact requirements: criteria combines conditionally, meaning that all selections need to apply to any given shop. Your choices will be remembered, as to ensure future results being displayed in a personalized manner. You can reset your selection with merely the click of a button at any time!"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"display filtering",src:i(1051).A+"",width:"544",height:"387"})}),"\n",(0,n.jsx)(s.h3,{id:"remote-interaction",children:"Remote Interaction"}),"\n",(0,n.jsx)(s.p,{children:"Interact with shops from any arbitrary distance, be it within the same world, or even across worlds! The requests to sell and buy items will be relayed to the shop and handled natively, thereby ensuring proper transactional consistency."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"display remote interact",src:i(1486).A+"",width:"600",height:"609"})}),"\n",(0,n.jsx)(s.h3,{id:"powerful-predicates",children:"Powerful Predicates"}),"\n",(0,n.jsxs)(s.p,{children:["Thanks to the feature-rich syntax as provided by the ",(0,n.jsx)(s.a,{href:"https://blvckbytes.github.io/docs-item-predicate-parser",children:"ItemPredicateParser"}),", queries can be as simple or as detailed as you desire them to be; the days of having to flip through hundreds of unspecific results are finally over!"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"display filtering",src:i(8695).A+"",width:"600",height:"114"})}),"\n",(0,n.jsx)(s.h2,{id:"commands",children:"Commands"}),"\n",(0,n.jsxs)(s.p,{children:["Please familiarize yourself with the syntax of predicates over at the ",(0,n.jsx)(s.a,{href:"https://blvckbytes.github.io/docs-item-predicate-parser",children:"Parser's Documentation"}),". Results are, if any, offered within a paginated display."]}),"\n",(0,n.jsx)(s.h3,{id:"main-language",children:"Main Language"}),"\n",(0,n.jsxs)(s.p,{children:["Usage: ",(0,n.jsx)(s.code,{children:"/qss <predicate>"})]}),"\n",(0,n.jsxs)(s.p,{children:["To query all globally existing shops using the configured main language, and thereby without having to specify an additional, use ",(0,n.jsx)(s.code,{children:"/quickshopsearch"})," or its alias ",(0,n.jsx)(s.code,{children:"/qss"}),", followed up by an optional predicate."]}),"\n",(0,n.jsx)(s.h3,{id:"custom-language",children:"Custom Language"}),"\n",(0,n.jsxs)(s.p,{children:["Usage: ",(0,n.jsx)(s.code,{children:"/qssl <language> <predicate>"})]}),"\n",(0,n.jsxs)(s.p,{children:["To query all globally existing shops using any of the languages supported by the predicate-parser, use ",(0,n.jsx)(s.code,{children:"/quickshopsearchlanguage"})," or its alias ",(0,n.jsx)(s.code,{children:"/qssl"}),", followed up by the language, followed up by a predicate."]}),"\n",(0,n.jsx)(s.h3,{id:"advertise-command",children:"Advertise Command"}),"\n",(0,n.jsxs)(s.p,{children:["Usage: ",(0,n.jsx)(s.code,{children:"/qs advertise"})]}),"\n",(0,n.jsxs)(s.p,{children:["Toggles the is-advertising state of the shop currently looked at, indicating whether it'll show up on the shop-browser. By default, no shop is advertising, as it's an opt-in choice. These states are simply stored on the shop-sign's ",(0,n.jsx)(s.a,{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/persistence/PersistentDataContainer.html",children:"PersistentDataContainer"})," as a single byte, being either ",(0,n.jsx)(s.code,{children:"0"})," or ",(0,n.jsx)(s.code,{children:"1"}),". There exists a bypass-permission for admins, so they can still view all globally existing shops - see the permissions-section of this page."]}),"\n",(0,n.jsx)(s.h3,{id:"reload-configuration",children:"Reload Configuration"}),"\n",(0,n.jsxs)(s.p,{children:["Usage: ",(0,n.jsx)(s.code,{children:"/qssrl"})]}),"\n",(0,n.jsxs)(s.p,{children:["The configuration can be reloaded at any point in time, simply by running ",(0,n.jsx)(s.code,{children:"/quickshopsearchreload"})," or its alias ",(0,n.jsx)(s.code,{children:"/qssrl"}),"; this also affects open displays and will update the inventory-title as well as all rendered items."]}),"\n",(0,n.jsx)(s.h2,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.command.qss"}),": Invoke the main command"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.command.qssl"}),": Invoke the language command"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.command.qssrl"}),": Invoke the reload command"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.empty-predicate"}),": Query all shops without a predicate"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.other-world"}),": Whether to display shops which are not in the same world as the player"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.feature.sort"}),": Use the sorting feature"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.feature.filter"}),": Use the filtering feature"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.feature.teleport"}),": Teleport to shops within the same world"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.feature.teleport.other-world"}),": Teleport to shops within another world"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.feature.interact"}),": Remotely interact with shops within the same world"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.feature.interact.other-world"}),": Remotely interact with shops within another world"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.access-list.<suffix>"}),": Control access-lists by permission, see ",(0,n.jsx)(s.a,{href:"/docs-quick-shop-search/configuration#access-lists",children:"Access-Lists"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.bypass-access-lists"}),": Bypass all access-lists, see ",(0,n.jsx)(s.a,{href:"/docs-quick-shop-search/configuration#access-lists",children:"Access-Lists"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.command.advertise"}),": Invoke the toggle-advertise sub-command of quickshop."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.command.advertise.owner-bypass"}),": Invoke the toggle-advertise command for shops you're not the owner of."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"quickshopsearch.bypass-non-advertise"}),": View all shops, no matter whether they're advertising."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"performance-concerns",children:"Performance Concerns"}),"\n",(0,n.jsxs)(s.p,{children:["Since it's totally reasonable to be concerned with the performance-impact a plugin like this could cause, I want to provide some ballpark measurements and insights into the whole process; after all, it's doing a lot: parsing complex predicates, querying ",(0,n.jsx)(s.strong,{children:"all global shops"}),", rendering ",(0,n.jsx)(s.strong,{children:"customizable"})," preview items and reflecting shop-changes ",(0,n.jsx)(s.strong,{children:"immediately"})," in all open search-windows."]}),"\n",(0,n.jsx)(s.p,{children:"First and foremost, all of the previously mentioned tasks are executed asynchronously. Secondly, all globally existing shops are queried once on startup and then cached, while newly created or removed shops are of course tracked too; this includes caching not only the remaining stock and space (as to avoid needless inventory slot scans), but also takes care of the configurable display item template."}),"\n",(0,n.jsx)(s.p,{children:"Even complex predicates take only roughly two milliseconds to parse. Where the system really shines is the speed of predicate execution, which - for rather nuanced queries - lies at around 5 nanoseconds per Shop; on a reasonably large server with, for example, 100k shops, a query would take merely half a second."}),"\n",(0,n.jsx)(s.p,{children:"Rendering a full GUI-page, including page-items and controls, takes around two to two four milliseconds. Over all, I believe that the performance of this plugin is within an acceptable range; if you ever encounter any issues, please report back to me, so that I have further motivation to improve efficiency."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8695:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/command_predicate-c53356612a9333f5044de5e0c3a7500f.gif"},9695:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/display_details-dbe2d2780751ce9913ec73b0d0e89b53.gif"},1051:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/display_filtering-7d51b1492dfabc97b0d93b99d1bdf7a7.gif"},3763:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/display_pagination-34b4f9bd661772c09b19dbf0afbb0d2f.gif"},1486:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/display_remote_interact-8d1ba5b77a77b31a8fdac5b981e99d7d.gif"},2433:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/display_sorting-4fce1138a06955603e786add223a6d83.gif"},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>o});var n=i(6540);const t={},a=n.createContext(t);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);