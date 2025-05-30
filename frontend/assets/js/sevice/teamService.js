import { baseUrl } from "./baseurl";

const uri = "teammembers";

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

export const getAllMembers = () => {
    return fetchData(`${baseUrl}${uri}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
}