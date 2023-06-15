import { FC } from "react";
import styles from "./App.module.scss";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Header from "./components/header/Header";
import Purpose from "./components/purpose/Purpose";
import Service from "./components/service/Service";

const App: FC = () => {
  return (
    <main className={styles.page}>
      <NavigationBar />
      <Header />
      <Purpose />
      <Service />
    </main>
  );
};

export default App;
