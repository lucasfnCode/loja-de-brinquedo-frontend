import { baseUrl } from "./baseurl.js";
const uri = "toys";

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

export const getAllToys = () => {
    return fetchData(`${baseUrl}${uri}`, {
        method: 'GET',
        header: {
            "Content-Type": "application/json"
        }
    })
};

export const getToyById = (id) => {
    return fetchData(`(${baseUrl}${uri})/${id}`, {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    });
}

export const deleteToyById = (id) => {
    return fetchData(`${baseUrl}${uri}/${id}`, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json'
        }
    })
}
