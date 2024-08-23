var V=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var H=(a,r,n)=>r in a?V(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,p=(a,r)=>{for(var n in r||(r={}))U.call(r,n)&&H(a,n,r[n]);if(j)for(var n of j(r))D.call(r,n)&&H(a,n,r[n]);return a},f=(a,r)=>J(a,K(r));var y=(a,r)=>{var n={};for(var l in a)U.call(a,l)&&r.indexOf(l)<0&&(n[l]=a[l]);if(a!=null&&j)for(var l of j(a))r.indexOf(l)<0&&D.call(a,l)&&(n[l]=a[l]);return n};import{r as h,j as i,a as e,F as T,f as X,b as v,c as M,d as Z,e as w,R as S,g as N,h as q,B as R,i as B,k as Q,I as W,l as G,O as ee,T as ie,m as Y,n as re,o as ne,C as F,p as u,q as te,s as I,t as _,u as $,v as ae,w as P,x as oe,y as le,z as ce}from"./vendor.1ee9ec47.js";const se=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};se();const de=[{icon:X,href:"mailto:emfomy@gmail.com",text:"emfomy@gmail.com"},{icon:v,href:"//github.com/emfomy",text:"github.com/emfomy"},{icon:M,href:"//pypi.org/user/emfomy",text:"pypi.org/user/emfomy"},{icon:Z,href:"//www.linkedin.com/in/emfomy",text:"www.linkedin.com/in/emfomy"}];function he(){const[a,r]=h.exports.useState(null),n=c=>r(c),l=()=>r(null),o=de.map(({icon:c,href:s,text:g},m)=>e("a",{href:s,target:"_blank",rel:"noreferrer",onMouseEnter:()=>n(g),onTouchStart:()=>n(g),children:e(T,{className:"fa-fw",icon:c})},m));return i("div",{className:"d-block",onMouseLeave:l,children:[e("div",{className:"navbar-text text-nowrap p-0",style:{height:"2rem"},children:a!=null?a:"\xA0"}),e("div",{className:"d-flex justify-content-around my-1",children:o})]})}function me({children:a}){return i(w,{children:[e("div",{className:"navbar-brand p-0 mx-0 my-3",children:e("a",{href:"/",children:e("img",{src:"/img/avatar.jpg",className:"img rounded-circle d-block w-50 mx-auto"})})}),i("div",{className:"navbar-text px-3 py-0",children:[e("h3",{children:"Mu Yang"}),e("p",{children:"System Engineer Lead"}),e("hr",{})]}),a]})}function pe({children:a}){return i("div",{className:"navbar navbar-light bg-milk-light text-center d-flex flex-column min-h-100 p-3",children:[e("div",{className:"flex-fill w-100",children:e(me,{children:a})}),i("div",{className:"w-100 mt-3",children:[e(he,{}),e("hr",{}),e("div",{className:"small text-muted",children:"\xA9 Mu Yang. All rights reserved."})]})]})}const ue=S.forwardRef(function({sidebar:r,children:n},l){const[o,c]=h.exports.useState(!1),s=()=>c(!1);return h.exports.useImperativeHandle(l,()=>({resetToggled:s})),i("div",{id:"app",children:[e("button",{id:"toggler",className:"btn btn-light navbar-light",type:"button",onClick:()=>c(!o),children:e("span",{className:"navbar-toggler-icon"})}),i("div",{id:"container",className:N({toggled:o}),children:[e("div",{id:"sidebar",children:e(pe,{children:r})}),e("div",{id:"content",children:n})]}),e("a",{id:"back",className:"lh-1 p-0",href:"#app",onClick:s,children:e(T,{className:"fa-2x text-primary",icon:q})})]})}),ge="_Content_10cra_1";var fe={Content:ge};const be="_Opener_uw2of_1",ve="_collapsed_uw2of_1",ye="_OpenerText_uw2of_4",we="_OpenerIcon1_uw2of_18",_e="_OpenerIcon2_uw2of_19";var A={Opener:be,collapsed:ve,OpenerText:ye,OpenerIcon1:we,OpenerIcon2:_e};const ke=S.forwardRef(function({children:r},n){const[l,o]=h.exports.useState(!1);return h.exports.useImperativeHandle(n,()=>({setOpen:o})),i("div",{className:"border rounded",children:[i(R,{onClick:()=>o(!l),className:N(A.Opener,{[A.collapsed]:!l},"text-center","text-dark","fw-bold","w-100"),size:"sm",variant:"milk-light",children:[e(T,{className:A.OpenerIcon1,icon:B}),e("span",{className:N(A.OpenerText,"mx-2")}),e(T,{className:A.OpenerIcon2,icon:B})]}),e(Q,{in:l,children:e("div",{children:r})})]})}),z=S.forwardRef(function(g,s){var m=g,{className:r,header:n,children:l,extra:o}=m,c=y(m,["className","header","children","extra"]);const b=h.exports.useRef(null);h.exports.useImperativeHandle(s,()=>({expandCollapse:()=>{var O;return(O=b.current)==null?void 0:O.setOpen(!0)}}));const x=o?e(ke,{ref:b,children:o}):null;return i("div",f(p({},c),{className:`Section p-3 p-md-4 p-lg-5 ${r}`,children:[e("header",{className:"mb-3 mb-md-4 text-center",children:n}),l,x]}))}),Se=S.forwardRef(function(r,n){const l=i(w,{children:[e("h1",{children:"Mu Yang"}),i("h5",{children:["System Engineer Lead,"," ",e("a",{href:"https://ailabs.tw",target:"_blank",rel:"noreferrer",children:"Taiwan AI Labs"})]})]}),o=e(w,{children:e("p",{children:"A data engineer and full\u2010stack developer with a research background in both computer science and applied mathematics domains. Skilled in front-end web design, deep learning, and parallel computing researches. Experienced in computer cluster formation and maintenance."})});return e(z,f(p({},r),{ref:n,header:l,children:o}))}),Ce="_Logo_1ux5m_1";var xe={Logo:Ce};function E(c){var s=c,{imgSrc:a,icon:r,children:n,className:l}=s,o=y(s,["imgSrc","icon","children","className"]);const g=a?e(W,{src:a,className:"w-100"}):r?e(T,{className:"w-100 text-milk-dark",icon:r,size:"2x"}):null;return i("div",f(p({},o),{className:`CardA px-3 d-flex my-1 my-md-3 ${l}`,children:[e("div",{className:`${xe.Logo} d-flex align-items-center justify-content-center me-3 my-1`,children:g}),e("div",{children:n})]}))}function C(c){var s=c,{year:a,inst:r,title:n,children:l}=s,o=y(s,["year","inst","title","children"]);return i(E,f(p({},o),{children:[i("h4",{children:[a," | ",r,e("br",{}),n]}),e("div",{className:"mb-3",children:l})]}))}const Ne=S.forwardRef(function(r,n){const l=e("h2",{children:"Education"}),o=i(w,{children:[i(C,{year:"2015-2017",title:"Master of Science",inst:"Nat'l. Taiwan Univ.",imgSrc:"/img/logo/ntu_logo.png",children:[e("a",{href:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank",rel:"noreferrer",children:"Institute of Applied Mathematical Sciences"}),",",e("br",{}),"National Taiwan University, Taipei, Taiwan"]}),i(C,{year:"2011-2015",title:"Bachelor of Science",inst:"Nat'l. Taiwan Univ.",imgSrc:"/img/logo/ntu_logo.png",children:[e("a",{href:"http://www.math.ntu.edu.tw/en",target:"_blank",rel:"noreferrer",children:"Department of Mathematics"}),",",e("br",{}),"National Taiwan University, Taipei, Taiwan"]})]});return e(z,f(p({},r),{ref:n,header:l,children:o}))}),Pe=S.forwardRef(function(r,n){const l=e("h2",{children:"Employment"}),o=i(w,{children:[i(C,{year:"2021-Pres.",title:"System Engineer Team Lead",inst:"Taiwan AI Labs",imgSrc:"/img/logo/ailabs_logo.png",children:[e("a",{href:"https://ailabs.tw",target:"_blank",rel:"noreferrer",children:"Taiwan AI Labs"}),e("br",{}),"Taipei, Taiwan"]}),i(C,{year:"2017-2021",title:"Research Assistant",inst:"Academia Sinica",imgSrc:"/img/logo/sinica_logo.png",children:[e("a",{href:"https://ckip.iis.sinica.edu.tw",target:"_blank",rel:"noreferrer",children:"CKIP Lab"}),","," ",e("a",{href:"https://www.iis.sinica.edu.tw/en/index.html",target:"_blank",rel:"noreferrer",children:"Institute of Information Science"}),e("br",{}),"Academia Sinica, Taipei, Taiwan"]}),i(C,{year:"2015-2015",title:"Internship",inst:"IBM Corp.",imgSrc:"/img/logo/ibm_logo.png",children:[e("a",{href:"http://www.watson.ibm.com",target:"_blank",rel:"noreferrer",children:"Thomas J. Watson Research Center"}),e("br",{}),"IBM, Yorktown Heights, NY, USA"]})]}),c=i(w,{children:[i(C,{year:"2013-2017",title:"Research Assistant",inst:"Nat'l. Taiwan Univ.",imgSrc:"/img/logo/ntu_logo.png",children:["Supervised by Prof. Weichung Wang",e("br",{}),e("a",{href:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank",rel:"noreferrer",children:"Institute of Applied Mathematical Sciences"}),", National Taiwan University, Taipei, Taiwan",e("br",{}),e("i",{children:"conducting researches of high-performance parallel computing on hybrid CPU-GPU structures"})]}),i(C,{year:"2016-2016",title:"Research Assistant",inst:"Nat'l. Taiwan Univ.",imgSrc:"/img/logo/ntu_logo.png",children:["Supervised by Prof. Semin Kim",e("br",{}),e("a",{href:"http://www.econ.ntu.edu.tw/?locale=en",target:"_blank",rel:"noreferrer",children:"Department of Economics"}),", National Taiwan University, Taipei, Taiwan",e("br",{}),e("i",{children:"conducting researches of ordinal versus cardinal voting rules"})]}),e(C,{year:"2015-2017",title:"Teaching Assistant",inst:"Nat'l. Taiwan Univ.",imgSrc:"/img/logo/ntu_logo.png",children:i("ul",{className:"ps-4",children:[e("li",{children:"High Performance Computing and Deep Learning (2017S)"}),e("li",{children:"Computational Methods and Tools for Data Science (2016F)"}),e("li",{children:"Introduction to Scientific Computing (2016F)"}),e("li",{children:"Introduction to Computational Mathematics (2016S)"}),e("li",{children:"Software Development for Computational and Data Science (2015F)"}),e("li",{children:"Numerical Linear Algebra (2015F)"}),e("li",{children:"Calculus (2016S, 2017S)"}),e("li",{children:"Computer Programming (2015F, 2016F)"}),e("li",{children:"Mathematic Software (2015S)"})]})})]});return e(z,f(p({},r),{ref:n,header:l,extra:c,children:o}))});function Te(l){var o=l,{size:a,tooltip:r}=o,n=y(o,["size","tooltip"]);const c=a;return r?e(ee,{placement:"top",overlay:e(ie,{children:r}),children:m=>{var b=m,{ref:s}=b,g=y(b,["ref"]);return e(R,p(f(p({ref:s},g),{size:c}),n))}}):e(R,p({size:c},n))}function t(l){var o=l,{icon:a,children:r}=o,n=y(o,["icon","children"]);return i(Te,f(p({},n),{children:[e(T,{icon:a,className:N({"me-1":!!r})}),r]}))}function k({href:a,size:r,title:n="External Link"}){return e(t,{tooltip:n,size:r,variant:"outline-primary",href:a,target:"_blank",icon:G})}const ze=S.forwardRef(function(r,n){const{scrollTo:l}=h.exports.useContext(L),o=e("h2",{children:"Awards & Certificates"}),c=i(w,{children:[e(E,{id:"award-fgc",imgSrc:"/img/award/fgc_logo.png",children:i("header",{children:[e("h4",{children:"Top 2 Short Answer, Top 3 Multiple Choice, Out of 143 Teams."}),i("p",{children:["2018\u20132019, Formosa Grand Challenge (Chinese TOEFL-like listening comprehension QA)."," ",e(t,{size:"xs",variant:"outline-primary",href:"https://www.most.gov.tw/bio/ch/detail?article_uid=8f0715a3-fcf3-4ffb-9920-6245ec14e77b",target:"_blank",icon:G,children:"Official Post"})]})]})}),e(E,{id:"award-tjjw-jsam-2016",icon:Y,children:i("header",{children:[e("h4",{children:"Presentation Excellence Award"}),i("p",{children:["2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics."," ",e(t,{size:"xs",variant:"outline-primary",icon:re,onClick:()=>l("publication","publication-tjjw-jsam-2016-isvd"),children:"Related Workshop"})]})]})}),e(E,{id:"award-academic-ntu",imgSrc:"/img/logo/ntu_logo.png",children:i("header",{children:[e("h4",{children:"Top 1 Academic Excellence Award"}),e("p",{children:"Fall 2011, Department of Mathematics, National Taiwan University"})]})})]});return e(z,f(p({},r),{ref:n,header:o,children:c}))});function Ie(l){var o=l,{children:a,className:r}=o,n=y(o,["children","className"]);return e("div",f(p({},n),{className:`CardB p-3 p-lg-4 ${r}`,children:a}))}function d(g){var m=g,{imgSrc:a,imgSrcSide:r,href:n,target:l="_blank",right:o=!1,children:c}=m,s=y(m,["imgSrc","imgSrcSide","href","target","right","children"]);const b=a?i("picture",{children:[r?e("source",{media:"(min-width: 992px)",srcSet:r}):null,e(W,{rounded:!0,fluid:!0,src:a,className:"w-100"})]}):null;return e(Ie,f(p({},s),{children:i(ne,{className:N({"flex-row-reverse":o}),children:[e(F,{xs:12,lg:4,xl:3,className:"d-flex align-items-center justify-content-center mb-3 mb-lg-0",children:e("a",{href:n,target:l,className:N("image w-75 w-sm-50 w-lg-100",{disabled:!n}),children:b})}),e(F,{xs:12,lg:8,xl:9,children:c})]})}))}const Ae="_Section_14nls_1";var je={Section:Ae};const Me=S.forwardRef(function(o,l){var c=o,{className:r}=c,n=y(c,["className"]);const s=e("h2",{children:"Portfolio"}),g=i(w,{children:[i(d,{id:"portfolio-infodemic",imgSrc:" /img/project/infodemic.png ",href:"https://infodemic.cc",right:!0,children:[i("header",{children:[e("h4",{children:"Infodemic"}),e("p",{children:"2022\u2013Present"})]}),e("p",{children:"Cognitive security in modern warfare: unveiling the battle against disinformation."}),e("p",{children:"It revealing cognitive manipulation, collaborative patterns, and malicious dissemination to safeguard society."}),e("div",{className:"btn-cluster",children:e(t,{size:"sm",variant:"outline-primary",href:"https://infodemic.cc",target:"_blank",icon:u,children:"Website"})})]}),i(d,{id:"portfolio-miin",imgSrc:" /img/project/miin.png ",href:"https://miin.cc",right:!0,children:[i("header",{children:[e("h4",{children:"Miin"}),e("p",{children:"2021\u2013Present"})]}),e("p",{children:"Miin is a brand new project of Taiwan AI Labs."}),e("p",{children:"It begins by understanding events through AI, then takes dynamic sources and opinions into consideration to establish a cross-platform comprehensive view."}),e("p",{children:"We look forward to replacing social biases with diversification. Provide an environment of professionally trusted insights in replace of the polarized infodemic and restore the autonomy of the relationship between viewers and content creators."}),e("div",{className:"btn-cluster",children:e(t,{size:"sm",variant:"outline-primary",href:"https://miin.cc",target:"_blank",icon:u,children:"Website"})})]}),i(d,{id:"portfolio-ckip-transformers",imgSrc:" /img/project/ckip-transformers.png ",href:"https://github.com/emfomy/ckip-transformers",right:!0,children:[i("header",{children:[e("h4",{children:"CKIP Transformers"}),e("p",{children:"2020\u20132022"})]}),e("p",{children:"This project provides traditional Chinese transformers models (including ALBERT, BERT, GPT2) and NLP tools (including word segmentation, part-of-speech tagging, named entity recognition)."}),i("div",{className:"btn-cluster",children:[e(t,{size:"sm",variant:"outline-primary",href:"https://ckip.iis.sinica.edu.tw/service/gpt2",target:"_blank",icon:u,children:"Demo (Text Generation)"}),e(t,{size:"sm",variant:"outline-primary",href:"https://ckip.iis.sinica.edu.tw/service/transformers",target:"_blank",icon:u,children:"Demo (NLP Tools)"}),e(t,{size:"sm",variant:"outline-primary",href:"https://huggingface.co/ckiplab/",target:"_blank",icon:te,children:"Models"}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/ckip-transformers",target:"_blank",icon:v,children:"Github"}),e(t,{size:"sm",variant:"outline-primary",href:"https://pypi.org/project/ckip-transformers",target:"_blank",icon:M,children:"PyPI"}),e(t,{size:"sm",variant:"outline-primary",href:"https://ckip-transformers.readthedocs.io",target:"_blank",icon:I,children:"Docs"})]})]}),i(d,{id:"portfolio-ckiplab",imgSrc:"/img/project/ckiplab.png",href:"https://ckip.iis.sinica.edu.tw",right:!0,children:[i("header",{children:[e("h4",{children:"CKIP Website"}),e("p",{children:"2019\u20132021"})]}),e("p",{children:"A landing website for CKIP Lab."}),e(t,{size:"sm",variant:"outline-primary",href:"https://ckip.iis.sinica.edu.tw",target:"_blank",icon:u,children:"Website"})]}),i(d,{id:"portfolio-ckipnlp",imgSrc:"/img/project/ckipnlp.jpg",href:"https://github.com/ckiplab/ckipnlp",right:!0,children:[i("header",{children:[e("h4",{children:"CKIP CoreNLP"}),e("p",{children:"2018\u20132020"})]}),e("p",{children:"A python package of CKIP CoreNLP toolkits with sentence segmentation, word segmentation, part-of-speech tagging, named-entity recognition, sentence parsing, co-reference resolution."}),i("div",{className:"btn-cluster",children:[e(t,{size:"sm",variant:"outline-primary",href:"https://ckip.iis.sinica.edu.tw/service/corenlp",target:"_blank",icon:u,children:"Demo"}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/ckiplab/ckipnlp",target:"_blank",icon:v,children:"Github"}),e(t,{size:"sm",variant:"outline-primary",href:"https://pypi.org/project/ckipnlp",target:"_blank",icon:M,children:"PyPI"}),e(t,{size:"sm",variant:"outline-primary",href:"https://ckipnlp.readthedocs.io",target:"_blank",icon:I,children:"Docs"})]})]}),i(d,{id:"portfolio-ehownet",imgSrc:"/img/project/ehownet.png",href:"https://ckip.iis.sinica.edu.tw/service/ehnvis",right:!0,children:[i("header",{children:[e("h4",{children:"E-HowNet Toolkit and Visualization"}),e("p",{children:"2018\u20132019"})]}),i("p",{children:["A toolkit (including database and syntax parsing) for",e("a",{href:"http://ehownet.iis.sinica.edu.tw",target:"_blank",rel:"noreferrer",children:"E-HowNet"}),", and its visualization demo."]}),i("div",{className:"btn-cluster",children:[e(t,{size:"sm",variant:"outline-primary",href:"https://ckip.iis.sinica.edu.tw/service/ehnvis",target:"_blank",icon:u,children:"Demo"}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/ckiplab/ehownet",target:"_blank",icon:v,children:"Github"}),e(t,{size:"sm",variant:"outline-primary",href:"https://pypi.org/project/ehownet",target:"_blank",icon:M,children:"PyPI"}),e(t,{size:"sm",variant:"outline-primary",href:"https://ehownet.readthedocs.io",target:"_blank",icon:I,children:"Docs"})]})]}),i(d,{id:"portfolio-cosmel",imgSrc:"/img/project/cosmel.png",href:"/file/paper/lrec_2020_cosmel.pdf",right:!0,children:[i("header",{children:[e("h4",{children:"CosmEL: Cosmetic Entity Linking"}),e("p",{children:"2017\u20132019"})]}),i("p",{children:["A novel entity linking project on cosmetic domain with dataset and baseline.",e("br",{}),"This project is an industrial-academic project with",i("a",{href:"https://www.pixnet.net",target:"_blank",rel:"noreferrer",children:[" ","PIXNET"," "]}),"Corporation."]}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/lrec_2020_cosmel.pdf",target:"_blank",icon:_,children:"Paper (LREC 2020)"}),e(k,{size:"sm",href:"https://www.aclweb.org/anthology/2020.lrec-1.235"})]}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/cosmel",target:"_blank",icon:v,children:"Github"}),e(t,{size:"sm",variant:"outline-primary",href:"https://emfomy.github.io/cosmel-data",target:"_blank",icon:I,children:"Docs"})]})]}),i(d,{id:"portfolio-hwe",href:"/file/paper/icsc_2019_hwe.pdf",right:!0,children:[i("header",{children:[e("h4",{children:"HWE: Heterogeneous Word Embedding"}),e("p",{children:"2017\u20132018"})]}),e("p",{children:"A general and flexible framework of word embeddings to incorporate each type (e.g. word-sense, part-of-speech, topic) of contextual feature for learning feature-specific word embeddings in an explicit fashion."}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/icsc_2019_hwe.pdf",target:"_blank",icon:_,children:"Paper (IEEE ICSC 2019)"}),e(k,{size:"sm",href:"https://doi.org/10.1109/ICOSC.2019.8665508"})]}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/hwe",target:"_blank",icon:v,children:"Github"})]})]}),i(d,{id:"portfolio-isvd",href:"/file/paper/ntu_thesis_2017_isvd.pdf",right:!0,children:[i("header",{children:[e("h4",{children:"iSVD: Integrated Singular Value Decomposition Algorithm"}),e("p",{children:"2015\u20132017"})]}),e("p",{children:"A parallel low-rank approximate singular value decomposition solver using integrated randomized algorithm. Implemented for multinode hybrid CPU-GPU systems."}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2017_isvd.pdf",target:"_blank",icon:_,children:"Paper (NTU Thesis)"}),e(k,{size:"sm",href:"https://doi.org/10.6342/NTU201702960"})]}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/isvd",target:"_blank",icon:v,children:"Github"})]})]}),i(d,{id:"portfolio-pass",imgSrc:"/img/project/pass.png",href:"/file/paper/ieee_cse_2016_pass.pdf",right:!0,children:[i("header",{children:[e("h4",{children:"PaSS: Particle Swarm Stepwise Algorithm"}),e("p",{children:"2013\u20132015"})]}),e("p",{children:"A parallel stochastic search algorithm for information criterion variable selection problems. Implemented for multinode hybrid CPU-GPU systems."}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/ieee_cse_2016_pass.pdf",target:"_blank",icon:_,children:"Paper (IEEE CIT 2016)"}),e(k,{size:"sm",href:"https://doi.org/10.1109/CIT.2016.101"})]}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/pass",target:"_blank",icon:v,children:"Github"})]})]})]}),m=i(w,{children:[i(d,{id:"portfolio-voting",imgSrc:"/img/project/voting.jpg",href:"/file/paper/geb_2017_voting.pdf",right:!0,children:[i("header",{children:[e("h4",{children:"Ordinal Versus Cardinal Voting Rules"}),e("p",{children:"2016"})]}),i("p",{children:["A research about the performance and incentive compatibility of voting rules in a Bayesian environment.",e("br",{}),"My work including numerical analysis and MATLAB code implementation."]}),e("div",{className:"btn-cluster",children:i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/geb_2017_voting.pdf",target:"_blank",icon:_,children:"Paper (GEB 2017)"}),e(k,{size:"sm",href:"https://doi.org/10.1016/j.geb.2017.04.012"})]})})]}),i(d,{id:"portfolio-his",imgSrc:"/img/project/his.jpg",href:"/file/paper/ntu_thesis_2016_his.pdf",right:!0,children:[i("header",{children:[e("h4",{children:"HiS: Hierarchical Schur Solver"}),e("p",{children:"2015\u20132016"})]}),i("p",{children:["A direct linear solver exploiting the sparse structure of multilevel nested dissection matrix to maximize parallel scalability on multinode GPU clusters.",e("br",{}),"My work including algorithm modifying, C++ code implementation, matrix structure and operation forming."]}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2016_his.pdf",target:"_blank",icon:_,children:"Paper"}),e(k,{size:"sm",href:"http://www.airitilibrary.com/Publication/alDetailedMesh1?DocID=U0001-2412201522263000"})]}),e(t,{size:"sm",variant:"outline-primary",href:"https://bitbucket.org/nanaHa1003/his",target:"_blank",icon:$,children:"BitBucket"})]})]}),i(d,{id:"portfolio-hhis",imgSrc:"/img/project/hhis.png",href:"https://bitbucket.org/emfomy/lorasc",right:!0,children:[i("header",{children:[e("h4",{children:"hHiS: Hybrid Hierarchical Schur Solver"}),e("p",{children:"2014\u20132016"})]}),i("p",{children:["A parallel linear solver for sparse symmetric positive definite matrices using direct/iterative method on each parts of k-way vertex partitioning to maximize parallel scalability on multinode systems.",e("br",{}),"My work including theoretical researching, algorithm modifying, programming design, C++ code implementation."]}),e("div",{className:"btn-cluster",children:e(t,{size:"sm",variant:"outline-primary",href:"https://bitbucket.org/emfomy/lorasc",target:"_blank",icon:$,children:"BitBucket"})})]}),i(d,{id:"portfolio-nbfmm",imgSrc:"/img/project/nbfmm.png",href:"https://sites.google.com/site/nbfmmprojectforgpuprograming",right:!0,children:[i("header",{children:[e("h4",{children:"NBFMM: N-Body Simulation Using Fast Multipole Method with CUDA GPU"}),e("p",{children:"2016"})]}),i("p",{children:["An n-body simulation using fast multipole method (FMM) with GPU acceleration.",e("br",{}),"My work including project leading, C++ code implementation, CUDA GPU code implementation, and data structure designing."]}),i("div",{className:"btn-cluster",children:[e(t,{size:"sm",variant:"outline-primary",href:"https://sites.google.com/site/nbfmmprojectforgpuprograming",target:"_blank",icon:u,children:"Website"}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/nbfmm",target:"_blank",icon:v,children:"GitHub"}),e(t,{size:"sm",variant:"outline-primary",href:"http://emfomy.github.io/nbfmm",target:"_blank",icon:I,children:"Docs"})]})]}),i(d,{id:"portfolio-mandelbrot",imgSrc:"/img/project/mandelbrot.jpg",href:"https://www.youtube.com/watch?v=BsRrcccV-X4",right:!0,children:[i("header",{children:[e("h4",{children:"Mandelbrot Set Zooming"}),e("p",{children:"2016"})]}),e("p",{children:"Mandelbrot Set Zooming using CUDA GPU acceleration."}),i("div",{className:"btn-cluster",children:[e(t,{size:"sm",variant:"outline-primary",href:"https://www.youtube.com/watch?v=BsRrcccV-X4",target:"_blank",icon:ae,children:"Video"}),e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/gpgpu/tree/master/lab2",target:"_blank",icon:v,children:"GitHub"})]})]}),i(d,{id:"portfolio-dsa",imgSrc:"/img/project/dsa.jpg",href:"https://github.com/emfomy/dsa_final",right:!0,children:[i("header",{children:[e("h4",{children:"Bank Account Management System Project"}),e("p",{children:"2015"})]}),i("p",{children:["A bank account management system.",e("br",{}),"My work including programming design, data structure developing, C++ code implementation, and team management."]}),e("div",{className:"btn-cluster",children:e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/dsa_final",target:"_blank",icon:v,children:"GitHub"})})]}),i(d,{id:"portfolio-wonderfultf",imgSrc:"/img/project/wonderfultf.jpg",href:"https://sites.google.com/site/wonderfultf",right:!0,children:[i("header",{children:[e("h4",{children:"Wonderful Transportation Forming"}),e("p",{children:"2013"})]}),i("p",{children:["A city traffic simulation of pedestrian, vehicle, and public transportation.",e("br",{}),"My work including programming design, data structure developing, Java code implementation, MATLAB GUI code modifying, and team management."]}),e("div",{className:"btn-cluster",children:e(t,{size:"sm",variant:"outline-primary",href:"https://sites.google.com/site/wonderfultf",target:"_blank",icon:u,children:"Website"})})]}),i(d,{id:"portfolio-assembly",imgSrc:"/img/project/assembly.jpg",href:"https://github.com/emfomy/tragedytriangle",right:!0,children:[i("header",{children:[e("h4",{children:"The Matrix Project"}),e("p",{children:"2012"})]}),i("p",{children:["A linear algebra library implemented with assembly language.",e("br",{}),"My work including programming design, data structure developing, Intel assembly code & main C code implementation, and team management."]}),e("div",{className:"btn-cluster",children:e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/tragedytriangle",target:"_blank",icon:u,children:"Website"})})]}),i(d,{id:"portfolio-chessai",imgSrc:"/img/project/chessai.jpg",href:"https://github.com/emfomy/chess_ai",right:!0,children:[i("header",{children:[e("h4",{children:"Chess AI Project"}),e("p",{children:"2007"})]}),i("p",{children:["A chess game program with an AI that can defeat me.",e("br",{}),"My work including programming design, algorithm developing, data structure developing, C & Java code implementation, and Java GUI modifying."]}),e("div",{className:"btn-cluster",children:e(t,{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/chess_ai",target:"_blank",icon:v,children:"GitHub"})})]})]});return e(z,f(p({},n),{ref:l,className:`${je.Section} ${r}`,header:s,extra:m,children:g}))}),Ee="_Section_14nls_1";var Re={Section:Ee};const Le=S.forwardRef(function(o,l){var c=o,{className:r}=c,n=y(c,["className"]);const{scrollTo:s}=h.exports.useContext(L),g=e("h2",{children:"Publications & Presentations"}),m=i(w,{children:[i(d,{id:"publication-lrec-2020-cosmel",href:"https://lrec2020.lrec-conf.org",imgSrc:"/img/venue/lrec_2020.jpg",imgSrcSide:"/img/venue/lrec_2020_sm.jpg",children:[i("header",{children:[e("h4",{children:"Headword-Oriented Entity Linking: A New Entity Linking Task with Dataset and Baseline"}),i("p",{children:[e("strong",{children:"Mu Yang"}),", Chi-Yen Chen, Yi-Hui Lee, Qian-Hui Zeng, Wei-Yun Ma, Chen-Yang Shih, Wei-Jhih Chen",e("br",{}),"2020, 12th International Conference on Language Resources and Evaluation (LREC\u201920)"]})]}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/lrec_2020_cosmel.pdf",target:"_blank",icon:_,children:"Paper"}),e(k,{size:"sm",href:"https://www.aclweb.org/anthology/2020.lrec-1.235"})]}),e(t,{size:"sm",variant:"outline-primary",href:"https://lrec2020.lrec-conf.org",target:"_blank",icon:u,children:"Conference"}),e(t,{size:"sm",variant:"outline-primary",icon:P,onClick:()=>s("portfolio","portfolio-cosmel"),children:"Related Project"})]})]}),i(d,{id:"publication-icsc-2019-hwe",href:"https://semanticcomputing.wixsite.com/icsc-2019",imgSrc:"/img/venue/icsc_2019.png",children:[i("header",{children:[e("h4",{children:"HWE: Word Embedding with Heterogeneous Features"}),i("p",{children:["Jhih-Sheng Fan, ",e("strong",{children:"Mu Yang"}),", Peng-Hsuan Li, Wei-Yun Ma",e("br",{}),"2019, 13th IEEE International Conference on Semantic Computing (IEEE-ICSC\u201919)"]})]}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/icsc_2019_hwe.pdf",target:"_blank",icon:_,children:"Paper"}),e(k,{size:"sm",href:"https://doi.org/10.1109/ICOSC.2019.8665508"})]}),e(t,{size:"sm",variant:"outline-primary",href:"https://semanticcomputing.wixsite.com/icsc-2019",target:"_blank",icon:u,children:"Conference"}),e(t,{size:"sm",variant:"outline-primary",icon:P,onClick:()=>s("portfolio","portfolio-hwe"),children:"Related Project"})]})]}),i(d,{id:"publication-ieee-cit-2016-pass",href:"http://nsclab.org/cit2016",imgSrc:"/img/venue/ieee_cit_2016.png",children:[i("header",{children:[e("h4",{children:"Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU Clusters"}),i("p",{children:[e("strong",{children:"Mu Yang"}),", Ray-Bing Chen, I-Hsin Chung, Weichung Wang",e("br",{}),"2016, 16th IEEE International Conference on Computer and Information Technology (IEEE-CIT\u201916)"]})]}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/ieee_cse_2016_pass.pdf",target:"_blank",icon:_,children:"Paper"}),e(k,{size:"sm",href:"https://doi.org/10.1109/CIT.2016.101"})]}),e(t,{size:"sm",variant:"outline-primary",href:"http://nsclab.org/cit2016",target:"_blank",icon:u,children:"Conference"}),e(t,{size:"sm",variant:"outline-primary",icon:P,onClick:()=>s("portfolio","portfolio-pass"),children:"Related Project"})]})]}),i(d,{id:"publication-ntu-thesis-isvd",href:"https://doi.org/10.6342/NTU201702960",imgSrc:"/img/logo/ntu_banner.png",imgSrcSide:"/img/logo/ntu_logo.png",children:[i("header",{children:[e("h4",{children:"Highly Scalable Parallelism of Integrated Randomized Singular Value Decomposition with Big Data Applications"}),i("p",{children:[e("strong",{children:"Mu Yang"}),e("br",{}),"2017, Master\u2019s Thesis, National Taiwan University"]})]}),i("div",{className:"btn-cluster",children:[i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2017_isvd.pdf",target:"_blank",icon:_,children:"Paper"}),e(k,{size:"sm",href:"https://doi.org/10.6342/NTU201702960"})]}),e(t,{size:"sm",variant:"outline-primary",icon:P,onClick:()=>s("portfolio","portfolio-isvd"),children:"Related Project"})]})]}),i(d,{id:"publication-arxiv-2021-inversemv",href:"https://arxiv.org/abs/2112.15320",children:[i("header",{children:[e("h4",{children:"InverseMV: Composing Piano Scores with a Convolutional Video-Music Transformer"}),i("p",{children:["Chin-Tung Lin, ",e("strong",{children:"Mu Yang"}),e("br",{}),"2021, arXiv"]})]}),e("div",{className:"btn-cluster",children:i("div",{className:"btn-group",children:[e(t,{size:"sm",variant:"outline-primary",href:"/file/paper/arxiv_2021_inversemv.pdf",target:"_blank",icon:_,children:"Paper"}),e(k,{size:"sm",href:"https://arxiv.org/abs/2112.15320"})]})})]})]}),b=i(w,{children:[i(d,{id:"publication-apcom-2019-isvd",imgSrc:"img/venue/apcom_2019.png",href:"http://www.apcom2019.org",children:[i("header",{children:[e("h4",{children:"Parallelized Integration of Multiple Random Sketches from Randomized Singular Value Decomposition with Multi-Level Pairwise Integration Method"}),i("p",{children:[e("strong",{children:"Mu Yang"}),", Dawei Chang, Weichung Wang, Su-Yuen Huang, Ting-Li Chen",e("br",{}),"2019, 7th Asian Pacific Congress on Computational Mechanics (APCOM\u201919)"]})]}),i("div",{className:"btn-cluster",children:[e(t,{size:"sm",variant:"outline-primary",href:"http://www.apcom2019.org",target:"_blank",icon:u,children:"Conference"}),e(t,{size:"sm",variant:"outline-primary",icon:P,onClick:()=>s("portfolio","portfolio-isvd"),children:"Related Project"})]})]}),i(d,{id:"publication-siam-cse-2017-isvd",imgSrc:"/img/venue/siam_cse_2017.jpg",href:"https://archive.siam.org/meetings/cse17/",children:[i("header",{children:[e("h4",{children:"Parallel Implementations of Integrated Singular Value Decomposition (iSVD)"}),i("p",{children:[e("strong",{children:"Mu Yang"}),", Su-Yun Huang, Ting-Li Chen, Weichung Wang",e("br",{}),"2017, 9th SIAM Conference on Computational Science and Engineering (SIAM CSE\u201917)"]})]}),i("div",{className:"btn-cluster",children:[e(t,{size:"sm",variant:"outline-primary",href:"https://archive.siam.org/meetings/cse17/",target:"_blank",icon:u,children:"Conference"}),e(t,{size:"sm",variant:"outline-primary",icon:P,onClick:()=>s("portfolio","portfolio-isvd"),children:"Related Project"})]})]}),i(d,{id:"publication-tjjw-jsam-2016-isvd",imgSrc:"/img/venue/tjjw_jsam_2016.png",href:"http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54",children:[i("header",{children:[e("h4",{children:"A Parallel and Hybrid Sparse Linear System Solver"}),i("p",{children:[e("strong",{children:"Mu Yang"}),", Weichung Wang",e("br",{}),"2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics"]})]}),i("div",{className:"btn-cluster",children:[e(t,{size:"sm",variant:"outline-primary",href:"http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54",target:"_blank",icon:u,children:"Workshop"}),e(t,{tooltip:"Presentation Excellence Award",size:"sm",variant:"outline-primary",icon:Y,children:"Award"}),e(t,{size:"sm",variant:"outline-primary",icon:P,onClick:()=>s("portfolio","portfolio-hhis"),children:"Related Project"})]})]})]});return e(z,f(p({},n),{ref:l,className:`${Re.Section} ${r}`,header:g,extra:b,children:m}))});function Oe(){return{about:{text:"About",ref:h.exports.useRef(null)},experience:{text:"Experience",ref:h.exports.useRef(null)},publication:{text:"Publications",ref:h.exports.useRef(null)},honor:{text:"Honors",ref:h.exports.useRef(null)},portfolio:{text:"Portfolio",ref:h.exports.useRef(null)}}}function Ue(){return{about:h.exports.useRef(null),education:h.exports.useRef(null),employment:h.exports.useRef(null),publication:h.exports.useRef(null),honor:h.exports.useRef(null),portfolio:h.exports.useRef(null)}}const L=h.exports.createContext({scrollTo:(a,r)=>{}});function De(){var g;const a=h.exports.useRef(null),r=Oe(),n=Ue(),l=(m,b)=>{var x;(x=n[m].current)==null||x.expandCollapse(),setTimeout(()=>le.scrollTo(b,{duration:500}),150)},o=oe({sectionElementRefs:Object.values(r).map(({ref:m})=>m),offsetPx:-80}),c=(g=Object.keys(r)[o])!=null?g:null,s=Object.entries(r).map(([m,{text:b}])=>e("li",{className:"nav-item",children:e("a",{className:N("nav-link",{active:m===c}),href:`#${m}`,onClick:()=>{var x;return(x=a.current)==null?void 0:x.resetToggled()},children:b})},m));return e(ue,{ref:a,sidebar:e("ul",{className:"nav nav-pills flex-column",children:s}),children:e(L.Provider,{value:{scrollTo:l},children:i("div",{className:`${fe.Content} container px-0 px-md-3`,children:[e("span",{id:"about",ref:r.about.ref}),e(Se,{ref:n.about,className:"SectionFirst"}),e("span",{id:"experience",ref:r.experience.ref}),e("div",{className:"container",children:i("div",{className:"row",children:[e(Ne,{ref:n.education,className:"col-12 col-lg-6"}),e(Pe,{ref:n.employment,className:"col-12 col-lg-6"})]})}),e("span",{id:"publication",ref:r.publication.ref}),e(Le,{ref:n.publication}),e("span",{id:"honor",ref:r.honor.ref}),e(ze,{ref:n.honor}),e("span",{id:"portfolio",ref:r.portfolio.ref}),e(Me,{ref:n.portfolio})]})})})}ce.render(e(S.StrictMode,{children:e(De,{})}),document.getElementById("root"));
