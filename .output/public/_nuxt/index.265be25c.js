import{a as l,w as d,b as t,F as p,r as m,u as _,o as s,e as a,t as r}from"./entry.04d6a6a9.js";import{u}from"./asyncData.d27722c5.js";import{u as y}from"./composables.3854c6f1.js";const h={class:"mt-2"},f={class:"card-body"},A=l({__name:"index",async setup(b){let e,o;const{data:c}=([e,o]=d(()=>u("json-placeholder",()=>$fetch("https://jsonplaceholder.typicode.com/posts"))),e=await e,o(),e);return y({title:"My App",meta:[{name:"description",content:"My amazing site."}]}),(x,g)=>(s(),t("div",h,[(s(!0),t(p,null,m(_(c),(n,i)=>(s(),t("div",{class:"card mb-2",key:i},[a("div",f,[a("h3",null,r(n.title),1),a("p",null,r(n.body),1)])]))),128))]))}});export{A as default};