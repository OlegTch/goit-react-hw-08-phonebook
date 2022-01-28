import styles from './HomeView.module.css';

const HomeView = () => {
  return (
    <div>
      <h1 className={styles.title}>This is PHONEBOOK</h1>
      <p className={styles.text}>Please, register or login!</p>
    </div>
  );
};

export default HomeView;
