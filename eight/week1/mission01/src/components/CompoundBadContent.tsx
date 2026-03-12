import React, { useState } from "react";

// ❌ 나쁜 예시: 모든 경우의 수를 Props로 받아서 내부에서 분기 처리해야 함
const BadNotification = ({ title, description, showButton }: any) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="p-4 bg-white border border-red-200 rounded-lg shadow-sm w-full mb-3">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-red-500"
        >
          ✕
        </button>
      </div>

      {/* Description이 있을 때만 렌더링 (구조가 강제됨) */}
      {description && (
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      )}

      {/* Button이 있을 때만 렌더링 (위치나 디자인을 바꾸기 힘듦) */}
      {showButton && (
        <button className="mt-3 px-3 py-1.5 text-xs font-bold text-red-600 bg-red-50 rounded-md">
          자세히 보기
        </button>
      )}
    </div>
  );
};

export const CompoundBadContent = () => {
  return (
    <div className="flex flex-col w-full max-w-sm">
      {/*Title만 있는 알림 */}
      <BadNotification title="✅ 저장이 완료되었습니다." />

      {/* Title + Description이 있는 알림 */}
      <BadNotification
        title="⚠️ 시스템 점검 안내"
        description="새벽 2시부터 4시까지 서버 점검이 진행됩니다."
      />

      {/*  Title + Description + Button이 있는 알림 */}
      <BadNotification
        title="🎁 새로운 쿠폰 도착"
        description="신규 가입 기념 10% 할인 쿠폰이 발급되었습니다."
        showButton={true}
      />
    </div>
  );
};
