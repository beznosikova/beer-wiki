import axios from "axios";

const mainUrl = 'https://api.punkapi.com/v2/beers';

export const callBeers = async (url, params = null) => {
    return await axios.get(
        url,
        {
            headers: {
                Accept: 'application/json',
            },
            params
        },
    );
}
export const fetchBeers = async (params = null) => {

    return new Promise((resolve, reject) => {
        callBeers(mainUrl, params)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });

}

export const fetchBeerById = async (id) => {

    const beerUrl = `${mainUrl}/${id}`
    return new Promise((resolve, reject) => {
        callBeers(beerUrl)
            .then((response) => {
                resolve([...response.data].shift());
            })
            .catch((error) => {
                reject(error);
            });
    });

}