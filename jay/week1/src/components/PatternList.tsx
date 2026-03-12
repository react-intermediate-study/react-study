import PatternCard from "./PatternCard";
import StackIcon from "./icons/StackIcon";
import CubeIcon from "./icons/CubeIcon";
import LayoutIcon from "./icons/LayoutIcon";

const PATTERNS = [
    {
        title: "SRP (단일 책임 원칙)",
        description: "하나의 컴포넌트가 하나의 역할만 수행하도록 분리하는 패턴을 실습합니다.",
        tags: ["리팩토링", "유지보수", "테스트"],
        icon: <StackIcon />,
    },
    {
        title: "Container 패턴",
        description: "로직과 UI를 분리하여 Container와 Presentational 컴포넌트로 나누는 패턴입니다.",
        tags: ["로직 분리", "재사용성", "테스트"],
        icon: <CubeIcon />,
    },
    {
        title: "Compound Component",
        description: "부모-자식 관계에서 암묵적으로 상태를 공유하는 유연한 컴포넌트 패턴입니다.",
        tags: ["Context", "합성", "유연성"],
        icon: <LayoutIcon />,
    }
];

export default function PatternList() {
    return (
        <section className="w-full relative py-6">
            <h2 className="text-sm font-bold text-gray-500 mb- px-2 tracking-wide">패턴 목록</h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-4">
                {PATTERNS.map((pattern, index) => (
                    <PatternCard
                        key={index}
                        title={pattern.title}
                        description={pattern.description}
                        tags={pattern.tags}
                        showDemoButton={true}
                        icon={pattern.icon}
                        onDemoClick={() => alert(`${pattern.title} 데모 준비 중입니다!`)}
                    />
                ))}
            </div>
        </section>
    );
}
