import{s as r}from"./authLogin.hK3xBYyV.js";const c=async(e,s)=>{try{const{data:a,error:t}=await r.from("units_of_measures").insert([{short_name:e,large_name:s}]).select()}catch(a){console.log(a)}},l=async()=>{try{let{data:e,error:s}=await r.from("units_of_measures").select("*");return console.log(e),e}catch(e){console.log(e)}},u=async()=>{try{let{data:e,error:s}=await r.from("units_of_measures").select("large_name").eq("active",!0);return console.log(e),e}catch(e){console.log(e)}},i=async(e,s,a)=>{try{const{data:t,error:o}=await r.from("units_of_measures").update({short_name:s,large_name:a}).eq("id",e).select()}catch(t){console.log(t)}},m=async e=>{try{const{data:s,error:a}=await r.from("units_of_measures").delete().eq("id",e).select();console.log(a)}catch(s){console.log(s)}};export{u as a,m as d,l as g,c as i,i as u};
