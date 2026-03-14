import { Link } from 'react-router-dom'

interface DetailHeaderProps {
  title: string
}

export default function DetailHeader({ title }: DetailHeaderProps) {
  return (
    <div>
      <Link to="/">← 홈으로</Link>
      <h1>{title}</h1>
    </div>
  )
}