(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{222:function(t,s,e){},227:function(t,s,e){"use strict";var a=e(222);e.n(a).a},228:function(t,s,e){},229:function(t,s){},237:function(t,s,e){"use strict";var a={functional:!0,render(t,s){const{_c:e,_v:a,data:n,children:i=[]}=s,{class:r,staticClass:c,style:o,staticStyle:l,attrs:u={},...d}=n;return e("svg",{class:[r,c],style:[o,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u),...d},i.concat([e("path",{staticClass:"stars",attrs:{fill:"#FFF",d:"M112.456 363.093c-.056 7.866-6.478 14.197-14.344 14.142 7.866.056 14.198 6.48 14.142 14.345.056-7.866 6.48-14.198 14.345-14.142-7.868-.057-14.2-6.48-14.144-14.345zm319.98-88.185c-.056 7.866-6.478 14.198-14.344 14.142 7.866.057 14.197 6.48 14.142 14.345.056-7.866 6.48-14.197 14.345-14.142-7.868-.056-14.2-6.48-14.144-14.345zM159.75 58.352c-.12 16.537-13.62 29.848-30.157 29.73 16.537.118 29.848 13.62 29.73 30.156.118-16.537 13.62-29.848 30.156-29.73-16.54-.117-29.85-13.62-29.73-30.156z"}})]))}},n=e(223),i={data:function(){return{settings:e(61)}},components:{planet:a,MailIcon:n.f,PhoneIcon:n.g,CornerDownRightIcon:n.b}},r=(e(227),e(29)),c=Object(r.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hero"},[e("planet",{staticClass:"star"}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"hero-photo",domProps:{innerHTML:t._s(t.settings.hero_photo)}}),e("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"hero-title",domProps:{innerHTML:t._s(t.settings.hero_title)}}),e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"hero-subtitle",domProps:{innerHTML:t._s(t.settings.hero_subtitle)}}),e("nav",{staticClass:"nav"},[e("a",{staticClass:"nav_item is-active",attrs:{href:"#"}},[e("CornerDownRightIcon",{staticClass:"icon"}),t._v(" Home \n\t\t\t")],1),e("a",{staticClass:"nav_item",attrs:{href:"#"}},[e("CornerDownRightIcon",{staticClass:"icon"}),t._v(" Profile\n\t\t\t")],1)])],1)},[],!1,null,null,null);s.a=c.exports},242:function(t,s,e){"use strict";var a=e(228);e.n(a).a},243:function(t,s,e){"use strict";var a=e(229),n=e.n(a);s.default=n.a},252:function(t,s,e){"use strict";e.r(s);var a=e(237),n=e(223),i={props:{projects:{type:Array,required:!0}},components:{LayersIcon:n.e,ChevronRightIcon:n.a}},r=(e(242),e(29)),c=Object(r.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"projects"},[e("LayersIcon"),e("h2",[t._v("Projects")]),e("div",{staticClass:"projects_inner"},t._l(t.projects,function(s,a){return e("div",{key:s.node.id,staticClass:"project"},[e("g-link",{staticClass:"project-link",attrs:{href:s.node.link,target:"_blank"}},[e("div",{staticClass:"logo_wrap"},[e("g-image",{staticClass:"logo",attrs:{src:s.node.logo}})],1),e("div",{staticClass:"categories"},[e("h3",{staticClass:"project-title"},[t._v(t._s(s.node.title))]),e("p",{staticClass:"dates"},t._l(s.node.date,function(s,a){return e("span",{key:a,staticClass:"date"},[t._v(t._s(s))])}),0),t._l(s.node.categories,function(s,a){return e("span",{key:a,staticClass:"category"},[t._v(t._s(s))])}),e("br")],2)])],1)}),0),e("a",{staticClass:"btn_viewall",attrs:{href:"/"}},[t._v("prev")])],1)},[],!1,null,"58d23796",null).exports,o={data:function(){return{statusOn:!0}},components:{Hero:a.a,ProjectsGrid:c}},l=e(243),u=Object(r.a)(o,function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("div",{staticClass:"container"},[s("Hero"),s("ProjectsGrid",{attrs:{projects:this.$page.projects.edges}})],1)])},[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(u);s.default=u.exports}}]);