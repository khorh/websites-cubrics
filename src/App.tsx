import { FC } from "react";
import styles from "./App.module.scss";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Purpose from "./components/purpose/Purpose";
import Services from "./components/services/Services";
import Industries from "./components/industries/Industries";

const App: FC = () => {
  return (
    <main className={styles.page}>
      <Navigation />
      <Header />
      <Purpose />
      <Services />
      <Industries />
      <About />
      <Footer />
    </main>
  );
};

export default App;
