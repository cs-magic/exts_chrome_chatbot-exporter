"use strict";(self.webpackChunk_cs_magic_exts_chrome_chatbot_exporter=self.webpackChunk_cs_magic_exts_chrome_chatbot_exporter||[]).push([[792],{775:(e,t,r)=>{var n=r(85),o=r(873),i=r(41);var a=r(997),s=r(555),c=r(357),l=r(73);function d(...e){return(0,l.QP)((0,c.$)(e))}const u=(0,s.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),h=i.forwardRef((({className:e,variant:t,size:r,asChild:o=!1,...i},s)=>{const c=o?a.DX:"button";return(0,n.jsx)(c,{className:d(u({variant:t,size:r,className:e})),ref:s,...i})}));h.displayName="Button";var m=r(410);const f=i.forwardRef((({className:e,orientation:t="horizontal",decorative:r=!0,...o},i)=>(0,n.jsx)(m.b,{ref:i,decorative:r,orientation:t,className:d("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...o})));f.displayName=m.b.displayName;var g=r(168);const b=()=>window.origin.includes("chatgpt.com"),v=()=>window.origin.includes("claude.ai")?document.querySelector(".sticky.bottom-0").parentElement.firstElementChild:b()?document.querySelector(".composer-parent > :nth-child(1)"):void 0;var w=r(317),x=r.n(w),p=r(615);const y=async(e,{approach:t="modern-screenshot",filename:r="screenshot",backgroundColor:n="white"})=>{let o;window.innerWidth>=1280||window.innerWidth>=1024||window.innerWidth>=768||window.innerWidth;switch(t){case"html2canvas":o=(await x()(e,{logging:!0,allowTaint:!0,useCORS:!0,height:e.scrollHeight,windowHeight:e.scrollHeight,backgroundColor:n,scale:2})).toDataURL("image/jpeg");break;case"modern-screenshot":o=await(0,p.ov)(e,{scale:1,quality:.7,backgroundColor:n})}const i=document.createElement("a");i.download=r,i.href=o,i.click()},k=()=>{const e=(0,g.Ub)({query:"(prefers-color-scheme: dark)"}),t=e?"bg-gray-800 text-gray-200":"bg-gray-200 text-gray-800",r=()=>(0,n.jsx)(f,{orientation:"horizontal",className:d("grow w-auto bg-gray-900 ",t)});return(0,n.jsx)("div",{className:d("flex justify-center items-center w-full overflow-hidden gap-2",b()&&"m-2"),children:(0,n.jsxs)("div",{className:d("flex justify-center items-center w-full",b()&&"md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]"),children:[(0,n.jsx)(r,{}),(0,n.jsx)(h,{className:d("shrink-0",t),onClick:()=>{(({isDark:e})=>{let t=v();b()&&(t=t.querySelector(":first-child > :first-child > :first-child > :first-child > :first-child > :first-child")),y(t,{approach:b()?"html2canvas":"modern-screenshot",filename:`${(new Date).toISOString().split("T")[0]} - chat - ${document.querySelector("title").textContent}`,backgroundColor:e?"#171717":"white"})})({isDark:e})},children:"Export"}),(0,n.jsx)(r,{})]})})},j="chatbot-exporter";new MutationObserver((async(e,t)=>{const r=v();if(!r)return;if(document.querySelector(`#${j}`))return;const a=document.createElement("div");var s,c;a.id=j,s=a,c=k,o.createRoot(s).render((0,n.jsx)(i.StrictMode,{children:(0,n.jsx)(c,{})})),r.parentElement.insertBefore(a,r.nextElementSibling)})).observe(document.body,{subtree:!0,childList:!0})}},e=>{e.O(0,[96],(()=>{return t=775,e(e.s=t);var t}));e.O()}]);