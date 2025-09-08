import Relogio from "./components/Relogio/Relogio";
import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.appContainer}>
      <h1>Horário de Brasília</h1>
      <Relogio/>
    </div>
  )
}

export default App
