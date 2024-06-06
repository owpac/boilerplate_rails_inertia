import { Link } from '@inertiajs/react'

export default function Index({name}) {
  return (
    <>
        <div className="text-red-900">Hello {name}</div>
        <Link href="/dashboard">Dashboard</Link>
    </>
  )
}