import React from 'react';

const DemoSection = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-6 w-full text-left">
        <div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            <p className="text-slate-500 text-sm mt-1">{description}</p>
        </div>
        {children}
    </div>
);


export function SRPDemo() {
    return (
        <DemoSection title="비교 체험"
            description="같은 UI를 SRP 위반/적용 두 가지 방식으로 구현한 예시입니다.">
            <div>
                SRP 내용
            </div>
        </DemoSection>

    );
}

export function ContainerDemo() {
    return (
        <DemoSection title="아코디언 비교"
            description="같은 아코디언 UI를 두 가지 방식으로 구현했습니다.">
            <div>
                Container 내용
            </div>
        </DemoSection>
    );
}

export function CompoundDemo() {
    return (
        <DemoSection title="인터랙티브 비교"
            description="두 버전 모두 동일하게 작동하지만, 내부 구조가 다릅니다.">
            <div>
                Compound 내용
            </div>
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