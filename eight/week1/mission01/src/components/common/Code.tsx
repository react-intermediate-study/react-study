import React, { type ReactNode } from "react";
import { WhiteCard } from "./WhiteCard"; // 만들어둔 WhiteCard 불러오기

interface CodeProps {
  badTitle: string;
  badContent: ReactNode;
  goodTitle: string;
  goodContent: ReactNode;
}

export const Code = ({
  badTitle,
  badContent,
  goodTitle,
  goodContent,
}: CodeProps) => {
  return (
    // 1. 그리드로 반반 나누기
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 2. 왼쪽: 미적용 (빨간색 테마 캡슐화) */}
      <WhiteCard className=" bg-red-50/30">
        <WhiteCard.Title className="mb-4 gap-3">❌ {badTitle}</WhiteCard.Title>
        <WhiteCard.InnerBox>
          <div>
            <p>{badContent}</p>
          </div>
        </WhiteCard.InnerBox>
      </WhiteCard>

      {/* 3. 오른쪽: 적용 (초록색 테마 캡슐화) */}
      <WhiteCard className=" bg-green-50/30">
        <WhiteCard.Title className=" mb-4">✓ {goodTitle}</WhiteCard.Title>
        <WhiteCard.InnerBox>
          <div>
            <p>{goodContent}</p>
          </div>
        </WhiteCard.InnerBox>
      </WhiteCard>
    </div>
  );
};
