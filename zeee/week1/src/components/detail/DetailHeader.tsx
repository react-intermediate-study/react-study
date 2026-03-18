import { Link } from 'react-router-dom'

interface DetailHeaderProps {
  title: string
  description: string
}

export default function DetailHeader({ title, description }: DetailHeaderProps) {
  return (
    <div className='pb-12'>
      <Link to="/" className='inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900'><span>←</span><span>홈으로 이동</span></Link>
      <h1 className='mt-4 text-3xl font-bold tracking-tight text-lsate-900'>{title}</h1>
      <p>{description}</p>
    </div>
  )
}