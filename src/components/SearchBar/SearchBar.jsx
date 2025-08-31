import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        if (onSubmit) {
            onSubmit(value);
        }
    };

    return (
        <header className={styles.header}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className={styles.button} type="submit">
                    Search
                </button>
            </form>
        </header>
    );
};

export default SearchBar;
