/* MTP coin transition: regular document navigation, no router or data interception. */
(()=>{
 'use strict';
 const root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const key='mtp.page-transition';
 let navigating=false,departureTimer,recoveryTimer,arrivalTimer;
 const enabled=()=>{try{return !reduce.matches&&sessionStorage.getItem('mtp.motion.off')!=='1'}catch{return !reduce.matches}};
 const clearMarker=()=>{try{sessionStorage.removeItem(key)}catch{}};
 function reset(){clearTimeout(departureTimer);clearTimeout(recoveryTimer);clearTimeout(arrivalTimer);root.removeAttribute('data-mtp-transition');navigating=false}
 try{
  const previous=JSON.parse(sessionStorage.getItem(key)||'null');
  clearMarker();
  const returning=performance.getEntriesByType('navigation')[0]?.type==='back_forward';
  if(enabled()&&(returning||previous&&previous.url===location.href&&Date.now()-previous.at<15000))root.dataset.mtpTransition='arriving';
 }catch{clearMarker()}
 function finishArrival(){if(root.dataset.mtpTransition==='arriving')arrivalTimer=setTimeout(reset,620)}
 document.addEventListener('DOMContentLoaded',finishArrival,{once:true});
 document.addEventListener('click',event=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||!enabled())return;
  const link=event.target.closest?.('a[href]');
  if(!link||link.hasAttribute('download')||link.target&&link.target!=='_self'||link.hasAttribute('data-no-transition'))return;
  const url=new URL(link.href,location.href);
  if(url.origin!==location.origin||!/^https?:$/.test(url.protocol)||url.pathname===location.pathname&&url.search===location.search)return;
  // Only document links: archives, exports and images retain their native behavior.
  if(!url.pathname.endsWith('/')&&!/\.html?$/.test(url.pathname))return;
  event.preventDefault();
  if(navigating)return;
  navigating=true;
  const intro=document.querySelector('.screen-intro');if(intro)intro.hidden=true;
  root.dataset.mtpTransition='leaving';
  try{sessionStorage.setItem(key,JSON.stringify({url:url.href,at:Date.now()}))}catch{}
  departureTimer=setTimeout(()=>{location.assign(url.href)},460);
  // Restore the original page if navigation is cancelled or never completes.
  recoveryTimer=setTimeout(()=>{reset();clearMarker()},3500);
 });
 window.addEventListener('pageshow',event=>{
  if(event.persisted){reset();clearMarker();if(enabled()){root.dataset.mtpTransition='arriving';finishArrival()}}
 });
 reduce.addEventListener('change',()=>{if(reduce.matches&&!navigating)reset()});
})();
