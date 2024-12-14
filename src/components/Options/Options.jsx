import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div>
      <div className={styles.options_wrap_main}>
        <button
          onClick={() => onLeaveFeedback('good')}
          className={styles.button}
        >
          Good
        </button>
        <button
          onClick={() => onLeaveFeedback('neutral')}
          className={styles.button}
        >
          Neutral
        </button>
        <button
          onClick={() => onLeaveFeedback('bad')}
          className={styles.button}
        >
          Bad
        </button>
      </div>
      <div className={styles.options_wrap_reset}>
        {totalFeedback > 0 && (
          <button onClick={onReset} className={styles.button_reset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Options;
