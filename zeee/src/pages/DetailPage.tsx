import { useParams } from 'react-router-dom'
import { useState } from 'react'
import DetailTabs from '../components/detail/DetailTabs'
import { titleMap, contentMap } from '../data/studyData'
import DetailHeader from '../components/detail/DetailHeader'

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
<DetailHeader title={title} />
      <DetailTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <p>{content}</p>
    </main>
  )
}