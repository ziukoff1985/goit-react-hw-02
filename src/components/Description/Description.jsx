import styles from './Description.module.css';

<<<<<<< HEAD
// Оголошуємо компонент Description, який приймає пропс children (діти компонента)
const Description = ({ children }) => {
  return <div className={styles.description}>{children}</div>;
=======
const Description = () => {
  return (
    <div className={styles.description}>
      <h2>Sip Happens Café</h2>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
>>>>>>> d10020e (removed props children in Description component and moved positivePercentage calculation to App component)
};

export default Description;
