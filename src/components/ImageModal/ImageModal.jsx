import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    if (!image) return null;

    const {
        urls: { regular },
        alt_description,
        description,
        user,
        likes,
    } = image;

    const alt = alt_description || description || 'Photo';

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
            className={styles.content}
            overlayClassName={styles.overlay}
        >
            <button
                className={styles.close}
                onClick={onRequestClose}
                aria-label="Close"
            >
                ×
            </button>

            <img className={styles.img} src={regular} alt={alt} />

            <div className={styles.meta}>
                {user?.name && (
                    <p>
                        <strong>Author:</strong> {user.name}
                    </p>
                )}
                {typeof likes === 'number' && (
                    <p>
                        <strong>Likes:</strong> {likes}
                    </p>
                )}
                {description && (
                    <p>
                        <strong>Description:</strong> {description}
                    </p>
                )}
            </div>
        </ReactModal>
    );
};

export default ImageModal;
