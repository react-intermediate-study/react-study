import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PatternDetailLayout, type TabType } from "./PatternDetailLayout";
import { Code } from "../../components/common/Code";
import { Demo } from "../../components/common/Demo";
import { InfoCard } from "../../components/common/InfoCard";
import { WhiteCard } from "../../components/common/WhiteCard";
import { SRPGoodContent } from "../../components/SRPGoodContent";
import { SRPBadContent } from "../../components/SRPBadContent";

export default function SRPPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabType>("demo");

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <PatternDetailLayout
      title="SRP(단일 책임 원칙)"
      description="Single Responsibility Principle - 하나의 컴포넌트는 하나의 역할만 수행해야 합니다."
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onBack={handleBack}
    >
      {activeTab === "demo" && (
        <div className="flex flex-col">
          <Demo
            title="비교 체험"
            description="같은 UI를 SRP 위반/적용 두 가지 방식으로 구현한 예시입니다."
            badTitle="SRP 위반 예시"
            badContent={<SRPBadContent />}
            goodTitle="SRP 적용 예시"
            goodContent={<SRPGoodContent />}
          />
          <InfoCard
            title="핵십포인트"
            description="외관상으로는 동일해 보이지만, SRP를 적용한 버전은 각 부분을 독립적으로 테스트하고 재사용할 수 있습니다. UserAvatar는 다른 곳에 서도 사용 가능하고, 날짜 포맷 함수는 전체 앱에서 일관되게 활용할 수 있습니다."
          />
        </div>
      )}

      {activeTab === "code" && (
        <Code
          badTitle="SRP 위반"
          badContent={
            <pre className=" leading-relaxed overflow-x-auto pb-4">
              <code>{`// SRP 위반: 데이터 패칭, 필터링, UI 렌더링을 모두 한 곳에서 처리 

function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // 1. 데이터 패칭 로직
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  // 2. 검색 및 필터링 로직
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (isLoading) return <p>로딩 중...</p>;

  // 3. 복잡한 UI 렌더링
  return (
    <div className="dashboard">
      <div className="search-bar">
        <input
          type="text"
          placeholder="상품 검색..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            <h4>{product.name}</h4>
            <p>{product.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}</code>
            </pre>
          }
          goodTitle="SRP 적용"
          goodContent={
            <pre className="leading-relaxed overflow-x-auto pb-4">
              <code>{`// SRP 적용: 데이터, 검색 UI, 아이템 UI를 각각 분리

// 1. 커스텀 훅 (데이터 패칭만 담당)
function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => { setProducts(data); setIsLoading(false); });
  }, []);

  return { products, isLoading };
}

// 2. 검색 UI 컴포넌트 (입력만 담당)
function SearchBar({ keyword, onChange }) {
  return (
    <input
      type="text"
      placeholder="상품 검색..."
      value={keyword}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

// 3. 상품 카드 컴포넌트 (개별 아이템 표시만 담당)
function ProductCard({ product }) {
  return (
    <div className="card">
      <h4>{product.name}</h4>
      <p>{product.price.toLocaleString()}원</p>
    </div>
  );
}

// 4. 메인 컨테이너 (조합 및 상태 연결만 담당)
function ProductDashboard() {
  const { products, isLoading } = useProducts();
  const [keyword, setKeyword] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (isLoading) return <p>로딩 중...</p>;

  return (
    <div className="dashboard">
      <SearchBar keyword={keyword} onChange={setKeyword} />
      <div className="product-list">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}`}</code>
            </pre>
          }
        />
      )}

      {activeTab === "guide" && (
        <WhiteCard>
          <WhiteCard.Title className="mb-3">SRP 적용 가이드</WhiteCard.Title>

          <WhiteCard.Subtitle className="mb-4">
            언제 분리해야 할까요?
          </WhiteCard.Subtitle>
          <WhiteCard.Paragraph>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">1.</span> 컴포넌트가
                100줄 이상일 때
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">2.</span> 여러 상태를
                동시에 관리할 때
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">3.</span> 비슷한
                로직이 다른 곳에서도 필요할 때
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">4.</span> 테스트를
                작성하기 어려울 때
              </li>
            </ul>
          </WhiteCard.Paragraph>
          <WhiteCard.Divider />

          <h4 className="font-bold text-gray-900 mb-4">분리 대상</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WhiteCard.InnerBox
              variant="gray"
              hasBorder={false}
              className="p-4"
            >
              <div className="font-bold text-sm mb-1">유틸리티 함수</div>
              <WhiteCard.Paragraph className="text-xs">
                날짜 포맷, 숫자 변환 등
              </WhiteCard.Paragraph>
            </WhiteCard.InnerBox>

            <WhiteCard.InnerBox
              variant="gray"
              hasBorder={false}
              className="p-4"
            >
              <div className="font-bold text-sm mb-1">UI 원자 컴포넌트</div>
              <WhiteCard.Paragraph className="text-xs">
                Avatar, Badge, Icon 등
              </WhiteCard.Paragraph>
            </WhiteCard.InnerBox>

            <WhiteCard.InnerBox
              variant="gray"
              hasBorder={false}
              className="p-4"
            >
              <div className="font-bold text-sm mb-1">커스텀 훅</div>
              <WhiteCard.Paragraph className="text-xs">
                데이터 fetching, 폼 로직
              </WhiteCard.Paragraph>
            </WhiteCard.InnerBox>

            <WhiteCard.InnerBox
              variant="gray"
              hasBorder={false}
              className="p-4"
            >
              <div className="font-bold text-sm mb-1">컨텍스트 / 상태 관리</div>
              <WhiteCard.Paragraph className="text-xs">
                전역 상태, 테마 등
              </WhiteCard.Paragraph>
            </WhiteCard.InnerBox>
          </div>
        </WhiteCard>
      )}
    </PatternDetailLayout>
  );
}
