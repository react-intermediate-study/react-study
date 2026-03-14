import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import DetailTabs from '../components/detail/DetailTabs'
import { titleMap, contentMap } from '../data/studyData'

export default function DetailPage() {
  const { topic } = useParams()
  const [activeTab, setActiveTab] = useState('demo')

  const title = titleMap[topic ?? ''] ?? 'Unknown Topic'
  const content =
    contentMap[topic as 'srp' | 'container' | 'compound']?.[
      activeTab as 'demo' | 'code' | 'guide'
    ] ?? '알 수 없는 주제입니다.'

  return (
    <main>
      <Link to="/">← 홈으로</Link>
      <h1>{title}</h1>
      <DetailTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <p>{content}</p>
    </main>
  )
}