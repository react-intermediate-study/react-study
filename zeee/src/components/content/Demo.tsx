interface DemoProps {
  topic: string
}

export default function Demo({ topic }: DemoProps) {
  return (
    <section>
      <h2>Demo</h2>
      <p>현재 주제: {topic}</p>
      <p>여기에 데모 내용이 들어올 예정입니다.</p>
    </section>
  )
}