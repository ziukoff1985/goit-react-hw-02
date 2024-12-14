import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import feedbackInitialState from './assets/feedBack.json';
import './App.css';

function App() {
  const [options, setOptions] = useState(() => {
    const savedFeedbackData = localStorage.getItem('feedback');

    return savedFeedbackData
      ? JSON.parse(savedFeedbackData)
      : feedbackInitialState;
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(options));
  }, [options]);

  const { good, neutral, bad } = options;

  const totalFeedback = good + neutral + bad;

  const updateFeedback = feedbackType => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [feedbackType]: prevOptions[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setOptions(feedbackInitialState);
  };

  return (
    <>
      <Description>
        <h2>Sip Happens Café</h2>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>
      <Options
        totalFeedback={totalFeedback}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback totalFeedback={totalFeedback} {...options} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
