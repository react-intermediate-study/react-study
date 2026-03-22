import type { ReactNode } from "react";

interface WhiteCardProps {
  children?: ReactNode;
  className?: string;
}
// Props에 hasBorder를 추가 (true/false)
interface InnerBoxProps {
  children?: ReactNode;
  className?: string;
  variant?: "gray" | "white" | "red" | "green";
  hasBorder?: boolean;
}

// 부모 컴포넌트
export const WhiteCardMain = ({ children, className = "" }: WhiteCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 shadow-sm p-8 ${className}`}
    >
      {children}
    </div>
  );
};

// 자식 컴포넌트들 (레고 조각)
const WhiteCardTitle = ({ children, className = "" }: WhiteCardProps) => (
  <h3 className={`text-lg font-bold text-gray-900 ${className}`}>{children}</h3>
);

const WhiteCardSubtitle = ({ children, className = "" }: WhiteCardProps) => (
  <h4
    className={`text-base font-semibold text-gray-700 mt-2 mb-3 ${className}`}
  >
    {children}
  </h4>
);

const WhiteCardParagraph = ({ children, className = "" }: WhiteCardProps) => (
  <div className={`text-sm text-gray-500 leading-relaxed ${className}`}>
    {children}
  </div>
);
const WhiteCardDivider = ({ className = "" }: { className?: string }) => (
  <hr className={`border-t border-gray-100 my-5 ${className}`} />
);

const WhiteCardInnerBox = ({
  children,
  className = "",
  variant = "gray",
  hasBorder = false, //아무것도 안 적으면 기본적으로 테두리가 생기지 않도록 설정
}: InnerBoxProps) => {
  const variantStyles = {
    // border-xxx 컬러는 테두리가 있을 때만 색이 보이므로 그냥 둬도 무방합니다.
    gray: "bg-gray-100 border-gray-200",
    white: "bg-white border-gray-200",
    red: "bg-red-50 border-red-200",
    green: "bg-green-50 border-green-200 ",
  };

  return (
    <div
      // hasBorder가 true일 때만 'border'라는 굵기 클래스가 들어가도록 삼항 연산자를 씁니다!
      className={`p-5 rounded-xl ${hasBorder ? "border" : ""} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export const WhiteCard = Object.assign(WhiteCardMain, {
  Title: WhiteCardTitle,
  Subtitle: WhiteCardSubtitle,
  Paragraph: WhiteCardParagraph,
  Divider: WhiteCardDivider,
  InnerBox: WhiteCardInnerBox,
});
