module.exports=({fs,path,root,shell})=>{
  const routes={
    fr:'/ia/matrix-aws-premiere-mondiale/',
    en:'/en/ai/matrix-aws-world-first/'
  };
  const assets={
    fr:'/assets/matrix-aws/matrix-aws-dossier-fr.pdf',
    en:'/assets/matrix-aws/matrix-aws-dossier-en.pdf',
    oc:'/assets/matrix-aws/matrix-aws-dossier-oc-filigrane.pdf'
  };

  const fr={
    title:'MATRIX AWS · Première mondiale occitan/français/anglais',
    desc:'Section dédiée MATRIX AWS : dossier technique trilingue, preuves, publication et kit réseaux sociaux.',
    eyebrow:'MATRIX AWS · PREMIÈRE MONDIALE · 2026-10-02',
    h1:'MATRIX AWS.<br><em>Première mondiale éditoriale en occitan, français et anglais.</em>',
    lead:'Cette section regroupe les dossiers PDF trilingues et les références de communication pour les réseaux sociaux. Le contenu est publié sans casser l’existant, dans la continuité graphique Montpellier ECU et sa croix occitane.',
    worldTitle:'UNE PREMIÈRE MONDIALE',
    worldSubtitle:'Un dossier d’ingénierie IA multi-agents, cloud et Godot publié en occitan languedocien.',
    claim:'Une recherche documentaire approfondie n’a identifié aucun précédent comparable répondant à l’ensemble des critères étudiés.',
    quote:'Montpellier parle occitan au futur, sans oublier le code source.',
    otherHref:routes.en,
    otherLabel:'Read in English',
    pdfFr:'Télécharger le dossier FR',
    pdfEn:'Télécharger le dossier EN',
    pdfOc:'Télécharger le dossier occitan',
    socialTitle:'Kit réseaux sociaux',
    socialLead:'Textes prêts à publier (à adapter si besoin selon la plateforme).',
    postOc:'Montpelhièr. Primièra mondiala: un dòssièr tecnic MATRIX AWS en occitan, francés e anglés. Crosada occitana al centre. #Montpelhier #Occitan #IA #AWS #MATRIX',
    postFr:'Montpellier signe une première mondiale éditoriale: dossier MATRIX AWS en occitan/français/anglais, avec preuves techniques et architecture vérifiable. #Montpellier #Occitanie #IA #AWS #MATRIX',
    postEn:'Montpellier releases a world-first editorial package: MATRIX AWS dossier in Occitan/French/English, with technical evidence and traceable architecture. #Montpellier #Occitan #AI #AWS #MATRIX',
    lang:'fr'
  };

  const en={
    title:'MATRIX AWS · World-first Occitan/French/English release',
    desc:'Dedicated MATRIX AWS section: trilingual technical dossier, evidence, publication links, and social media references.',
    eyebrow:'MATRIX AWS · WORLD-FIRST · 2026-10-02',
    h1:'MATRIX AWS.<br><em>World-first editorial release in Occitan, French, and English.</em>',
    lead:'This section centralizes the trilingual PDF dossiers and ready-to-share social references. It is integrated without breaking existing pages, while preserving Montpellier ECU visual identity and the Occitan cross.',
    worldTitle:'A WORLD FIRST',
    worldSubtitle:'A multi-agent AI, cloud, and Godot engineering dossier published in Occitan (Languedoc).',
    claim:'In-depth documentary research identified no comparable precedent meeting the full set of criteria under review.',
    quote:'Montpellier ships multilingual engineering with a local soul.',
    otherHref:routes.fr,
    otherLabel:'Lire en français',
    pdfFr:'Download FR dossier',
    pdfEn:'Download EN dossier',
    pdfOc:'Download Occitan dossier',
    socialTitle:'Social media kit',
    socialLead:'Ready-to-publish post drafts (adapt per platform as needed).',
    postOc:'Montpelhièr. Primièra mondiala: un dòssièr tecnic MATRIX AWS en occitan, francés e anglés. Crosada occitana al centre. #Montpelhier #Occitan #IA #AWS #MATRIX',
    postFr:'Montpellier signe une première mondiale éditoriale: dossier MATRIX AWS en occitan/français/anglais, avec preuves techniques et architecture vérifiable. #Montpellier #Occitanie #IA #AWS #MATRIX',
    postEn:'Montpellier releases a world-first editorial package: MATRIX AWS dossier in Occitan/French/English, with technical evidence and traceable architecture. #Montpellier #Occitan #AI #AWS #MATRIX',
    lang:'en'
  };

  const render=(d)=>`<div class="wrap ia-page"><section class="page-hero"><div class="eyebrow">${d.eyebrow}</div><h1>${d.h1}</h1><p class="lede">${d.lead}</p><div class="actions"><a class="button" href="${assets.fr}">${d.pdfFr} ↓</a><a class="button secondary" href="${assets.en}">${d.pdfEn} ↓</a><a class="button secondary" href="${assets.oc}">${d.pdfOc} ↓</a><a class="button secondary" href="${d.otherHref}" lang="${d.lang==='fr'?'en':'fr'}">${d.otherLabel}</a></div></section><section class="section"><div class="section-head"><div><div class="eyebrow">Communication</div><h2>${d.worldTitle}</h2></div><p><em>${d.worldSubtitle}</em></p></div></section><section class="section"><div class="section-head"><div><div class="eyebrow">Position documentaire</div><h2>Constat de recherche.<br><em>Version publiée.</em></h2></div><p>Cette affirmation est publiée comme texte de référence de la section.</p></div><p class="ia-aside"><strong>${d.claim}</strong></p></section><section class="section"><div class="section-head"><div><div class="eyebrow">Identity</div><h2>Logo & croix occitane.<br><em>Préservés.</em></h2></div><p>Les dossiers sont publiés dans une section séparée et référencée, sans remplacer les contenus existants.</p></div><div class="grid"><article class="card"><span class="eyebrow">Occitan</span><h3>Primièra mondiala</h3><p>Documentacion tecnica en occitan amb la crosada occitana coma simbòl central.</p></article><article class="card"><span class="eyebrow">Français</span><h3>Première mondiale</h3><p>Dossier technique exploitable, traçable et référençable depuis le portail IA.</p></article><article class="card"><span class="eyebrow">English</span><h3>World-first release</h3><p>Engineering narrative and evidence package for international readers.</p></article></div><p class="ia-aside">“${d.quote}”</p></section><section class="section"><div class="section-head"><div><div class="eyebrow">PDF dossiers</div><h2>Téléchargements directs.</h2></div><p>Version occitane, française et anglaise disponibles en parallèle.</p></div><div class="actions"><a class="button" href="${assets.oc}">Occitan PDF ↓</a><a class="button secondary" href="${assets.fr}">Français PDF ↓</a><a class="button secondary" href="${assets.en}">English PDF ↓</a></div></section><section class="section"><div class="section-head"><div><div class="eyebrow">${d.socialTitle}</div><h2>Réseaux · références prêtes.</h2></div><p>${d.socialLead}</p></div><div class="grid"><article class="card"><span class="eyebrow">Occitan</span><p>${d.postOc}</p></article><article class="card"><span class="eyebrow">Français</span><p>${d.postFr}</p></article><article class="card"><span class="eyebrow">English</span><p>${d.postEn}</p></article></div></section><section class="section"><div class="section-head"><div><div class="eyebrow">Navigation</div><h2>Section séparée, intégrée.</h2></div><p>Retour rapide vers l’atelier IA et la documentation MATRIX Pro.</p></div><div class="actions"><a class="button" href="/ia/">Atelier IA →</a><a class="button secondary" href="/matrix-pro/">MATRIX Pro →</a></div></section></div>`;

  const pages={
    [routes.fr]:{title:fr.title+' | Montpellier ECU',description:fr.desc,content:render(fr)},
    [routes.en]:{title:en.title+' | Montpellier ECU',description:en.desc,content:render(en)}
  };

  for(const [route,p] of Object.entries(pages)){
    const dir=path.join(root,...route.split('/').filter(Boolean));
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

  const frMd=`# MATRIX AWS · Première mondiale\n\n${fr.claim}\n\n- Page FR: https://mtptoken.pages.dev${routes.fr}\n- Page EN: https://mtptoken.pages.dev${routes.en}\n- PDF occitan: https://mtptoken.pages.dev${assets.oc}\n- PDF français: https://mtptoken.pages.dev${assets.fr}\n- PDF anglais: https://mtptoken.pages.dev${assets.en}\n`;
  const enMd=`# MATRIX AWS · World-first release\n\n${en.claim}\n\n- EN page: https://mtptoken.pages.dev${routes.en}\n- FR page: https://mtptoken.pages.dev${routes.fr}\n- Occitan PDF: https://mtptoken.pages.dev${assets.oc}\n- French PDF: https://mtptoken.pages.dev${assets.fr}\n- English PDF: https://mtptoken.pages.dev${assets.en}\n`;

  fs.writeFileSync(path.join(__dirname,'../../docs/MATRIX-AWS-WORLD-FIRST-FR.md'),frMd);
  fs.writeFileSync(path.join(__dirname,'../../docs/MATRIX-AWS-WORLD-FIRST-EN.md'),enMd);

  const inject=(file,button,desc)=>{
    if(!fs.existsSync(file)) return;
    let src=fs.readFileSync(file,'utf8');
    if(src.includes('/ia/matrix-aws-premiere-mondiale/') || src.includes('/en/ai/matrix-aws-world-first/')) return;
    src=src.replace('<main id="main">',`<main id="main"><aside class="wrap matrix-entry"><a class="button" href="${button}">Nouveau · MATRIX AWS première mondiale (OC/FR/EN) →</a><p>${desc}</p></aside>`);
    fs.writeFileSync(file,src);
  };

  inject(path.join(root,'ia','index.html'),'/ia/matrix-aws-premiere-mondiale/','Dossiers PDF trilingues + kit de référence réseaux sociaux.');
  inject(path.join(root,'en','ai','index.html'),'/en/ai/matrix-aws-world-first/','Trilingual PDF dossiers + social media reference kit.');
  inject(path.join(root,'en','index.html'),'/en/ai/matrix-aws-world-first/','Trilingual PDF dossiers + social media reference kit.');

  const addOcEverywhere=(dir)=>{
    for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
      const full=path.join(dir,entry.name);
      if(entry.isDirectory()){
        addOcEverywhere(full);
        continue;
      }
      if(!entry.isFile() || !entry.name.endsWith('.html')) continue;
      let src=fs.readFileSync(full,'utf8');
      if(src.includes('data-matrix-oc-global')) continue;
      const globalLink=`<p data-matrix-oc-global><a class="textlink" href="${assets.oc}">Dossier occitan filigrané · accès direct ↗</a></p>`;
      if(src.includes('</footer>')) src=src.replace('</footer>',`${globalLink}</footer>`);
      else if(src.includes('</main>')) src=src.replace('</main>',`${globalLink}</main>`);
      else continue;
      fs.writeFileSync(full,src);
    }
  };

  addOcEverywhere(root);
};
