(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(t,s,a){},225:function(t,s,a){"use strict";var e=a(222);a.n(e).a},226:function(t,s,a){"use strict";var e={functional:!0,render(t,s){const{_c:a,_v:e,data:i,children:n=[]}=s,{class:o,staticClass:c,style:r,staticStyle:l,attrs:u={},...v}=i;return a("svg",{class:[o,c],style:[r,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u),...v},n.concat([a("path",{staticClass:"stars",attrs:{fill:"#FFF",d:"M112.456 363.093c-.056 7.866-6.478 14.197-14.344 14.142 7.866.056 14.198 6.48 14.142 14.345.056-7.866 6.48-14.198 14.345-14.142-7.868-.057-14.2-6.48-14.144-14.345zm319.98-88.185c-.056 7.866-6.478 14.198-14.344 14.142 7.866.057 14.197 6.48 14.142 14.345.056-7.866 6.48-14.197 14.345-14.142-7.868-.056-14.2-6.48-14.144-14.345zM159.75 58.352c-.12 16.537-13.62 29.848-30.157 29.73 16.537.118 29.848 13.62 29.73 30.156.118-16.537 13.62-29.848 30.156-29.73-16.54-.117-29.85-13.62-29.73-30.156z"}})]))}},i=a(223),n={data:function(){return{settings:a(61)}},components:{planet:e,MailIcon:i.j,PhoneIcon:i.l,CornerDownRightIcon:i.d,NavigationIcon:i.k,GithubIcon:i.h}},o=(a(225),a(29)),c=Object(o.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hero"},[a("planet",{staticClass:"star"}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"hero-photo",domProps:{innerHTML:t._s(t.settings.hero_photo)}}),a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"hero-title",domProps:{innerHTML:t._s(t.settings.hero_title)}}),a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"hero-subtitle",domProps:{innerHTML:t._s(t.settings.hero_subtitle)}}),a("nav",{staticClass:"nav"},[a("router-link",{staticClass:"nav_item",attrs:{to:"/",active:t.is-t.active}},[a("CornerDownRightIcon",{staticClass:"icon"}),t._v(" Home \n\t\t\t\t")],1),a("router-link",{staticClass:"nav_item",attrs:{to:"/About",active:t.is-t.active}},[a("CornerDownRightIcon",{staticClass:"icon"}),t._v(" Profile\n\t\t\t\t")],1)],1),a("div",{staticClass:"contact_info"},[a("p",{staticClass:"contact_item"},[a("PhoneIcon",{staticClass:"icon"}),t._v(" 010-7527-1589")],1),a("p",{staticClass:"contact_item"},[a("MailIcon",{staticClass:"icon"}),t._v(" wntjsal19@gmail.com")],1),a("a",{staticClass:"contact_item",attrs:{href:"https://juseonmi.github.io/portfolio",target:"_blank"}},[a("GithubIcon",{staticClass:"icon"}),t._v(" https://juseonmi.github.io/portfolio")],1)])],1)},[],!1,null,null,null);s.a=c.exports},231:function(t,s,a){},232:function(t,s){},244:function(t,s,a){"use strict";var e=a(231);a.n(e).a},245:function(t,s,a){"use strict";var e=a(232),i=a.n(e);s.default=i.a},255:function(t,s,a){"use strict";a.r(s);var e=a(226),i=a(223),n={props:{projects:{type:Array,required:!0}},components:{LayersIcon:i.i,ChevronRightIcon:i.c,ChevronLeftIcon:i.b}},o=(a(244),a(29)),c=Object(o.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"projects"},[a("LayersIcon"),a("h2",[t._v("Projects")]),a("div",{staticClass:"projects_inner"},t._l(t.projects,function(s,e){return a("div",{key:s.node.id,staticClass:"project"},[a("g-link",{staticClass:"project-link",attrs:{href:s.node.link,target:"_blank"}},[a("div",{staticClass:"logo_wrap"},[a("g-image",{staticClass:"logo",attrs:{src:s.node.logo}})],1),a("div",{staticClass:"categories"},[a("h3",{staticClass:"project-title"},[t._v(t._s(s.node.title))]),a("p",{staticClass:"dates"},t._l(s.node.date,function(s,e){return a("span",{key:e,staticClass:"date"},[t._v(t._s(s))])}),0),t._l(s.node.categories,function(s,e){return a("span",{key:e,staticClass:"category"},[t._v(t._s(s))])}),a("br")],2)])],1)}),0),a("a",{staticClass:"btn_viewall",attrs:{href:"/"}},[a("ChevronLeftIcon"),t._v(" prev")],1)],1)},[],!1,null,"629829eb",null).exports,r={components:{Hero:e.a,ProjectsGrid:c}},l=a(245),u=Object(o.a)(r,function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("div",{staticClass:"container"},[s("Hero"),s("ProjectsGrid",{attrs:{projects:this.$page.projects.edges}})],1)])},[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(u);s.default=u.exports}}]);