

export const HowToContainer = [
    "데이터 조회, 상태 관리, 이벤트 처리 등 비즈니스 로직은 Container 컴포넌트에서 담당하고, UI 렌더링은 Presentational 컴포넌트에서 담당하여 역할을 명확히 분리합니다.",
    "재사용 가능한 로직(커스텀 훅, 유틸 함수 등)은 Container 내부에 두지 않고 별도의 파일로 분리하여 여러 컴포넌트에서 재사용할 수 있도록 설계합니다.",
    "디자인 변경(UI)과 비즈니스 로직 변경(Data)의 수정 이유가 다르므로, 서로 다른 컴포넌트로 분리하여 유지보수성을 높입니다.",
  ];

export const ContainerExampleText = 
"Todo 생성 및 삭제 관련 로직은 TodoContainer.tsx 컴포넌트에서, UI는 TodoSection 컴포넌트에서 담당합니다."
