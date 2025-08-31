import axios from 'axios';

const ACCESS_KEY = 'GG_eLVvRzJH2AoVwMxJJSmpkjplCCyN7huwOCGdcbh8';

const api = axios.create({
    baseURL: 'https://api.unsplash.com',
    params: {
        client_id: ACCESS_KEY,
    },
});

export async function searchPhotos({ query, page = 1, perPage = 12 }) {
    const { data } = await api.get('/search/photos', {
        params: { query, page, per_page: perPage, orientation: 'landscape' },
    });
    return data;
}

export default { searchPhotos };
