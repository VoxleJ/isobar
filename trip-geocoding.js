export function normalizePlaces(json){
 const seen=new Set(),out=[];
 for(const feature of json.features||[]){
  const p=feature.properties||{},coords=feature.geometry?.coordinates;if(feature.geometry?.type!=='Point'||!Array.isArray(coords))continue;
  const [longitude,latitude]=coords;if(!Number.isFinite(latitude)||!Number.isFinite(longitude)||Math.abs(latitude)>90||Math.abs(longitude)>180)continue;
  const street=[p.housenumber,p.street].filter(Boolean).join(' '),locality=p.city||p.town||p.village||p.county;
  const name=[p.name&&p.name!==street?p.name:null,street,locality,p.state,p.postcode,p.countrycode||p.country].filter(Boolean).filter((x,i,a)=>a.indexOf(x)===i).join(', ');if(!name)continue;
  const id=name+'|'+latitude.toFixed(3)+'|'+longitude.toFixed(3);if(seen.has(id))continue;seen.add(id);
  const detail=p.housenumber&&p.street?'Mapped address · review location':p.street?'Street match · approximate location':p.type==='city'||p.type==='locality'?'City / locality · approximate location':'Place match · review location';
  out.push({name,latitude,longitude,detail});
 }
 return out;
}
