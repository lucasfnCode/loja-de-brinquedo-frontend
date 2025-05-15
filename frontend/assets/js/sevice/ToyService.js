import { baseUrl } from "./baseurl.js";
const uri = "products";

async function fetchData(baseUrl,opition) {
    try{
        const respose = await fetch(baseUrl,opition);
        if(!respose.ok) throw Error (`erro: ${respose.statusText}`);
        const result = await respose.json();
        return result.products;
    }catch(erro){
        console.log(erro);
        throw erro;
    }
    
    
};

export const getAllToys = () => 
    fetchData(`${baseUrl}${uri}`,{
    method: 'GET',
    header: {
        'Content-Type' : 'application/json'
    }
});
 
export const getToyById = (id) => 
        fetchData(`(${baseUrl} ${uri})/${id}`,{
        method: 'GET',
        header: {
            'Content-Type' : 'application/json'
        }
    })   
