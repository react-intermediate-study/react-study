interface DetailTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function DetailTabs({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    activeTab,
  onTabChange,
}: DetailTabsProps) {
  return (
    <div>
      <button onClick={() => onTabChange('demo')}>Demo</button>
      <span> / </span>
      <button onClick={() => onTabChange('code')}>Code Compare</button>
            <span> / </span>

      <button onClick={() => onTabChange('guide')}>Guide</button>
    </div>
  )
}