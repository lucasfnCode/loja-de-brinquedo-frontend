import { baseUrl } from "./baseurl.js";

async function fetchdata(baseUrl) {
    try{
        const respose = await fetch(baseUrl);
        if(!respose.ok) throw Error (`erro: ${respose.statusText}`);
        const result = await Response.json;
        return result.data;
    }catch(erro){
        console.log(erro);
        throw erro;
    }

} 

export const getAllProducts = ()=>
        fetchdata(`${baseUrl}`,{
           method : 'GET',
           headers: {
            'Content-Type' : 'aplication/json'
           }
        });