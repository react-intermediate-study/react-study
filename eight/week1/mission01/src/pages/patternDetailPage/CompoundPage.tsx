import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PatternDetailLayout, type TabType } from "./PatternDetailLayout";
import { Code } from "../../components/common/Code";
import { Demo } from "../../components/common/Demo";
import { InfoCard } from "../../components/common/InfoCard";
import { WhiteCard } from "../../components/common/WhiteCard";
import { CompoundBadContent } from "../../components/CompoundBadContent";
import { CompoundGoodContent } from "../../components/CompoundGoodContent";

export default function CompoundPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabType>("demo");

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <PatternDetailLayout
      title="Compound Component"
      description="Context를 활용해 부모-자식 간 암묵적 상태 공유로 유연한 컴포넌트를 만듭니다."
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onBack={handleBack}
    >
      {activeTab === "demo" && (
        <div className="flex flex-col">
          <Demo
            title="알림 컴포넌트 비교"
            description="같은 UI를 두 가지 방식으로 구현했습니다."
            badTitle="Compound 패턴 미적용"
            badContent={<CompoundBadContent />}
            goodTitle="Compound 패턴 적용"
            goodContent={<CompoundGoodContent />}
          />
          <InfoCard
            title="Container 패턴의 이점"
            description="로직을 Custom Hook으로 분리하면 테스트가 쉬워지고, Presentational 컴포넌트는 Storybook 등에서 다양한 상태로 독립적으로 테스트할 수 있습니다. 또한 같은 로직을 다른 UI에 재사용할 수 있습니다."
          />
        </div>
      )}

      {activeTab === "code" && (
        <Code
          badTitle="Compound 패턴 미적용 "
          badContent={
            <pre className="text-sm font-mono leading-relaxed text-gray-700 overflow-x-auto pb-4">
              <code>{`// 패턴 미적용: 모든 경우의 수를 Props로 받아서 분기 처리해야 함
const BadNotification = ({ title, description, showButton }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;

  return (
    <div className="notification">
      <div className="header">
        <h4>{title}</h4>
        <button onClick={() => setIsVisible(false)}>✕</button>
      </div>
      
      {/* 구조가 강제됨: description이나 button의 위치를 마음대로 바꾸기 힘듦 */}
      {description && <p>{description}</p>}
      
      {showButton && <button>자세히 보기</button>}
    </div>
  );
};

//요구사항이 바뀔 때마다 컴포넌트 내부 코드를 수정해야 함
  title="⚠️ 안내" 
  description="서버 점검 중입니다." 
  showButton={true} 
/>`}</code>
            </pre>
          }
          goodTitle="Compound 패턴 적용"
          goodContent={
            <pre className="text-sm font-mono leading-relaxed text-gray-700 overflow-x-auto pb-4">
              <code>{`// 패턴 적용: Context로 상태만 공유하고, 마크업 구조는 자유롭게!

// Context 생성
const NotificationContext = createContext(null);

// Root 컴포넌트 (staate 제공)
function Notification({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  
  return (
    <NotificationContext.Provider value={{ close: () => setIsVisible(false) }}>
      <div className="notification">{children}</div>
    </NotificationContext.Provider>
  );
}

// 하위 컴포넌트들 (UI만 담당)
Notification.Header = ({ children }) => {
  const { close } = useContext(NotificationContext); // Context에서 함수 꺼내 쓰기
  return (
    <div className="header">
      <h4>{children}</h4>
      <button onClick={close}>✕</button>
    </div>
  );
};

Notification.Description = ({ children }) => <p>{children}</p>;
Notification.Action = ({ children }) => <button>{children}</button>;

// 레고처럼 원하는 위치에 조립 가능
<Notification>
  <Notification.Header>⚠️ 안내</Notification.Header>
  <Notification.Description>서버 점검 중입니다.</Notification.Description>
  
  <div className="flex gap-2">
    <Notification.Action>확인</Notification.Action>
    <Notification.Action>취소</Notification.Action>
  </div>
</Notification>`}</code>
            </pre>
          }
        />
      )}

      {activeTab === "guide" && (
        <WhiteCard>
          <WhiteCard.Title className="mb-8">
            Compound Component 구현 단계
          </WhiteCard.Title>

          <div className="flex flex-col gap-6 mb-8">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 mb-1 text-sm">
                  Context 생성
                </span>
                <span className="text-gray-500 text-sm">
                  공유할 상태와 함수를 정의한 Context를 만듭니다.
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                2
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 mb-1 text-sm">
                  Root 컴포넌트 구현
                </span>
                <span className="text-gray-500 text-sm">
                  Provider로 감싸고 상태 관리 로직을 담습니다.
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                3
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 mb-1 text-sm">
                  하위 컴포넌트 구현
                </span>
                <span className="text-gray-500 text-sm">
                  useContext로 상태를 받아 각자의 역할을 수행합니다.
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                4
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 mb-1 text-sm">
                  정적 프로퍼티로 연결
                </span>
                <span className="text-gray-500 text-sm">
                  Root.SubComponent 형태로 export합니다.
                </span>
              </div>
            </div>
          </div>

          <WhiteCard.Divider />

          <h4 className="font-bold text-gray-900 mb-4 mt-2">실제 사용 예시</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WhiteCard.InnerBox
              variant="gray"
              hasBorder={false}
              className="p-4 bg-slate-100/70"
            >
              <div className="font-bold text-gray-800 text-sm mb-1">
                Radix UI
              </div>
              <div className="text-xs text-gray-500">
                Dialog.Root, Dialog.Trigger, Dialog.Content
              </div>
            </WhiteCard.InnerBox>

            <WhiteCard.InnerBox
              variant="gray"
              hasBorder={false}
              className="p-4 bg-slate-100/70"
            >
              <div className="font-bold text-gray-800 text-sm mb-1">
                Headless UI
              </div>
              <div className="text-xs text-gray-500">
                Menu.Button, Menu.Items, Menu.Item
              </div>
            </WhiteCard.InnerBox>
          </div>
        </WhiteCard>
      )}
    </PatternDetailLayout>
  );
}
