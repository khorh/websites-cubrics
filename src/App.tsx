import { FC } from "react";
import styles from "./App.module.scss";
import NavigationBar from "./designSystem/navigationBar/NavigationBar";

const App: FC = () => {
  return (
    <div className={styles.page}>
      <NavigationBar />
    </div>
  );
};

export default App;
