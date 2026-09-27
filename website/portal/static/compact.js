// Native disclosures keep editorial detail available without a long initial page.
// Interactive Wallet, Live and Marketplace controls remain immediately accessible.
(()=>{
 const route=document.body.dataset.page||'';
 const editorial=/^\/(?:[a-z]{2}\/)?$/.test(route)||['/documentation/','/coulisses/','/jeu/','/bd/','/remerciements-openai/','/manipulations_ia/','/manipulations_ia_en/'].includes(route);
 if(!editorial)return;
 const sections=[...document.querySelectorAll('main section')];
 for(const section of sections){
  if(section.classList.contains('hero')||section.classList.contains('page-hero')||section.querySelector('h1')||section.closest('details')||section.querySelector('form'))continue;
  const heading=section.querySelector('h2');if(!heading)continue;
  const details=document.createElement('details');details.className='compact-detail';
  const summary=document.createElement('summary');summary.textContent=heading.innerText.replace(/\s+/g,' ').trim();
  section.before(details);details.append(summary,section);
 }
 function revealHash(){if(!location.hash)return;let target;try{target=document.getElementById(decodeURIComponent(location.hash.slice(1)))}catch{return}if(!target)return;for(let p=target.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}
 revealHash();addEventListener('hashchange',revealHash);
 addEventListener('beforeprint',()=>document.querySelectorAll('.compact-detail').forEach(d=>{d.dataset.printOpen=String(d.open);d.open=true}));
 addEventListener('afterprint',()=>document.querySelectorAll('.compact-detail').forEach(d=>{d.open=d.dataset.printOpen==='true';delete d.dataset.printOpen}));
})();
