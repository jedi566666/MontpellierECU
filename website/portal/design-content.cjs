// Final presentation layer, shared by every page including localized pages.
module.exports=({fs,path,root})=>{
 const overlay='<div class="mtp-page-transition" aria-hidden="true"><div class="mtp-transition-orbit"></div><div class="mtp-transition-coin"><img class="coin-front" src="/assets/coin.png" alt="" width="160" height="160"><img class="coin-back" src="/assets/coin.png" alt="" width="160" height="160"></div><span class="mtp-transition-signature">MONTPELLIER ECU</span></div>';
 function visit(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
  const file=path.join(dir,entry.name);
  if(entry.isDirectory())visit(file);
  else if(entry.name.endsWith('.html')){
   let html=fs.readFileSync(file,'utf8');
   html=html.replace('<link rel="stylesheet" href="/compact.css">','');
   html=html.replace('</head>','<link rel="stylesheet" href="/atelier.css"><link rel="stylesheet" href="/page-transitions.css"><link rel="stylesheet" href="/compact.css"><script src="/page-transitions.js"></script></head>');
   html=html.replace(/(<body\b[^>]*>)/,'$1'+overlay);
   fs.writeFileSync(file,html);
  }
 }}visit(root);
};
