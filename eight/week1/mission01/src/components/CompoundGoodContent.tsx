import React, { createContext, useContext, useState } from "react";

// --- 1. Context 생성 (닫기 상태 공유) ---
const NotificationContext = createContext<any>(null);

// --- 2. Root 컴포넌트 (상태 제공) ---
function Notification({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <NotificationContext.Provider value={{ close: () => setIsVisible(false) }}>
      <div className="p-4 bg-white border border-green-200 rounded-lg shadow-sm w-full mb-3 flex flex-col">
        {children}
      </div>
    </NotificationContext.Provider>
  );
}

// --- 3. 하위 컴포넌트 (레고 블록들) ---
Notification.Header = ({ children }: { children: React.ReactNode }) => {
  const { close } = useContext(NotificationContext); // Context에서 함수를 꺼내 씀!
  return (
    <div className="flex justify-between items-start">
      <h4 className="font-bold text-gray-800 text-sm">{children}</h4>
      <button onClick={close} className="text-gray-400 hover:text-green-500">
        ✕
      </button>
    </div>
  );
};

Notification.Description = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-500 mt-2">{children}</p>
);

Notification.Action = ({ children, onClick }: any) => (
  <button
    onClick={onClick}
    className="mt-3 px-3 py-1.5 text-xs font-bold text-green-700 bg-green-50 rounded-md self-start"
  >
    {children}
  </button>
);

// --- 4. 메인 컨테이너 (자유롭게 조립하기!) ---
export const CompoundGoodContent = () => {
  return (
    <div className="flex flex-col w-full max-w-sm">
      {/*Title만 있는 심플한 알림 */}
      <Notification>
        {/* 설명이나 버튼을 넣지 않고 Header만 조립! */}
        <Notification.Header>✅ 저장이 완료되었습니다.</Notification.Header>
      </Notification>

      {/* Title + Description이 있는 알림 */}
      <Notification>
        <Notification.Header>⚠️ 시스템 점검 안내</Notification.Header>
        <Notification.Description>
          새벽 2시부터 4시까지 서버 점검이 진행됩니다.
        </Notification.Description>
      </Notification>

      {/* Header +마음대로 넣은 알림*/}
      <Notification>
        <Notification.Header>🎁 새로운 쿠폰 도착</Notification.Header>
        <Notification.Description>
          신규 가입 기념 10% 할인 쿠폰이 발급되었습니다.
        </Notification.Description>
        <div className="flex gap-2">
          <Notification.Action>쿠폰 받기</Notification.Action>
          <Notification.Action>나중에</Notification.Action>
        </div>
      </Notification>
    </div>
  );
};
