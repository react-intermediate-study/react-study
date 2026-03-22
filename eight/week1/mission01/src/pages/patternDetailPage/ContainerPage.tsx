import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PatternDetailLayout, type TabType } from "./PatternDetailLayout";
import { Code } from "../../components/common/Code";
import { Demo } from "../../components/common/Demo";
import { InfoCard } from "../../components/common/InfoCard";
import { WhiteCard } from "../../components/common/WhiteCard";
import { ContainerBadContent } from "../../components/ContainerBadContent";
import { ContainerGoodContent } from "../../components/ContainerGoodContent";

export default function ContainerPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabType>("demo");

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <PatternDetailLayout
      title="Container 패턴"
      description="로직(Container/Hook)과 UI(Presentational)를 분리하여 각각의 역할을 명확히 합니다."
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onBack={handleBack}
    >
      {activeTab === "demo" && (
        <div className="flex flex-col">
          <Demo
            title="인터랙티브 비교"
            description="두 버전 모두 동일하게 작동하지만, 내부 구조가 다릅니다."
            badTitle="Container 패턴 미적용"
            badContent={<ContainerBadContent />}
            goodTitle="Container 패턴 적용"
            goodContent={<ContainerGoodContent />}
          />
          <InfoCard
            title="Container 패턴의 이점"
            description="로직을 Custom Hook으로 분리하면 테스트가 쉬워지고, Presentational 컴포넌트는 Storybook 등에서 다양한 상태로 독립적으로 테스트할 수 있습니다. 또한 같은 로직을 다른 UI에 재사용할 수 있습니다."
          />
        </div>
      )}

      {activeTab === "code" && (
        <Code
          badTitle="Container 패턴 미적용"
          badContent={
            <pre className="leading-relaxed overflow-x-auto pb-4">
              <code>{`// 패턴 미적용: 상태, 비즈니스 로직, UI가 한 컴포넌트에 강하게 결합됨
function TodoApp() {
  // 1. 상태 관리
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  // 2. 비즈니스 로직
  const handleAdd = () => {
    if (!inputText.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputText }]);
    setInputText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 3. UI 렌더링 (로직이 섞여 있어 이 UI만 따로 테스트하기 어려움)
  return (
    <div className="todo-app">
      <div className="input-group">
        <input 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
        />
        <button onClick={handleAdd}>추가</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}</code>
            </pre>
          }
          goodTitle="Container 패턴 적용"
          goodContent={
            <pre className="leading-relaxed overflow-x-auto pb-4">
              <code>{`// 패턴 적용: 로직(Hook), 순수 UI(Presentational), 연결(Container) 분리

// 1. Custom Hook (로직만 담당, UI 없음)
function useTodos() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => { /* 추가 로직 */ };
  const handleDelete = (id) => { /* 삭제 로직 */ };

  return { todos, inputText, setInputText, handleAdd, handleDelete };
}

// 2. Presentational (UI만 담당, 상태 없음)
// 상태를 모르기 때문에 Storybook 등에서 독립적으로 테스트하기 아주 좋습니다!
const TodoListUI = ({ todos, inputText, onInputChange, onAdd, onDelete }) => (
  <div className="todo-app">
    <div className="input-group">
      <input value={inputText} onChange={(e) => onInputChange(e.target.value)} />
      <button onClick={onAdd}>추가</button>
    </div>
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  </div>
);

// 3. Container (데이터와 UI를 연결만 해줌)
function TodoApp() {
  const todoLogic = useTodos();
  return (
    <TodoListUI 
      todos={todoLogic.todos}
      inputText={todoLogic.inputText}
      onInputChange={todoLogic.setInputText}
      onAdd={todoLogic.handleAdd}
      onDelete={todoLogic.handleDelete}
    />
  );
}`}</code>
            </pre>
          }
        />
      )}

      {activeTab === "guide" && (
        <WhiteCard>
          <WhiteCard.Title className="mb-6">
            Container 패턴 구조
          </WhiteCard.Title>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <WhiteCard.InnerBox variant="white" className="p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-gray-900 text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>{" "}
                Custom Hook
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                상태 관리, API 호출, 비즈니스 로직을 담당합니다.
              </div>
            </WhiteCard.InnerBox>

            <WhiteCard.InnerBox variant="white" className="p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-gray-900 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>{" "}
                Presentational
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                순수하게 UI만 렌더링합니다. props만 받아 표시합니다.
              </div>
            </WhiteCard.InnerBox>

            <WhiteCard.InnerBox variant="white" className="p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-gray-900 text-sm">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>{" "}
                Container
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                Hook과 UI를 연결하는 역할만 합니다.
              </div>
            </WhiteCard.InnerBox>
          </div>

          <WhiteCard.Divider />

          <h4 className="font-bold text-gray-900 mb-4 mt-2">
            적용 시 체크리스트
          </h4>

          <WhiteCard.Paragraph>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Presentational 컴포넌트에 useState, useEffect가 없는가?
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Custom Hook이 JSX를 반환하지 않는가?
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Container가 최소한의 연결 역할만 하는가?
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                각 부분을 독립적으로 테스트할 수 있는가?
              </li>
            </ul>
          </WhiteCard.Paragraph>
        </WhiteCard>
      )}
    </PatternDetailLayout>
  );
}
