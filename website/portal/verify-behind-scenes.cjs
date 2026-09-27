const {chromium}=require('C:/Users/msoui/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs'),path=require('path'),assert=require('node:assert/strict');
const base=process.env.PREVIEW_URL||'http://127.0.0.1:8766';
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 const out=path.join(__dirname,'verification/behind-scenes');fs.mkdirSync(out,{recursive:true});
 const results=[];
 for(const [lang,route] of [['fr','/envers-du-decor-ia/'],['en','/en/behind-the-ai-scenes/']]){
  for(const width of [390,1440]){
   const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
   const response=await page.goto(base+route,{waitUntil:'networkidle'});assert.equal(response.status(),200);assert.equal(await page.locator('html').getAttribute('lang'),lang);
   assert.equal(await page.locator('.behind-chapter').count(),21);assert(await page.locator('#incident-a').innerText());
   await page.locator('.behind-toc summary').click();await page.locator('.behind-toc a[href="#incident-a"]').click();assert(new URL(page.url()).hash==='#incident-a');
   const overflow=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,x:scrollX,items:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right+scrollX>innerWidth+1).map(e=>[e.tagName,e.className,e.getBoundingClientRect().width]).slice(0,12)}));
   if(overflow.scroll>overflow.width+1)console.log(await page.evaluate(()=>[...document.querySelectorAll('*')].filter(e=>e.scrollWidth>e.clientWidth+5).map(e=>[e.tagName,e.className,e.scrollWidth,e.clientWidth]).slice(0,20)));
   assert(overflow.scroll<=overflow.width+1,JSON.stringify(overflow));assert.deepEqual(errors,[]);
   await page.goto(base+route,{waitUntil:'networkidle'});await page.screenshot({path:path.join(out,`${lang}-${width}.png`),fullPage:true});
   if(width===1440&&base.includes('127.0.0.1')){
    await page.pdf({path:path.join(__dirname,`static/assets/behind-scenes/${lang}.pdf`),format:'A4',printBackground:true,displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:`<div style="width:100%;font-size:9px;text-align:center;color:#555">MTP · ${lang==='fr'?'L’envers du décor IA':'Behind the AI scenes'} · <span class="pageNumber"></span> / <span class="totalPages"></span></div>`,preferCSSPageSize:true});
   }
   results.push({lang,width,status:response.status(),chapters:21,overflow:false,errors});await page.close();
  }
 }
 const page=await browser.newPage({javaScriptEnabled:false});await page.goto(base+'/envers-du-decor-ia/');assert(await page.locator('#incident-a').isVisible());
 await browser.close();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(results,null,2));console.log(JSON.stringify(results));
})().catch(e=>{console.error(e);process.exit(1)});
