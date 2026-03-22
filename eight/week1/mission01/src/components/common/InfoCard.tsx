import React, { type ReactNode } from "react";
import { WhiteCard } from "./WhiteCard";

interface InfoCardProps {
  title: string;
  description: ReactNode;
}

export const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <WhiteCard className="p-6 mt-6">
      <div className="flex items-center gap-2 mb-2">
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>

      {/* 2. 설명 텍스트 영역 */}
      <WhiteCard.Paragraph className="text-gray-600 pl-7">
        {description}
      </WhiteCard.Paragraph>
    </WhiteCard>
  );
};
