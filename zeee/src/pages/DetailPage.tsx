import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import DetailTabs from '../components/detail/DetailTabs'
import Demo from '../components/content/Demo'
import CodeCompare from '../components/content/CodeCompare'
import Guide from '../components/content/Guide'


export default function DetailPage() {
  const { topic } = useParams()
    const [activeTab, setActiveTab] = useState('demo')


  const titleMap: Record<string, string> = {
    srp: 'SRP (Single Responsibility Principle)',
    container: 'Container Pattern',
    compound: 'Compound Component',
  }

    const title = titleMap[topic ?? ""] ?? "Unknown Topic"

  return (
    <main>
        <Link to="/">← 홈으로</Link>
      <h1>{title}</h1>
      <DetailTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'demo' && <Demo topic={topic ?? ''} />}
      {activeTab === 'code' && <CodeCompare topic={topic ?? ''} />}
      {activeTab === 'guide' && <Guide topic={topic ?? ''} />}
            </main>
  )
}