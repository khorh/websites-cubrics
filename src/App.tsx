import { FC } from "react";
import styles from "./App.module.scss";
import NavigationBar from "./designSystem/navigationBar/NavigationBar";
import Header from "./components/header/Header";
import Purpose from "./components/purpose/Purpose";

const App: FC = () => {
  return (
    <div className={styles.page}>
      <NavigationBar />
      <Header />
      <Purpose />
    </div>
  );
};

export default App;
