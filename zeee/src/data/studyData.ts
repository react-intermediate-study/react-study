  export const titleMap: Record<string, string> = {
    srp: 'SRP (Single Responsibility Principle)',
    container: 'Container Pattern',
    compound: 'Compound Component',
  }

  export const contentMap = {
    srp: {
      demo: 'SRP 데모 내용입니다.',
      code: 'SRP 코드 비교 내용입니다.',
      guide: 'SRP 가이드 내용입니다.',
    },
    container: {
      demo: 'Container 데모 내용입니다.',
      code: 'Container 코드 비교 내용입니다.',
      guide: 'Container 가이드 내용입니다.',
    },
    compound: {
      demo: 'Compound 데모 내용입니다.',
      code: 'Compound 코드 비교 내용입니다.',
      guide: 'Compound 가이드 내용입니다.',
    },
  }
export const studyList = [
  {
    topic: 'srp',
    title: 'SRP',
    description: '하나의 컴포넌트가 하나의 책임만 가지도록 분리하는 원칙입니다.',
  },
  {
    topic: 'container',
    title: 'Container Pattern',
    description: '로직과 UI를 분리해서 컴포넌트 역할을 명확하게 나누는 패턴입니다.',
  },
  {
    topic: 'compound',
    title: 'Compound Component',
    description: '관련된 하위 컴포넌트를 함께 설계해 유연하게 조합하는 패턴입니다.',
  },
]
