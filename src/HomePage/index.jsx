import { Link } from "react-router-dom";

export default function HomePage() {
  const version = localStorage.getItem('build-version');

  return (
    <>
      <h1>Terra Major v{version}</h1>

      <p>Returning users <Link to="/login">login</Link></p>
      
      <p>New users <Link to="/sign-up">create account</Link></p>

      <p>Terra Major is a free-to-play, cross-platform sci-fi game that allows players to build colonies, gather resources, and challenge other players in a real-time, persistent game world.</p>

      <h2>Infinite Single Player Sandbox</h2>
      <ul>
        <li>Base building and territory control</li>
        <li>Resource management</li>
        <li>Open world exploration</li>
        <li>Character skills and growth</li>
      </ul>
    </>
  )
}