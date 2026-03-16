import React, { type ReactNode } from "react";
import { WhiteCard } from "./WhiteCard"; // 경로에 맞게 수정해주세요

interface DemoProps {
  title: string; // 메인 타이틀 (예: "비교 체험")
  description?: string; // 메인 설명 (예: "같은 UI를 SRP 위반/적용...")

  badTitle?: string; // 미적용 타이틀 (기본값 제공)
  badContent?: ReactNode; // 미적용 UI (실제 렌더링될 컴포넌트)
  badFooter?: string; // 미적용 하단 설명 (예: "문제점: ...")

  goodTitle?: string; // 적용 타이틀 (기본값 제공)
  goodContent?: ReactNode; // 적용 UI (실제 렌더링될 컴포넌트)
  goodFooter?: string; // 적용 하단 설명 (예: "장점: ...")
}

export const Demo = ({
  title,
  description,
  badTitle = "패턴 미적용",
  badContent,
  goodTitle = "패턴 적용",
  goodContent,
}: DemoProps) => {
  return (
    <WhiteCard>
      {/* 1. 상단 제목 & 설명 영역 */}
      <WhiteCard.Title className="mb-2">{title}</WhiteCard.Title>
      {description && (
        <WhiteCard.Paragraph className="mb-6">
          {description}
        </WhiteCard.Paragraph>
      )}

      <div className="flex flex-col gap-6">
        {/* 미적용 (나쁜 예시) 영역 */}
        <WhiteCard.InnerBox variant="red">
          <h4 className="font-bold text-red-600 mb-4">X {badTitle}</h4>

          {/* 실제 들어갈 데모 컴포넌트 */}
          <div className="w-full">{badContent}</div>
        </WhiteCard.InnerBox>

        {/* 적용 (좋은 예시) 영역 */}
        <WhiteCard.InnerBox variant="green">
          <h4 className="font-bold text-green-700 mb-4">✓ {goodTitle}</h4>

          {/* 실제 들어갈 데모 컴포넌트 */}
          <div className="w-full">{goodContent}</div>
        </WhiteCard.InnerBox>
      </div>
    </WhiteCard>
  );
};
