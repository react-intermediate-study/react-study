import { GrCube } from "react-icons/gr";
import { IoLayersOutline } from "react-icons/io5";
import { FiLayout } from "react-icons/fi";
import HomeView from "./HomeView";
import { useNavigate } from "react-router-dom";

export default function HomeContainer() {
  const navigate = useNavigate();
  const patternsData = [
    {
      id: "srp",
      title: "SRP(단일 책임 원칙)",
      description:
        "하나의 컴포넌트가 하나의 역할만 수행하도록 분히라는 패턴을 실습합니다.",
      icon: <IoLayersOutline />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      tags: ["리팩토링", "유지보수", "테스트"],
    },
    {
      id: "container",
      title: "Container 패턴",
      description:
        "로직과 UI를 분리하여 Container와 Presentaitional 컴포넌트로 나누는 패턴입니다.",
      icon: <GrCube />,
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
      tags: ["로직분리", "재사용성", "테스트"],
    },
    {
      id: "Compound",
      title: "Compound Component",
      description:
        "부모-자식 관계에서 암묵적으로 상태를 공유한늨 유연한 컴포넌트 패턴입니다.",
      icon: <FiLayout />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      tags: ["context", "합성", "유연성"],
    },
  ];

  const importanceData = [
    {
      id: "maintenance",
      title: "유지보수성",
      description:
        "역할이 명확히 분리된 텀포넌트는 버그 수정과 기능 추가가 쉬워집니다.",
    },
    {
      id: "reusability",
      title: "재사용성",
      description:
        "잘 성계된 패턴은 다른 프로젝트에서도 쉽게 재사용할 수 있습니다.",
    },
    {
      id: "testability",
      title: "테스트 용이성",
      description: "로직과 UI가 분리되면 단위 테스트 작성이 훨씬 간단해집니다.",
    },
  ];
  const handleDemoClick = (patternId: string) => {
    navigate(`/${patternId}`);
  };

  return (
    <HomeView
      patterns={patternsData}
      importances={importanceData}
      onDemoClick={handleDemoClick}
    />
  );
}
