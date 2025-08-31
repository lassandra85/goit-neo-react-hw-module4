import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.unsplash.com',
    params: {
        client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
    },
});

export async function searchPhotos({ query, page = 1, perPage = 12 }) {
    const { data } = await api.get('/search/photos', {
        params: { query, page, per_page: perPage, orientation: 'landscape' },
    });
    return data; // { total, total_pages, results: [...] }
}

export default { searchPhotos };
