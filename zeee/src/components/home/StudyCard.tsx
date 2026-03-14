import { Link } from 'react-router-dom'

interface StudyCardProps {
  topic: string
  title: string
  description: string
}

export default function StudyCard({
  topic,
  title,
  description,
}: StudyCardProps) {
  return (
    <Link to={`/detail/${topic}`}>
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    </Link>
  )
}