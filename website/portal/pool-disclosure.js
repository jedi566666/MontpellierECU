// Pool observations are not executable offers or guaranteed redemption values.
const copy={
 fr:['Prix indicatif de pool','Source','Pool','Liquidité totale de la pool','Consulté le','Horodatage de la donnée : non fourni par la source','Valeur non garantie. Une faible liquidité peut empêcher une vente au prix affiché. Ce prix n’est pas une offre promotionnelle.','Indisponible','Les transferts blockchain ne sont pas nécessairement des achats ou des ventes (swaps).'],
 en:['Indicative pool price','Source','Pool','Total pool liquidity','Checked at','Data timestamp: not provided by the source','Value is not guaranteed. Low liquidity may prevent selling at the displayed price. This is not a promotional offer.','Unavailable','Blockchain transfers are not necessarily buys or sells (swaps).'],
 es:['Precio indicativo del pool','Fuente','Pool','Liquidez total del pool','Consultado el','Fecha del dato: no facilitada por la fuente','Valor no garantizado. Una liquidez baja puede impedir vender al precio mostrado. No es una oferta promocional.','No disponible','Las transferencias blockchain no son necesariamente compras o ventas (swaps).'],
 it:['Prezzo indicativo del pool','Fonte','Pool','Liquidità totale del pool','Consultato il','Data del dato: non fornita dalla fonte','Valore non garantito. Una liquidità ridotta può impedire la vendita al prezzo indicato. Non è un’offerta promozionale.','Non disponibile','I trasferimenti blockchain non sono necessariamente acquisti o vendite (swap).'],
 de:['Indikativer Poolpreis','Quelle','Pool','Gesamte Poolliquidität','Abgerufen am','Datenzeitpunkt: von der Quelle nicht angegeben','Kein garantierter Wert. Geringe Liquidität kann einen Verkauf zum angezeigten Preis verhindern. Dies ist kein Aktionsangebot.','Nicht verfügbar','Blockchain-Transfers sind nicht zwangsläufig Käufe oder Verkäufe (Swaps).'],
 ar:['سعر استرشادي للمجمع','المصدر','المجمع','إجمالي سيولة المجمع','وقت الاستعلام','وقت البيانات: لا يوفره المصدر','القيمة غير مضمونة. قد تمنع السيولة المنخفضة البيع بالسعر المعروض. هذا السعر ليس عرضاً ترويجياً.','غير متاح','التحويلات على البلوكشين ليست بالضرورة عمليات شراء أو بيع (مبادلات).'],
 oc:['Prètz indicatiu de pool','Font','Pool','Liquiditat totala de la pool','Consultat lo','Data de la donada : pas provesida per la font','Valor pas garantida. Una liquiditat febla pòt empachar una venda al prètz afichat. Es pas una ofèrta promocionala.','Indisponible','Los transferiments blockchain son pas necessàriament de crompas o de vendas (swaps).']
};
export function poolObservation(pool){
 const a=pool?.attributes||{},raw=a.reserve_in_usd;
 const liquidity=raw==null||raw===''?null:Number(raw);
 return {name:typeof a.name==='string'?a.name:'',address:/^0x[a-f0-9]{40}(?:[a-f0-9]{24})?$/i.test(a.address||'')?a.address:null,dex:pool?.relationships?.dex?.data?.id||'',liquidity:Number.isFinite(liquidity)&&liquidity>=0?liquidity:null};
}
export function attachPoolDisclosure(bar,lang){
 const w=copy[lang]||copy.fr,locale=lang==='oc'?'fr-FR':lang;
 const old=bar.querySelector('.market-quote'),details=document.createElement('details'),summary=document.createElement('summary'),panel=document.createElement('div');
 details.className='market-quote market-price-details';summary.append(document.createTextNode(w[0]+' '),old.querySelector('strong'));panel.className='market-popover pool-disclosure';
 const fields={};for(const [key,label] of [['source',w[1]],['pool',w[2]],['liquidity',w[3]],['checked',w[4]]]){const p=document.createElement('p'),strong=document.createElement('strong'),value=document.createElement('span');strong.textContent=label+' : ';p.append(strong,value);panel.append(p);fields[key]=value;}
 for(const text of [w[5],w[6]]){const p=document.createElement('p');p.textContent=text;panel.append(p)}
 details.append(summary,panel);old.replaceWith(details);
 const note=document.createElement('p');note.textContent=w[8];bar.querySelector('.market-transfers .market-popover').prepend(note);
 const clear=()=>{for(const field of Object.values(fields))field.textContent=w[7]};clear();
 return {clear,show(pool){const o=poolObservation(pool);fields.source.textContent='GeckoTerminal'+(o.dex?' · '+o.dex:'');fields.pool.replaceChildren();if(o.address){const a=document.createElement('a');a.href='https://www.geckoterminal.com/base/pools/'+o.address;a.textContent=(o.name?o.name+' · ':'')+o.address;fields.pool.append(a)}else fields.pool.textContent=o.name||w[7];fields.liquidity.textContent=o.liquidity===null?w[7]:new Intl.NumberFormat(locale,{style:'currency',currency:'USD',maximumSignificantDigits:6}).format(o.liquidity);fields.checked.textContent=new Date().toLocaleString(locale,{timeZoneName:'short'});}};
}
