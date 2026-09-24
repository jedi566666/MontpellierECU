// Share simultaneous identical public GETs; do not cache stale market responses.
const pending=new Map();
export function publicJson(url){
 if(pending.has(url))return pending.get(url);
 const request=(async()=>{const response=await fetch(url,{signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error('HTTP '+response.status);return response.json()})();
 pending.set(url,request);
 request.finally(()=>{if(pending.get(url)===request)pending.delete(url)}).catch(()=>{});
 return request;
}
