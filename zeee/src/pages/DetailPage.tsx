import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function DetailPage() {
  const { topic } = useParams()

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
      <p>여기에 데모 / 코드 비교 / 가이드가 들어올 예정입니다.</p>
    </main>
  )
}