import './App.css';

//import { useEffect, useState } from 'react';
//import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';

/* const App = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async topic => {
        try {
            setArticles([]);
            setError(false);
            setLoading(true);

            const data = await fetchArticlesWithTopic(topic);
            setArticles(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {loading && <Loader />}
            {error && <Error />}
            {articles.length > 0 && <ArticleList items={articles} />}
        </div>
    );
}; */

//export default App;
