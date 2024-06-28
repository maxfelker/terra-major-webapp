import { Link } from "react-router-dom";
import appStyles from "../App/styles.module.css";
import art0 from "./262bea61-77bc-4d92-aa0e-c552f352dc60.png";
import art3 from "./971612ff-9ef8-47c8-a929-bc2e2182e8b6.png";
import art2 from "./954dbe84-2b8d-4a44-a87d-611db68995dc.png";
import styles from "./styles.module.css";

export default function HomePage() {
  //const version = localStorage.getItem('build-version');
  const version = "0.14.0";
  const pcDownloadUrl = "testing123";
  const macDownloadUrl = "testing123";
  const linuxDownloadUrl = "testing123";
  const discordInviteUrl = "https://discord.gg/aj75rgzeBE";

  return (
    <>
      <div className={appStyles.hero}  style={{backgroundImage:"url("+art0+")"}}>
        <div className={appStyles.heroContent}>
          <div className={appStyles.content}>
           <h1>Free to play</h1>
          </div>
        </div>
      </div>
    
      <div className={appStyles.content}>
        <p>Terra Major is an interstellar experience. It is a free to play game and no payment is required. 
          The current proof-of-concept is a single player sandbox
          where we are exploring game design, mechanics, and feedback.</p>
        
        <div className={styles.ctaContainer}>
            <Link to={pcDownloadUrl}><button>PC v{version}</button></Link>
            <Link to={macDownloadUrl}><button>Mac v{version}</button></Link>
            <Link to={linuxDownloadUrl}><button>Linux v{version}</button></Link>
        </div>

        <p>By downloading any one of these version, you are agreeing to our 
         {" "} <Link to="/terms">terms & conditions</Link>.</p>

      </div>

      <div className={appStyles.hero} style={{backgroundImage:"url("+art3+")"}}>
        <div className={appStyles.heroContent}>
          <div className={appStyles.content}>
            <h1>It&apos;s your world</h1>
          </div>
        </div>
      </div>

      <div className={appStyles.content}>
        <p>The v{version} proof-of-concept is single player experience set in an arrid desert flatland on Terra Major VII. 
        In this demo, we are focusing on core mechanics where players can: </p>
        <ul>
          <li>Create an account and login</li>
          <li>Create a character and explore the Terra Major planet surface</li>
          <li>Collect and refine various types of resources such as Luxium, Soladite, and Beyon</li>
          <li>Build structures such as an Outpost, Habitat, and Refinery in their own persistent sandbox</li>
        </ul>
        <p>We are adding features incrementally. Interesting in providing feedback or what to see something in the game? 
          Please join our Discord server or send us an email. </p>
        <p><Link to={discordInviteUrl}><button>Join Discord Server</button></Link></p>
      </div>

      <div className={appStyles.hero} style={{backgroundImage:"url("+art2+")"}}>
        <div className={appStyles.heroContent}>
          <div className={appStyles.content}>
           <h1>Sky is the limit</h1>
           </div>
        </div>
      </div>

      <div className={appStyles.content}>
        <p>We believe in pushing the boundaries. Our mission is to disrupt how we build and plays games.
          Our goal is to create unqiue experiences for every player by combining procedural experiences with strong, player-driven 
          narratives. Our approach is modern, agile, and developer-led.</p>
        <p>Interesting in providing your perspective? 
          Please join our Discord server or send us an email. </p>
        <p><Link to={discordInviteUrl}><button>Join Discord Server</button></Link></p>
      </div>
    </>
  )
}