import ValueCard from "./ValueCard";

export default function ValueSection() {
    const values = [
  { title: "SRP", description: "컴포넌트를 하나의 책임으로 분리" },
  { title: "Container Pattern", description: "로직과 UI를 분리" },
  { title: "Compound Component", description: "관련 컴포넌트를 조합" }
]
    return(
        <section>
            <h2>이 프로젝트에서 배우는 것</h2>
            <div className="card-grid">
                {values.map((value)=>(
                    <ValueCard 
                    key={value.title}
                title={value.title}
            description={value.description}
            />
                ))}
            </div>
        </section>
    )
}