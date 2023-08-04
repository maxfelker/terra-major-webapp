import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import art2 from "./art-2.png";
import art3 from "./art-3.png";

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
        <p>Terra Major is a free-to-play game about interstellar colonization. The 
          open alpha available via WebGL, no installation or payment required.</p>

        <p><Link to="/login"><button>Play Now</button></Link></p>
        <p>All civillians must <Link to="/sign-up">apply for Citizenship!</Link></p>

      </div>

      <div className={styles.hero} style={{backgroundImage:"url("+art3+")"}}>
        <div className={styles.heroContent}>
           <h1>It's your world</h1>
        </div>
      </div>

      <div className={styles.content}>
        <h2>v{version} - Single player persistent sandbox</h2>
        <ul>
          <li>Players can create and manage their characters</li>
          <li>Each character has thier own persistent sandbox</li>
          <li>Players can mine Omnium ore and redeem at the Refinery</li>
          <li>Players can build structures in their sandbox</li>
        </ul>
        <p><Link to="/login"><button>Start Building</button></Link></p>
      </div>

      <div className={styles.hero} style={{backgroundImage:"url("+art2+")"}}>
        <div className={styles.heroContent}>
           <h1>No limits</h1>
        </div>
      </div>

      <div className={styles.content}>
        <h2>Go over them mountains</h2>
        <p>Content here about why it's so cool</p>
        <ul>
          <li>No artificial boundaries</li>
          <li>The entire game world is playable</li>
        </ul>
        <p><Link to="/login"><button>Explore Terra Major</button></Link></p>
      </div>
    </>
  )
}