import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.wrap}>
            <ClipLoader size={42} />
        </div>
    );
};

export default Loader;
