import type { ReactNode } from 'react'

export type Topic = 'srp' | 'container' | 'compound'
export type TabKey = 'demo' | 'code' | 'guide'

export const studyList = [
  {
    topic: 'srp' as Topic,
    title: 'SRP',
    description: '하나의 컴포넌트가 하나의 책임만 가지도록 분리하는 원칙을 학습합니다.',
    tags: ['React', '책임 분리', '유지보수'],
  },
  {
    topic: 'container' as Topic,
    title: 'Container Pattern',
    description: '로직과 UI를 분리해 컴포넌트를 더 명확하게 구성하는 패턴을 살펴봅니다.',
    tags: ['로직 분리', '상태 관리', '재사용'],
  },
  {
    topic: 'compound' as Topic,
    title: 'Compound Component',
    description: '관련된 하위 컴포넌트를 조합해 유연한 UI를 만드는 방식을 이해합니다.',
    tags: ['Context', '조합', '유연성'],
  },
]

export const titleMap: Record<Topic, string> = {
  srp: 'SRP',
  container: 'Container Pattern',
  compound: 'Compound Component',
}

export const descriptionMap: Record<Topic, string> = {
  srp: '하나의 컴포넌트가 하나의 책임만 가지도록 분리하는 방법과 구현 흐름을 학습합니다.',
  container:
    '상태와 로직을 UI로부터 분리해 컴포넌트를 더 읽기 쉽고 재사용 가능하게 만드는 패턴입니다.',
  compound:
    '관련된 컴포넌트를 함께 조합해 유연한 구조를 만드는 방식을 이해하고, 여러 UI 예시로 특징을 살펴봅니다.',
}

export const contentMap: Record<Topic, Record<TabKey, ReactNode>> = {
  srp: {
    demo: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">SRP란?</h3>
          <p className="mt-2 text-slate-700 leading-7">
            SRP(Single Responsibility Principle)는 하나의 컴포넌트가 하나의 책임만
            가지도록 설계하는 원칙입니다. 화면 출력, 상태 변경, 데이터 처리처럼 서로
            다른 역할이 한 컴포넌트 안에 섞이면 수정 범위가 커지고 재사용이 어려워집니다.
          </p>
        </section>

        <section>
          <h4 className="text-base font-semibold text-slate-900">SRP를 적용하는 이유</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
            <li>컴포넌트의 역할이 명확해집니다.</li>
            <li>수정 시 영향을 받는 범위를 줄일 수 있습니다.</li>
            <li>테스트와 재사용이 쉬워집니다.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="text-base font-semibold text-slate-900">구현 방법</h4>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-slate-700 leading-7">
            <li>현재 컴포넌트가 어떤 역할을 하고 있는지 먼저 나눠서 봅니다.</li>
            <li>UI 렌더링과 상태/이벤트 처리 로직을 구분합니다.</li>
            <li>반복되거나 독립적인 부분은 별도 컴포넌트로 분리합니다.</li>
            <li>부모는 조합만 하고, 자식은 각자의 책임만 가지도록 정리합니다.</li>
          </ol>
        </section>
      </div>
    ),

    code: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">SRP 로직 설명과 구현 비교</h3>
          <p className="mt-2 text-slate-700 leading-7">
            SRP를 적용하지 않으면 하나의 컴포넌트가 데이터 요청, 상태 관리, UI 렌더링을
            모두 맡게 됩니다. 반대로 SRP를 적용하면 로직과 화면을 역할별로 나눌 수 있습니다.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-rose-200 bg-rose-50 p-4">
            <h4 className="text-base font-semibold text-rose-700">나쁜 예시</h4>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
              <code>{`function UserProfile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser().then(setUser)
  }, [])

  return (
    <div>
      <h2>{user?.name}</h2>
      <button onClick={() => alert('edit')}>수정</button>
    </div>
  )
}`}</code>
            </pre>
            <p className="mt-3 text-slate-700 leading-7">
              하나의 컴포넌트가 데이터 요청, 상태 관리, 버튼 동작, 화면 출력까지 모두 담당하고
              있어서 책임이 과하게 모여 있습니다.
            </p>
          </section>

          <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <h4 className="text-base font-semibold text-emerald-700">좋은 예시</h4>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
              <code>{`function UserProfileContainer() {
  const user = useUser()

  const handleEdit = () => {
    alert('edit')
  }

  return <UserProfileView user={user} onEdit={handleEdit} />
}

function UserProfileView({ user, onEdit }) {
  return (
    <div>
      <h2>{user?.name}</h2>
      <button onClick={onEdit}>수정</button>
    </div>
  )
}`}</code>
            </pre>
            <p className="mt-3 text-slate-700 leading-7">
              상태와 동작은 컨테이너 쪽으로, 화면 렌더링은 뷰 컴포넌트로 분리되어 역할이
              더 명확해졌습니다.
            </p>
          </section>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-4">
          <h4 className="text-base font-semibold text-slate-900">구현 포인트 정리</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
            <li>데이터를 가져오는 부분과 보여주는 부분을 나눕니다.</li>
            <li>이벤트 핸들러는 가능하면 로직 쪽에서 관리합니다.</li>
            <li>UI 컴포넌트는 props를 받아 출력에 집중하도록 만듭니다.</li>
          </ul>
        </section>
      </div>
    ),

    guide: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">언제 사용하나요?</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
            <li>컴포넌트가 너무 커져서 읽기 어려울 때</li>
            <li>한 파일 안에 상태, 이벤트, UI가 모두 섞여 있을 때</li>
            <li>기능을 수정할 때 여러 부분이 동시에 흔들릴 때</li>
          </ul>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-base font-semibold text-slate-900">장점</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
              <li>가독성이 좋아집니다.</li>
              <li>유지보수가 쉬워집니다.</li>
              <li>역할별 테스트가 쉬워집니다.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-base font-semibold text-slate-900">주의할 점</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
              <li>무조건 잘게 나누기보다 책임 기준이 분명할 때 분리해야 합니다.</li>
              <li>너무 작은 단위로 쪼개면 오히려 구조가 복잡해질 수 있습니다.</li>
            </ul>
          </div>
        </section>
      </div>
    ),
  },

  container: {
    demo: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">Container Pattern이란?</h3>
          <p className="mt-2 text-slate-700 leading-7">
            Container Pattern은 로직과 UI를 분리하는 패턴입니다. Container는 상태,
            이벤트 처리, 데이터 가공 같은 역할을 맡고, Presentational 컴포넌트는 화면을
            출력하는 역할에 집중합니다.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <h4 className="text-base font-semibold text-blue-700">Container 역할</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
              <li>상태 관리</li>
              <li>이벤트 핸들링</li>
              <li>데이터 가공 및 전달</li>
            </ul>
          </div>

          <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
            <h4 className="text-base font-semibold text-violet-700">Presentational 역할</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
              <li>UI 렌더링</li>
              <li>props 기반 출력</li>
              <li>재사용 가능한 화면 구성</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="text-base font-semibold text-slate-900">사용 예시 UI</h4>
          <p className="mt-2 text-slate-700 leading-7">
            검색창, 필터, 정렬 같은 로직은 Container가 관리하고, 실제 목록 카드 UI는
            Presentational 컴포넌트가 렌더링하는 방식으로 자주 사용됩니다.
          </p>
        </section>
      </div>
    ),

    code: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">사용 예시 코드</h3>
          <p className="mt-2 text-slate-700 leading-7">
            API를 사용하지 않아도 Container Pattern은 충분히 설명할 수 있습니다.
            아래 예시는 로컬 상태만으로 입력값을 관리하고, UI는 별도 컴포넌트에 전달하는 구조입니다.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <h4 className="text-base font-semibold text-blue-700">Container</h4>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
              <code>{`function SearchContainer() {
  const [keyword, setKeyword] = useState('')

  return (
    <SearchView
      keyword={keyword}
      onChangeKeyword={setKeyword}
    />
  )
}`}</code>
            </pre>
            <p className="mt-3 text-slate-700 leading-7">
              입력 상태를 직접 관리하고, 변경 함수를 UI 컴포넌트에 전달합니다.
            </p>
          </section>

          <section className="rounded-xl border border-violet-200 bg-violet-50 p-4">
            <h4 className="text-base font-semibold text-violet-700">Presentational</h4>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
              <code>{`function SearchView({ keyword, onChangeKeyword }) {
  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => onChangeKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <p>현재 검색어: {keyword}</p>
    </div>
  )
}`}</code>
            </pre>
            <p className="mt-3 text-slate-700 leading-7">
              UI는 전달받은 값과 함수를 이용해 화면만 출력하므로 재사용성이 높아집니다.
            </p>
          </section>
        </div>
      </div>
    ),

    guide: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">언제 사용하나요?</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
            <li>상태와 이벤트 처리 로직이 길어질 때</li>
            <li>같은 UI를 다른 데이터와 함께 재사용하고 싶을 때</li>
            <li>로직과 화면이 한 컴포넌트에 섞여 복잡해질 때</li>
          </ul>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-base font-semibold text-slate-900">장점</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
              <li>역할 분리가 명확합니다.</li>
              <li>UI 컴포넌트를 재사용하기 쉽습니다.</li>
              <li>테스트와 유지보수가 쉬워집니다.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-base font-semibold text-slate-900">주의할 점</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
              <li>간단한 UI까지 무조건 분리하면 구조가 과해질 수 있습니다.</li>
              <li>React Hooks 기반 구조에서는 Custom Hook과 함께 비교해보는 것이 좋습니다.</li>
            </ul>
          </div>
        </section>
      </div>
    ),
  },

  compound: {
    demo: (
      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">Compound Component란?</h3>
          <p className="mt-2 text-slate-700 leading-7">
            Compound Component는 여러 하위 컴포넌트가 하나의 부모 컴포넌트 아래에서 함께
            동작하도록 만드는 패턴입니다. 부모는 상태를 관리하고, 자식은 공유된 상태를
            바탕으로 유기적으로 동작합니다.
          </p>
        </section>

        <section>
          <h4 className="text-base font-semibold text-slate-900">특징</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
            <li>관련된 하위 컴포넌트를 함께 조합할 수 있습니다.</li>
            <li>부모 상태를 자식이 공유하면서 동작합니다.</li>
            <li>사용자 입장에서 더 자연스러운 JSX 구조를 만들 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-base font-semibold text-slate-900">UI 예시 1: Tabs</h4>
          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
            <div className="inline-flex gap-2 rounded-lg bg-slate-100 p-1">
              <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                소개
              </button>
              <button className="rounded-md px-4 py-2 text-sm font-medium text-slate-600">
                코드
              </button>
              <button className="rounded-md px-4 py-2 text-sm font-medium text-slate-600">
                가이드
              </button>
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700">
              현재 선택된 탭에 해당하는 콘텐츠가 이 영역에 표시됩니다.
            </div>
          </div>
          <p className="mt-3 text-slate-700 leading-7">
            <span className="font-medium text-slate-900">Tabs</span>는{' '}
            <span className="font-medium">Tabs.List</span>,{' '}
            <span className="font-medium">Tabs.Trigger</span>,{' '}
            <span className="font-medium">Tabs.Content</span>처럼 여러 하위 컴포넌트가 함께
            동작하는 대표적인 Compound Component 예시입니다.
          </p>
        </section>

        <section>
          <h4 className="text-base font-semibold text-slate-900">UI 예시 2: Accordion</h4>
          <div className="mt-3 space-y-3 rounded-xl border border-slate-200 bg-white p-4">
            <div className="rounded-lg border border-slate-200">
              <button className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-900">
                <span>Compound Component는 언제 사용하나요?</span>
                <span>−</span>
              </button>
              <div className="border-t border-slate-200 px-4 py-3 text-slate-700">
                여러 하위 컴포넌트가 함께 동작해야 하고, 상태를 자연스럽게 공유해야 하는 UI에
                적합합니다.
              </div>
            </div>

            <div className="rounded-lg border border-slate-200">
              <button className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-900">
                <span>어떤 컴포넌트에 자주 쓰이나요?</span>
                <span>+</span>
              </button>
            </div>
          </div>
          <p className="mt-3 text-slate-700 leading-7">
            <span className="font-medium text-slate-900">Accordion</span>도{' '}
            <span className="font-medium">Accordion.Item</span>,{' '}
            <span className="font-medium">Accordion.Trigger</span>,{' '}
            <span className="font-medium">Accordion.Content</span>처럼 조합 구조를 가지기 때문에
            Compound Component의 특징을 잘 보여줍니다.
          </p>
        </section>
      </div>
    ),

    code: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">사용 예시 코드</h3>
          <p className="mt-2 text-slate-700 leading-7">
            Compound Component는 부모 컴포넌트가 상태를 관리하고, 하위 컴포넌트가 Context
            등을 통해 상태를 공유하면서 동작합니다. 아래는 Tabs를 예시로 단순화한 구조입니다.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4">
          <h4 className="text-base font-semibold text-slate-900">Tabs 구조 예시</h4>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{`function Tabs({ children }) {
  const [active, setActive] = useState(0)

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  )
}

Tabs.List = function List({ children }) {
  return <div>{children}</div>
}

Tabs.Trigger = function Trigger({ index, children }) {
  const { active, setActive } = useContext(TabsContext)

  return (
    <button onClick={() => setActive(index)}>
      {children}
    </button>
  )
}

Tabs.Content = function Content({ index, children }) {
  const { active } = useContext(TabsContext)
  return active === index ? <div>{children}</div> : null
}`}</code>
          </pre>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="text-base font-semibold text-slate-900">사용 방식</h4>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{`<Tabs>
  <Tabs.List>
    <Tabs.Trigger index={0}>소개</Tabs.Trigger>
    <Tabs.Trigger index={1}>코드</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content index={0}>소개 내용</Tabs.Content>
  <Tabs.Content index={1}>코드 내용</Tabs.Content>
</Tabs>`}</code>
          </pre>
        </section>
      </div>
    ),

    guide: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-slate-900">언제 사용하나요?</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
            <li>여러 하위 컴포넌트가 함께 동작해야 할 때</li>
            <li>복잡한 UI를 유연하게 조합할 수 있도록 만들고 싶을 때</li>
            <li>자연스러운 JSX API를 제공하고 싶을 때</li>
          </ul>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-base font-semibold text-slate-900">장점</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
              <li>유연한 컴포넌트 API를 만들 수 있습니다.</li>
              <li>자연스러운 JSX 구조를 설계할 수 있습니다.</li>
              <li>관련 컴포넌트끼리 상태를 쉽게 공유할 수 있습니다.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-base font-semibold text-slate-900">주의할 점</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 leading-7">
              <li>Context와 조합 구조를 이해해야 합니다.</li>
              <li>작고 단순한 UI에는 오히려 과한 패턴이 될 수 있습니다.</li>
            </ul>
          </div>
        </section>
      </div>
    ),
  },
}
export const valueList = [
  {
    title: '책임 분리',
    description:
      '하나의 컴포넌트가 하나의 역할만 맡도록 나누는 기준을 이해할 수 있습니다.',
  },
  {
    title: '로직과 UI 분리',
    description:
      '상태와 이벤트 처리 로직을 화면으로부터 분리해 더 명확한 구조를 설계할 수 있습니다.',
  },
  {
    title: '유연한 조합',
    description:
      '관련된 컴포넌트를 함께 조합해 확장 가능하고 자연스러운 UI 구조를 만들 수 있습니다.',
  },
]