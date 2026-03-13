

export const HowToCompound = [
    "루트 컴포넌트는 상태와 공통 레이아웃을 관리하고, 하위 컴포넌트는 UI 역할만 담당한다.",
    "서브 컴포넌트(Header, Title, Description, Footer 등)는 children 기반의 순수 UI 컴포넌트로 설계한다.",
    "부모-자식 간 데이터 공유가 필요할 경우 Context를 사용해 props drilling을 방지한다.",
    "컴포넌트 사용자는 필요한 조합만 선택해서 사용할 수 있도록 유연한 API를 제공한다.",
    "서브 컴포넌트는 루트 컴포넌트 내부에서만 사용하도록 네임스페이스 형태(ToastMessage.Header 등)로 묶는다.",
    "컴포넌트 간 역할을 명확히 분리하여 레이아웃, 상태, UI 표현 책임을 분리한다.",
    "Object.assign 또는 static property를 활용해 Compound API 형태로 export 한다.",
    "서브 컴포넌트는 상태 로직을 가지지 않는 순수 UI 컴포넌트로 유지해 재사용성과 테스트 용이성을 높인다.",
]