*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, sans-serif;
}

body{
background:#f4f6fb;
color:#111;
}

.app{
max-width:500px;
margin:auto;
padding-bottom:90px;
}

.top-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px;
background:#fff;
box-shadow:0 2px 10px rgba(0,0,0,0.05);
}

.wallet-user{
display:flex;
align-items:center;
gap:10px;
}

.avatar{
width:45px;
height:45px;
border-radius:50%;
background:#3375ff;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
font-weight:bold;
}

.notification-btn{
border:none;
background:none;
font-size:22px;
cursor:pointer;
}

.page{
display:none;
padding:15px;
}

.page.active{
display:block;
}

.balance-card{
background:linear-gradient(135deg,#3375ff,#4f92ff);
color:white;
padding:25px;
border-radius:20px;
margin-top:15px;
text-align:center;
}

.balance-label{
opacity:0.8;
margin-bottom:8px;
}

.balance-card h1{
font-size:36px;
margin-bottom:10px;
}

.market-indicator{
font-size:14px;
}

.wallet-connect-card{
background:#fff;
padding:20px;
border-radius:15px;
margin-top:15px;
text-align:center;
}

.connect-btn{
background:#3375ff;
color:white;
border:none;
padding:12px 20px;
border-radius:12px;
cursor:pointer;
font-size:15px;
margin-bottom:10px;
}

.connect-btn:hover{
opacity:0.9;
}

#walletAddress{
font-size:13px;
word-break:break-all;
margin-top:10px;
}

.quick-actions{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:10px;
margin-top:20px;
}

.action-item{
background:white;
border:none;
padding:15px;
border-radius:15px;
display:flex;
flex-direction:column;
align-items:center;
gap:5px;
font-size:18px;
cursor:pointer;
}

.action-item span{
font-size:13px;
}

.token-list{
margin-top:20px;
display:flex;
flex-direction:column;
gap:12px;
}

.token-card{
background:white;
border-radius:15px;
padding:15px;
display:flex;
justify-content:space-between;
align-items:center;
}

.token-left{
display:flex;
align-items:center;
gap:12px;
}

.coin-logo{
width:45px;
height:45px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:20px;
color:white;
}

.btc{
background:#f7931a;
}

.eth{
background:#627eea;
}

.bnb{
background:#f3ba2f;
}

.usdt{
background:#26a17b;
}

.token-right{
text-align:right;
}

.market-box,
.history-box,
.settings-box{
background:white;
padding:20px;
border-radius:15px;
margin-top:15px;
}

select,
input{
width:100%;
padding:12px;
margin-top:10px;
border:1px solid #ddd;
border-radius:10px;
font-size:15px;
}

.swap-btn{
width:100%;
margin-top:15px;
background:#3375ff;
color:white;
border:none;
padding:15px;
border-radius:12px;
font-size:16px;
cursor:pointer;
}

.bottom-nav{
position:fixed;
bottom:0;
left:0;
right:0;
max-width:500px;
margin:auto;
background:white;
display:flex;
justify-content:space-around;
padding:10px 0;
box-shadow:0 -2px 10px rgba(0,0,0,0.08);
}

.nav-btn{
border:none;
background:none;
display:flex;
flex-direction:column;
align-items:center;
font-size:20px;
cursor:pointer;
}

.nav-btn span{
font-size:11px;
margin-top:3px;
}

#qrcode{
display:flex;
justify-content:center;
margin-top:20px;
}

.positive{
color:#00b050;
font-weight:bold;
}

.negative{
color:#ff3b30;
font-weight:bold;
}

@media(max-width:480px){

.balance-card h1{
font-size:30px;
}

.quick-actions{
grid-template-columns:repeat(2,1fr);
}

}
