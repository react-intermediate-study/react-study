import { createContext, useContext, useState } from 'react';

const TabsContext = createContext<{
    activeTab: string;
    setActiveTab: (value: string) => void;
} | null>(null);

function useTabsContext() {
    const ctx = useContext(TabsContext);
    if (!ctx) throw new Error('TabsContext.Provider 안에서만 사용 가능합니다');
    return ctx;
}

// Root : 상태를 생성하고 하위 컴포넌트에 공유하는 역할(상태 관리자)
function Tabs({ children, defaultValue }: {
    children: React.ReactNode;
    defaultValue: string
}) {
    const [activeTab, setActiveTab] = useState(defaultValue);
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
}

// TabMenu의 탭 버튼 묶음
Tabs.List = function TabsList({ children }: { children: React.ReactNode }) {
    return (
        <nav className="flex items-center gap-1 p-1 bg-gray-100/50 rounded-xl w-fit">
            {children}
        </nav>
    );
};

// TabMenu의 버튼 : 탭을 바꾸는 버튼
Tabs.Trigger = function Tab({ value, children }: {
    value: string;
    children: React.ReactNode
}) {
    const { activeTab, setActiveTab } = useTabsContext();
    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`
                px-4 py-2 text-sm font-semibold rounded-lg transition-all
                ${activeTab === value
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }
            `}
        >
            {children}
        </button>
    );
};

// 탭 내용 표시 영역
Tabs.Content = function TabsContent({ value, children }: {
    value: string;
    children: React.ReactNode
}) {
    const { activeTab } = useTabsContext();
    if (activeTab !== value) return null;
    return <div>{children}</div>;
};

export default Tabs;