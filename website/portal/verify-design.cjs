const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/msoui/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.join(__dirname,'site'),out=path.join(__dirname,'verification');
const server=http.createServer((req,res)=>{let file=path.join(root,decodeURIComponent(new URL(req.url,'http://local').pathname));if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);return res.end()}try{if(fs.statSync(file).isDirectory())file=path.join(file,'index.html');res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.png':'image/png','.svg':'image/svg+xml'})[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file))}catch{res.writeHead(404);res.end()}});
const report={checks:[],pages:[],errors:[],missing:[]};
const ok=text=>{report.checks.push(text);console.log('PASS '+text)};
(async()=>{
 await new Promise(resolve=>server.listen(19369,'127.0.0.1',resolve));
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  await context.addInitScript(()=>document.addEventListener('DOMContentLoaded',()=>{window.__arrival=document.documentElement.dataset.mtpTransition||null}));
  await context.route('https://**',route=>route.abort());
  const page=await context.newPage();page.setDefaultTimeout(12000);
  page.on('pageerror',error=>report.errors.push(error.message));
  page.on('response',response=>{if(response.url().startsWith('http://127.0.0.1:19369')&&response.status()>=400)report.missing.push(response.url())});
  const base='http://127.0.0.1:19369';
  const routes=[...fs.readFileSync(path.join(root,'sitemap.xml'),'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
  for(const route of routes){
   await page.goto(base+route);await page.locator('main').waitFor();
   assert.equal(await page.locator('h1').count(),1,route+' title');
   assert.equal(await page.locator('.mtp-page-transition').count(),1);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route+' mobile overflow');
   report.pages.push(route);
  }
  ok(routes.length+' pages: mobile layout, heading, transition coverage');
  for(const width of [320,768,1440]){
   await page.setViewportSize({width,height:1000});
   for(const route of ['/','/wallet/','/live/','/echanges/','/bd/','/jeu/','/ar/']){
    await page.goto(base+route);await page.locator('main').waitFor();
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route+' overflow '+width);
    if(width===1440&&['/','/wallet/','/live/'].includes(route)){
     const broken=await page.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(i=>{i.loading='eager';return i.decode().catch(()=>{})}));return imgs.filter(i=>!i.naturalWidth).map(i=>i.src)});assert.deepEqual(broken,[]);
     await page.screenshot({path:path.join(out,'design-'+(route==='/'?'home':route.split('/')[1])+'.png'),fullPage:true});
    }
   }
  }
  ok('Small phone, tablet, desktop and Arabic RTL layouts');
  await page.goto(base+'/wallet/');
  await page.route('https://mainnet.base.org/**',async route=>{const q=route.request().postDataJSON();await route.fulfill({json:{jsonrpc:'2.0',id:q.id,result:q.method==='eth_call'?'0x'+(123456789012345678901n).toString(16):'0x'+(2n*10n**18n).toString(16)}})});
  await page.locator('#address').fill('0x320f6C7aaD64f6DAf91A853aAA5ceaE6fa740626');await page.locator('#watch-form button').click();
  await page.waitForFunction(()=>document.querySelector('#mtp-balance').textContent==='123,456789012345678901');
  assert.equal(await page.locator('#eth-balance').textContent(),'2');assert(await page.locator('#receive-qr').isVisible());
  await page.locator('#disconnect').click();assert.equal(await page.locator('#mtp-balance').textContent(),'—');
  ok('Wallet: exact mocked balance, receive QR and disconnect');
  await page.goto(base+'/echanges/');await page.locator('[data-create]').first().click();
  assert(await page.locator('#listing-dialog').isVisible());
  await page.locator('#draft-title').fill('Vélo — contrôle de non-régression');await page.locator('#draft-description').fill('Brouillon de vérification local.');await page.locator('#draft-location').fill('Montpellier');await page.locator('#draft-save').click();
  await page.waitForFunction(()=>!document.querySelector('#listing-dialog').open);
  assert((await page.evaluate(()=>localStorage.getItem('mtp.web.listings'))).includes('Vélo'));
  await page.reload();await page.locator('[data-view=mine]').first().click();assert((await page.locator('#market-results').textContent()).includes('Vélo'));
  ok('Marketplace: draft form, save and persistence after reload');
  await page.emulateMedia({reducedMotion:'no-preference'});await page.goto(base+'/');
  await page.locator('.nav a[href="/wallet/"]').click();
  assert.equal(await page.locator('html').getAttribute('data-mtp-transition'),'leaving');
  assert.equal(await page.locator('.mtp-transition-coin').evaluate(el=>getComputedStyle(el).animationName),'mtp-coin-depart');
  await page.locator('.mtp-transition-coin').evaluate(el=>{const a=el.getAnimations()[0];a.pause();a.currentTime=100});
  await page.screenshot({path:path.join(out,'design-coin-transition.png')});
  await page.waitForURL(base+'/wallet/');assert.equal(await page.evaluate(()=>window.__arrival),'arriving');await page.waitForFunction(()=>!document.documentElement.hasAttribute('data-mtp-transition'));
  assert(await page.locator('#connect').isVisible());
  await page.goBack();await page.waitForFunction(()=>!document.documentElement.hasAttribute('data-mtp-transition'));assert(await page.locator('.cinema-copy').isVisible());
  ok('Spinning official coin: outgoing navigation, arrival and browser back');
  await page.locator('.cinema-copy a[href="#creations"]').click();assert.equal(await page.locator('html').getAttribute('data-mtp-transition'),null);
  ok('In-page anchors keep native navigation');
  await page.emulateMedia({reducedMotion:'reduce'});await page.locator('.nav a[href="/live/"]').click();await page.waitForURL(base+'/live/');assert.equal(await page.locator('html').getAttribute('data-mtp-transition'),null);
  ok('Reduced motion: immediate navigation, no transition overlay');
  await page.emulateMedia({reducedMotion:'no-preference'});await page.evaluate(()=>sessionStorage.setItem('mtp.motion.off','1'));await page.locator('.nav a[href="/wallet/"]').click();await page.waitForURL(base+'/wallet/');assert.equal(await page.locator('html').getAttribute('data-mtp-transition'),null);
  ok('Existing user animation preference respected');
  await page.evaluate(()=>sessionStorage.removeItem('mtp.motion.off'));
  const exemptions=await page.evaluate(()=>{
   function check(href,attrs={},extra={}){const a=document.createElement('a');a.href=href;Object.assign(a,attrs);document.body.append(a);let intercepted;window.addEventListener('click',event=>{intercepted=event.defaultPrevented;event.preventDefault()},{once:true});a.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,button:0,...extra}));a.remove();return intercepted}
   return [check('/live/',{}, {ctrlKey:true}),check('/live/',{target:'_blank'}),check('/docs.zip',{download:'docs.zip'}),check('https://example.com/'),check('mailto:test@example.com')];
  });assert.deepEqual(exemptions,[false,false,false,false,false]);ok('External links, modified clicks, new tabs and downloads are not intercepted');
  const plain=await browser.newContext({javaScriptEnabled:false});const plainPage=await plain.newPage();await plainPage.goto(base+'/');assert.equal(await plainPage.locator('.mtp-page-transition').evaluate(el=>getComputedStyle(el).visibility),'hidden');await plainPage.locator('.nav a[href="/wallet/"]').click();assert.equal(new URL(plainPage.url()).pathname,'/wallet/');await plain.close();ok('Navigation remains available without JavaScript');
  assert.deepEqual(report.errors,[]);assert.deepEqual(report.missing,[]);ok('No JavaScript errors or missing local resources');
 }finally{await browser.close();server.close();fs.writeFileSync(path.join(out,'design-tests.json'),JSON.stringify(report,null,2))}
})().catch(error=>{console.error(error);server.close();process.exitCode=1});
