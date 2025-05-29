import { baseUrl } from "./baseurl.js";
const uri = "toys";

async function fetchData(baseUrl, option) {
    try {
        const response = await fetch(baseUrl, option);

        if (!response.ok) throw Error(`error: ${response.statusText}`);

        const result = response.status !== 204 ? await response.json() : null;

        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }


};

export const createToy = (toy) => {
    return fetchData(`${baseUrl}${uri}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: toy
    })
}

export const updateToy = (id, toy) => {
    return fetchData(`${baseUrl}${uri}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: toy
    })
}

export const getAllToys = () => {
    return fetchData(`${baseUrl}${uri}`, {
        method: 'GET',
        header: {
            "Content-Type": "application/json"
        }
    })
};

export const getToyById = (id) => {
    return fetchData(`${baseUrl}${uri}/${id}`, {
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
