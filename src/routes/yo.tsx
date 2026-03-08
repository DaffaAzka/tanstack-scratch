import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/yo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/yo"!</div>
}
