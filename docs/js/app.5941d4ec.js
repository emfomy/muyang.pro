(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],f=0,m=[];f<s.length;f++)o=s[f],r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d8e":function(t,e,a){"use strict";var n=a("9f8e"),r=a.n(n);r.a},"27ba":function(t,e,a){"use strict";var n=a("619a"),r=a.n(n);r.a},"32b6":function(t,e,a){},"46f1":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("5df3"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var n=a("2b0e"),r=a("9f7b"),i=(a("2dd8"),a("f13c")),o=a.n(i),s=a("ecee"),l=a("c074"),c=a("b702"),u=a("f2d1"),f=a("ad3d"),m=a("b664");function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){d(t,e,a[e])})}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g={name:"IconButton",render:function(t){return t(m["a"],{props:p({},this.$props),class:["IconButton"]},[t("font-awesome-icon",{props:{icon:[this.faStyle,this.faIcon]},class:[{"mr-1":!!this.$slots.default}]}),this.$slots.default])},props:p({faIcon:String,faStyle:String},m["a"].props)},b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ButtonGroup"},[t._t("default")],2)},v=[],h={name:"ButtonGroup"},_=h,y=(a("bc07"),a("2877")),w=Object(y["a"])(_,b,v,!1,null,"07a1963c",null),C=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Collapse border rounded"},[a("Opener",{ref:"opener",attrs:{target:t.name}}),a("b-collapse",{ref:"collapse",attrs:{id:t.name}},[t._t("default")],2)],1)},S=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.target,expression:"target"}],staticClass:"Opener text-center w-100 collapsed",attrs:{size:"sm",variant:"light"}},[a("font-awesome-icon",{staticClass:"OpenerInner text-primary",attrs:{icon:"chevron-down"}})],1)},I=[],j={name:"Opener",props:{target:String}},B=j,P=(a("8d56"),Object(y["a"])(B,x,I,!1,null,"478011be",null)),T=P.exports,M={name:"Collapse",props:{name:String},components:{Opener:T}},z=M,E=Object(y["a"])(z,k,S,!1,null,null,null),O=E.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Wrapper",{attrs:{id:"app"}})},G=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Wrapper"},[a("b-button",{staticClass:"navbar-toggler navbar-light",attrs:{id:"toggler",variant:"outline-light",pressed:t.is_toggled},on:{"update:pressed":function(e){t.is_toggled=e}}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("b-container",{class:{"is-toggled":t.is_toggled},attrs:{id:"container",fluid:""}},[a("b-row",[a("div",{attrs:{id:"sidebar"}},[a("SideBar",{attrs:{role:"navigation","reset-toggle":t.resetToggle}})],1),a("div",{attrs:{id:"content"}},[a("Content",{attrs:{role:"main"}}),a("Footer",{attrs:{role:"footer"}})],1)])],1),a("b-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#app",expression:"'#app'"}],attrs:{id:"back"},on:{click:t.resetToggle}},[a("font-awesome-icon",{staticClass:"fa-2x text-primary",attrs:{icon:"chevron-circle-up"}})],1)],1)},U=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"SideBar text-center flex-column p-3",attrs:{type:"light",variant:"light"}},[a("div",{staticClass:"w-100"},[a("b-navbar-brand",{staticClass:"pt-3"},[a("b-link",{attrs:{href:"/img/avatar.jpg",target:"_blank"}},[a("b-img",{staticClass:"h-50 w-50",attrs:{center:"",rounded:"circle",src:"/img/avatar.jpg"}})],1)],1),a("b-nav-text",{staticClass:"p-0"},[a("h3",[t._v("Mu Yang")]),a("p",[t._v("Research Assistant")]),a("hr")]),a("b-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy"}],staticClass:"w-100",attrs:{pills:"",vertical:""}},[a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#about"},on:{click:t.resetToggle}},[t._v("\n        About\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#education",expression:"'#education'"}],attrs:{href:"#education"},on:{click:t.resetToggle}},[t._v("\n        Experiences\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#publication",expression:"'#publication'"}],attrs:{href:"#publication"},on:{click:t.resetToggle}},[t._v("\n        Publications\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project",expression:"'#project'"}],attrs:{href:"#project"},on:{click:t.resetToggle}},[t._v("\n        Projects\n      ")])],1)],1),a("div",{staticClass:"w-100 mt-3"},[a("div",{staticClass:"d-block",on:{mouseleave:t.iconTextOff}},[a("b-nav-text",{staticClass:"IconText text-nowrap p-0",domProps:{innerHTML:t._s(t.icon_text)}}),a("div",{staticClass:"d-flex justify-content-around my-1"},t._l(t.icon_list,function(e,n){return a("b-link",{key:n,attrs:{href:e.href,target:"_blank"},on:{mouseenter:function(a){t.iconTextOn(e)},touchstart:function(a){t.iconTextOn(e)}}},[a("font-awesome-icon",{staticClass:"fa-fw",attrs:{icon:[e.style,e.icon]}})],1)}),1)],1),a("hr"),a("footer",[a("small",[a("span",{staticClass:"text-muted"},[t._v("© Mu Yang. All rights reserved.")])])])])])},H=[],W={name:"SideBar",props:{resetToggle:Function},data:function(){return{icon_text:" ",icon_list:{email:{icon:"envelope",style:"fas",href:"mailto:emfomy@gmail.com",text:"emfomy@gmail.com"},phone:{icon:"phone",style:"fas",href:"tel:+886-2-27883799;ext=1562",text:"+886 (2) 2788-3799 ext. 1562"},github:{icon:"github",style:"fab",href:"//github.com/emfomy",text:"github.com/emfomy"},linkedin:{icon:"linkedin-in",style:"fab",href:"//www.linkedin.com/in/emfomy",text:"www.linkedin.com/in/emfomy"},facebook:{icon:"facebook-f",style:"fab",href:"//www.facebook.com/emfomy",text:"www.facebook.com/emfomy"},twitter:{icon:"twitter",style:"fab",href:"//www.twitter.com/emfomy",text:"www.twitter.com/emfomy"}}}},methods:{iconTextOn:function(t){this.icon_text=t.text},iconTextOff:function(){this.icon_text=" "}}},D=W,L=(a("e259"),Object(y["a"])(D,$,H,!1,null,"c03ab16a",null)),Y=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Content px-0 px-md-3"},[a("About",{ref:"about",attrs:{id:"about"}}),a("b-container",[a("b-row",[a("Education",{ref:"education",staticClass:"col-12 col-xl-6",attrs:{id:"education"}}),a("Employment",{ref:"employment",staticClass:"col-12 col-xl-6",attrs:{id:"employment"}})],1)],1),a("Publication",{ref:"publication",attrs:{id:"publication"}}),a("Project",{ref:"project",attrs:{id:"project"}})],1)},F=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h1",[t._v("Mu Yang")]),a("p",[t._v("Research Assistant, "),a("b-link",{attrs:{to:"http://ckip.iis.sinica.edu.tw",target:"_blank"}},[t._v("CKIP Lab")]),t._v(", "),a("b-link",{attrs:{to:"//www.sinica.edu.tw/en",target:"_blank"}},[t._v("Academia Sinica")])],1)]),a("header",[a("h3",[t._v("Skills")]),a("p")]),a("div",[a("Progress",{attrs:{value:90*t.progress,variant:"success",name:"C/C++"}}),a("Progress",{attrs:{value:85*t.progress,variant:"info",name:"Python"}}),a("Progress",{attrs:{value:75*t.progress,variant:"warning",name:"Web Design"}}),a("Progress",{attrs:{value:60*t.progress,variant:"danger",name:"Java"}})],1),a("IconButton",{attrs:{variant:"outline-primary",href:"/file/resume.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n    Résumé\n  ")])],2)},V=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"Section container p-3 p-md-4 p-lg-5"},[a("header",{staticClass:"mb-3 mb-md-4 text-center"},[t._t("header")],2),t._t("default")],2)},X=[],q={name:"Section"},Q=q,Z=Object(y["a"])(Q,K,X,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-progress",{staticClass:"my-3",attrs:{variant:t.variant}},[a("b-progress-bar",{staticClass:"d-block",attrs:{value:t.value}},[a("span",{staticClass:"float-left ml-2",domProps:{textContent:t._s(t.name)}}),a("span",{staticClass:"float-right mr-2",domProps:{textContent:t._s(t.value+"%")}})])],1)},at=[],nt={name:"Progress",props:{name:String,value:Number,variant:String}},rt=nt,it=(a("27ba"),Object(y["a"])(rt,et,at,!1,null,"dfcd8484",null)),ot=it.exports,st={name:"About",components:{Section:tt,Progress:ot},data:function(){return{progress:0}},mounted:function(){var t=this;setTimeout(function(){t.progress=1},1e3)}},lt=st,ct=Object(y["a"])(lt,J,V,!1,null,null,null),ut=ct.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h2",[t._v("Educations")]),a("p")]),a("Card1",{attrs:{year:"2015-2017",title:"Master of Science",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("a",{attrs:{href:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank"}},[t._v("Institute of Applied Mathematical Sciences")]),t._v(","),a("br"),t._v("National Taiwan University, Taipei, Taiwan")])],2),a("Card1",{attrs:{year:"2011-2015",title:"Bachelor of Science",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("a",{attrs:{href:"http://www.math.ntu.edu.tw/en",target:"_blank"}},[t._v("Department of Mathematics")]),t._v(","),a("br"),t._v("National Taiwan University, Taipei, Taiwan")])],2)],2)},mt=[],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"my-1 my-md-3"},[a("header",{staticClass:"d-flex"},[a("div",{staticClass:"Logo d-flex align-items-center justify-content-center h-100 mr-3 my-1"},[t.imgSrc?a("b-img",{staticClass:"mh-100 mw-100",attrs:{center:"",src:t.imgSrc}}):t._e()],1),a("div",[a("h4",[t._v(t._s(t.year)+" | "+t._s(t.institution)),a("br"),t._v(t._s(t.title))]),a("p",[t._t("description")],2)])]),t._t("default")],2)},dt=[],gt={name:"Card1",props:{year:{style:String,defulat:""},title:{style:String,defulat:""},institution:{style:String,defulat:""},imgSrc:String}},bt=gt,vt=(a("ac49"),Object(y["a"])(bt,pt,dt,!1,null,"e91a8e50",null)),ht=vt.exports,_t={name:"Education",components:{Section:tt,Card1:ht}},yt=_t,wt=Object(y["a"])(yt,ft,mt,!1,null,null,null),Ct=wt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h2",[t._v("Employments")]),a("p")]),a("Card1",{attrs:{year:"2017-Pres.",title:"Research Assistant",institution:"Academia Sinica","img-src":"/img/sinica_logo.png"}},[a("template",{slot:"description"},[a("a",{attrs:{href:"http://ckip.iis.sinica.edu.tw",target:"_blank"}},[t._v("CKIP Lab")]),t._v(", "),a("a",{attrs:{href:"//www.iis.sinica.edu.tw/index_en.html",target:"_blank"}},[t._v("Institute of Information Science")]),t._v(","),a("br"),t._v("Academia Sinica, Taipei, Taiwan")])],2),a("Card1",{attrs:{year:"2015-2015",title:"Internship",institution:"IBM Corp.","img-src":"/img/ibm_logo.png"}},[a("template",{slot:"description"},[a("a",{attrs:{href:"http://www.watson.ibm.com",target:"_blank"}},[t._v("Thomas J. Watson Research Center")]),t._v(","),a("br"),t._v("IBM, Yorktown Heights, NY, USA")])],2),a("Collapse",{attrs:{name:"employment-more"}},[a("Card1",{attrs:{year:"2013-2017",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[t._v("Supervised by Prof. Weichung Wang"),a("br"),a("a",{attrs:{href:"http://wlab.pro",target:"_blank"}},[t._v("WLab")]),t._v(", "),a("a",{attrs:{href:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank"}},[t._v("Institute of Applied Mathematical Sciences")]),t._v(", National Taiwan University, Taipei, Taiwan"),a("br"),a("i",[t._v("conducting researches of parallel computing of large-scale hybrid CPU-GPU clusters")])])],2),a("Card1",{attrs:{year:"2016-2016",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[t._v("Supervised by Prof. Semin Kim"),a("br"),a("a",{attrs:{href:"http://www.econ.ntu.edu.tw/?locale=en",target:"_blank"}},[t._v("Department of Economics")]),t._v(", National Taiwan University, Taipei, Taiwan"),a("br"),a("i",[t._v("conducting researches of ordinal versus cardinal voting rules")])])],2),a("Card1",{attrs:{year:"2015-2017",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("i",[t._v("Software Development for Computational and Data Science, High Performance Computing and Deep Learning, Introduction to Computational & Data Sciences, Introduction to Scientific Computing, Numerical Linear Algebra, Introduction to Computational Mathematics, Computer Programming, Mathematic Software, Calculus")])])],2)],1)],2)},St=[],xt={name:"Employment",components:{Section:tt,Card1:ht}},It=xt,jt=Object(y["a"])(It,kt,St,!1,null,null,null),Bt=jt.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",{staticClass:"Publication"},[a("template",{slot:"header"},[a("h2",[t._v("Publications")]),a("p")]),a("Card2",{attrs:{src:"/img/icsc_2019.jpg",href:""}},[a("header",[a("h4",[t._v("HWE: Word Embedding with Heterogeneous Features")]),a("p",[t._v("Jhih-Sheng Fan, Mu Yang, Peng-Hsuan Li and Wei-Yun Ma"),a("br"),t._v("2019, 13th IEEE International Conference on Semantic Computing (ICSC2019)")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/icsc_2019_hwe.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//doi.org/10.1109/ICOSC.2019.8665508",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas",disabled:""}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/hwe",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//www.ieee-icsc.org",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Conference\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-hwe",expression:"'#project-hwe'"}],attrs:{size:"sm",variant:"outline-primary",href:"","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Card2",{attrs:{src:"/img/ntu_banner.png",srcSide:"/img/ntu_logo.png",href:"//doi.org/10.6342/NTU201702960"}},[a("header",[a("h4",[t._v("Highly Scalable Parallelism of Integrated Randomized Singular Value Decomposition with Big Data Applications")]),a("p",[t._v("Mu Yang"),a("br"),t._v("2017, Master's Thesis, National Taiwan University")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2017_isvd.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//doi.org/10.6342/NTU201702960",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-isvd",expression:"'#project-isvd'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Card2",{attrs:{src:"/img/ieee_cit_2016.png",href:"http://nsclab.org/cit2016"}},[a("header",[a("h4",[t._v("Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU Clusters")]),a("p",[t._v("Mu Yang, Ray-Bing Chen, I-Hsin Chung, and Weichung Wang"),a("br"),t._v("2016, 16th IEEE International Conference on Computer and Information Technology (CIT2016)")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ieee_cse_2016_pass.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//doi.org/10.1109/CIT.2016.101",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/pass",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://nsclab.org/cit2016",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Conference\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-pass",expression:"'#project-pass'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Collapse",{staticClass:"mt-4",attrs:{name:"publication-more"}},[a("Card2",{attrs:{src:"/img/siam_cse_2017.jpg",href:"//www.siam.org/meetings/cse17"}},[a("header",[a("h4",[t._v("Parallel Implementations of Integrated Singular Value Decomposition (iSVD)")]),a("p",[t._v("Mu Yang, Su-Yun Huang, Ting-Li Chen, and Weichung Wang"),a("br"),t._v("2017, 9th SIAM Conference on Computational Science and Engineering (CSE2017)")])]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          Github\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//www.siam.org/meetings/cse17",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Conference\n        ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-isvd",expression:"'#project-isvd'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n          More\n        ")])],1)],1),a("Card2",{attrs:{src:"/img/tjjw_jsam_2016.png",href:"//www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"}},[a("header",[a("h4",[t._v("A Parallel and Hybrid Sparse Linear System Solver")]),a("p",[t._v("Mu Yang and Weichung Wang"),a("br"),t._v("2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics")])]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Workshop\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Presentation Excellence Award",size:"sm",variant:"outline-primary","fa-icon":"award","fa-style":"fas"}},[t._v("\n          Award\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"},nativeOn:{click:function(e){t.scrollProject("#project-hhis")}}},[t._v("\n          More\n        ")])],1)],1)],1)],2)},Tt=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Card2 p-3 p-lg-4"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-center mb-3 mb-lg-0",attrs:{cols:"12",lg:"3"}},[a("b-link",{attrs:{href:t.href,target:t.target,disabled:void 0===t.href}},[t.src?a("picture",[t.srcSide?a("source",{attrs:{media:"(min-width: 992px)",srcset:t.srcSide}}):t._e(),a("b-img",{staticClass:"mh-100 mw-100",attrs:{center:"",rounded:"",fluid:"",src:t.src}})],1):t._e()])],1),a("b-col",{attrs:{cols:"12",lg:"9"}},[t._t("default")],2)],1)],1)},zt=[],Et={name:"Card2",props:{src:String,srcSide:String,href:String,target:{style:String,default:"_blank"}}},Ot=Et,At=Object(y["a"])(Ot,Mt,zt,!1,null,null,null),Gt=At.exports,Nt={name:"Publication",components:{Section:tt,Card2:Gt},methods:{scrollProject:function(t){var e=this;this.$parent.$refs["project"].$refs["project-more"].$refs["collapse"].show=!0,this.$nextTick(function(){e.$scrollTo(t)})}}},Ut=Nt,$t=(a("7d19"),Object(y["a"])(Ut,Pt,Tt,!1,null,"f3f8257a",null)),Ht=$t.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",{staticClass:"Project"},[a("template",{slot:"header"},[a("h2",[t._v("Projects")]),a("p")]),a("Card3",{attrs:{id:"project-ehn"}},[a("header",[a("h4",[t._v("E-HowNet Parsing and Visualization")]),a("p",[t._v("2018")])]),a("p",[t._v("\n      A Parser for "),a("b-link",{attrs:{to:"http://ehownet.iis.sinica.edu.tw",target:"_blank"}},[t._v("E-HowNet")]),t._v(", and the visualization demo.\n    ")],1),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://ckip.iis.sinica.edu.tw/service/ehnvis",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Demo\n      ")]),a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/ehn",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          Github\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/ehn-demo",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          (Demo)\n        ")])],1)],1)],1),a("Card3",{attrs:{id:"project-hwe"}},[a("header",[a("h4",[t._v("HWE: Heterogeneous Word Embedding")]),a("p",[t._v("2017-2018")])]),a("p",[t._v("\n      A general and flexible framework of word embeddings to incorporate each type (e.g. word-sense, part-of-speech, topic) of contextual feature for learning feature-specific word embeddings in an explicit fashion.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/icsc_2019_hwe.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (ICSC 2019)\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas",disabled:""}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/hwe",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Card3",{attrs:{id:"project-cosmel"}},[a("header",[a("h4",[t._v("CosmEL: Cosmetic Entity Linking")]),a("p",[t._v("2017-2018")])]),a("p",[t._v("\n      An industrial-academic project with "),a("b-link",{attrs:{to:"//www.pixnet.net",target:"_blank"}},[t._v("PIXNET")]),t._v(". Cosmetics domain entity linking."),a("br"),t._v("\n      My work including data analysis, data preprocessing, programming design, model design, Python code implementation.\n    ")],1)]),a("Card3",{attrs:{id:"project-isvd"}},[a("header",[a("h4",[t._v("iSVD: Integrated Singular Value Decomposition Algorithm")]),a("p",[t._v("2015-Present")])]),a("p",[t._v("\n      iSVD is a parallel low-rank approximate singular value decomposition solver using integrated randomized algorithm for multinode systems."),a("br"),t._v("\n      My work including algorithm modifying, programming design, C++ code implementation.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2017_isvd.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (NTU Thesis)\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//doi.org/10.6342/NTU201702960",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Card3",{attrs:{id:"project-pass"}},[a("header",[a("h4",[t._v("PaSS: Particle Swarm Stepwise Algorithm")]),a("p",[t._v("2013-2015")])]),a("p",[t._v("\n      PaSS is a parallel stochastic search algorithm for information criterion variable selection problems on multinode systems."),a("br"),t._v("\n      My work including programming design, CUDA & C++ code implementation, non-general model developing and implementation.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ieee_cse_2016_pass.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (CIT 2016)\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//doi.org/10.1109/CIT.2016.101",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/pass",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Collapse",{ref:"project-more",staticClass:"mt-4",attrs:{name:"project-more"}},[a("Card3",{attrs:{id:"project-voting"}},[a("header",[a("h4",[t._v("Ordinal Versus Cardinal Voting Rules")]),a("p",[t._v("2016")])]),a("p",[t._v("\n        A research about the performance and incentive compatibility of voting rules in a Bayesian environment."),a("br"),t._v("\n        My work including numerical analysis and MATLAB code implementation.\n      ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/other/geb_2017_voting.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n            Paper (GEB 2017)\n          ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//doi.org/10.1016/j.geb.2017.04.012",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1)],1)],1),a("Card3",{attrs:{id:"project-his"}},[a("header",[a("h4",[t._v("HiS: Hierarchical Schur Solver")]),a("p",[t._v("2015-2016")])]),a("p",[t._v("\n        HiS is a direct linear solver exploiting the sparse structure of multilevel nested dissection matrix to maximize parallel scalability on multinode GPU clusters."),a("br"),t._v("\n        My work including algorithm modifying, C++ code implementation, matrix structure and operation forming.\n      ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/other/ntu_thesis_2016_his.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n            Paper\n          ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://www.airitilibrary.com/Publication/alDetailedMesh1?DocID=U0001-2412201522263000",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//bitbucket.org/nanaHa1003/his",target:"_blank","fa-icon":"bitbucket","fa-style":"fab"}},[t._v("\n          BitBucket\n        ")])],1)],1),a("Card3",{attrs:{id:"project-hhis"}},[a("header",[a("h4",[t._v("hHiS: Hybrid Hierarchical Schur Solver")]),a("p",[t._v("2014-2016")])]),a("p",[t._v("\n        hHiS is a parallel linear system solver for sparse symmetric positive definite matrices using direct/iterative method on each parts of k-way vertex partitioning to maximize parallel scalability on multinode systems."),a("br"),t._v("\n        My work including theoretical researching, algorithm modifying, programming design, C++ code implementation.\n      ")])]),a("Card3",{attrs:{id:"project-nbfmm"}},[a("header",[a("h4",[t._v("NBFMM: N-Body Simulation Using Fast Multipole Method with CUDA GPU")]),a("p",[t._v("2016")])]),a("p",[t._v("\n        An n-body simulation using fast multipole method (FMM) with GPU acceleration."),a("br"),t._v("\n        My work including project leading, C++ code implementation, CUDA GPU code implementation, and data structure designing.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//sites.google.com/site/nbfmmprojectforgpuprograming",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/nbfmm",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1),a("Card3",{attrs:{id:"project-dsa"}},[a("header",[a("h4",[t._v("Bank Account Management System Project")]),a("p",[t._v("2015")])]),a("p",[t._v("\n        A bank account management system."),a("br"),t._v("\n        My work including programming design, data structure developing, C++ code implementation, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/dsa_final",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1),a("Card3",{attrs:{id:"project-wtf"}},[a("header",[a("h4",[t._v("Wonderful Transportation Forming")]),a("p",[t._v("2013")])]),a("p",[t._v("\n        A city traffic simulation of pedestrian, vehicle, and public transportation."),a("br"),t._v("\n        My work including programming design, data structure developing, Java code implementation, MATLAB GUI code modifying, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//sites.google.com/site/wonderfultf",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")])],1)],1),a("Card3",{attrs:{id:"project-assembly"}},[a("header",[a("h4",[t._v("The Matrix Project")]),a("p",[t._v("2012")])]),a("p",[t._v("\n        A linear algebra library implemented with assembly language."),a("br"),t._v("\n        My work including programming design, data structure developing, Intel assembly code & main C code implementation, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//sites.google.com/site/tragedytriangle",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")])],1)],1),a("Card3",[a("header",{attrs:{id:"project-chessai"}},[a("h4",[t._v("Chess AI Project")]),a("p",[t._v("2007")])]),a("p",[t._v("\n        A chess game program with an AI that can defeat me."),a("br"),t._v("\n        My work including programming design, algorithm developing, data structure developing, C & Java code implementation, and Java GUI modifying.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/chess_ai",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1)],1)],2)},Dt=[],Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Card3 p-3 p-lg-4"},[t._t("default")],2)},Yt=[],Rt={name:"Card3",props:{title:{style:String,default:""},author:{style:String,default:""},publish:{style:String,default:""},imgSrc:String,imgLink:String,imgTarget:{style:String,default:"_blank"}}},Ft=Rt,Jt=(a("89fd"),Object(y["a"])(Ft,Lt,Yt,!1,null,"47a50eaa",null)),Vt=Jt.exports,Kt={name:"Project",components:{Section:tt,Card3:Vt}},Xt=Kt,qt=(a("e261"),Object(y["a"])(Xt,Wt,Dt,!1,null,"6c99f71c",null)),Qt=qt.exports,Zt={name:"Content",components:{About:ut,Education:Ct,Employment:Bt,Publication:Ht,Project:Qt}},te=Zt,ee=(a("0d8e"),Object(y["a"])(te,R,F,!1,null,"898605ce",null)),ae=ee.exports,ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},re=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"container-fluid text-center bg-light w-100 py-3 py-md-4 py-lg-5"},[a("span",{staticClass:"text-muted"},[t._v("© Mu Yang. All rights reserved.")])])}],ie={name:"Footer"},oe=ie,se=Object(y["a"])(oe,ne,re,!1,null,null,null),le=se.exports,ce={name:"Wrapper",components:{SideBar:Y,Content:ae,Footer:le},data:function(){return{is_toggled:!1}},methods:{resetToggle:function(){this.is_toggled=!1}}},ue=ce,fe=(a("b5a2"),Object(y["a"])(ue,N,U,!1,null,"a9f05424",null)),me=fe.exports,pe={name:"app",components:{Wrapper:me}},de=pe,ge=(a("6294"),Object(y["a"])(de,A,G,!1,null,null,null)),be=ge.exports;n["a"].config.productionTip=!1,n["a"].use(r["a"]),n["a"].use(o.a,{duration:1e3}),s["c"].add(l["a"]),s["c"].add(c["a"]),s["c"].add(u["a"]),n["a"].component("font-awesome-icon",f["a"]),n["a"].component("font-awesome-layers",f["b"]),n["a"].component("font-awesome-layers-text",f["c"]),n["a"].component("IconButton",g),n["a"].component("ButtonGroup",C),n["a"].component("Collapse",O),new n["a"]({render:function(t){return t(be)}}).$mount("#app")},"619a":function(t,e,a){},6294:function(t,e,a){"use strict";var n=a("7fba"),r=a.n(n);r.a},"7d19":function(t,e,a){"use strict";var n=a("cdbb"),r=a.n(n);r.a},"7fba":function(t,e,a){},"89fd":function(t,e,a){"use strict";var n=a("b4d6"),r=a.n(n);r.a},"8d56":function(t,e,a){"use strict";var n=a("e156"),r=a.n(n);r.a},"9f8e":function(t,e,a){},ac49:function(t,e,a){"use strict";var n=a("46f1"),r=a.n(n);r.a},b027:function(t,e,a){},b4d6:function(t,e,a){},b5a2:function(t,e,a){"use strict";var n=a("32b6"),r=a.n(n);r.a},b8b3:function(t,e,a){},bc07:function(t,e,a){"use strict";var n=a("b8b3"),r=a.n(n);r.a},cdbb:function(t,e,a){},e156:function(t,e,a){},e259:function(t,e,a){"use strict";var n=a("fbc9"),r=a.n(n);r.a},e261:function(t,e,a){"use strict";var n=a("b027"),r=a.n(n);r.a},fbc9:function(t,e,a){}});
//# sourceMappingURL=app.5941d4ec.js.map