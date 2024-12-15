import styles from './Notification.module.css';

// Оголошуємо компонент Notification, який відображає повідомлення, коли відгуків ще не було
const Notification = () => {
  return (
    // Повертаємо div, який містить текст "No feedback yet"
    <div className={styles.notification_wrap}>
      <p>No feedback yet</p>
    </div>
  );
};

export default Notification;
