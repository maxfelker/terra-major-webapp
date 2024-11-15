import { Link } from "react-router-dom";
import appStyles from "../App/styles.module.css";
import art0 from "./262bea61-77bc-4d92-aa0e-c552f352dc60.png";
import art3 from "./971612ff-9ef8-47c8-a929-bc2e2182e8b6.png";
import art2 from "./954dbe84-2b8d-4a44-a87d-611db68995dc.png";
import styles from "./styles.module.css";

export default function HomePage() {
  const discordUrl = localStorage.getItem('discordUrl');
  const downloadUrl = localStorage.getItem('downloadUrl');
  const buildVersion = localStorage.getItem('buildVersion');
  const pcDownloadUrl = `${downloadUrl}/${buildVersion}_PC.zip`;
  const macDownloadUrl = `${downloadUrl}/${buildVersion}_OSX.zip`;
  const linuxDownloadUrl = `${downloadUrl}/${buildVersion}_Linux.zip`;
  
  return (
    <>
      <div className={appStyles.hero}  style={{backgroundImage:"url("+art0+")"}}>
        <div className={appStyles.heroContent}>
          <div className={appStyles.content}>
           <h1>Free to Play</h1>
          </div>
        </div>
      </div>
    
      <div className={appStyles.content}>
        <p>Terra Major is an open world game set in the distant future. Humankind has expanded across the universe in search of land and wealth. 
        </p>
        <p>The game free to play and no payment is required. Our current proof-of-concept is a single player sandbox
          where we are exploring game play and feedback.</p>
        
        <div className={styles.ctaContainer}>
            <Link to={pcDownloadUrl}><button>PC v{buildVersion}</button></Link>
            <Link to={macDownloadUrl}><button>Mac v{buildVersion}</button></Link>
            <Link to={linuxDownloadUrl}><button>Linux v{buildVersion}</button></Link>
        </div>

        <p>The build size is ~850MB compressed (1.65GB uncompressed) and will download directly. By downloading any one of these version, you are agreeing to our 
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
        <p>The v{buildVersion} proof-of-concept is single player demo set in an arrid desert on Terra Major VIII. 
        In this short play through, we are focusing on core mechanics where players can: </p>
        <ul>
          <li>Create an account and login</li>
          <li>Create a character and explore the Terra Major planet surface</li>
          <li>Collect and refine various types of resources such as Cosmocite, Luxium, and Beyon</li>
        </ul>
        <p>We are adding features incrementally. Interesting in providing feedback or what to see something in the game? 
          Please join our Discord server or send us an email. </p>
        <p><Link to={discordUrl}><button>Join Discord Server</button></Link></p>
      </div>

      <div className={appStyles.hero} style={{backgroundImage:"url("+art2+")"}}>
        <div className={appStyles.heroContent}>
          <div className={appStyles.content}>
           <h1>Sky is the limit</h1>
           </div>
        </div>
      </div>

      <div className={appStyles.content}>
        <p>We believe in pushing the boundaries. Our mission is to change how we build and plays games. 
          Our goal is to create unqiue experiences for every player by using procedural experiences with strong, player-driven 
          narratives. Our approach is modern, agile, and developer-led.</p>
        <p>Interesting in providing your perspective? 
          Please join our Discord server or send us an email. </p>
        <p><Link to={discordUrl}><button>Join Discord Server</button></Link></p>
      </div>
    </>
  )
}