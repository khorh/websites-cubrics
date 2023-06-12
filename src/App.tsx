import { FC } from "react";
import styles from "./App.module.scss";
import NavigationBar from "./designSystem/navigationBar/NavigationBar";
import Header from "./components/header/Header";

const App: FC = () => {
  return (
    <div className={styles.page}>
      <NavigationBar />
      <Header />
    </div>
  );
};

export default App;
