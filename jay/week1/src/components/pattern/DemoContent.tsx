import React from 'react';
import Accordion from '../Accordion';


const DemoSection = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-6 w-full text-left">
        <div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            <p className="text-slate-500 text-sm mt-1">{description}</p>
        </div>
        {children}
    </div>
);

const CompareBox = ({ isApplied, label, children, footer }: { isApplied: boolean; label: string; children: React.ReactNode; footer?: string }) => (
    <div className={`border rounded-2xl p-6 ${isApplied ? 'border-emerald-100 bg-emerald-50/20' : 'border-rose-100 bg-rose-50/20'}`}>
        <span className={`font-bold text-xs mb-4 block ${isApplied ? 'text-emerald-600' : 'text-rose-500'}`}>
            {isApplied ? '✓' : '✕'} {label}
        </span>
        <div>
            {children}
        </div>
        {footer && <p className="text-[11px] mt-3 text-slate-400 font-medium">{footer}</p>}
    </div>
);


export function SRPDemo() {
    const UserProfile = () => (
        <div className="flex items-center gap-4">
            <div className="text-sm text-slate-800 text-base">SRP 예시</div>
        </div>
    );

    return (
        <DemoSection title="비교 체험" description="같은 UI를 SRP 위반/적용 두 가지 방식으로 구현한 예시입니다.">
            <CompareBox isApplied={false} label="SRP 위반 예시">
                <UserProfile />
            </CompareBox>
            <CompareBox isApplied={true} label="SRP 적용 예시">
                <UserProfile />
            </CompareBox>
        </DemoSection>
    );
}

export function ContainerDemo() {
    const TodoUI = () => (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <input disabled placeholder="할 일 추가" className="flex-1 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-sm" />
                <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-sm">+</button>
            </div>
            <div className="flex items-center justify-between p-3 border border-slate-50 rounded-lg">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-slate-200 rounded" />
                    <span className="text-sm text-slate-600">리액트 공부하기</span>
                </div>
                <button className="text-slate-500 text-xs">삭제</button>
            </div>
            <div className="flex items-center justify-between p-3 border border-slate-50 rounded-lg bg-blue-50/20">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-slate-200 rounded flex items-center justify-center text-[10px] text-white">✓</div>
                    <span className="text-sm text-slate-600">프로젝트 완성하기</span>
                </div>
                <button className="text-slate-500 text-xs">삭제</button>
            </div>
        </div>
    );

    return (
        <DemoSection title="인터랙티브 비교" description="두 버전 모두 동일하게 작동하지만, 내부 구조가 다릅니다.">
            <CompareBox isApplied={false} label="Container 패턴 미적용">
                <TodoUI />
            </CompareBox>
            <CompareBox isApplied={true} label="Container 패턴 적용">
                <TodoUI />
            </CompareBox>
        </DemoSection>
    );
}


export function CompoundDemo() {
    return (
        <DemoSection title="아코디언 비교" description="같은 아코디언 UI를 두 가지 방식으로 구현했습니다.">
            <CompareBox
                isApplied={false}
                label="Compound 패턴 미적용"
                footer="문제점: 내부 상태 관리가 되지 않고, 마크업 구조가 고정되어 유연성이 떨어짐"
            >
                <div className="rounded-xl border border-slate-100 bg-white divide-y divide-slate-50">
                    <div className="flex justify-between items-center py-4 px-5">
                        <span className="text-sm font-medium text-slate-700">Compound Component란?</span>
                        <span className="text-slate-400 text-[10px]">▼</span>
                    </div>
                    <div className="flex justify-between items-center py-4 px-5">
                        <span className="text-sm font-medium text-slate-700">언제 사용하나요?</span>
                        <span className="text-slate-400 text-[10px]">▼</span>
                    </div>
                </div>
            </CompareBox>

            <CompareBox
                isApplied={true}
                label="Compound 패턴 적용"
                footer="장점: 상태를 내부에서 공유하며, 사용자가 마크업을 자유롭게 조립할 수 있음"
            >
                <Accordion defaultValue="item-1">
                    <Accordion.Item value="item-1">
                        <Accordion.Trigger>Compound Component란?</Accordion.Trigger>
                        <Accordion.Content>
                            부모-자식 관계에서 Context를 통해 암묵적으로 상태를 공유하는 패턴입니다.
                            사용자는 내부 구현을 몰라도 직관적으로 조합할 수 있습니다.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="item-2">
                        <Accordion.Trigger>언제 사용하나요?</Accordion.Trigger>
                        <Accordion.Content>
                            Tabs, Accordion, Modal, Select처럼 여러 하위 컴포넌트가 하나의 상태를 공유해야 할 때 사용합니다.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="item-3">
                        <Accordion.Trigger>장점은 무엇인가요?</Accordion.Trigger>
                        <Accordion.Content>
                            하위 컴포넌트를 선언적으로 조합할 수 있고, props drilling을 줄이면서 유연한 마크업 구성이 가능합니다.
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </CompareBox>
        </DemoSection>
    );
}


export default function DemoContent({ id }: { id: number }) {
    switch (id) {
        case 1: return <SRPDemo />;
        case 2: return <ContainerDemo />;
        case 3: return <CompoundDemo />;
        default: return <div className="text-center py-20 text-slate-400">데모를 찾을 수 없습니다.</div>;
    }
}