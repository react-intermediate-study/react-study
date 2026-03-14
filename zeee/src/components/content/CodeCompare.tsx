interface CodeCompareProps {
  topic: string
}

export default function CodeCompare({ topic }: CodeCompareProps) {
  return (
    <section>
      <h2>Code Compare</h2>
      <p>현재 주제: {topic}</p>
      <p>여기에 코드 비교 내용이 들어올 예정입니다.</p>
    </section>
  )
}