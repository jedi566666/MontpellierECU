// Submit published URLs only. HTTP acceptance does not guarantee indexing.
const fs=require('node:fs'),path=require('node:path');
(async()=>{
 const host='mtptoken.pages.dev',base='https://'+host,key='bfe6c6501294f895a0af5f682522055e';
 const proof=await fetch(`${base}/${key}.txt`);if(!proof.ok||(await proof.text()).trim()!==key)throw Error('Public ownership key unavailable');
 const response=await fetch(base+'/sitemap.xml');if(!response.ok)throw Error('Sitemap unavailable');
 const urlList=[...(await response.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);
 urlList.push(base+'/assets/behind-scenes/fr.pdf',base+'/assets/behind-scenes/en.pdf');
 if(urlList.some(u=>new URL(u).origin!==base)||urlList.length>10000)throw Error('Invalid URL list');
 const submitted=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({host,key,keyLocation:`${base}/${key}.txt`,urlList}),signal:AbortSignal.timeout(30000)});
 const report={date:new Date().toISOString(),status:submitted.status,urls:urlList,response:await submitted.text(),notice:'Technical receipt only; indexing is not guaranteed. This is not a Google Search Console submission.'};
 fs.mkdirSync(path.join(__dirname,'verification'),{recursive:true});fs.writeFileSync(path.join(__dirname,'verification/editorial-indexnow.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({status:report.status,urls:urlList.length,notice:report.notice}));if(!submitted.ok)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
