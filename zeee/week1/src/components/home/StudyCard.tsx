import { Link } from 'react-router-dom'

interface StudyCardProps {
  topic: string
  title: string
  description: string
  tags: string[]
}

export default function StudyCard({
  topic,
  title,
  description,
  tags,
}: StudyCardProps) {
  return (
    <Link to={`/detail/${topic}`}>
      <article className='bg-white p-6 rounded-xl border border-slate-200 space-y-4 flex flex-col h-full transition hover:-translate-y-1 hover:shadow-lg'>
        <h2 className='text-lg font-semibold text-slate-900'>{title}</h2>
        <p className='text-sm text-slate-600 leading-normal'>{description}</p>
<div className="flex flex-wrap gap-2">
  {tags.map((tag) => (
    <span
      key={tag}
      className="text-xs px-2 py-1 bg-slate-100 rounded"
    >
      {tag}
    </span>
  ))}
</div>        <button className="mt-auto inline-flex items-center text-sm font-medium text-blue-600">
  자세히 보기 →
</button>
      </article>
    </Link>
  )
}