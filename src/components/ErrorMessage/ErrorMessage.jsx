import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message = 'Щось пішло не так' }) => {
    return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
