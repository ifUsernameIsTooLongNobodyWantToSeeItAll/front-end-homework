(()=>{let e={code:null,account:{id:null,userName:null},profile:{userId:null,nickname:null,avatarImgId:null,avatarUrl:null}},t=!1;const n=document.getElementById("head_4"),l=document.getElementById("username_4");let o={code:null};fetch(`http://localhost:3000/login/refresh?timestamp=${(new Date).getTime()}&noCookie=true`).then((e=>e.json())).then((e=>o=e)).then((()=>{301===o.code?console.log("not login"):200===o.code?console.log("Logged in"):console.log(o.code)})).then((()=>{fetch(`http://localhost:3000/user/account?timestamp=${(new Date).getTime()}`).then((e=>e.json())).then((t=>e=t)).then((()=>{t=null!=e.account&&null!=e.account.id,t&&(null===e.profile?(n.setAttribute("src","../img/default_head.png"),l.innerText=e.account.userName):(n.setAttribute("src",e.profile.avatarUrl),l.innerText=e.profile.nickname.toString())),null!==e.account.id&&fetch(`http://localhost:3000/user/playlist?uid=${e.account.id}`).then((e=>e.json)).then((e=>geDanListByUser=e))}))}))})(),(()=>{let e;window.page=2;let t={data:{code:null,unikey:null},code:null},n={code:null,data:{qrurl:null,qrimg:null}},l={code:null,message:null,cookie:null};const o=document.getElementById("QR_code_3");fetch("http://localhost:3000/login/qr/key?timestamp="+(new Date).getTime()).then((e=>e.json())).then((e=>t=e)).then((()=>e=t.data.unikey)).then((()=>{fetch(`http://localhost:3000/login/qr/create?qrimg=true&key=${e}?timestamp=${(new Date).getTime()}`).then((e=>e.json())).then((e=>n=e)).then((()=>o.setAttribute("src",n.data.qrimg))).then((()=>function(){let t=setInterval((()=>{fetch(`http://localhost:3000/login/qr/check?key=${e}&timestamp=${(new Date).getTime()}`).then((e=>e.json())).then((e=>l=e)).then((()=>{console.log(l.message),800===l.code&&(alert(l.message),clearInterval(t)),803===l.code&&(alert(l.message),clearInterval(t))}))}),3e3);console.log(l.message)}()))}))})();