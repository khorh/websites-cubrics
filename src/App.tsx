import { FC } from "react";
import styles from "./App.module.scss";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Header from "./components/header/Header";
import Purpose from "./components/purpose/Purpose";
import Services from "./components/services/Services";

const App: FC = () => {
  return (
    <main className={styles.page}>
      <NavigationBar />
      <Header />
      <Purpose />
      <Services />
    </main>
  );
};

export default App;
