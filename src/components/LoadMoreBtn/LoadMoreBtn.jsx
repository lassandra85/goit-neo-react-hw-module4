import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
    return (
        <div className={styles.wrap}>
            <button className={styles.button} onClick={onClick}>
                Load more
            </button>
        </div>
    );
};

export default LoadMoreBtn;
