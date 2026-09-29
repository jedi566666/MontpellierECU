const data=require('./matrix-pro-data.cjs');
module.exports=({fs,path,root,shell})=>{
 const repo='https://github.com/jedi566666/MontpellierECU/blob/main/';
 const routes={fr:'/matrix-pro/',en:'/en/matrix-pro/'};
 for(const lang of ['fr','en']){
  const fr=lang==='fr',other=fr?'en':'fr',d=data[lang],md=fr?'MATRIX-PRO-FR.md':'MATRIX-PRO-EN.md';
  const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  const sections=d.sections.map(([title,body],i)=>`<section class="matrix-section" id="section-${i+1}"><h2>${esc(title)}</h2><p>${esc(body)}</p></section>`).join('');
  let html=shell(routes[lang],{title:d.title+' · Montpellier ECU',description:d.subtitle,content:`<div class="wrap matrix-guide"><section class="page-hero"><div class="eyebrow">MATRIX PRO · ${fr?'GUIDE D’UTILISATION':'USER GUIDE'} · ${d.updated.toUpperCase()}</div><h1>MATRIX Pro.<br><em>${fr?'Mode d’emploi.':'How it works.'}</em></h1><p class="lede">${esc(d.subtitle)}</p><div class="actions"><a class="button" href="/assets/matrix-pro/${lang}.pdf">${fr?'Télécharger le PDF':'Download the PDF'} · ${lang.toUpperCase()} ↓</a><a class="button secondary" href="${routes[other]}" lang="${other}">${fr?'Read in English':'Lire en français'}</a><a class="button secondary" href="${repo}docs/${md}">${fr?'Source Markdown sur GitHub':'Markdown source on GitHub'} ↗</a></div></section><div class="matrix-callout">${fr?'Guide du poste local MATRIX Pro. Cette page décrit son fonctionnement; elle ne donne pas accès à votre ordinateur.':'Guide to the local MATRIX Pro workstation. This page explains how it works; it does not grant access to your computer.'}</div>${sections}<footer class="matrix-foot">${fr?'État documenté au':'Documented as of'} ${d.updated} · <a href="https://github.com/jedi566666/MontpellierECU">${fr?'Sources du projet sur GitHub':'Project sources on GitHub'} ↗</a></footer></div>`});
  if(!fr){html=html.replace('lang="fr"','lang="en"').replace('content="fr_FR"','content="en_US"').replace('"inLanguage":"fr-FR"','"inLanguage":"en"');const labels={'Aller au contenu':'Skip to content','Navigation principale':'Main navigation','Découvrir':'Discover','Échanges':'Marketplace','La communauté':'Community','Liens utiles':'Useful links','Le projet':'The project','Transparence':'Transparency','Merci OpenAI · Tutoriels':'Thank you OpenAI · Tutorials','Communauté':'Community','Confidentialité & données':'Privacy & data','Racines occitanes. Horizon ouvert.':'Occitan roots. Open horizons.'};for(const [a,b] of Object.entries(labels))html=html.replaceAll(a,b);html=html.replace('src="/app.js"','src="/app-en.js"');}
  html=html.replace('</head>',`<link rel="stylesheet" href="/matrix-pro.css"><link rel="alternate" hreflang="fr" href="https://mtptoken.pages.dev${routes.fr}"><link rel="alternate" hreflang="en" href="https://mtptoken.pages.dev${routes.en}"></head>`);
  html=html.replace('<main id="main">','<main id="main"><div class="matrix-watermark" aria-hidden="true">M</div>');
  const dir=path.join(root,routes[lang]);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),html);
  const markdown=`# ${d.title}\n\n${d.subtitle}\n\n${fr?'État documenté':'Documented as of'}: ${d.updated}.\n\n- [${fr?'Version web':'Web version'}](https://mtptoken.pages.dev${routes[lang]})\n- [PDF ${lang.toUpperCase()}](https://mtptoken.pages.dev/assets/matrix-pro/${lang}.pdf)\n- [${fr?'Version en anglais':'French version'}](https://mtptoken.pages.dev${routes[other]})\n\n`+d.sections.map(([title,body])=>`## ${title}\n\n${body}`).join('\n\n')+'\n';
  fs.writeFileSync(path.join(__dirname,'../../docs',md),markdown);
 }
 const doc=path.join(root,'documentation','index.html');
 let html=fs.readFileSync(doc,'utf8');
 html=html.replace('<main id="main">','<main id="main"><aside class="wrap matrix-entry"><a class="button" href="/matrix-pro/">Nouveau · Guide de MATRIX Pro / MATRIX Pro user guide →</a><p>PDF et documentation en français et en anglais · <a href="/en/matrix-pro/" lang="en">English edition ↗</a></p></aside>');
 fs.writeFileSync(doc,html);
 const home=path.join(root,'index.html');
 fs.writeFileSync(home,fs.readFileSync(home,'utf8').replace('<main id="main">','<main id="main"><aside class="wrap matrix-entry"><a class="textlink" href="/matrix-pro/">MATRIX Pro · lire le guide FR / EN et télécharger les PDF →</a></aside>'));
};
