import styles from './Options.module.css';

// Оголошуємо компонент Options, який приймає пропси:
// - onLeaveFeedback (функція для обробки відгуку, запису нового значення при натисканні кнопки),
// - onReset (функція для скидання відгуків),
// - totalFeedback (загальна кількість відгуків)
const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    // Обгортаємо всі кнопки в div
    <div>
      <div className={styles.options_wrap_main}>
        {/* Кнопки для вибору типу відгуку: Good, Neutral, Bad */}
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
        {/* Якщо є хоча б один відгук, відображаємо кнопку Reset для скидання */}
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
