import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';
import { searchPhotos } from '../../services/unsplash.js';

const PER_PAGE = 12;

const App = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        if (!query) return;
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await searchPhotos({
                    query,
                    page,
                    perPage: PER_PAGE,
                });
                if (page === 1 && data.results.length === 0) {
                    toast('Нічого не знайдено. Спробуй інший запит.');
                }
                setImages(prev =>
                    page === 1 ? data.results : [...prev, ...data.results]
                );
                setTotalPages(data.total_pages);
            } catch (e) {
                setError(e.message || 'Помилка завантаження');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [query, page]);

    const handleSearch = value => {
        if (!value.trim()) {
            toast.error('Введи текст для пошуку зображень');
            return;
        }
        if (value !== query) {
            setQuery(value);
            setImages([]);
            setPage(1);
            setTotalPages(0);
        }
    };

    const handleLoadMore = () => {
        if (page < totalPages) setPage(p => p + 1);
    };

    const openModal = imgObj => {
        setModalData(imgObj);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null);
    };

    const hasImages = images.length > 0;
    const canLoadMore = hasImages && page < totalPages && !loading;

    return (
        <>
            <Toaster position="top-right" />
            <header>
                <div className="container">
                    <SearchBar onSubmit={handleSearch} />
                </div>
            </header>

            <main className="container">
                {error ? (
                    <ErrorMessage message={error} />
                ) : (
                    <>
                        {hasImages && (
                            <ImageGallery
                                images={images}
                                onImageClick={openModal}
                            />
                        )}

                        {loading && <Loader />}

                        {canLoadMore && (
                            <LoadMoreBtn onClick={handleLoadMore} />
                        )}
                    </>
                )}
            </main>

            <ImageModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                image={modalData}
            />
        </>
    );
};

export default App;
