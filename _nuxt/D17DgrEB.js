import{d as s,aj as i,A as n,X as f,am as d,an as x,ao as L}from"./D1LVEn3g.js";const a=d({...x,componentName:"NuxtLinkLocale"}),h=s({name:"NuxtLinkLocale",props:{...a.props,locale:{type:String,default:void 0,required:!1}},setup(t,{slots:o}){const l=i(),u=n(()=>{const e=t.to??t.href;return e!=null?l(e,t.locale):e}),r=n(()=>{if(t.external||t.target&&t.target!=="_self")return!0;const e=t.to??t.href;return typeof e=="object"?!1:e===""||e==null||L(e,{acceptRelative:!0})}),c=()=>{const e={...t};return r.value||(e.to=u.value),delete e.href,delete e.locale,e};return()=>f(a,c(),o.default)}});export{h as _};
