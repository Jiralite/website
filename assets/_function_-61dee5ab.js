import{c as C,a as P,_ as S,t as v,b as f,d as z}from"./See-854248b3.js";import{d as G,e as _,U as I,f as K,c as o,b as N,u as e,a as c,z as U,x as u,B as i,F as r,C as y,G as q,H as J,o as n,E as O}from"./index-e5b958e9.js";import{m as V,_ as Q}from"./markdown-8d6b4a13.js";import{u as W}from"./ReducedMotion-ede4c4ff.js";const X={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},Y={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},Z=["id"],ee=["innerHTML"],se=c("h2",null,"Parameters",-1),ne=c("h2",null,"Returns",-1),ae={key:0},te={class:"mt-3"},oe=["innerHTML"],de=G({__name:"[function]",setup(re){var k,h;const b=O(),m=q(),j=J(),d=_(()=>j.state.docs),s=(h=(k=d.value)==null?void 0:k.functions)==null?void 0:h.find(a=>a.name===m.params.function),D=_(()=>V(C(s==null?void 0:s.description,d.value,b,m))),g=_(()=>{var a,p,l;return V((l=C((p=(a=s.returns)==null?void 0:a[0])==null?void 0:p.description,d.value,b,m))!=null?l:"")});return I({title:_(()=>{var a;return`discord.js | ${(a=s==null?void 0:s.name)!=null?a:""}`})}),K(()=>{const a=document.getElementById("container");a&&a.scrollTop>200&&a.scrollTo({top:0,behavior:W.value?void 0:"smooth"})}),(a,p)=>{var l,x,L,T,$,B,H,M,w,A,E;const F=z;return n(),o("div",X,[N(Q,{class:"float-right mt-2",meta:(l=e(s))==null?void 0:l.meta},null,8,["meta"]),c("div",Y,[c("h1",{id:`doc-for-${(x=e(s))==null?void 0:x.name}`},U((L=e(s))==null?void 0:L.name),9,Z),(T=e(s))!=null&&T.description?(n(),o("p",{key:0,innerHTML:e(D)},null,8,ee)):u("",!0),(B=($=e(s))==null?void 0:$.see)!=null&&B.length?(n(),i(P,{key:1,see:(H=e(s))==null?void 0:H.see},null,8,["see"])):u("",!0),(M=e(s))!=null&&M.params&&((w=e(s))!=null&&w.params.length)?(n(),o(r,{key:2},[se,N(S,{parameters:e(s).params},null,8,["parameters"])],64)):u("",!0),(A=e(s))!=null&&A.returns?(n(),o(r,{key:3},[ne,e(s).returns&&Array.isArray(e(s).returns)?(n(),o("span",ae,[e(d).meta.format>=30?(n(),o(r,{key:0},[Array.isArray((E=e(s).returns)==null?void 0:E[0])?(n(!0),o(r,{key:0},y(e(s).returns.flat(),t=>(n(),i(f,{key:e(v)(t),names:t},null,8,["names"]))),128)):(n(!0),o(r,{key:1},y(e(s).returns.flat(),t=>{var R;return n(),i(f,{key:e(v)(t),names:(R=t.types)==null?void 0:R.flat(),variable:t.variable,nullable:t.nullable},null,8,["names","variable","nullable"])}),128))],64)):(n(!0),o(r,{key:1},y(e(s).returns,t=>(n(),i(f,{key:e(v)(t),names:t},null,8,["names"]))),128))])):(n(),i(F,{key:1,type:["void"]})),c("div",te,[e(g)?(n(),o("p",{key:0,class:"noprose",innerHTML:e(g)},null,8,oe)):u("",!0)])],64)):u("",!0)])])}}});export{de as default};
