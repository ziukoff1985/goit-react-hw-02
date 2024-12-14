import styles from './Description.module.css';

// Оголошуємо компонент Description, який приймає пропс children (діти компонента)
const Description = ({ children }) => {
  return <div className={styles.description}>{children}</div>;
};

export default Description;
