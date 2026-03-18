import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { TabKey } from '../../data/studyData'

type TabsContextValue = {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

interface RootProps {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
  children: ReactNode
}

function Root({ activeTab, onTabChange, children }: RootProps) {
  return (
    <TabsContext.Provider value={{ activeTab, onTabChange }}>
      {children}
    </TabsContext.Provider>
  )
}

interface ListProps {
  children: ReactNode
}

function List({ children }: ListProps) {
  return (
    <div className='mb-6'>
      <div className='inline-flex gap-2 rounded-xl border border-slate-200 bg-white p-1'>
        {children}
      </div>
    </div>
  )
}

interface TriggerProps {
  value: TabKey
  children: ReactNode
}

function Trigger({ value, children }: TriggerProps) {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('Tabs.Trigger must be used within Tabs.Root')
  }

  const isActive = context.activeTab === value

  return (
    <button
      type='button'
      onClick={() => context.onTabChange(value)}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
        isActive
          ? 'bg-blue-700 text-white'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      {children}
    </button>
  )
}

const Tabs = {
  Root,
  List,
  Trigger,
}

export default Tabs