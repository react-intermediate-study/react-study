import Header from "../components/Header";

export default function HomePage() {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            <Header
                badgeLabel="PLAYGROUND"
                title="React 컴포넌트 패턴 플레이그라운드"
                description={"실무에서 자주 사용되는 세 가지 핵심 패턴을 직접 체험하고 학습해보세요.\n각 패턴의 장점과 사용 사례를 인터랙티브하게 확인할 수 있습니다."}
            />
        </div>
    );
}