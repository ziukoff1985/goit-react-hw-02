import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  //   const totalFeedback = good + neutral + bad;

  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((good + neutral) / totalFeedback) * 100)
      : 0;

  return (
    <div className={styles.feedback_wrap}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
