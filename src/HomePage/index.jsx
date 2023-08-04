import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function HomePage() {
  const version = localStorage.getItem('build-version');

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
           <h1>Terra Major</h1>
        </div>
      </div>
    
      <div className={styles.content}>
        <h2>v{version} - Single player persistent sandbox</h2>
        <p>Terra Major is a free-to-play, cross-platform game about interstellar colonization.
          Open alpha available via WebGL, no installation or payment required.</p>
        <ul>
          <li>Players can create and manage their characters</li>
          <li>Each character has thier own persistent sandbox</li>
          <li>Players can mine Omnium ore and redeem at the Refinery</li>
          <li>Players can build structures in their sandbox</li>
        </ul>
        <p>Commonwealth citizens can <Link to="/login"><button>Warp to Surface</button></Link></p>
        <p>All civillians must <Link to="/sign-up">apply for Citizenship!</Link></p>

      </div>
    </>
  )
}