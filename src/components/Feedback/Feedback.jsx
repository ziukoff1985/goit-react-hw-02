import styles from './Feedback.module.css';

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={styles.feedback_wrap}>
      <p className={styles.feedback_paragaph}>Good: {good}</p>
      <p className={styles.feedback_paragaph}>Neutral: {neutral}</p>
      <p className={styles.feedback_paragaph}>Bad: {bad}</p>
      <p className={styles.feedback_paragaph}>Total: {totalFeedback}</p>
      <p className={styles.feedback_paragaph}>
        Positive: {positivePercentage}%
      </p>
    </div>
  );
};

export default Feedback;
