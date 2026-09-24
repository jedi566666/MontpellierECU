export function initScreenIntro(){
 const intro=document.querySelector('.occitan-intro');if(!intro)return;
 intro.classList.add('screen-intro');
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){intro.hidden=true;return}
 try{if(sessionStorage.getItem('mtp.screen-intro')){intro.hidden=true;return}sessionStorage.setItem('mtp.screen-intro','1')}catch{}
 const captions={fr:'Tout part d’un écran.',en:'It all starts with a screen.',es:'Todo empieza en una pantalla.',it:'Tutto inizia da uno schermo.',de:'Alles beginnt mit einem Bildschirm.',ar:'كل شيء يبدأ من شاشة.',oc:'Tot comença amb un ecran.'};
 const caption=document.createElement('span');caption.className='screen-intro-caption';caption.textContent=captions[document.documentElement.lang]||captions.fr;intro.append(caption);
 intro.addEventListener('animationend',event=>{if(event.target===intro)intro.hidden=true});setTimeout(()=>intro.hidden=true,2200);
}
