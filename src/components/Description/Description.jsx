import styles from './Description.module.css';

const Description = ({ children }) => {
  return <div className={styles.description}>{children}</div>;
};

export default Description;
