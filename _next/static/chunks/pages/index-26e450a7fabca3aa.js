(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{930:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(4009)}])},4009:function(e,t,l){"use strict";l.r(t),l.d(t,{DEVNET_NODE_URL:function(){return G},default:function(){return X}});var n=l(7458),s=l(234),r=l(1253),a=l(2983),i=l(7084),o=l(2056),c=l(8069),d=l(9807),x=e=>{if(e)return"".concat(e.slice(0,6),"...").concat(e.slice(-5))},{Text:h}=i.Z;function p(){let[e,t]=(0,a.useState)(!1),{connect:l,disconnect:s,account:i,wallets:p,connected:m}=(0,r.Os)(),u=()=>{m?s():t(!0)},j=e=>{l(e),t(!1)},b=(null==i?void 0:i.ansName)?null==i?void 0:i.ansName:x(null==i?void 0:i.address);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"wallet-button",onClick:()=>u(),children:m?b:"Connect Wallet"}),(0,n.jsx)(c.Z,{title:(0,n.jsx)("div",{className:"wallet-modal-title",children:"Connect Wallet"}),centered:!0,open:e,onCancel:()=>t(!1),footer:[],closable:!1,children:!m&&(0,n.jsx)(d.Z,{children:p.map(e=>(0,n.jsx)(d.Z.Item,{onClick:e.readyState===r.i1.Installed||e.readyState===r.i1.Loadable?()=>j(e.name):()=>window.open(e.url),children:(0,n.jsxs)("div",{className:"wallet-menu-wrapper",children:[(0,n.jsxs)("div",{className:"wallet-name-wrapper",children:[(0,n.jsx)("img",{src:e.icon,width:25,style:{marginRight:10}}),(0,n.jsx)(h,{className:"wallet-selector-text",children:e.name})]}),e.readyState===r.i1.Installed||e.readyState===r.i1.Loadable?(0,n.jsx)(o.Z,{className:"wallet-connect-button",children:(0,n.jsx)(h,{className:"wallet-connect-button-text",children:"Connect"})}):(0,n.jsx)(h,{className:"wallet-connect-install",children:"Install"})]})},e.name))})})]})}var m=l(8463),u=l(5200),j=l(8183),b=l(1637),g=l(1688),f=l(4429),y=l(5806),w=l(8393),N=l(5149),v=l(710),Z=l(5912),k=l(1877),C=l(8924),S=l(6921),_=l(8494),I=l(3579),A=l(928),O=l(2205),P=l(4238);function W(e){let{popoverAnchor:t,handlePopoverClose:l,handleNavigate:s}=e,{account:i,disconnect:o}=(0,r.Os)(),c=Boolean(t),d=()=>{s&&s(),l()},x=()=>{o(),l()},[h,p]=(0,a.useState)(!1),m=async e=>{await navigator.clipboard.writeText(null==i?void 0:i.address),p(!0),setTimeout(()=>{p(!1)},2e3)};return(0,n.jsx)(b.ZP,{id:c?"wallet-popover":void 0,open:c,anchorEl:t,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,n.jsxs)(g.Z,{children:[(0,n.jsx)(f.Z,{title:"Copied",placement:"bottom-end",open:h,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,children:(0,n.jsx)(y.ZP,{disablePadding:!0,children:(0,n.jsx)(w.Z,{onClick:m,children:(0,n.jsx)(N.Z,{primary:"Copy Address"})})})}),(0,n.jsx)(y.ZP,{disablePadding:!0,children:(0,n.jsx)(w.Z,{onClick:d,children:(0,n.jsx)(N.Z,{primary:"Account"})})}),(0,n.jsx)(y.ZP,{disablePadding:!0,children:(0,n.jsx)(w.Z,{onClick:x,children:(0,n.jsx)(N.Z,{primary:"Logout"})})})]})})}function L(e){let{handleModalOpen:t,handleNavigate:l}=e,{connected:s,account:i,wallet:o}=(0,r.Os)(),[c,d]=(0,a.useState)(null),x=e=>{d(e.currentTarget)},h=()=>{d(null)},p=()=>{h(),t()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.Z,{size:"large",variant:"contained",onClick:s?x:p,className:"wallet-button",sx:{borderRadius:"10px"},children:s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Z,{alt:null==o?void 0:o.name,src:null==o?void 0:o.icon,sx:{width:24,height:24}}),(0,n.jsx)(j.Z,{noWrap:!0,ml:2,children:function(e,t,l,n){if(!e)return"";if(!Number.isInteger(t)||!Number.isInteger(l))throw"".concat(t," and ").concat(l," should be an Integer");var s=e.length;return(n=n||"…",0===t&&0===l||t>=s||l>=s||t+l>=s)?e:0===l?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(s-l)}(null==i?void 0:i.address,6,4,"…")})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.Z,{sx:{marginRight:1}}),(0,n.jsx)(j.Z,{noWrap:!0,children:"Connect Wallet"})]})}),(0,n.jsx)(W,{popoverAnchor:c,handlePopoverClose:h,handleNavigate:l})]})}var T={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",450:"#909099",500:"#4f5352",600:"#363a39",700:"#272b2a",800:"#1b1f1e",900:"#121615"};function E(e){let{handleClose:t,modalOpen:l,networkSupport:s}=e,{wallets:a,connect:i}=(0,r.Os)(),o=(0,Z.Z)(),c=e=>{i(e),t()};return(0,n.jsx)(_.Z,{open:l,onClose:t,"aria-labelledby":"wallet selector modal","aria-describedby":"select a wallet to connect",sx:{borderRadius:"5px"},children:(0,n.jsxs)(I.Z,{sx:{display:"flex",flexDirection:"column",top:"50%",left:"50%",width:500,bgcolor:"background.paper",boxShadow:24,p:3},children:[(0,n.jsx)(A.Z,{onClick:t,sx:{position:"absolute",right:12,top:12,color:T[450]},children:(0,n.jsx)(P.Z,{})}),(0,n.jsx)(j.Z,{align:"center",variant:"h5",pt:2,children:"Connect Wallet"}),(0,n.jsx)(S.Z,{sx:{display:"flex",gap:.5,alignItems:"center",justifyContent:"center",mb:4},children:s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O.Z,{sx:{fontSize:"0.9rem",color:T[400]}}),(0,n.jsxs)(j.Z,{sx:{display:"inline-flex",fontSize:"0.9rem",color:T[400]},align:"center",children:[s," only"]})]})}),(0,n.jsx)(S.Z,{children:a.map(e=>{let t=e.icon;return(0,n.jsx)(k.ZP,{xs:12,paddingY:.5,item:!0,children:"Installed"===e.readyState||"Loadable"===e.readyState?(0,n.jsx)(y.ZP,{disablePadding:!0,children:(0,n.jsxs)(w.Z,{alignItems:"center",disableGutters:!0,onClick:()=>c(e.name),sx:{background:"dark"===o.palette.mode?T[700]:T[200],padding:"1rem 3rem",borderRadius:"10px",display:"flex",gap:"1rem"},children:[(0,n.jsx)(C.Z,{sx:{display:"flex",alignItems:"center",width:"2rem",height:"2rem",minWidth:"0",color:"".concat(o.palette.text.primary)},children:(0,n.jsx)(S.Z,{component:"img",src:t,sx:{width:"100%",height:"100%"}})}),(0,n.jsx)(N.Z,{primary:e.name,primaryTypographyProps:{fontSize:18}}),(0,n.jsx)(m.Z,{variant:"contained",size:"small",className:"wallet-connect-button",children:"Connect"})]})}):(0,n.jsxs)(y.ZP,{alignItems:"center",sx:{borderRadius:"".concat(o.shape.borderRadius,"px"),background:"dark"===o.palette.mode?T[700]:T[200],padding:"1rem 3rem",gap:"1rem"},children:[(0,n.jsx)(C.Z,{sx:{display:"flex",alignItems:"center",width:"2rem",height:"2rem",minWidth:"0",opacity:"0.25"},children:(0,n.jsx)(S.Z,{component:"img",src:t,sx:{width:"100%",height:"100%"}})}),(0,n.jsx)(N.Z,{sx:{opacity:"0.25"},primary:e.name,primaryTypographyProps:{fontSize:18}}),(0,n.jsx)(m.Z,{LinkComponent:"a",href:e.url,target:"_blank",size:"small",className:"wallet-connect-install",children:"Install"})]})},e.name)})})]})})}function z(e){let{networkSupport:t,handleNavigate:l}=e,[s,r]=(0,a.useState)(!1),i=()=>r(!0),o=()=>r(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L,{handleModalOpen:i,handleNavigate:l}),(0,n.jsx)(E,{handleClose:o,modalOpen:s,networkSupport:t})]})}function D(e){let{text:t}=e;return(0,n.jsxs)("div",{className:"bg-teal-100 border border-teal-400 text-teal-900 px-4 py-3 rounded relative",role:"alert",children:[(0,n.jsx)("span",{className:"block sm:inline break-all right-3",children:(0,n.jsx)("a",{className:"underline",target:"_blank",href:"".concat(t,"?network=devnet"),children:t})}),(0,n.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,n.jsxs)("svg",{className:"fill-current h-6 w-6 text-teal-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,n.jsx)("title",{children:"Close"}),(0,n.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})}function R(e){let{text:t}=e;return(0,n.jsxs)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert",children:[(0,n.jsx)("span",{className:"block sm:inline break-all",children:t}),(0,n.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,n.jsxs)("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,n.jsx)("title",{children:"Close"}),(0,n.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})}var F=l(4648),M=l.n(F),J=l(4407),H=l.n(J),V=l(8714);let B=M()(()=>l.e(556).then(l.bind(l,9556)),{loadableGenerated:{webpack:()=>[9556]},suspense:!1,ssr:!1}),G="https://fullnode.devnet.aptoslabs.com/v1",U=new s.gK(G,{WITH_CREDENTIALS:!1});function X(){let{connected:e,disconnect:t,account:l,network:s,wallet:i,signAndSubmitTransaction:o,signTransaction:c,signMessage:d,signMessageAndVerify:x}=(0,r.Os)(),{autoConnect:h,setAutoConnect:m}=(0,V.vl)(),[u,j]=(0,a.useState)(""),[b,g]=(0,a.useState)(""),f=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==l?void 0:l.address,1]};try{let t=await o(e);await U.waitForTransaction((null==t?void 0:t.hash)||""),j("https://explorer.aptoslabs.com/txn/".concat(null==t?void 0:t.hash))}catch(n){console.log("error",n),g(n)}},y=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==l?void 0:l.address,1]};try{let t=await c(e);j(JSON.stringify(t)),console.log("response",t)}catch(n){console.log("error",n),g(n)}},w=async()=>{try{let e=await d({message:"Hello from Aptos Wallet Adapter",nonce:"random_string"});j(JSON.stringify(e)),console.log("response",e)}catch(t){console.log("error",t),g(t)}},N=async()=>{try{let e=await x({message:"Hello from Aptos Wallet Adapter",nonce:"random_string"});j(JSON.stringify({onSignMessageAndVerify:e})),console.log("response",e)}catch(t){console.log("error",t),g(JSON.stringify({onSignMessageAndVerify:t}))}};return(0,n.jsxs)("div",{children:[u.length>0&&(0,n.jsx)(D,{text:u}),b.length>0&&(0,n.jsx)(R,{text:b}),(0,n.jsx)("h1",{className:"flex justify-center mt-2 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black",children:"Aptos Wallet Adapter Demo (Devnet)"}),(0,n.jsx)("table",{className:"table-auto w-full border-separate border-spacing-y-8 shadow-lg bg-white border-separate",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,n.jsx)("h3",{children:"Connect a Wallet"})}),(0,n.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,n.jsx)(B,{})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,n.jsx)("h3",{children:"Wallet Select"})}),(0,n.jsx)("td",{className:"px-8 py-4 border-t w-3/4"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,n.jsx)("h3",{children:"Ant Design"})}),(0,n.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,n.jsx)(p,{})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,n.jsx)("h3",{children:"MUI Design"})}),(0,n.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,n.jsx)(z,{})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,n.jsx)("h3",{children:"Actions"})}),(0,n.jsx)("td",{className:"px-8 py-4 border-t break-all w-3/4",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:t,disabled:!e,children:"Disconnect"}),(0,n.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:f,disabled:!e,children:"Sign and submit transaction"}),(0,n.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:y,disabled:!e,children:"Sign transaction"}),(0,n.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:w,disabled:!e,children:"Sign Message"}),(0,n.jsx)("button",{className:"bg-orange-500 text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-orange-700":"opacity-50 cursor-not-allowed"),onClick:N,disabled:!e,children:"Sign Message and Verify"})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,n.jsx)("h3",{children:"Wallet Name"})}),(0,n.jsxs)("td",{className:"px-8 py-4 border-t w-3/4",children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[i&&(0,n.jsx)(H(),{src:i.icon,alt:i.name,width:25,height:25}),null==i?void 0:i.name]}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{target:"_blank",className:"text-sky-600",rel:"noreferrer",href:null==i?void 0:i.url,children:null==i?void 0:i.url})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t",children:(0,n.jsx)("h3",{children:"Account"})}),(0,n.jsx)("td",{className:"px-8 py-4 border-t break-all",children:(0,n.jsx)("div",{children:l?JSON.stringify(l):""})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t",children:(0,n.jsx)("h3",{children:"Network"})}),(0,n.jsx)("td",{className:"px-8 py-4 border-t",children:(0,n.jsx)("div",{children:s?JSON.stringify(s):""})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t",children:(0,n.jsx)("h3",{children:"auto connect"})}),(0,n.jsx)("td",{className:"px-8 py-4 border-t",children:(0,n.jsx)("div",{className:"relative flex flex-col overflow-hidden",children:(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)("label",{className:"inline-flex relative items-center mr-5 cursor-pointer",children:[(0,n.jsx)("input",{type:"checkbox",className:"sr-only peer",checked:h,readOnly:!0}),(0,n.jsx)("div",{onClick(){m(!h)},className:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"})]})})})})]})]})})]})}}},function(e){e.O(0,[350,774,888,179],function(){return e(e.s=930)}),_N_E=e.O()}]);