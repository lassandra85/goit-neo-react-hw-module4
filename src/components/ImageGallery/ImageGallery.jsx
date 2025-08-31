import ImageCard from '../ImageCard/ImageCard.jsx';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={styles.grid}>
            {images.map(img => (
                <li key={img.id} className={styles.item}>
                    <ImageCard image={img} onClick={() => onImageClick(img)} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;
