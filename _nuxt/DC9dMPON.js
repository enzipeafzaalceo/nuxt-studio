import{_ as z}from"./CljlPF7I.js";import{_ as L}from"./DHKc7wJi.js";import{d as S,i as n,G as q,w as V,e as s,g as _,t as d,ae as T,ab as U,r as x,z as D,B as E,C as I,A as b,c as i,E as o,n as y,J as W,F as $,ai as C,f as k,bk as F}from"./D1LVEn3g.js";import{r as A}from"./B_QW9F9Y.js";import{u as G}from"./BCrzJdPM.js";import{q as M}from"./wNF7NCqE.js";import"./DlAUqK2U.js";const O={class:"overflow-hidden rounded-md border border-white/10 shadow-md shadow-zinc-950/50 transition-colors duration-200 hover:border-white/20"},J={class:"flex flex-col"},P={class:"text-lg font-semibold"},R={class:"text-xs text-muted"},H=S({__name:"ArticleCard",props:{title:{type:String,required:!0},date:{type:String,required:!0},image:{type:String,required:!0},path:{type:String,required:!0}},setup(r){return(u,h)=>{const l=T,c=U;return n(),q(c,{to:r.path,"aria-label":r.title,class:"flex cursor-pointer flex-col gap-2"},{default:V(()=>[s("div",O,[_(l,{width:"1536",alt:`${r.title} article image`,class:"h-64 w-full object-cover transition-transform duration-200 hover:scale-105",src:r.image,"aria-label":`${r.title} article image`},null,8,["alt","src","aria-label"])]),s("div",J,[s("h3",P,d(r.title),1),s("span",R,d(r.date),1)])]),_:1},8,["to","aria-label"])}}}),K=Object.assign(H,{__name:"ArticleCard"}),Q={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},X={class:"font-newsreader italic text-white-shadow text-center text-4xl"},Y={class:"text-center text-lg font-extralight italic text-muted"},Z={key:0,class:"mb-4 flex flex-col gap-2"},ee={class:"my-4"},te={key:0,class:"mb-4 flex flex-wrap gap-2"},se=["onClick"],ae={class:"font-extralight"},oe={key:2,class:"flex h-64 flex-col items-center justify-center gap-2"},ne={class:"text-2xl"},le={class:"text-sm"},re=S({__name:"Writing",async setup(r){let u,h;const l=x([]),c=x(""),m=x(!1),{locale:p}=D(),{data:f}=([u,h]=E(async()=>G("articles-"+p.value,async()=>{const e="articles_"+p.value;return await M(e).all()},{watch:[p]})),u=await u,h(),u);if(!f.value)throw I({statusCode:404,statusMessage:"Page not found"});const w=b(()=>{var e;return Array.from(new Set((e=f.value)==null?void 0:e.flatMap(a=>a.tags)))}),v=b(()=>{var e;return((e=f.value)==null?void 0:e.filter(a=>(l.value.length===0||l.value.some(g=>a.tags.includes(g)))&&(c.value===""||a.title.toLowerCase().includes(c.value.toLowerCase()))))??[]}),B=e=>{l.value=l.value.includes(e)?l.value.filter(a=>a!==e):[...l.value,e]};return(e,a)=>{const g=z,N=L,j=K;return n(),i("section",Q,[s("h1",X,[A(e.$slots,"title",{mdcUnwrap:"p"})]),s("h2",Y,[A(e.$slots,"subtitle",{mdcUnwrap:"p"})]),_(g,{class:"mb-8 mt-2"}),s("div",{class:y(o(m)?"":"mb-3")},[s("span",{class:"font-newsreader italic text-white-shadow cursor-pointer select-none text-lg",onClick:a[0]||(a[0]=t=>m.value=!o(m))},d(o(m)?e.$t("writing.hide_search"):e.$t("writing.show_search")),1)],2),o(m)?(n(),i("div",Z,[s("div",ee,[_(N,{modelValue:o(c),"onUpdate:modelValue":a[1]||(a[1]=t=>W(c)?c.value=t:null),class:"w-full sm:w-96",placeholder:e.$t("writing.search_article")},null,8,["modelValue","placeholder"])]),o(w).length>0?(n(),i("div",te,[(n(!0),i($,null,C(o(w),t=>(n(),i("div",{key:t,class:y(["hover:text-shadow-md flex cursor-pointer select-none items-center rounded-md bg-neutral-800 px-2 py-1 text-xs transition-colors duration-100 text-shadow-sm hover:bg-neutral-700 sm:text-sm",{"bg-zinc-700":o(l).includes(t)}]),onClick:ie=>B(t)},[s("div",ae,d(t),1)],10,se))),128))])):k("",!0)])):k("",!0),o(v).length?(n(),q(F,{key:1,name:"list",tag:"ul",class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},{default:V(()=>[(n(!0),i($,null,C(o(v),t=>(n(),i("li",{key:t.path},[_(j,{title:t.title,date:t.date,image:t.image,path:t.path},null,8,["title","date","image","path"])]))),128))]),_:1})):(n(),i("div",oe,[s("span",ne,d(e.$t("writing.not_found")),1),s("span",le,d(e.$t("writing.not_found_description")),1)]))])}}}),fe=Object.assign(re,{__name:"Writing"});export{fe as default};
