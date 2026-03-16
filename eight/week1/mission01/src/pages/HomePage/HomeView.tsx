import type { ReactNode } from "react";
import { Card } from "../../components/common/Card";

interface PatternData {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  tags: string[];
}
interface ImportanceData {
  id: string;
  title: string;
  description: string;
}

interface HomeViewProps {
  patterns: PatternData[];
  importances: ImportanceData[];
  onDemoClick: (id: string) => void;
}

export default function HomeView({
  patterns,
  importances,
  onDemoClick,
}: HomeViewProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center">
      {/* 헤더 영역 */}
      <header className="w-full bg-[#ffffff] flex justify-center mb-10 py-12 border-b border-gray-100">
        {/* 3. 헤더 안의 '내용물'만 가로 크기를 제한(max-w-5xl)해서 중앙에 맞춥니다. */}
        <div className="w-full max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-bold text-white bg-blue-600 rounded">
              {"</>"}
            </span>
            <span className="text-sm font-medium text-gray-500 tracking-wider">
              PLAYGROUND
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            React 컴포넌트 패턴 플레이그라운드
          </h1>
          <p className="text-gray-500">
            실무에서 자주 사용되는 세 가지 핵심 패턴을 직접 체험하고
            학습해보세요. <br />각 패턴의 장점과 적용 사례를 인터랙티브하게
            확인할 수 있습니다.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl h-full">
        {/* 패턴 목록 영역  */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-gray-500 mb-7">
            패턴 목록
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patterns.map((item) => (
              <Card key={item.id}>
                <Card.Icon className={`${item.iconBg} ${item.iconColor}`}>
                  {item.icon}
                </Card.Icon>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.description}</Card.Description>
                <Card.Tags tags={item.tags} />
                <Card.Button onClick={() => onDemoClick(item.id)}>
                  데모 보기
                </Card.Button>
              </Card>
            ))}
          </div>
        </section>
        {/* 중요성 영역 (일부 조립) */}
        <section className="mb-15">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            왜 이 패턴들이 중요한가요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {importances.map((item) => (
              // 💡 아이콘, 태그, 버튼 없이 조립!
              <Card key={item.id}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.description}</Card.Description>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
