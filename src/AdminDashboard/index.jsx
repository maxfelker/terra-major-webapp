import SandboxList from "./SandboxList";

export default function AdminDashboard() {
  return (
    <>
      <h1>Admin Dashboard</h1>
      <SandboxList sandboxes={[{id:1, characterId: 2}]} />
    </>
  )
}