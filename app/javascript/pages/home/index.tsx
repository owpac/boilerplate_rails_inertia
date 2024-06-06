import { Link } from '@inertiajs/react'

interface IndexProps {
  name: string;
}

export default function Index({ name }: IndexProps) {
  return (
    <>
      <div className="text-red-900">Hello {name}</div>
      <Link href="/dashboard">Dashboard</Link>
    </>
  )
}
