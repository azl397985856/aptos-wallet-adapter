(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4266:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4643)}])},4643:function(e,n,r){"use strict";r.r(n),r.d(n,{DEVNET_NODE_URL:function(){return K},default:function(){return J}});var t=r(7458),s=r(8591),a=r(8868),l=r(2983),i=r(9923),o=r(2829),d=r(9621),c=r(1493),x=r(1922),h=r(4974),p=r(4469),u=r(2335),m=r(8050),b=r(6258),j=r(1154),g=r(3309),f=r(7447),y=r(8429),w=r(5347),N=r(5757),v=r(4821),k=r(1152),Z=r(3709);function C(e){let{popoverAnchor:n,handlePopoverClose:r,handleNavigate:s}=e,{account:i,disconnect:o}=(0,a.Os)(),d=Boolean(n),b=()=>{s&&s(),r()},j=()=>{o(),r()},[g,f]=(0,l.useState)(!1),y=async e=>{await navigator.clipboard.writeText(null==i?void 0:i.address),f(!0),setTimeout(()=>{f(!1)},2e3)};return(0,t.jsx)(c.ZP,{id:d?"wallet-popover":void 0,open:d,anchorEl:n,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(h.Z,{title:"Copied",placement:"bottom-end",open:g,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,children:(0,t.jsx)(p.ZP,{disablePadding:!0,children:(0,t.jsx)(u.Z,{onClick:y,children:(0,t.jsx)(m.Z,{primary:"Copy Address"})})})}),(0,t.jsx)(p.ZP,{disablePadding:!0,children:(0,t.jsx)(u.Z,{onClick:b,children:(0,t.jsx)(m.Z,{primary:"Account"})})}),(0,t.jsx)(p.ZP,{disablePadding:!0,children:(0,t.jsx)(u.Z,{onClick:j,children:(0,t.jsx)(m.Z,{primary:"Logout"})})})]})})}function S(e){let{handleModalOpen:n,handleNavigate:r}=e,{connected:s,account:c,wallet:x}=(0,a.Os)(),[h,p]=(0,l.useState)(null),u=e=>{p(e.currentTarget)},m=()=>{p(null)},j=()=>{m(),n()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{size:"large",variant:"contained",onClick:s?u:j,className:"wallet-button",sx:{borderRadius:"10px"},children:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{alt:null==x?void 0:x.name,src:null==x?void 0:x.icon,sx:{width:24,height:24}}),(0,t.jsx)(d.Z,{noWrap:!0,ml:2,children:(null==c?void 0:c.ansName)?null==c?void 0:c.ansName:function(e,n,r,t){if(!e)return"";if(!Number.isInteger(n)||!Number.isInteger(r))throw"".concat(n," and ").concat(r," should be an Integer");var s=e.length;return(t=t||"…",0===n&&0===r||n>=s||r>=s||n+r>=s)?e:0===r?e.slice(0,n)+t:e.slice(0,n)+t+e.slice(s-r)}(null==c?void 0:c.address,6,4,"…")})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.Z,{sx:{marginRight:1}}),(0,t.jsx)(d.Z,{noWrap:!0,children:"Connect Wallet"})]})}),(0,t.jsx)(C,{popoverAnchor:h,handlePopoverClose:m,handleNavigate:r})]})}var _={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",450:"#909099",500:"#4f5352",600:"#363a39",700:"#272b2a",800:"#1b1f1e",900:"#121615"},P=e=>{let{wallet:n,onClick:r}=e,s=(0,j.Z)();return(0,t.jsx)(p.ZP,{disablePadding:!0,children:(0,t.jsxs)(u.Z,{alignItems:"center",disableGutters:!0,onClick:()=>r(),sx:{background:"dark"===s.palette.mode?_[700]:_[200],padding:"1rem 1rem",borderRadius:"".concat(s.shape.borderRadius,"px"),display:"flex",gap:"1rem"},children:[(0,t.jsx)(g.Z,{sx:{display:"flex",alignItems:"center",width:"2rem",height:"2rem",minWidth:"0",color:"".concat(s.palette.text.primary)},children:(0,t.jsx)(f.Z,{component:"img",src:n.icon,sx:{width:"100%",height:"100%"}})}),(0,t.jsx)(m.Z,{primary:n.name,primaryTypographyProps:{fontSize:18}}),(0,t.jsx)(i.Z,{variant:"contained",size:"small",className:"wallet-connect-button",children:"Connect"})]})})},T=e=>{let{wallet:n}=e,r=(0,j.Z)();return(0,t.jsxs)(p.ZP,{alignItems:"center",sx:{borderRadius:"".concat(r.shape.borderRadius,"px"),background:"dark"===r.palette.mode?_[700]:_[200],padding:"1rem 1rem",gap:"1rem"},children:[(0,t.jsx)(g.Z,{sx:{display:"flex",alignItems:"center",width:"2rem",height:"2rem",minWidth:"0",opacity:"0.25"},children:(0,t.jsx)(f.Z,{component:"img",src:n.icon,sx:{width:"100%",height:"100%"}})}),(0,t.jsx)(m.Z,{sx:{opacity:"0.25"},primary:n.name,primaryTypographyProps:{fontSize:18}}),(0,t.jsx)(i.Z,{LinkComponent:"a",href:n.url,target:"_blank",size:"small",className:"wallet-connect-install",children:"Install"})]})};function A(e){let{handleClose:n,modalOpen:r,networkSupport:s}=e,{wallets:l,connect:i}=(0,a.Os)(),o=(0,j.Z)(),c=e=>{i(e),n()};return(0,t.jsx)(w.Z,{open:r,onClose:n,"aria-labelledby":"wallet selector modal","aria-describedby":"select a wallet to connect",sx:{borderRadius:"".concat(o.shape.borderRadius,"px")},maxWidth:"xs",fullWidth:!0,children:(0,t.jsxs)(N.Z,{sx:{display:"flex",flexDirection:"column",top:"50%",left:"50%",bgcolor:"background.paper",boxShadow:24,p:3},children:[(0,t.jsx)(v.Z,{onClick:n,sx:{position:"absolute",right:12,top:12,color:_[450]},children:(0,t.jsx)(Z.Z,{})}),(0,t.jsx)(d.Z,{align:"center",variant:"h5",pt:2,children:"Connect Wallet"}),(0,t.jsx)(f.Z,{sx:{display:"flex",gap:.5,alignItems:"center",justifyContent:"center",mb:4},children:s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.Z,{sx:{fontSize:"0.9rem",color:_[400]}}),(0,t.jsxs)(d.Z,{sx:{display:"inline-flex",fontSize:"0.9rem",color:_[400]},align:"center",children:[s," only"]})]})}),(0,t.jsx)(f.Z,{children:l.map(e=>{let n=Boolean(e.deeplinkProvider),r=e.readyState===a.i1.Installed||e.readyState===a.i1.Loadable,s=e=>{let{children:n}=e;return(0,t.jsx)(y.ZP,{xs:12,paddingY:.5,item:!0,children:n})};return!r&&(0,a.cX)()?n?(0,t.jsx)(s,{children:(0,t.jsx)(P,{wallet:e,onClick:()=>i(e.name)})},e.name):null:(0,t.jsx)(s,{children:r?(0,t.jsx)(P,{wallet:e,onClick:()=>c(e.name)}):(0,t.jsx)(T,{wallet:e})},e.name)})})]})})}function W(e){let{networkSupport:n,handleNavigate:r}=e,[s,a]=(0,l.useState)(!1),i=()=>a(!0),o=()=>a(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S,{handleModalOpen:i,handleNavigate:r}),(0,t.jsx)(A,{handleClose:o,modalOpen:s,networkSupport:n})]})}var O=r(4691),E=r.n(O),I=r(602),F=r.n(I),R=r(5276),z=r(6378);let D=E()(()=>r.e(942).then(r.bind(r,2942)),{loadableGenerated:{webpack:()=>[2942]},suspense:!1,ssr:!1}),L=E()(()=>Promise.all([r.e(989),r.e(589)]).then(r.bind(r,8589)),{loadableGenerated:{webpack:()=>[8589]},suspense:!1,ssr:!1}),K="https://fullnode.devnet.aptoslabs.com/v1",H=new s.gK(K,{WITH_CREDENTIALS:!1});function J(){let{connected:e,disconnect:n,account:r,network:l,wallet:i,signAndSubmitTransaction:o,signAndSubmitBCSTransaction:d,signTransaction:c,signMessage:x,signMessageAndVerify:h}=(0,a.Os)(),{autoConnect:p,setAutoConnect:u}=(0,R.vl)(),{setSuccessAlertMessage:m,setSuccessAlertHash:b}=(0,z.VY)(),j=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==r?void 0:r.address,1]},n=await o(e);try{await H.waitForTransaction(n.hash),b(n.hash,null==l?void 0:l.name)}catch(t){console.error(t)}},g=async()=>{let e=new s.Kj.TypeTagStruct(s.Kj.StructTag.fromString("0x1::aptos_coin::AptosCoin")),n=new s.Kj.TransactionPayloadEntryFunction(s.Kj.EntryFunction.natural("0x1::coin","transfer",[e],[s.Ce.bcsToBytes(s.Kj.AccountAddress.fromHex(r.address)),s.Ce.bcsSerializeUint64(2)])),t=await d(n);try{await H.waitForTransaction(t.hash),b(t.hash,null==l?void 0:l.name)}catch(a){console.error(a)}},f=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==r?void 0:r.address,1]},n=await c(e);m(JSON.stringify(n))},y=async()=>{let e=await x({message:"Hello from Aptos Wallet Adapter",nonce:"random_string"});m(JSON.stringify(e))},w=async()=>{let e=await h({message:"Hello from Aptos Wallet Adapter",nonce:"random_string"});m(JSON.stringify({onSignMessageAndVerify:e}))};return(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"flex justify-center mt-2 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black",children:"Aptos Wallet Adapter Demo (Devnet)"}),(0,t.jsx)("table",{className:"table-auto w-full border-separate border-spacing-y-8 shadow-lg bg-white border-separate",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,t.jsx)("h3",{children:"Connect a Wallet"})}),(0,t.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,t.jsx)(D,{})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,t.jsx)("h3",{children:"Wallet Select"})}),(0,t.jsx)("td",{className:"px-8 py-4 border-t w-3/4"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,t.jsx)("h3",{children:"Ant Design"})}),(0,t.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,t.jsx)(L,{})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,t.jsx)("h3",{children:"MUI Design"})}),(0,t.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,t.jsx)(W,{})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,t.jsx)("h3",{children:"Standard functions"})}),(0,t.jsx)("td",{className:"px-8 py-4 border-t break-all w-3/4",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:n,disabled:!e,children:"Disconnect"}),(0,t.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:j,disabled:!e,children:"Sign and submit transaction"}),(0,t.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:y,disabled:!e,children:"Sign Message"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:"Feature functions"}),(0,t.jsxs)("td",{className:"px-8 py-4 border-t w-3/4",children:[(0,t.jsx)("button",{className:"bg-orange-500 text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-orange-700":"opacity-50 cursor-not-allowed"),onClick:w,disabled:!e,children:"Sign Message and Verify"}),(0,t.jsx)("button",{className:"bg-orange-500 text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-orange-700":"opacity-50 cursor-not-allowed"),onClick:f,disabled:!e,children:"Sign transaction"}),(0,t.jsx)("button",{className:"bg-orange-500 text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-orange-700":"opacity-50 cursor-not-allowed"),onClick:g,disabled:!e,children:"Sign and submit BCS transaction"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,t.jsx)("h3",{children:"Wallet Name"})}),(0,t.jsxs)("td",{className:"px-8 py-4 border-t w-3/4",children:[(0,t.jsxs)("div",{style:{display:"flex"},children:[i&&(0,t.jsx)(F(),{src:i.icon,alt:i.name,width:25,height:25}),null==i?void 0:i.name]}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",className:"text-sky-600",rel:"noreferrer",href:null==i?void 0:i.url,children:null==i?void 0:i.url})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 border-t",children:(0,t.jsx)("h3",{children:"Account"})}),(0,t.jsx)("td",{className:"px-8 py-4 border-t break-all",children:(0,t.jsx)("div",{children:r?JSON.stringify(r):""})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 border-t",children:(0,t.jsx)("h3",{children:"Network"})}),(0,t.jsx)("td",{className:"px-8 py-4 border-t",children:(0,t.jsx)("div",{children:l?JSON.stringify(l):""})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-8 py-4 border-t",children:(0,t.jsx)("h3",{children:"auto connect"})}),(0,t.jsx)("td",{className:"px-8 py-4 border-t",children:(0,t.jsx)("div",{className:"relative flex flex-col overflow-hidden",children:(0,t.jsx)("div",{className:"flex",children:(0,t.jsxs)("label",{className:"inline-flex relative items-center mr-5 cursor-pointer",children:[(0,t.jsx)("input",{type:"checkbox",className:"sr-only peer",checked:p,readOnly:!0}),(0,t.jsx)("div",{onClick(){u(!p)},className:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"})]})})})})]})]})})]})}}},function(e){e.O(0,[252,774,888,179],function(){return e(e.s=4266)}),_N_E=e.O()}]);