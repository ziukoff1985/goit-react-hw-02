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

  // Обчислює відсоток позитивних відгуків (`good`) серед загальної кількості відгуків (`totalFeedback`).
  // Якщо є хоча б один відгук, виконується розрахунок відсотка позитивних відгуків.
  // Якщо загальна кількість відгуків дорівнює 0, повертається 0
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  // Функція updateFeedback призначена для оновлення кількості певного типу відгуків.
  // Вона приймає один параметр `feedbackType`, який вказує на тип відгуку, що потрібно оновити.
  const updateFeedback = feedbackType => {
    // Оновлює стан `options` за допомогою функції `setOptions`.
    // Використовується попередній стан `prevOptions`, щоб уникнути проблем зі станом, який може бути застарілим.
    setOptions(prevOptions => ({
      // Створює новий об'єкт, копіюючи всі попередні значення з `prevOptions`
      // за допомогою спред-оператора (...).
      ...prevOptions,
      // Оновлює значення для ключа, що відповідає `feedbackType`.
      // Ключ визначається динамічно завдяки квадратним дужкам.
      // До поточного значення додається 1.
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
      <Description />
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
        <Feedback
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
          {...options}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
