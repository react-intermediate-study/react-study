export interface CodeBlock {
    label: string;
    code: string;
}

export interface Pattern {
    id: number;
    title: string;
    description: string;
    before: CodeBlock;
    after: CodeBlock;
}

export const PatternData: Pattern[] = [
    {
        id: 1,
        title: "SRP (단일 책임 원칙)",
        description: "Single Responsibility Principle - 하나의 컴포넌트 하나의 역할만 수행해야 합니다.",
        before: {
            label: "SRP 위반 (로직+UI 혼합)",
            code: `function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser().then(data => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`
        },
        after: {
            label: "SRP 적용 (역할 분리)",
            code: `// 비즈니스 로직 담당
function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser().then(data => setUser(data));
  }, []);
  return { user };
}

// UI 담당
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`
        }
    },
    {
        id: 2,
        title: "Container 패턴",
        description: "로직(Container/Hook)과 UI(Presentational)를 분리하여 가독성과 재사용성을 높입니다.",
        before: {
            label: "데이터와 UI가 결합된 형태",
            code: `function TodoList() {
  const [items, setItems] = useState([]);
  const addItem = (text) => { ... };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
      <input onEnter={addItem} />
    </ul>
  );
}`
        },
        after: {
            label: "Container/Presentational 분리",
            code: `// Container: 데이터 로직 관리
function TodoContainer() {
  const [items, setItems] = useState([]);
  return <TodoUI items={items} onAdd={...} />;
}

// Presentational: 오직 보여지는 것만 담당
function TodoUI({ items, onAdd }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}`
        }
    },
    {
        id: 3,
        title: "Compound Component",
        description: "Context를 활용해 부모-자식 간 상태를 공유하여 유연한 UI 구조를 만듭니다.",
        before: {
            label: "Props Drilling 혹은 거대 Props",
            code: `<Accordion 
  items={data} 
  allowMultiple={true}
  onToggle={...}
  renderItem={(item) => (
    <div className="custom">{item.title}</div>
  )}
/>`
        },
        after: {
            label: "Compound 패턴으로 유연한 조합",
            code: `<Accordion defaultValue="item-1">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>질문 1</Accordion.Trigger>
    <Accordion.Content>답변 내용 1</Accordion.Content>
  </Accordion.Item>
</Accordion>`
        }
    }
];
