// Імпортуємо хуки useState та useEffect для керування станом та ефектами в компоненті
import { useState, useEffect } from 'react';

// Імпортуємо компоненти, JSON дані та стилі
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import feedbackInitialState from './assets/feedBack.json'; // Початкові дані для відгуків
import './App.css';

// Оглошуємо головний компонент App
function App() {
  // Використовуємо useState з функцією зворотного виклику:
  // - для отримання початкових значень із localStorage або початкового стану { "good": 0, "neutral": 0, "bad": 0}
  const [options, setOptions] = useState(() => {
    // Оглошуємо змінну savedFeedbackData, яка зчитує дані з localStorage
    // Отримуємо збережені дані відгуків з localStorage
    const savedFeedbackData = localStorage.getItem('feedback');

    // Повертаємо savedFeedbackData:
    // - якщо дані є (true )- парсимо дані (JSON.parse(savedFeedbackData))
    // - якщо дані відсутні (false) - встановлюємо початковий стан { "good": 0, "neutral": 0, "bad": 0}
    return savedFeedbackData
      ? JSON.parse(savedFeedbackData)
      : feedbackInitialState;
  });

  // Застосовуємо хук useEffect для відслідковування змін стану змінної options
  // Передаємо в колбек-функцію запис даних в localStorage змін в options
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(options));
  }, [options]); // Відслідковуємо зміни в options

  // Деструктуруємо дані про відгуки з об'єкта options
  const { good, neutral, bad } = options;

  // Обчислюємо загальну кількість відгуків
  const totalFeedback = good + neutral + bad;

  // Створюємо функцію updateFeedback для рендеру сторінки після внесення змін
  // Функція приймає один аргумент feedbackType - рядок з типом відгуку ("good", "neutral", "bad")
  // Функція для оновлення стану відгуку, збільшує значення певного типу відгуку на 1
  const updateFeedback = feedbackType => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [feedbackType]: prevOptions[feedbackType] + 1,
    }));
  };

  // Функція для скидання всіх відгуків до початкового стану
  // Встановлюємо початкові значення відгуків ("good", "neutral", "bad")
  const resetFeedback = () => {
    setOptions(feedbackInitialState);
  };

  // Рендеримо компоненти на сторінці
  return (
    <>
      {/* Компонент Description для заголовка та опису, передаємо через проп children */}
      <Description>
        <h2>Sip Happens Café</h2>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>
      {/* Компонент Options з кнопками для відгуків, пропси:
          - totalFeedback (загальна кіль-ть відгуків)
          - onLeaveFeedback (фун-я для ререндинга і оновлення к-ті відгуків)
          - onReset (фун-я для обнулення значень відгуків)*/}
      <Options
        totalFeedback={totalFeedback}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
      />
      {/* Компонент Feedback з показниками відгуків:
          - пропс totalFeedback (загальна кіль-ть відгуків)
          - пропс об'єкт (...options)
          - якщо є хоча б один відгук - відображається статистика відгуків
          - якщо немає відгуків - повідомлення про їх відсутність (компонент Notification)*/}
      {totalFeedback > 0 ? (
        <Feedback totalFeedback={totalFeedback} {...options} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
