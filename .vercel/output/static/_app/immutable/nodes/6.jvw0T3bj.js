import{s as Ce,f as V,h as L,j as z,e as m,k as j,i as g,B as Fe,w as le,x as se,b as S,d as D,m as B,t as x,p as T,q as W,C as q,o as K,l as ne,D as Qe,r as Ge,v as Je}from"../chunks/scheduler.lHPrymrU.js";import{S as ye,i as Ee,c as k,b as v,m as C,t as d,a as b,d as y,e as ae,g as oe,f as fe}from"../chunks/index.B-dY1sAa.js";import{T as Ke,a as Ue,b as We,M as ie,D as me,B as Xe,c as pe,P as Ye,C as Ze,d as _e,F as et,e as X,E as tt,f as nt,g as rt,u as Pe,h as Ie,o as Ne,i as Me,j as Ae,k as Se}from"../chunks/TableSearch.HcLKzS7f.js";import{S as lt,B as R}from"../chunks/Button.pvRqUbks.js";import{C as te}from"../chunks/Checkbox.B9FIx7Df.js";import{L as st,I as at}from"../chunks/Input.NZTm-3Da.js";import{g as ot,u as ft,i as $t,d as ct}from"../chunks/Categoriesdb.mSwMA0Rf.js";function ge(s,e,t){const n=s.slice();return n[45]=e[t],n}function de(s,e,t){const n=s.slice();return n[45]=e[t],n}function he(s,e,t){const n=s.slice();return n[42]=e[t],n}function ut(s){let e;return{c(){e=x("Nombre")},l(t){e=T(t,"Nombre")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function it(s){let e;return{c(){e=x("Acciones")},l(t){e=T(t,"Acciones")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function mt(s){let e,t,n,r;return e=new pe({props:{padding:"px-4 py-3",scope:"col",$$slots:{default:[ut]},$$scope:{ctx:s}}}),n=new pe({props:{class:"justify-end flex",padding:"px-4 py-3",scope:"col",$$slots:{default:[it]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=S(),k(n.$$.fragment)},l(l){v(e.$$.fragment,l),t=D(l),v(n.$$.fragment,l)},m(l,o){C(e,l,o),g(l,t,o),C(n,l,o),r=!0},p(l,o){const a={};o[1]&524288&&(a.$$scope={dirty:o,ctx:l}),e.$set(a);const f={};o[1]&524288&&(f.$$scope={dirty:o,ctx:l}),n.$set(f)},i(l){r||(d(e.$$.fragment,l),d(n.$$.fragment,l),r=!0)},o(l){b(e.$$.fragment,l),b(n.$$.fragment,l),r=!1},d(l){l&&m(t),y(e,l),y(n,l)}}}function pt(s){let e=[],t=new Map,n,r,l=X(s[13]);const o=a=>a[45].id;for(let a=0;a<l.length;a+=1){let f=ge(s,l,a),$=o(f);t.set($,e[a]=be($,f))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=q()},l(a){for(let f=0;f<e.length;f+=1)e[f].l(a);n=q()},m(a,f){for(let $=0;$<e.length;$+=1)e[$]&&e[$].m(a,f);g(a,n,f),r=!0},p(a,f){f[0]&25174016&&(l=X(a[13]),oe(),e=Pe(e,f,o,1,a,l,t,n.parentNode,Ne,be,n,ge),fe())},i(a){if(!r){for(let f=0;f<l.length;f+=1)d(e[f]);r=!0}},o(a){for(let f=0;f<e.length;f+=1)b(e[f]);r=!1},d(a){a&&m(n);for(let f=0;f<e.length;f+=1)e[f].d(a)}}}function _t(s){let e=[],t=new Map,n,r,l=X(s[12]);const o=a=>a[45].id;for(let a=0;a<l.length;a+=1){let f=de(s,l,a),$=o(f);t.set($,e[a]=we($,f))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=q()},l(a){for(let f=0;f<e.length;f+=1)e[f].l(a);n=q()},m(a,f){for(let $=0;$<e.length;$+=1)e[$]&&e[$].m(a,f);g(a,n,f),r=!0},p(a,f){f[0]&25169920&&(l=X(a[12]),oe(),e=Pe(e,f,o,1,a,l,t,n.parentNode,Ne,we,n,de),fe())},i(a){if(!r){for(let f=0;f<l.length;f+=1)d(e[f]);r=!0}},o(a){for(let f=0;f<e.length;f+=1)b(e[f]);r=!1},d(a){a&&m(n);for(let f=0;f<e.length;f+=1)e[f].d(a)}}}function gt(s){let e=s[45].category_name+"",t;return{c(){t=x(e)},l(n){t=T(n,e)},m(n,r){g(n,t,r)},p(n,r){r[0]&8192&&e!==(e=n[45].category_name+"")&&W(t,e)},d(n){n&&m(t)}}}function dt(s){let e,t;return e=new Ae({props:{class:"w-5 h-5"}}),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p:K,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function ht(s){let e,t;return e=new Se({props:{class:"w-5 h-5"}}),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p:K,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function bt(s){let e,t,n,r,l,o,a,f;e=new Me({props:{tdClass:"px-4 py-3",$$slots:{default:[gt]},$$scope:{ctx:s}}});function $(){return s[34](s[45])}r=new R({props:{class:"!p-2 m-2",color:"primary",$$slots:{default:[dt]},$$scope:{ctx:s}}}),r.$on("click",$);function i(){return s[35](s[45])}return o=new R({props:{class:"!p-2 m-2",color:"red",$$slots:{default:[ht]},$$scope:{ctx:s}}}),o.$on("click",i),{c(){k(e.$$.fragment),t=S(),n=V("div"),k(r.$$.fragment),l=S(),k(o.$$.fragment),a=S(),this.h()},l(c){v(e.$$.fragment,c),t=D(c),n=L(c,"DIV",{class:!0});var u=z(n);v(r.$$.fragment,u),l=D(u),v(o.$$.fragment,u),u.forEach(m),a=D(c),this.h()},h(){j(n,"class","justify-end flex")},m(c,u){C(e,c,u),g(c,t,u),g(c,n,u),C(r,n,null),B(n,l),C(o,n,null),g(c,a,u),f=!0},p(c,u){s=c;const _={};u[0]&8192|u[1]&524288&&(_.$$scope={dirty:u,ctx:s}),e.$set(_);const p={};u[1]&524288&&(p.$$scope={dirty:u,ctx:s}),r.$set(p);const h={};u[1]&524288&&(h.$$scope={dirty:u,ctx:s}),o.$set(h)},i(c){f||(d(e.$$.fragment,c),d(r.$$.fragment,c),d(o.$$.fragment,c),f=!0)},o(c){b(e.$$.fragment,c),b(r.$$.fragment,c),b(o.$$.fragment,c),f=!1},d(c){c&&(m(t),m(n),m(a)),y(e,c),y(r),y(o)}}}function be(s,e){let t,n,r;return n=new Ie({props:{$$slots:{default:[bt]},$$scope:{ctx:e}}}),{key:s,first:null,c(){t=q(),k(n.$$.fragment),this.h()},l(l){t=q(),v(n.$$.fragment,l),this.h()},h(){this.first=t},m(l,o){g(l,t,o),C(n,l,o),r=!0},p(l,o){e=l;const a={};o[0]&8192|o[1]&524288&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i(l){r||(d(n.$$.fragment,l),r=!0)},o(l){b(n.$$.fragment,l),r=!1},d(l){l&&m(t),y(n,l)}}}function wt(s){let e=s[45].category_name+"",t;return{c(){t=x(e)},l(n){t=T(n,e)},m(n,r){g(n,t,r)},p(n,r){r[0]&4096&&e!==(e=n[45].category_name+"")&&W(t,e)},d(n){n&&m(t)}}}function kt(s){let e,t;return e=new Ae({props:{class:"w-5 h-5"}}),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p:K,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function vt(s){let e,t;return e=new Se({props:{class:"w-5 h-5"}}),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p:K,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function Ct(s){let e,t,n,r,l,o,a,f;e=new Me({props:{tdClass:"px-4 py-3",$$slots:{default:[wt]},$$scope:{ctx:s}}});function $(){return s[32](s[45])}r=new R({props:{class:"!p-2 m-2",color:"primary",$$slots:{default:[kt]},$$scope:{ctx:s}}}),r.$on("click",$);function i(){return s[33](s[45])}return o=new R({props:{class:"!p-2 m-2",color:"red",$$slots:{default:[vt]},$$scope:{ctx:s}}}),o.$on("click",i),{c(){k(e.$$.fragment),t=S(),n=V("div"),k(r.$$.fragment),l=S(),k(o.$$.fragment),a=S(),this.h()},l(c){v(e.$$.fragment,c),t=D(c),n=L(c,"DIV",{class:!0});var u=z(n);v(r.$$.fragment,u),l=D(u),v(o.$$.fragment,u),u.forEach(m),a=D(c),this.h()},h(){j(n,"class","justify-end flex")},m(c,u){C(e,c,u),g(c,t,u),g(c,n,u),C(r,n,null),B(n,l),C(o,n,null),g(c,a,u),f=!0},p(c,u){s=c;const _={};u[0]&4096|u[1]&524288&&(_.$$scope={dirty:u,ctx:s}),e.$set(_);const p={};u[1]&524288&&(p.$$scope={dirty:u,ctx:s}),r.$set(p);const h={};u[1]&524288&&(h.$$scope={dirty:u,ctx:s}),o.$set(h)},i(c){f||(d(e.$$.fragment,c),d(r.$$.fragment,c),d(o.$$.fragment,c),f=!0)},o(c){b(e.$$.fragment,c),b(r.$$.fragment,c),b(o.$$.fragment,c),f=!1},d(c){c&&(m(t),m(n),m(a)),y(e,c),y(r),y(o)}}}function we(s,e){let t,n,r;return n=new Ie({props:{$$slots:{default:[Ct]},$$scope:{ctx:e}}}),{key:s,first:null,c(){t=q(),k(n.$$.fragment),this.h()},l(l){t=q(),v(n.$$.fragment,l),this.h()},h(){this.first=t},m(l,o){g(l,t,o),C(n,l,o),r=!0},p(l,o){e=l;const a={};o[0]&4096|o[1]&524288&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i(l){r||(d(n.$$.fragment,l),r=!0)},o(l){b(n.$$.fragment,l),r=!1},d(l){l&&m(t),y(n,l)}}}function yt(s){let e,t,n,r;const l=[_t,pt],o=[];function a(f,$){return f[0]!==""?0:1}return e=a(s),t=o[e]=l[e](s),{c(){t.c(),n=q()},l(f){t.l(f),n=q()},m(f,$){o[e].m(f,$),g(f,n,$),r=!0},p(f,$){let i=e;e=a(f),e===i?o[e].p(f,$):(oe(),b(o[i],1,1,()=>{o[i]=null}),fe(),t=o[e],t?t.p(f,$):(t=o[e]=l[e](f),t.c()),d(t,1),t.m(n.parentNode,n))},i(f){r||(d(t),r=!0)},o(f){b(t),r=!1},d(f){f&&m(n),o[e].d(f)}}}function Et(s){let e,t,n,r;return e=new Ue({props:{$$slots:{default:[mt]},$$scope:{ctx:s}}}),n=new We({props:{$$slots:{default:[yt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=S(),k(n.$$.fragment)},l(l){v(e.$$.fragment,l),t=D(l),v(n.$$.fragment,l)},m(l,o){C(e,l,o),g(l,t,o),C(n,l,o),r=!0},p(l,o){const a={};o[1]&524288&&(a.$$scope={dirty:o,ctx:l}),e.$set(a);const f={};o[0]&12289|o[1]&524288&&(f.$$scope={dirty:o,ctx:l}),n.$set(f)},i(l){r||(d(e.$$.fragment,l),d(n.$$.fragment,l),r=!0)},o(l){b(e.$$.fragment,l),b(n.$$.fragment,l),r=!1},d(l){l&&m(t),y(e,l),y(n,l)}}}function Pt(s){let e,t,n;return e=new Ye({props:{class:"h-3.5 w-3.5 mr-2"}}),{c(){k(e.$$.fragment),t=x("Agregar categoria")},l(r){v(e.$$.fragment,r),t=T(r,"Agregar categoria")},m(r,l){C(e,r,l),g(r,t,l),n=!0},p:K,i(r){n||(d(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){r&&m(t),y(e,r)}}}function It(s){let e,t="Nueva categoria";return{c(){e=V("h3"),e.textContent=t,this.h()},l(n){e=L(n,"H3",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-wtnqja"&&(e.textContent=t),this.h()},h(){j(e,"class","mb-4 text-xl font-medium text-gray-900 dark:text-white")},m(n,r){g(n,e,r)},d(n){n&&m(e)}}}function Nt(s){let e,t="Editar categoria";return{c(){e=V("h3"),e.textContent=t,this.h()},l(n){e=L(n,"H3",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-1vhr31y"&&(e.textContent=t),this.h()},h(){j(e,"class","mb-4 text-xl font-medium text-gray-900 dark:text-white")},m(n,r){g(n,e,r)},d(n){n&&m(e)}}}function Mt(s){let e,t="Nombre",n,r,l,o;function a($){s[28]($)}let f={type:"text",name:"Nombre",required:!0,class:""};return s[9]!==void 0&&(f.value=s[9]),r=new at({props:f}),le.push(()=>ae(r,"value",a)),{c(){e=V("span"),e.textContent=t,n=S(),k(r.$$.fragment)},l($){e=L($,"SPAN",{"data-svelte-h":!0}),ne(e)!=="svelte-17s7vzb"&&(e.textContent=t),n=D($),v(r.$$.fragment,$)},m($,i){g($,e,i),g($,n,i),C(r,$,i),o=!0},p($,i){const c={};!l&&i[0]&512&&(l=!0,c.value=$[9],se(()=>l=!1)),r.$set(c)},i($){o||(d(r.$$.fragment,$),o=!0)},o($){b(r.$$.fragment,$),o=!1},d($){$&&(m(e),m(n)),y(r,$)}}}function At(s){let e;return{c(){e=x("Agregar categoria")},l(t){e=T(t,"Agregar categoria")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function St(s){let e;return{c(){e=x("Editar categoria")},l(t){e=T(t,"Editar categoria")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Dt(s){let e;function t(l,o){return l[3]?St:At}let n=t(s),r=n(s);return{c(){r.c(),e=q()},l(l){r.l(l),e=q()},m(l,o){r.m(l,o),g(l,e,o)},p(l,o){n!==(n=t(l))&&(r.d(1),r=n(l),r&&(r.c(),r.m(e.parentNode,e)))},d(l){l&&m(e),r.d(l)}}}function Bt(s){let e,t,n,r,l,o,a,f;function $(u,_){return u[3]?Nt:It}let i=$(s),c=i(s);return n=new st({props:{class:"space-y-2",$$slots:{default:[Mt]},$$scope:{ctx:s}}}),l=new R({props:{type:"submit",class:"mt-4 flex ",$$slots:{default:[Dt]},$$scope:{ctx:s}}}),{c(){e=V("form"),c.c(),t=S(),k(n.$$.fragment),r=S(),k(l.$$.fragment),this.h()},l(u){e=L(u,"FORM",{class:!0,action:!0});var _=z(e);c.l(_),t=D(_),v(n.$$.fragment,_),r=D(_),v(l.$$.fragment,_),_.forEach(m),this.h()},h(){j(e,"class",""),j(e,"action","#")},m(u,_){g(u,e,_),c.m(e,null),B(e,t),C(n,e,null),B(e,r),C(l,e,null),o=!0,a||(f=Ge(e,"submit",Je(s[20])),a=!0)},p(u,_){i!==(i=$(u))&&(c.d(1),c=i(u),c&&(c.c(),c.m(e,t)));const p={};_[0]&512|_[1]&524288&&(p.$$scope={dirty:_,ctx:u}),n.$set(p);const h={};_[0]&8|_[1]&524288&&(h.$$scope={dirty:_,ctx:u}),l.$set(h)},i(u){o||(d(n.$$.fragment,u),d(l.$$.fragment,u),o=!0)},o(u){b(n.$$.fragment,u),b(l.$$.fragment,u),o=!1},d(u){u&&m(e),c.d(),y(n),y(l),a=!1,f()}}}function xt(s){let e;return{c(){e=x("Si, estoy seguro")},l(t){e=T(t,"Si, estoy seguro")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Tt(s){let e;return{c(){e=x("No, cancelar")},l(t){e=T(t,"No, cancelar")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Vt(s){let e,t,n,r,l="¿Estas seguro que deseas eliminar esta categoria?",o,a,f,$,i,c,u,_;return t=new tt({props:{class:"mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"}}),i=new R({props:{color:"red",class:"me-2",$$slots:{default:[xt]},$$scope:{ctx:s}}}),i.$on("click",s[30]),u=new R({props:{color:"alternative",$$slots:{default:[Tt]},$$scope:{ctx:s}}}),{c(){e=V("div"),k(t.$$.fragment),n=S(),r=V("h3"),r.textContent=l,o=S(),a=V("h4"),f=x(s[11]),$=S(),k(i.$$.fragment),c=S(),k(u.$$.fragment),this.h()},l(p){e=L(p,"DIV",{class:!0});var h=z(e);v(t.$$.fragment,h),n=D(h),r=L(h,"H3",{class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-1qms4ob"&&(r.textContent=l),o=D(h),a=L(h,"H4",{class:!0});var N=z(a);f=T(N,s[11]),N.forEach(m),$=D(h),v(i.$$.fragment,h),c=D(h),v(u.$$.fragment,h),h.forEach(m),this.h()},h(){j(r,"class","mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"),j(a,"class","mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"),j(e,"class","text-center")},m(p,h){g(p,e,h),C(t,e,null),B(e,n),B(e,r),B(e,o),B(e,a),B(a,f),B(e,$),C(i,e,null),B(e,c),C(u,e,null),_=!0},p(p,h){(!_||h[0]&2048)&&W(f,p[11]);const N={};h[1]&524288&&(N.$$scope={dirty:h,ctx:p}),i.$set(N);const M={};h[1]&524288&&(M.$$scope={dirty:h,ctx:p}),u.$set(M)},i(p){_||(d(t.$$.fragment,p),d(i.$$.fragment,p),d(u.$$.fragment,p),_=!0)},o(p){b(t.$$.fragment,p),b(i.$$.fragment,p),b(u.$$.fragment,p),_=!1},d(p){p&&m(e),y(t),y(i),y(u)}}}function Lt(s){let e,t,n;return t=new Ze({props:{class:"w-3 h-3 ml-2 "}}),{c(){e=x("Acciones"),k(t.$$.fragment)},l(r){e=T(r,"Acciones"),v(t.$$.fragment,r)},m(r,l){g(r,e,l),C(t,r,l),n=!0},p:K,i(r){n||(d(t.$$.fragment,r),n=!0)},o(r){b(t.$$.fragment,r),n=!1},d(r){r&&m(e),y(t,r)}}}function jt(s){let e;return{c(){e=x("Editar")},l(t){e=T(t,"Editar")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function zt(s){let e;return{c(){e=x("Borrar todo")},l(t){e=T(t,"Borrar todo")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Ht(s){let e,t,n,r;return e=new _e({props:{$$slots:{default:[jt]},$$scope:{ctx:s}}}),n=new _e({props:{$$slots:{default:[zt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=S(),k(n.$$.fragment)},l(l){v(e.$$.fragment,l),t=D(l),v(n.$$.fragment,l)},m(l,o){C(e,l,o),g(l,t,o),C(n,l,o),r=!0},p(l,o){const a={};o[1]&524288&&(a.$$scope={dirty:o,ctx:l}),e.$set(a);const f={};o[1]&524288&&(f.$$scope={dirty:o,ctx:l}),n.$set(f)},i(l){r||(d(e.$$.fragment,l),d(n.$$.fragment,l),r=!0)},o(l){b(e.$$.fragment,l),b(n.$$.fragment,l),r=!1},d(l){l&&m(t),y(e,l),y(n,l)}}}function Ot(s){let e,t,n;return t=new et({props:{class:"w-3 h-3 ml-2 "}}),{c(){e=x("Filter"),k(t.$$.fragment)},l(r){e=T(r,"Filter"),v(t.$$.fragment,r)},m(r,l){g(r,e,l),C(t,r,l),n=!0},p:K,i(r){n||(d(t.$$.fragment,r),n=!0)},o(r){b(t.$$.fragment,r),n=!1},d(r){r&&m(e),y(t,r)}}}function Rt(s){let e;return{c(){e=x("Apple (56)")},l(t){e=T(t,"Apple (56)")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function qt(s){let e;return{c(){e=x("Microsoft (16)")},l(t){e=T(t,"Microsoft (16)")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Ft(s){let e;return{c(){e=x("Razor (49)")},l(t){e=T(t,"Razor (49)")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Qt(s){let e;return{c(){e=x("Nikon (12)")},l(t){e=T(t,"Nikon (12)")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Gt(s){let e;return{c(){e=x("BenQ (74)")},l(t){e=T(t,"BenQ (74)")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Jt(s){let e,t="Choose brand",n,r,l,o,a,f,$,i,c,u,_,p,h,N,M,O;return l=new te({props:{$$slots:{default:[Rt]},$$scope:{ctx:s}}}),f=new te({props:{$$slots:{default:[qt]},$$scope:{ctx:s}}}),c=new te({props:{$$slots:{default:[Ft]},$$scope:{ctx:s}}}),p=new te({props:{$$slots:{default:[Qt]},$$scope:{ctx:s}}}),M=new te({props:{$$slots:{default:[Gt]},$$scope:{ctx:s}}}),{c(){e=V("h6"),e.textContent=t,n=S(),r=V("li"),k(l.$$.fragment),o=S(),a=V("li"),k(f.$$.fragment),$=S(),i=V("li"),k(c.$$.fragment),u=S(),_=V("li"),k(p.$$.fragment),h=S(),N=V("li"),k(M.$$.fragment),this.h()},l(w){e=L(w,"H6",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-o9efy5"&&(e.textContent=t),n=D(w),r=L(w,"LI",{});var A=z(r);v(l.$$.fragment,A),A.forEach(m),o=D(w),a=L(w,"LI",{});var Q=z(a);v(f.$$.fragment,Q),Q.forEach(m),$=D(w),i=L(w,"LI",{});var P=z(i);v(c.$$.fragment,P),P.forEach(m),u=D(w),_=L(w,"LI",{});var E=z(_);v(p.$$.fragment,E),E.forEach(m),h=D(w),N=L(w,"LI",{});var F=z(N);v(M.$$.fragment,F),F.forEach(m),this.h()},h(){j(e,"class","mb-3 text-sm font-medium text-gray-900 dark:text-white")},m(w,A){g(w,e,A),g(w,n,A),g(w,r,A),C(l,r,null),g(w,o,A),g(w,a,A),C(f,a,null),g(w,$,A),g(w,i,A),C(c,i,null),g(w,u,A),g(w,_,A),C(p,_,null),g(w,h,A),g(w,N,A),C(M,N,null),O=!0},p(w,A){const Q={};A[1]&524288&&(Q.$$scope={dirty:A,ctx:w}),l.$set(Q);const P={};A[1]&524288&&(P.$$scope={dirty:A,ctx:w}),f.$set(P);const E={};A[1]&524288&&(E.$$scope={dirty:A,ctx:w}),c.$set(E);const F={};A[1]&524288&&(F.$$scope={dirty:A,ctx:w}),p.$set(F);const H={};A[1]&524288&&(H.$$scope={dirty:A,ctx:w}),M.$set(H)},i(w){O||(d(l.$$.fragment,w),d(f.$$.fragment,w),d(c.$$.fragment,w),d(p.$$.fragment,w),d(M.$$.fragment,w),O=!0)},o(w){b(l.$$.fragment,w),b(f.$$.fragment,w),b(c.$$.fragment,w),b(p.$$.fragment,w),b(M.$$.fragment,w),O=!1},d(w){w&&(m(e),m(n),m(r),m(o),m(a),m($),m(i),m(u),m(_),m(h),m(N)),y(l),y(f),y(c),y(p),y(M)}}}function Kt(s){let e,t,n,r,l,o,a,f,$,i,c,u,_,p,h,N,M;t=new R({props:{$$slots:{default:[Pt]},$$scope:{ctx:s}}}),t.$on("click",s[27]);function O(P){s[29](P)}let w={size:"xs",autoclose:!1,class:"w-full",$$slots:{default:[Bt]},$$scope:{ctx:s}};s[5]!==void 0&&(w.open=s[5]),r=new ie({props:w}),le.push(()=>ae(r,"open",O)),r.$on("close",s[19]);function A(P){s[31](P)}let Q={size:"xs",autoclose:!0,$$slots:{default:[Vt]},$$scope:{ctx:s}};return s[4]!==void 0&&(Q.open=s[4]),a=new ie({props:Q}),le.push(()=>ae(a,"open",A)),i=new R({props:{color:"alternative",$$slots:{default:[Lt]},$$scope:{ctx:s}}}),u=new me({props:{class:"w-44 divide-y divide-gray-100",$$slots:{default:[Ht]},$$scope:{ctx:s}}}),p=new R({props:{color:"alternative",class:"hidden",$$slots:{default:[Ot]},$$scope:{ctx:s}}}),N=new me({props:{class:"w-48 p-3 space-y-2 text-sm",$$slots:{default:[Jt]},$$scope:{ctx:s}}}),{c(){e=V("div"),k(t.$$.fragment),n=S(),k(r.$$.fragment),o=S(),k(a.$$.fragment),$=S(),k(i.$$.fragment),c=S(),k(u.$$.fragment),_=S(),k(p.$$.fragment),h=S(),k(N.$$.fragment),this.h()},l(P){e=L(P,"DIV",{slot:!0,class:!0});var E=z(e);v(t.$$.fragment,E),n=D(E),v(r.$$.fragment,E),o=D(E),v(a.$$.fragment,E),$=D(E),v(i.$$.fragment,E),c=D(E),v(u.$$.fragment,E),_=D(E),v(p.$$.fragment,E),h=D(E),v(N.$$.fragment,E),E.forEach(m),this.h()},h(){j(e,"slot","header"),j(e,"class","w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0")},m(P,E){g(P,e,E),C(t,e,null),B(e,n),C(r,e,null),B(e,o),C(a,e,null),B(e,$),C(i,e,null),B(e,c),C(u,e,null),B(e,_),C(p,e,null),B(e,h),C(N,e,null),M=!0},p(P,E){const F={};E[1]&524288&&(F.$$scope={dirty:E,ctx:P}),t.$set(F);const H={};E[0]&520|E[1]&524288&&(H.$$scope={dirty:E,ctx:P}),!l&&E[0]&32&&(l=!0,H.open=P[5],se(()=>l=!1)),r.$set(H);const G={};E[0]&3072|E[1]&524288&&(G.$$scope={dirty:E,ctx:P}),!f&&E[0]&16&&(f=!0,G.open=P[4],se(()=>f=!1)),a.$set(G);const Y={};E[1]&524288&&(Y.$$scope={dirty:E,ctx:P}),i.$set(Y);const re={};E[1]&524288&&(re.$$scope={dirty:E,ctx:P}),u.$set(re);const Z={};E[1]&524288&&(Z.$$scope={dirty:E,ctx:P}),p.$set(Z);const ee={};E[1]&524288&&(ee.$$scope={dirty:E,ctx:P}),N.$set(ee)},i(P){M||(d(t.$$.fragment,P),d(r.$$.fragment,P),d(a.$$.fragment,P),d(i.$$.fragment,P),d(u.$$.fragment,P),d(p.$$.fragment,P),d(N.$$.fragment,P),M=!0)},o(P){b(t.$$.fragment,P),b(r.$$.fragment,P),b(a.$$.fragment,P),b(i.$$.fragment,P),b(u.$$.fragment,P),b(p.$$.fragment,P),b(N.$$.fragment,P),M=!1},d(P){P&&m(e),y(t),y(r),y(a),y(i),y(u),y(p),y(N)}}}function Ut(s){let e,t;return e=new nt({props:{size:"xs",class:"m-1.5"}}),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p:K,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function Wt(s){let e=s[42]+"",t;return{c(){t=x(e)},l(n){t=T(n,e)},m(n,r){g(n,t,r)},p(n,r){r[0]&128&&e!==(e=n[42]+"")&&W(t,e)},d(n){n&&m(t)}}}function ke(s){let e,t;function n(){return s[26](s[42])}return e=new R({props:{$$slots:{default:[Wt]},$$scope:{ctx:s}}}),e.$on("click",n),{c(){k(e.$$.fragment)},l(r){v(e.$$.fragment,r)},m(r,l){C(e,r,l),t=!0},p(r,l){s=r;const o={};l[0]&128|l[1]&524288&&(o.$$scope={dirty:l,ctx:s}),e.$set(o)},i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){b(e.$$.fragment,r),t=!1},d(r){y(e,r)}}}function Xt(s){let e,t;return e=new rt({props:{size:"xs",class:"m-1.5"}}),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p:K,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function Yt(s){let e,t,n,r,l;e=new R({props:{enable:s[1]===0,$$slots:{default:[Ut]},$$scope:{ctx:s}}}),e.$on("click",s[17]);let o=X(s[7]),a=[];for(let $=0;$<o.length;$+=1)a[$]=ke(he(s,o,$));const f=$=>b(a[$],1,1,()=>{a[$]=null});return r=new R({props:{enable:s[6]===s[8],$$slots:{default:[Xt]},$$scope:{ctx:s}}}),r.$on("click",s[16]),{c(){k(e.$$.fragment),t=S();for(let $=0;$<a.length;$+=1)a[$].c();n=S(),k(r.$$.fragment)},l($){v(e.$$.fragment,$),t=D($);for(let i=0;i<a.length;i+=1)a[i].l($);n=D($),v(r.$$.fragment,$)},m($,i){C(e,$,i),g($,t,i);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m($,i);g($,n,i),C(r,$,i),l=!0},p($,i){const c={};if(i[0]&2&&(c.enable=$[1]===0),i[1]&524288&&(c.$$scope={dirty:i,ctx:$}),e.$set(c),i[0]&262272){o=X($[7]);let _;for(_=0;_<o.length;_+=1){const p=he($,o,_);a[_]?(a[_].p(p,i),d(a[_],1)):(a[_]=ke(p),a[_].c(),d(a[_],1),a[_].m(n.parentNode,n))}for(oe(),_=o.length;_<a.length;_+=1)f(_);fe()}const u={};i[0]&320&&(u.enable=$[6]===$[8]),i[1]&524288&&(u.$$scope={dirty:i,ctx:$}),r.$set(u)},i($){if(!l){d(e.$$.fragment,$);for(let i=0;i<o.length;i+=1)d(a[i]);d(r.$$.fragment,$),l=!0}},o($){b(e.$$.fragment,$),a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)b(a[i]);b(r.$$.fragment,$),l=!1},d($){$&&(m(t),m(n)),y(e,$),Qe(a,$),y(r,$)}}}function Zt(s){let e,t,n,r,l,o,a,f,$,i,c,u,_;return u=new Xe({props:{class:"",$$slots:{default:[Yt]},$$scope:{ctx:s}}}),{c(){e=V("div"),t=V("span"),n=x(`Mostrando\r
          `),r=V("span"),l=x(s[15]),o=x("-"),a=x(s[14]),f=x(`\r
          de\r
          `),$=V("span"),i=x(s[2]),c=S(),k(u.$$.fragment),this.h()},l(p){e=L(p,"DIV",{slot:!0,class:!0,"aria-label":!0});var h=z(e);t=L(h,"SPAN",{class:!0});var N=z(t);n=T(N,`Mostrando\r
          `),r=L(N,"SPAN",{class:!0});var M=z(r);l=T(M,s[15]),o=T(M,"-"),a=T(M,s[14]),M.forEach(m),f=T(N,`\r
          de\r
          `),$=L(N,"SPAN",{class:!0});var O=z($);i=T(O,s[2]),O.forEach(m),N.forEach(m),c=D(h),v(u.$$.fragment,h),h.forEach(m),this.h()},h(){j(r,"class","font-semibold text-gray-900 dark:text-white"),j($,"class","font-semibold text-gray-900 dark:text-white"),j(t,"class","text-sm font-normal text-gray-500 dark:text-gray-400"),j(e,"slot","footer"),j(e,"class","flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"),j(e,"aria-label","Table navigation")},m(p,h){g(p,e,h),B(e,t),B(t,n),B(t,r),B(r,l),B(r,o),B(r,a),B(t,f),B(t,$),B($,i),B(e,c),C(u,e,null),_=!0},p(p,h){(!_||h[0]&32768)&&W(l,p[15]),(!_||h[0]&16384)&&W(a,p[14]),(!_||h[0]&4)&&W(i,p[2]);const N={};h[0]&450|h[1]&524288&&(N.$$scope={dirty:h,ctx:p}),u.$set(N)},i(p){_||(d(u.$$.fragment,p),_=!0)},o(p){b(u.$$.fragment,p),_=!1},d(p){p&&m(e),y(u)}}}function en(s){let e,t,n;function r(o){s[36](o)}let l={placeholder:"Buscar",hoverable:!0,divClass:nn,innerDivClass:rn,searchClass:ln,classInput:sn,$$slots:{footer:[Zt],header:[Kt],default:[Et]},$$scope:{ctx:s}};return s[0]!==void 0&&(l.inputValue=s[0]),e=new Ke({props:l}),le.push(()=>ae(e,"inputValue",r)),{c(){k(e.$$.fragment)},l(o){v(e.$$.fragment,o)},m(o,a){C(e,o,a),n=!0},p(o,a){const f={};a[0]&65535|a[1]&524288&&(f.$$scope={dirty:a,ctx:o}),!t&&a[0]&1&&(t=!0,f.inputValue=o[0],se(()=>t=!1)),e.$set(f)},i(o){n||(d(e.$$.fragment,o),n=!0)},o(o){b(e.$$.fragment,o),n=!1},d(o){y(e,o)}}}function tn(s){let e,t,n;return t=new lt({props:{classSection:"dark:bg-gray-900 p-3 sm:p-5",$$slots:{default:[en]},$$scope:{ctx:s}}}),{c(){e=V("div"),k(t.$$.fragment),this.h()},l(r){e=L(r,"DIV",{class:!0});var l=z(e);v(t.$$.fragment,l),l.forEach(m),this.h()},h(){j(e,"class","flex-1 p-4")},m(r,l){g(r,e,l),C(t,e,null),n=!0},p(r,l){const o={};l[0]&65535|l[1]&524288&&(o.$$scope={dirty:l,ctx:r}),t.$set(o)},i(r){n||(d(t.$$.fragment,r),n=!0)},o(r){b(t.$$.fragment,r),n=!1},d(r){r&&m(e),y(t)}}}let nn="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden",rn="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4",ln="w-full md:w-1/2 relative",sn="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";const J=10,ve=5;function an(s,e,t){let n,r,l,o,a=!1,f=!1,$=!1,i="",c=0,u=0,_=[],p,h,N=[],M=[],O;async function w(){try{N=await ot(),t(25,M=N),t(2,O=M.length)}catch(I){console.error("Error fetching data:",I)}}const A=()=>{const I=M.slice(c,c+J);E(I.length)},Q=()=>{c+J<M.length&&(t(1,c+=J),A())},P=()=>{c-J>=0&&(t(1,c-=J),A())},E=I=>{t(6,u=Math.ceil(M.length/J)),p=Math.ceil((c+1)/J)-Math.floor(ve/2),p=Math.max(1,p),t(8,h=Math.min(p+ve-1,u)),t(7,_=Array.from({length:h-p+1},($n,qe)=>p+qe))},F=I=>{t(1,c=(I-1)*J),A()};Fe(async()=>{E(M.length),await w()});let H="",G=null;const Y=()=>{t(10,G=null),t(9,H="")},re=async()=>{try{a?(await ft(G,H),t(5,$=!1)):await $t(H),Y(),await w()}catch(I){console.error("Error inserting/updating category:",I)}},Z=async I=>{try{await ct(I),await w()}catch(U){console.error("Error deleting category:",U)}},ee=()=>{t(3,a=!1),t(5,$=!0)},$e=(I,U)=>{t(10,G=I),t(3,a=!0),t(5,$=!0),t(11,ce=U),t(9,H=U)};let ce;function ue(I,U){t(4,f=!0),t(10,G=I),t(11,ce=U)}const De=I=>F(I),Be=()=>ee();function xe(I){H=I,t(9,H)}function Te(I){$=I,t(5,$)}const Ve=async()=>await Z(G);function Le(I){f=I,t(4,f)}const je=I=>$e(I.id,I.category_name),ze=I=>ue(I.id,I.category_name),He=I=>$e(I.id,I.category_name),Oe=I=>ue(I.id,I.category_name);function Re(I){i=I,t(0,i)}return s.$$.update=()=>{s.$$.dirty[0]&2&&t(15,n=c+1),s.$$.dirty[0]&6&&t(14,r=Math.min(c+J,O)),s.$$.dirty[0]&33554434&&t(13,l=M.slice(c,c+J)),s.$$.dirty[0]&33554433&&t(12,o=M.filter(I=>I.category_name.toLowerCase().indexOf(i.toLowerCase())!==-1))},[i,c,O,a,f,$,u,_,h,H,G,ce,o,l,r,n,Q,P,F,Y,re,Z,ee,$e,ue,M,De,Be,xe,Te,Ve,Le,je,ze,He,Oe,Re]}class on extends ye{constructor(e){super(),Ee(this,e,an,tn,Ce,{},null,[-1,-1])}}function fn(s){let e,t;return e=new on({}),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p:K,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}class hn extends ye{constructor(e){super(),Ee(this,e,null,fn,Ce,{})}}export{hn as component};