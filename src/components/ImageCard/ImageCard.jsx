import styles from './ImageCard.module.css';
const ImageCard = ({ image, onClick }) => {
    const { urls, alt_description, description } = image;
    const alt = alt_description || description || 'Photo';

    return (
        <div
            className={styles.card}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            <img
                className={styles.img}
                src={urls.small}
                alt={alt}
                loading="lazy"
            />
        </div>
    );
};

export default ImageCard;
