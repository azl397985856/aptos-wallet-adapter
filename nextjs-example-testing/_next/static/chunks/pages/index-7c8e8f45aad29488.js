(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6761:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5820)}])},5820:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return er}});var t=r(7458),s=r(2551),a=r(2983),i=r(9087),l=r(9552),o=r(9468),c=r(2208),d=r(8951),u=r(74),h=r(7639),x=r(1858),j=r(9998),m=r(5191),g=r(8106),f=r(6622),p=r(3260),b=r(2964),w=r(408),y=r(252),v=r(6740),k=r(4843),S=r(4948);function N(e){let{popoverAnchor:n,handlePopoverClose:r,handleNavigate:i}=e,{account:l,disconnect:o}=(0,s.Os)(),m=Boolean(n),g=()=>{i&&i(),r()},f=()=>{o(),r()},[p,b]=(0,a.useState)(!1),w=async e=>{await navigator.clipboard.writeText(null==l?void 0:l.address),b(!0),setTimeout(()=>{b(!1)},2e3)};return(0,t.jsx)(c.ZP,{id:m?"wallet-popover":void 0,open:m,anchorEl:n,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(u.Z,{title:"Copied",placement:"bottom-end",open:p,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,children:(0,t.jsx)(h.ZP,{disablePadding:!0,children:(0,t.jsx)(x.Z,{onClick:w,children:(0,t.jsx)(j.Z,{primary:"Copy Address"})})})}),(0,t.jsx)(h.ZP,{disablePadding:!0,children:(0,t.jsx)(x.Z,{onClick:g,children:(0,t.jsx)(j.Z,{primary:"Account"})})}),(0,t.jsx)(h.ZP,{disablePadding:!0,children:(0,t.jsx)(x.Z,{onClick:f,children:(0,t.jsx)(j.Z,{primary:"Logout"})})})]})})}function C(e){let{handleModalOpen:n,handleNavigate:r}=e,{connected:c,account:d,wallet:u}=(0,s.Os)(),[h,x]=(0,a.useState)(null),j=e=>{x(e.currentTarget)},g=()=>{x(null)},f=()=>{g(),n()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{size:"large",variant:"contained",onClick:c?j:f,className:"wallet-button",sx:{borderRadius:"10px"},children:c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{alt:null==u?void 0:u.name,src:null==u?void 0:u.icon,sx:{width:24,height:24}}),(0,t.jsx)(o.Z,{noWrap:!0,ml:2,children:(null==d?void 0:d.ansName)?null==d?void 0:d.ansName:function(e,n,r,t){if(!e)return"";if(!Number.isInteger(n)||!Number.isInteger(r))throw"".concat(n," and ").concat(r," should be an Integer");var s=e.length;return(t=t||"…",0===n&&0===r||n>=s||r>=s||n+r>=s)?e:0===r?e.slice(0,n)+t:e.slice(0,n)+t+e.slice(s-r)}(null==d?void 0:d.address,6,4,"…")})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.Z,{sx:{marginRight:1}}),(0,t.jsx)(o.Z,{noWrap:!0,children:"Connect Wallet"})]})}),(0,t.jsx)(N,{popoverAnchor:h,handlePopoverClose:g,handleNavigate:r})]})}var Z={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",450:"#909099",500:"#4f5352",600:"#363a39",700:"#272b2a",800:"#1b1f1e",900:"#121615"},A=e=>{let{wallet:n,onClick:r}=e,s=(0,g.Z)();return(0,t.jsx)(h.ZP,{disablePadding:!0,children:(0,t.jsxs)(x.Z,{alignItems:"center",disableGutters:!0,onClick:()=>r(),sx:{background:"dark"===s.palette.mode?Z[700]:Z[200],padding:"1rem 1rem",borderRadius:"".concat(s.shape.borderRadius,"px"),display:"flex",gap:"1rem"},children:[(0,t.jsx)(f.Z,{sx:{display:"flex",alignItems:"center",width:"2rem",height:"2rem",minWidth:"0",color:"".concat(s.palette.text.primary)},children:(0,t.jsx)(p.Z,{component:"img",src:n.icon,sx:{width:"100%",height:"100%"}})}),(0,t.jsx)(j.Z,{primary:n.name,primaryTypographyProps:{fontSize:18}}),(0,t.jsx)(i.Z,{variant:"contained",size:"small",className:"wallet-connect-button",children:"Connect"})]})})},E=e=>{let{wallet:n}=e,r=(0,g.Z)();return(0,t.jsxs)(h.ZP,{alignItems:"center",sx:{borderRadius:"".concat(r.shape.borderRadius,"px"),background:"dark"===r.palette.mode?Z[700]:Z[200],padding:"1rem 1rem",gap:"1rem"},children:[(0,t.jsx)(f.Z,{sx:{display:"flex",alignItems:"center",width:"2rem",height:"2rem",minWidth:"0",opacity:"0.25"},children:(0,t.jsx)(p.Z,{component:"img",src:n.icon,sx:{width:"100%",height:"100%"}})}),(0,t.jsx)(j.Z,{sx:{opacity:"0.25"},primary:n.name,primaryTypographyProps:{fontSize:18}}),(0,t.jsx)(i.Z,{LinkComponent:"a",href:n.url,target:"_blank",size:"small",className:"wallet-connect-install",children:"Install"})]})};function T(e){let{handleClose:n,modalOpen:r,networkSupport:a}=e,{wallets:i,connect:l}=(0,s.Os)(),c=(0,g.Z)(),d=e=>{l(e),n()};return(0,t.jsx)(w.Z,{open:r,onClose:n,"aria-labelledby":"wallet selector modal","aria-describedby":"select a wallet to connect",sx:{borderRadius:"".concat(c.shape.borderRadius,"px")},maxWidth:"xs",fullWidth:!0,children:(0,t.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",top:"50%",left:"50%",bgcolor:"background.paper",boxShadow:24,p:3},children:[(0,t.jsx)(v.Z,{onClick:n,sx:{position:"absolute",right:12,top:12,color:Z[450]},children:(0,t.jsx)(S.Z,{})}),(0,t.jsx)(o.Z,{align:"center",variant:"h5",pt:2,children:"Connect Wallet"}),(0,t.jsx)(p.Z,{sx:{display:"flex",gap:.5,alignItems:"center",justifyContent:"center",mb:4},children:a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.Z,{sx:{fontSize:"0.9rem",color:Z[400]}}),(0,t.jsxs)(o.Z,{sx:{display:"inline-flex",fontSize:"0.9rem",color:Z[400]},align:"center",children:[a," only"]})]})}),(0,t.jsx)(p.Z,{children:null==i?void 0:i.map(e=>{let n=Boolean(e.deeplinkProvider),r=e.readyState===s.i1.Installed||e.readyState===s.i1.Loadable,a=e=>{let{children:n}=e;return(0,t.jsx)(b.ZP,{xs:12,paddingY:.5,item:!0,children:n})};return!r&&(0,s.cX)()?n?(0,t.jsx)(a,{children:(0,t.jsx)(A,{wallet:e,onClick:()=>l(e.name)})},e.name):null:(0,t.jsx)(a,{children:r?(0,t.jsx)(A,{wallet:e,onClick:()=>d(e.name)}):(0,t.jsx)(E,{wallet:e})},e.name)})})]})})}function L(e){let{networkSupport:n,handleNavigate:r}=e,[s,i]=(0,a.useState)(!1),l=()=>i(!0),o=()=>i(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{handleModalOpen:l,handleNavigate:r}),(0,t.jsx)(T,{handleClose:o,modalOpen:s,networkSupport:n})]})}var P=r(2272),_=r.n(P),I=r(5258),K=r.n(I),F=r(4628),O=r(6154);let W=e=>{if(e===O.ZcK.DEVNET.toLowerCase())return z;if(e===O.ZcK.TESTNET.toLowerCase())return M;if(e===O.ZcK.MAINNET.toLowerCase())throw Error("Please use devnet or testnet for testing");throw Error("Unknown network: ".concat(e))},R=new O.ScN({network:O.ZcK.DEVNET}),z=new O.gZG(R),D=new O.ScN({network:O.ZcK.TESTNET}),M=new O.gZG(D);var V=r(589);function G(e){let{color:n,onClick:r,disabled:s,message:a}=e;return(0,t.jsx)("button",{className:"bg-".concat(n,"-500 text-white font-bold py-2 px-4 rounded mr-4 ").concat(s?"opacity-50 cursor-not-allowed":"hover:bg-".concat(n,"-700")),onClick:r,disabled:s,children:a})}function H(e){return(0,t.jsx)("td",{className:"px-8 py-4 ".concat(e.border?"border-t":""," w-").concat(e.title?"1/4":"3/4"),children:e.children})}function J(e){return(0,t.jsx)("tr",{children:e.children})}let U="0x1::aptos_coin::AptosCoin";function Y(e){let{isSendableNetwork:n}=e,{setSuccessAlertMessage:r,setSuccessAlertHash:a}=(0,V.VY)(),{connected:i,account:l,network:o,signAndSubmitTransaction:c,signMessageAndVerify:d,signMessage:u,signTransaction:h}=(0,s.Os)(),x=n(i,null==o?void 0:o.name),j=async()=>{let e={message:"Hello from Aptos Wallet Adapter",nonce:Math.random().toString(16)},n=await d(e);r(JSON.stringify({onSignMessageAndVerify:n}))},m=async()=>{let e={message:"Hello from Aptos Wallet Adapter",nonce:Math.random().toString(16)},n=await u(e);r(JSON.stringify({onSignMessage:n}))},g=async()=>{if(!l)return;let e={data:{function:"0x1::coin::transfer",typeArguments:[U],functionArguments:[l.address,1]}};try{let n=await c(e);await W(null==o?void 0:o.name.toLowerCase()).waitForTransaction({transactionHash:n.hash}),a(n.hash,null==o?void 0:o.name)}catch(r){console.error(r)}},f=async()=>{if(l)try{let e=await c({data:{function:"0x1::coin::transfer",typeArguments:[(0,O._LL)(U)],functionArguments:[O.kxK.from(l.address),new O.G90(1)]}});await W(null==o?void 0:o.name.toLowerCase()).waitForTransaction({transactionHash:e.hash}),a(e.hash,null==o?void 0:o.name)}catch(n){console.error(n)}},p=async()=>{try{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==l?void 0:l.address,1]},n=await h(e);r(JSON.stringify(n))}catch(t){console.error(t)}},b=async()=>{if(l)try{let e=await W(null==o?void 0:o.name.toLowerCase()).transaction.build.simple({sender:l.address,data:{function:"0x1::coin::transfer",typeArguments:[U],functionArguments:[l.address,1]}}),n=await h(e);r(JSON.stringify(n))}catch(t){console.error(t)}};return(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,border:!0,children:(0,t.jsx)("h3",{children:"Single Signer Flow"})}),(0,t.jsxs)(H,{border:!0,children:[(0,t.jsx)(G,{color:"blue",onClick:g,disabled:!x,message:"Sign and submit transaction"}),(0,t.jsx)(G,{color:"blue",onClick:f,disabled:!x,message:"Sign and submit BCS transaction"}),(0,t.jsx)(G,{color:"blue",onClick:p,disabled:!x,message:"Sign transaction"}),(0,t.jsx)(G,{color:"blue",onClick:b,disabled:!x,message:"Sign transaction V2"}),(0,t.jsx)(G,{color:"blue",onClick:m,disabled:!x,message:"Sign message"}),(0,t.jsx)(G,{color:"blue",onClick:j,disabled:!x,message:"Sign message and verify"})]})]})}function B(e){let{isSendableNetwork:n}=e,{connected:r,account:i,network:l,signTransaction:o,submitTransaction:c}=(0,s.Os)(),[d,u]=(0,a.useState)(null),{setSuccessAlertHash:h}=(0,V.VY)(),[x,j]=(0,a.useState)(),[m,g]=(0,a.useState)(),[f,p]=(0,a.useState)(),b=n(r,null==l?void 0:l.name);(0,a.useEffect)(()=>{if(!b||!i||!l)return;let e=async()=>{let e=await W(null==l?void 0:l.name.toLowerCase()).transaction.build.simple({sender:i.address,withFeePayer:!0,data:{function:"0x1::coin::transfer",typeArguments:["0x1::aptos_coin::AptosCoin"],functionArguments:[i.address,1]}});return e},n=async()=>{await W(l.name.toLowerCase()).fundAccount({accountAddress:i.address,amount:1e8})};n().then(()=>{e().then(e=>u(e))})},[l,i,b]);let w=async e=>{if(!d)throw Error("No Transaction to sign");try{let n=await o(d,e);e?(g(n),p(O.kxK.from(i.address))):j(n)}catch(r){console.error(r)}},y=async()=>{if(!d)throw Error("No Transaction to sign");if(!x)throw Error("No senderAuthenticator");if(!m)throw Error("No feepayerAuthenticator");d.feePayerAddress=f;try{let e=await c({transaction:d,senderAuthenticator:x,feePayerAuthenticator:m});h(e.hash,null==l?void 0:l.name)}catch(n){console.error(n)}};return(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,border:!0,children:(0,t.jsx)("h3",{children:"Sponsor Transaction Flow"})}),(0,t.jsxs)(H,{border:!0,children:[(0,t.jsx)(G,{color:"blue",onClick:()=>w(!1),disabled:!b||!d,message:"Sign as Sender"}),(0,t.jsx)(G,{color:"blue",onClick:()=>w(!0),disabled:!b||!x,message:"Sign as Sponsor"}),(0,t.jsx)(G,{color:"blue",onClick:y,disabled:!b||!m,message:"Submit transaction"})]})]})}function X(e){let{isSendableNetwork:n}=e,{connected:r,account:i,network:l,signTransaction:o,submitTransaction:c}=(0,s.Os)(),[d,u]=(0,a.useState)(),[h,x]=(0,a.useState)(null),{setSuccessAlertHash:j}=(0,V.VY)(),[m,g]=(0,a.useState)(),[f,p]=(0,a.useState)(),b=n(r,null==l?void 0:l.name);(0,a.useEffect)(()=>{if(!b||!i||!l)return;let e=O.mRj.generate(),n=async()=>{let n=await W(null==l?void 0:l.name.toLowerCase()).transaction.build.multiAgent({sender:i.address,secondarySignerAddresses:[e.accountAddress],data:{function:"0x1::coin::transfer",typeArguments:["0x1::aptos_coin::AptosCoin"],functionArguments:[i.address,1]}});return n},r=async()=>{await W(l.name.toLowerCase()).fundAccount({accountAddress:e.accountAddress.toString(),amount:1e8})},t=async()=>{await W(l.name.toLowerCase()).fundAccount({accountAddress:i.address,amount:1e8})};r().then(()=>{u(e),t().then(()=>{n().then(e=>x(e))})})},[l,i,b]);let w=async()=>{if(!h)throw Error("No Transaction to sign");try{let e=await o(h);g(e)}catch(n){console.error(n)}},y=async()=>{if(!h)throw Error("No Transaction to sign");try{let e=await o(h);p(e)}catch(n){console.error(n)}},v=async()=>{if(!h)throw Error("No Transaction to sign");if(!m)throw Error("No senderAuthenticator");if(!f)throw Error("No secondarySignerAuthenticator");try{let e=await c({transaction:h,senderAuthenticator:m,additionalSignersAuthenticators:[f]});j(e.hash,null==l?void 0:l.name)}catch(n){console.error(n)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,border:!0,children:(0,t.jsx)("h3",{children:"Multi Agent Transaction Flow"})}),(0,t.jsxs)(H,{border:!0,children:[(0,t.jsx)(G,{color:"blue",onClick:w,disabled:!b||!h,message:"Sign as sender"}),(0,t.jsx)(G,{color:"blue",onClick:y,disabled:!b||!m,message:"Sign as secondary signer"}),(0,t.jsx)(G,{color:"blue",onClick:v,disabled:!b||!f,message:"Submit transaction"})]})]}),d&&f&&(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,children:(0,t.jsx)("h3",{children:"Secondary Signer details"})}),(0,t.jsxs)(H,{children:[(0,t.jsxs)("p",{children:["Private Key: ",d.privateKey.toString()]}),(0,t.jsxs)("p",{children:["Public Key: ",d.publicKey.toString()]}),(0,t.jsxs)("p",{children:["Address: ",d.accountAddress.toString()]})]})]})]})}var q=r(8980);let{Link:Q}=q.Z,$=_()(()=>r.e(579).then(r.bind(r,3579)),{loadableGenerated:{webpack:()=>[3579]},suspense:!1,ssr:!1}),ee=_()(()=>Promise.all([r.e(505),r.e(250)]).then(r.bind(r,8250)),{loadableGenerated:{webpack:()=>[8250]},suspense:!1,ssr:!1}),en=(e,n)=>e&&((null==n?void 0:n.toLowerCase())===O.ZcK.DEVNET.toLowerCase()||(null==n?void 0:n.toLowerCase())===O.ZcK.TESTNET.toLowerCase());function er(){var e;let{account:n,connected:r,network:a,wallet:i}=(0,s.Os)();return(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"flex justify-center mt-2 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black",children:["Aptos Wallet Adapter Tester (",null!==(e=null==a?void 0:a.name)&&void 0!==e?e:"",")"]}),(0,t.jsx)(Q,{href:"https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/apps/nextjs-example",target:"_blank",className:"flex justify-center tracking-tight leading-none text-black",children:"Demo app source code"}),(0,t.jsx)("table",{className:"table-auto w-full border-separate border-spacing-y-8 shadow-lg bg-white border-separate",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)(et,{}),(0,t.jsx)(el,{}),r&&(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,border:!0,children:(0,t.jsx)("h3",{children:(0,t.jsx)("b",{children:"Wallet Information"})})}),(0,t.jsx)(H,{border:!0})]}),r&&(0,t.jsx)(es,{wallet:i,network:a,account:n}),r&&!en(r,null==a?void 0:a.name)&&(0,t.jsxs)("tr",{children:[(0,t.jsx)(H,{title:!0}),(0,t.jsx)(H,{children:(0,t.jsx)("p",{style:{color:"red"},children:"Transactions only work with Devnet or Testnet networks"})})]}),r&&(0,t.jsx)(Y,{isSendableNetwork:en}),r&&(0,t.jsx)(B,{isSendableNetwork:en}),r&&(0,t.jsx)(X,{isSendableNetwork:en})]})})]})}function et(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,border:!0,children:(0,t.jsx)("h2",{children:(0,t.jsx)("b",{children:"Wallet Select"})})}),(0,t.jsx)(H,{border:!0})]}),(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,children:(0,t.jsx)("h3",{children:"Connect a Wallet"})}),(0,t.jsx)(H,{children:(0,t.jsx)($,{})})]}),(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,children:(0,t.jsx)("h3",{children:"Ant Design"})}),(0,t.jsx)(H,{children:(0,t.jsx)(ee,{})})]}),(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,children:(0,t.jsx)("h3",{children:"MUI Design"})}),(0,t.jsx)(H,{children:(0,t.jsx)(L,{})})]})]})}function es(e){var n,r,s,a,i;let{account:l,network:o,wallet:c}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(H,{title:!0,children:(0,t.jsx)("h3",{children:"Wallet Name"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)("b",{children:"Icon: "}),e.wallet&&(0,t.jsx)(K(),{src:null!==(s=null==c?void 0:c.icon)&&void 0!==s?s:"",alt:null!==(a=null==c?void 0:c.name)&&void 0!==a?a:"",width:25,height:25}),(0,t.jsx)("b",{children:" Name: "}),null==c?void 0:c.name,(0,t.jsx)("b",{children:" URL: "}),(0,t.jsx)("a",{target:"_blank",className:"text-sky-600",rel:"noreferrer",href:null==c?void 0:c.url,children:null==c?void 0:c.url})]})]}),(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,children:(0,t.jsx)("h3",{children:"Account Info"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(ea,{name:"Address",isCorrect:!!(null==l?void 0:l.address),value:null==l?void 0:l.address}),(0,t.jsx)(ea,{name:"Public key",isCorrect:!!(null==l?void 0:l.publicKey),value:null==l?void 0:null===(n=l.publicKey)||void 0===n?void 0:n.toString()}),(0,t.jsx)(ei,{name:"ANS Name (only if attached)",value:null==l?void 0:l.ansName}),(0,t.jsx)(ei,{name:"Min keys required (only for multisig)",value:null==l?void 0:null===(r=l.minKeysRequired)||void 0===r?void 0:r.toString()})]})]}),(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,children:(0,t.jsx)("h3",{children:"Network Info"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(ea,{name:"Network Name",isCorrect:Object.values(O.ZcK).includes(null===(i=e.network)||void 0===i?void 0:i.name),value:null==o?void 0:o.name,expected:"one of: "+Object.values(O.ZcK).join(", ")}),(0,t.jsx)(ei,{name:"URL",value:null==o?void 0:o.url}),(0,t.jsx)(ei,{name:"ChainId",value:null==o?void 0:o.chainId})]})]})]})}function ea(e){let{name:n,isCorrect:r,value:s,expected:a}=e;return(0,t.jsx)("div",{style:r?{color:"green"}:{color:"black",border:"2px solid red"},children:(0,t.jsxs)("p",{children:[(0,t.jsxs)("b",{children:[n,":"]})," ",null!=s?s:"Not present"," ",!r&&a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("b",{children:"Expected:"})," ",a]})]})})}function ei(e){var n;return(0,t.jsx)("div",{children:(0,t.jsxs)("p",{children:[(0,t.jsxs)("b",{children:[e.name,":"]})," ",null!==(n=e.value)&&void 0!==n?n:"Not present"]})})}function el(){let{autoConnect:e,setAutoConnect:n}=(0,F.vl)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(J,{children:[(0,t.jsx)(H,{title:!0,border:!0,children:(0,t.jsx)("h3",{children:"Auto reconnect on page open"})}),(0,t.jsx)(H,{border:!0,children:(0,t.jsx)("div",{className:"relative flex flex-col overflow-hidden",children:(0,t.jsx)("div",{className:"flex",children:(0,t.jsxs)("label",{className:"inline-flex relative items-center mr-5 cursor-pointer",children:[(0,t.jsx)("input",{type:"checkbox",className:"sr-only peer",checked:e,readOnly:!0}),(0,t.jsx)("div",{onClick(){n(!e)},className:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"})]})})})})]})})}}},function(e){e.O(0,[712,774,888,179],function(){return e(e.s=6761)}),_N_E=e.O()}]);