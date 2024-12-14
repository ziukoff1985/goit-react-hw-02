import styles from './Feedback.module.css';

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    // Обгортаємо весь виведений контент в div
    <div className={styles.feedback_wrap}>
      {/* Виводимо кількість кожного типу відгуків */}
      <p className={styles.feedback_paragaph}>Good: {good}</p>
      <p className={styles.feedback_paragaph}>Neutral: {neutral}</p>
      <p className={styles.feedback_paragaph}>Bad: {bad}</p>
      <p className={styles.feedback_paragaph}>Total: {totalFeedback}</p>
      {/* Виводимо відсоток позитивних відгуків */}
      <p className={styles.feedback_paragaph}>
        Positive: {positivePercentage}%
      </p>
    </div>
  );
};

export default Feedback;
