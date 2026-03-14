interface GuideProps {
  topic: string
}

export default function Guide({ topic }: GuideProps) {
  return (
    <section>
      <h2>Guide</h2>
      <p>현재 주제: {topic}</p>
      <p>여기에 가이드 내용이 들어올 예정입니다.</p>
    </section>
  )
}