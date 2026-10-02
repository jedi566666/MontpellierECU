module.exports=({fs,path,root,shell})=>{
  const routes={fr:'/ia/top-flop-modeles/',en:'/en/ai/model-top-flop/'};
  const pdf='/assets/engineering/matrix-agents-top-flop-fr-en.pdf';
  const snapshot='2026-10-02';
  const kpis={
    total:30,
    ready:1,
    deployment_required:12,
    unavailable:2,
    azure_ready:0,
    github_ready:1,
    audio_ready:0,
    cross_provider:'PASS',
    failover:'PASS'
  };

  const fr={
    title:'Top / Flop des modèles IA — passe technique MATRIX',
    desc:'Classement technique FR/EN des agents MATRIX : performance réelle, statuts, providers, réactions observées et preuves.',
    heroEyebrow:'MATRIX · ANALYSE PERFORMANCE · '+snapshot,
    heroTitle:'Top / Flop des modèles IA.<br><em>Résultats réels, pas promesses.</em>',
    heroLead:'Cette page résume la dernière passe vérifiée: qui a performé, qui est bloqué, et pourquoi. Le PDF complet documente chaque agent/modèle.',
    topTitle:'Top performer',
    topBody:'<strong>github-fast</strong> (GitHub/Copilot · Claude Haiku 4.5) est le seul agent READY confirmé sur la passe finale, avec exécution SUCCESS et routage stable.',
    flopTitle:'Flop / bloquants',
    flopBody:'Les agents Azure ne sont pas classés en échec qualité, mais en <strong>DEPLOYMENT_REQUIRED</strong> (non déployés/config non finalisée). <strong>vercel-gpt</strong> reste en <strong>BLOCKED_GATEWAY</strong>.',
    quote:'github-fast a couru le 100m; Azure était encore en train de lacer ses chaussures.',
    otherHref:routes.en,
    otherLabel:'Read in English',
    pdfLabel:'Télécharger le PDF complet FR/EN',
    docLabel:'Voir la fiche MATRIX Pro',
    docHref:'/matrix-pro/',
    lang:'fr'
  };

  const en={
    title:'AI model Top / Flop — MATRIX technical pass',
    desc:'FR/EN technical ranking of MATRIX agents: real performance, statuses, providers, observed reactions and evidence.',
    heroEyebrow:'MATRIX · PERFORMANCE ANALYSIS · '+snapshot,
    heroTitle:'AI model Top / Flop.<br><em>Measured outcomes, not wishful thinking.</em>',
    heroLead:'This page summarizes the latest verified pass: who performed, who is blocked, and why. The full PDF documents every registered model/agent.',
    topTitle:'Top performer',
    topBody:'<strong>github-fast</strong> (GitHub/Copilot · Claude Haiku 4.5) is the only READY agent confirmed on the final pass, with SUCCESS execution and stable routing.',
    flopTitle:'Flop / blockers',
    flopBody:'Azure agents are not quality-failures here, but <strong>DEPLOYMENT_REQUIRED</strong> (not deployed/config not finalized). <strong>vercel-gpt</strong> remains <strong>BLOCKED_GATEWAY</strong>.',
    quote:'github-fast ran the 100m; Azure was still tying its shoes.',
    otherHref:routes.fr,
    otherLabel:'Lire en français',
    pdfLabel:'Download the full FR/EN PDF',
    docLabel:'Open MATRIX Pro brief',
    docHref:'/en/matrix-pro/',
    lang:'en'
  };

  const render=(d)=>`<div class="wrap ia-page"><section class="page-hero"><div class="eyebrow">${d.heroEyebrow}</div><h1>${d.heroTitle}</h1><p class="lede">${d.heroLead}</p><div class="actions"><a class="button" href="${pdf}">${d.pdfLabel} ↓</a><a class="button secondary" href="${d.otherHref}" lang="${d.lang==='fr'?'en':'fr'}">${d.otherLabel}</a><a class="button secondary" href="${d.docHref}">${d.docLabel} ↗</a></div></section><section class="section"><div class="section-head"><div><div class="eyebrow">KPI snapshot</div><h2>Lecture rapide.<br><em>Données observées.</em></h2></div><p>Snapshot daté du ${snapshot}. Aucun faux READY: un modèle est READY uniquement avec preuve récente signée.</p></div><div class="grid"><article class="card"><span class="eyebrow">Total agents</span><h3>${kpis.total}</h3><p>READY: ${kpis.ready} · DEPLOYMENT_REQUIRED: ${kpis.deployment_required} · UNAVAILABLE: ${kpis.unavailable}</p></article><article class="card"><span class="eyebrow">Azure</span><h3>READY ${kpis.azure_ready}</h3><p>Provider affiché en vert côté UI, mais aucun READY sans déploiement réel.</p></article><article class="card"><span class="eyebrow">GitHub/Copilot</span><h3>READY ${kpis.github_ready}</h3><p>Voie opérationnelle prouvée sur la passe finale.</p></article><article class="card"><span class="eyebrow">Résilience</span><h3>${kpis.cross_provider} / ${kpis.failover}</h3><p>Échec Azure n’a pas bloqué GitHub, et inversement par design de routage.</p></article></div></section><section class="section"><div class="section-head"><div><div class="eyebrow">Top / Flop</div><h2>Classement opérationnel.<br><em>Avec un peu d’autodérision.</em></h2></div><p>Cette page résume. Le PDF complet contient les fiches techniques détaillées de chaque modèle et provider.</p></div><div class="grid"><article class="card"><span class="eyebrow">${d.topTitle}</span><h3>github-fast</h3><p>${d.topBody}</p></article><article class="card"><span class="eyebrow">${d.flopTitle}</span><h3>DEPLOYMENT_REQUIRED / BLOCKED</h3><p>${d.flopBody}</p></article></div><p class="ia-aside">“${d.quote}” ☕</p></section><section class="section"><div class="section-head"><div><div class="eyebrow">Preuves</div><h2>Journalisation & traçabilité.</h2></div><p>Le rapport complet s’appuie sur les journaux d’exécution, les statuts de readiness et le transcript de la console MATRIX.</p></div><div class="actions"><a class="button" href="${pdf}">${d.pdfLabel} ↓</a><a class="button secondary" href="/ia/">Retour à l’atelier IA</a></div></section></div>`;

  const pages={
    [routes.fr]:{title:fr.title+' | Montpellier ECU',description:fr.desc,content:render(fr)},
    [routes.en]:{title:en.title+' | Montpellier ECU',description:en.desc,content:render(en)}
  };

  for(const [route,p] of Object.entries(pages)){
    const dir=path.join(root,route);
    fs.mkdirSync(dir,{recursive:true});
    let html=shell(route,p);
    if(route===routes.en){
      html=html.replace('lang="fr"','lang="en"')
        .replace('content="fr_FR"','content="en_US"')
        .replace('"inLanguage":"fr-FR"','"inLanguage":"en"')
        .replace('Découvrir','Discover')
        .replace('Échanges','Marketplace')
        .replace('La communauté ↗','Community ↗')
        .replace('Liens utiles','Useful links')
        .replace('Le projet','The project')
        .replace('Transparence','Transparency')
        .replace('Merci OpenAI · Tutoriels','Thanks OpenAI · Tutorials')
        .replace('Confidentialité & données','Privacy & data')
        .replace('Racines occitanes. Horizon ouvert.','Occitan roots. Open horizons.')
        .replace('src="/app.js"','src="/app-en.js"');
    }
    fs.writeFileSync(path.join(dir,'index.html'),html);
  }

  const frMd=`# Top / Flop des modèles IA — MATRIX\n\nSnapshot: ${snapshot}.\n\n- Version web FR: https://mtptoken.pages.dev${routes.fr}\n- Version web EN: https://mtptoken.pages.dev${routes.en}\n- PDF complet FR/EN: https://mtptoken.pages.dev${pdf}\n\n## Résumé\n\n- Top performer: github-fast\n- Azure: DEPLOYMENT_REQUIRED (pas de faux READY)\n- Failover cross-provider: PASS\n`;
  const enMd=`# AI model Top / Flop — MATRIX\n\nSnapshot: ${snapshot}.\n\n- EN web: https://mtptoken.pages.dev${routes.en}\n- FR web: https://mtptoken.pages.dev${routes.fr}\n- Full FR/EN PDF: https://mtptoken.pages.dev${pdf}\n\n## Summary\n\n- Top performer: github-fast\n- Azure: DEPLOYMENT_REQUIRED (no fake READY)\n- Cross-provider failover: PASS\n`;

  fs.writeFileSync(path.join(__dirname,'../../docs/MATRIX-MODEL-TOP-FLOP-FR.md'),frMd);
  fs.writeFileSync(path.join(__dirname,'../../docs/MATRIX-MODEL-TOP-FLOP-EN.md'),enMd);

  const inject=(file,html)=>{
    if(!fs.existsSync(file)) return;
    let src=fs.readFileSync(file,'utf8');
    if(src.includes('/ia/top-flop-modeles/')) return;
    src=src.replace('<main id="main">','<main id="main"><aside class="wrap matrix-entry"><a class="button" href="/ia/top-flop-modeles/">Nouveau · Top / Flop des modèles IA (FR/EN) →</a><p>Classement technique, providers, réactions, PDF complet.</p></aside>');
    fs.writeFileSync(file,src);
  };
  inject(path.join(root,'ia','index.html'));
  inject(path.join(root,'en','ai','index.html'));
};
