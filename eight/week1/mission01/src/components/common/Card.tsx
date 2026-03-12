import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

// 부모 컴포넌트
const CardMain = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`flex flex-col p-6 bg-white border-gray-200 rounded-2xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

// 자식 컴포넌트들 (레고 조각)
const CardIcon = ({ children, className = "" }: CardProps) => (
  <div
    className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${className}`}
  >
    {children}
  </div>
);

const CardTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-bold text-gray-900 mb-2">{children}</h3>
);

const CardDescription = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-gray-500 leading-relaxed mb-6">{children}</p>
);

const CardTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {tags.map((tag, idx) => (
      <span
        key={idx}
        className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
      >
        {tag}
      </span>
    ))}
  </div>
);

const CardButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mt-auto"
  >
    {children}
  </button>
);

export const Card = Object.assign(CardMain, {
  Icon: CardIcon,
  Title: CardTitle,
  Description: CardDescription,
  Tags: CardTags,
  Button: CardButton,
});
