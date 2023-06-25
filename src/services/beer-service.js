import axios from "axios";

export const callBeers = async(url) => {
    return await axios.get(
        url,
        {
            headers: {
                Accept: 'application/json',
            },
        },
    );
}
export const fetchBeers = async (url = 'https://api.punkapi.com/v2/beers') =>  {

    return new Promise((resolve, reject) => {
        callBeers(url)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });

}