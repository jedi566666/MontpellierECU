// Only repository-controlled code is executed. Issue content is parsed as data.
const fs=require('node:fs');
const LABEL='marketplace-approved';
const categories=['maison','multimedia','mobilite','mode','culture','services','dons'];
function parse(issue){
 if(issue.state!=='open'||issue.pull_request||!issue.labels?.some(x=>x.name===LABEL))return null;
 const block=String(issue.body||'').match(/```mtp-marketplace\s*\n([\s\S]*?)\n```/);if(!block)return null;
 let v;try{v=JSON.parse(block[1])}catch{return null}
 if(!v||typeof v.title!=='string'||!v.title.trim()||v.title.length>100||typeof v.description!=='string'||!v.description.trim()||v.description.length>2000||!categories.includes(v.category)||!['EUR','MTP'].includes(v.currency))return null;
 const price=v.price==null?'':String(v.price);if(price!==''&&(!Number.isFinite(Number(price))||Number(price)<0||Number(price)>1e12))return null;
 const photos=[...String(issue.body||'').replace(block[0],'').matchAll(/https:\/\/github\.com\/user-attachments\/assets\/[0-9a-f-]{36}/gi)].map(x=>x[0]).slice(0,4);
 return {id:'github-'+issue.number,number:issue.number,title:v.title.trim(),description:v.description.trim(),category:v.category,currency:v.currency,price,condition:['Neuf','Très bon état','Bon état','À réparer','Sans objet'].includes(v.condition)?v.condition:'Bon état',location:typeof v.location==='string'?v.location.slice(0,80):'',free:v.free===true,photos,createdAt:Date.parse(issue.created_at),seller:issue.user.login,issueUrl:`https://github.com/${process.env.GITHUB_REPOSITORY||'jedi566666/MontpellierECU'}/issues/${issue.number}`};
}
async function main(){
 const repo=process.env.GITHUB_REPOSITORY;if(!repo||!process.env.GITHUB_TOKEN)throw Error('Missing workflow environment');
 const api=async(route,method='GET')=>{const r=await fetch('https://api.github.com/repos/'+repo+route,{method,headers:{Authorization:'Bearer '+process.env.GITHUB_TOKEN,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'}});if(!r.ok)throw Error('GitHub response '+r.status);return r.status===204?null:r.json()};
 const event=JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH,'utf8'));
 // Every edit or reopening needs a fresh moderation decision.
 if(['edited','reopened'].includes(event.action)&&event.issue?.labels?.some(x=>x.name===LABEL))await api('/issues/'+event.issue.number+'/labels/'+LABEL,'DELETE');
 const listings=[];
 for(let page=1;;page++){const issues=await api('/issues?state=open&labels='+LABEL+'&per_page=100&page='+page);for(const issue of issues){const entry=parse(issue);if(entry)listings.push(entry)}if(issues.length<100)break;if(page>=20)throw Error('Catalogue too large; no partial publication');}
 const target='marketplace/catalog.json';const old=JSON.parse(fs.readFileSync(target,'utf8'));listings.sort((a,b)=>b.createdAt-a.createdAt);
 if(JSON.stringify(old.listings)!==JSON.stringify(listings))fs.writeFileSync(target,JSON.stringify({version:1,updatedAt:new Date().toISOString(),listings},null,2)+'\n');
 console.log(listings.length+' approved listings');
}
module.exports={parse};if(require.main===module)main().catch(e=>{console.error(e.message);process.exitCode=1});
