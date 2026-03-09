import { Box, Layers, PanelsTopLeft } from "lucide-react";

export const PatternList = [
    {
    title: "SRP (단일 책임 원칙)",
    description: "하나의 컴포넌트가 하나의 역할만 수행하도록 분리하는 원칙입니다.",
    link: "/srp",
    icon: Layers,
    color: "bg-blue-200 text-sky-600",
    tags: ["리팩토링", "유지보수", "테스트"],
  },
  {
    title: "Container 패턴",
    description: "로직과 UI를 분리하여 Container와 Presentational 컴포넌트로 나누는 패턴입니다.",
    link: "/container",
    icon: Box,
    color: "bg-green-200 text-green-400",
    tags: ["로직 분리", "재사용성", "테스트"],
  },
  {
    title: "Compound Component",
    description: "부모-자식 관계에서 암묵적으로 상태를 공유하는 유연한 컴포넌트 패턴입니다.",
    link: "/compound",
    icon: PanelsTopLeft,
    color: "bg-violet-200 text-violet-600",
    tags: ["Context", "합성", "유연성"],
  },
]   