import React, { type ReactNode } from "react";
import { IoIosArrowBack } from "react-icons/io";

export type TabType = "demo" | "code" | "guide";

interface PatternDetailLayoutProps {
  title: string;
  description: string;
  activeTab: TabType; //선택된 탭
  onTabChange: (tab: TabType) => void; //탭 변경
  onBack: () => void; //뒤로가기
  children: ReactNode; //내용
}
export const PatternDetailLayout = ({
  title,
  description,
  activeTab,
  onTabChange,
  onBack,
  children,
}: PatternDetailLayoutProps) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: "demo", label: "데모" },
    { id: "code", label: "코드 비교" },
    { id: "guide", label: "가이드" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 flex justify-center">
      <div className="w-full max-w-5xl">
        <button
          onClick={onBack}
          className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6"
        >
          <svg
            className="w-4 h-4 mr-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <IoIosArrowBack />
          </svg>
          돌아가기
        </button>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </header>

        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 메인 컨텐츠 영역 */}
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};
