import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <h1>Hello Worlds</h1>
      <div className="flex flex-col">
        <a href="/yo">/Yo</a>
        <Link to="/about">/About</Link>
      </div>
    </div>
  )
}
