import { Link } from "react-router-dom";
import CharacterList from "../Character/CharacterList";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1> - <Link to="/play">Play Now</Link>
      <CharacterList />
    </>
  )
}