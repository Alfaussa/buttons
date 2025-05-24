import logo from './logo.svg';
import styles from './App.module.css';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';

function App() {
  return <>
<div className={styles.app}>
  <h2 className={styles.title}>CSS Module Buttons</h2>
  <div className={styles.wrapper}>
  <Buttons/>
  <Inputs/>
  </div>
</div>
  </>
     
}

export default App;
