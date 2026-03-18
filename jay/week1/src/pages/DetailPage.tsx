import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { PatternData } from '../constants/PatternData';
import TabMenu from '../components/TabMenu';
import DemoContent from '../components/pattern/DemoContent';
import CodeCompareContent from '../components/pattern/CodeCompareContent';
import GuideContent from '../components/pattern/GuideContent';

const ContentBox = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`p-10 bg-white rounded-2xl shadow-sm border border-gray-100 min-h-[400px] ${className}`}>
        {children}
    </div>
);


export default function DetailPage() {
    const { id } = useParams();
    const patternId = Number(id);
    const pattern = PatternData.find(p => p.id === patternId) || PatternData[0];

    return (
        <div className="w-full min-h-screen bg-slate-50">
            <Header
                title={pattern.title}
                description={pattern.description}
                showBackButton={true}
            />

            <main className="max-w-6xl mx-auto px-10 py-8">
                <TabMenu defaultValue="demo">
                    <TabMenu.List>
                        <TabMenu.Trigger value="demo">데모</TabMenu.Trigger>
                        <TabMenu.Trigger value="compare">코드 비교</TabMenu.Trigger>
                        <TabMenu.Trigger value="guide">가이드</TabMenu.Trigger>
                    </TabMenu.List>

                    <div className="mt-8">
                        <TabMenu.Content value="demo">
                            <ContentBox>
                                <DemoContent id={patternId} />
                            </ContentBox>
                        </TabMenu.Content>

                        <TabMenu.Content value="compare">
                            <ContentBox>
                                <CodeCompareContent before={pattern.before} after={pattern.after} />
                            </ContentBox>
                        </TabMenu.Content>


                        <TabMenu.Content value="guide">
                            <ContentBox>
                                <GuideContent id={patternId} />
                            </ContentBox>
                        </TabMenu.Content>
                    </div>
                </TabMenu>
            </main>
        </div>
    );
}