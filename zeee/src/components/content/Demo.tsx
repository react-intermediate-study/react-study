interface DemoProps {
  topic: string
}

export default function Demo({ topic }: DemoProps) {
  if (topic === 'srp') {
    return (
      <section>
        <h2>Demo</h2>
        <p>현재 주제: SRP</p>
        <p>SRP 데모 내용입니다.</p>
      </section>
    )
  }

  if (topic === 'container') {
    return (
      <section>
        <h2>Demo</h2>
        <p>현재 주제: Container Pattern</p>
        <p>Container 패턴 데모 내용입니다.</p>
      </section>
    )
  }

  if (topic === 'compound') {
    return (
      <section>
        <h2>Demo</h2>
        <p>현재 주제: Compound Component</p>
        <p>Compound Component 데모 내용입니다.</p>
      </section>
    )
  }

  return (
    <section>
      <h2>Demo</h2>
      <p>알 수 없는 주제입니다.</p>
    </section>
  )
}