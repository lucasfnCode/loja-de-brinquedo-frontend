import { baseUrl } from "./baseurl.js";

const uri = "categories";

async function fetchData(baseUrl, option) {
    try {
        const response = await fetch(baseUrl, option);

        if (!response.ok) throw Error(`error: ${response.statusText}`);

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }


};

export const getAllCategories = () => 
    fetchData(`${baseUrl}${uri}`,{
    method: 'GET',
    header: {
      "Content-Type": "application/json"
    }
});