import{d as b,r as _,Z as e,h as m,$ as w,a0 as k,k as C,o as p,c as h,a as s,a1 as u,a2 as c,q as r,F as T,s as q,z as n,e as V,l as E,n as M,x,b as P,p as N}from"./index.1c11d8bd.js";const U={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},F={class:"prose prose-discord dark:prose-light mx-auto max-w-4xl lg:max-w-full"},B=s("h1",null,"Search Results",-1),D={class:"flex flex-col md:flex-row mb-4"},L={class:"flex-auto"},S=["value"],j=n(" Classes "),z={class:"flex-auto"},R=["value"],$=n(" Methods "),H={class:"flex-auto"},Z=["value"],A=n(" Properties "),G={class:"flex-auto"},I=["value"],J=n(" Typedefs "),K={class:"flex-auto"},O=["value"],Q=n(" Events "),W={class:"no-list"},X={class:"text-sm font-semibold uppercase"},se=b({setup(Y){const o=_([e.Class,e.Method,e.Property,e.Events,e.Typedefs]),d=V(),i=_(d.query.query),y=m(()=>w(i.value).filter(l=>o.value.includes(l.type))),v=l=>{switch(l){case e.Class:return"bg-discord-blurple-500 text-gray-200";case e.Method:return"bg-yellow-500 text-gray-700";case e.Property:return"bg-green-400 text-gray-700";case e.Events:return"bg-yellow-900 text-gray-200";case e.Typedefs:return"bg-purple-800 text-gray-200"}},f=l=>{switch(l){case e.Class:return"C";case e.Method:return"M";case e.Property:return"P";case e.Events:return"E";case e.Typedefs:return"T"}};return k({title:m(()=>{var l;return`discord.js | Search: ${(l=i.value)!=null?l:""}`})}),C(()=>d.query.query,()=>{i.value=d.query.query}),(l,a)=>{const g=E("router-link");return p(),h("div",U,[s("div",F,[B,s("div",D,[s("div",L,[u(s("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),value:r(e).Class,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-discord-blurple-500"},null,8,S),[[c,o.value]]),j]),s("div",z,[u(s("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>o.value=t),value:r(e).Method,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-yellow-500"},null,8,R),[[c,o.value]]),$]),s("div",H,[u(s("input",{"onUpdate:modelValue":a[2]||(a[2]=t=>o.value=t),value:r(e).Property,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-green-400"},null,8,Z),[[c,o.value]]),A]),s("div",G,[u(s("input",{"onUpdate:modelValue":a[3]||(a[3]=t=>o.value=t),value:r(e).Typedefs,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-purple-800"},null,8,I),[[c,o.value]]),J]),s("div",K,[u(s("input",{"onUpdate:modelValue":a[4]||(a[4]=t=>o.value=t),value:r(e).Events,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-yellow-900"},null,8,O),[[c,o.value]]),Q])]),s("div",null,[s("ul",W,[(p(!0),h(T,null,q(r(y),t=>(p(),h("li",{key:t.computedName,class:"cursor-pointer grid grid-layout-search items-center !min-w-0 !min-h-0 break-words-legacy !p-0"},[s("span",X,[s("span",{class:M(["inline-flex items-center justify-center w-6 h-6 rounded-md",v(t.type)])},x(f(t.type)),3)]),P(g,{exact:"",to:t.getLinkPath()},{default:N(()=>[n(x(t.computedName),1)]),_:2},1032,["to"])]))),128))])])])])}}});export{se as default};
