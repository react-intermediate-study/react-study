
export function SRPGuideContent() {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">SRP 적용 가이드</h2>
                <div>
                    <h3 className="font-bold text-slate-700 mb-4">언제 분리해야 할까요?</h3>
                    <ul className="space-y-3">
                        {[
                            '컴포넌트 코드가 100줄 이상으로 길어질 때',
                            '하나의 컴포넌트에서 여러 상태(State)를 동시에 관리할 때',
                            '비슷한 로직이 다른 곳에서도 필요할 것 같을 때',
                            '단일 컴포넌트에 대한 유닛 테스트 작성이 어려울 때'
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                <span className="text-blue-500 font-bold">{i + 1}.</span>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section>
                <h3 className="text-lg font-bold text-slate-800 mb-4">분리 대상</h3>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { title: '유틸리티 함수', desc: '날짜 포맷, 숫자 변환 등' },
                        { title: 'UI 원자 컴포넌트', desc: 'Avatar, Badge, Icon 등' },
                        { title: '커스텀 훅', desc: '데이터 fetching, 폼 로직' },
                        { title: '컨텍스트 / 상태 관리', desc: '전역 상태, 테마 등' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-100 shadow-sm p-5 rounded-xl hover:border-blue-200 transition-colors">
                            <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


function ContainerGuideContent() {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Container 패턴 구조</h2>
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { title: 'Custom Hook', color: 'bg-blue-500', desc: '상태 관리, API 호출, 비즈니스 로직을 담당합니다.' },
                        { title: 'Presentational', color: 'bg-emerald-500', desc: '순수하게 UI만 렌더링합니다. props만 받아 표시합니다.' },
                        { title: 'Container', color: 'bg-purple-500', desc: 'Hook과 UI를 연결하는 역할만 수행합니다.' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm relative overflow-hidden group hover:border-slate-200 transition-colors">
                            <div className="flex items-center gap-2 mb-3">
                                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                                <h4 className="font-extrabold text-slate-800 text-sm">{item.title}</h4>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-lg font-bold text-slate-800 mb-6">적용 시 체크리스트</h3>
                <div className="space-y-4 max-w-lg mx-auto">
                    {[
                        'Presentational 컴포넌트에 useState, useEffect가 없는가?',
                        'Custom Hook이 JSX를 반환하지 않는가?',
                        'Container가 최소한의 연결 역할만 수행하는가?',
                        '각 부분을 독립적으로 테스트할 수 있는가?'
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <p className="text-slate-600 text-sm font-medium">{text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


function CompoundGuideContent() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">Compound Component 구현 단계</h2>
                <div className="space-y-8">
                    {[
                        { step: 1, title: 'Context 생성', desc: '공유할 상태와 함수를 정의한 Context를 만듭니다.' },
                        { step: 2, title: 'Root 컴포넌트 구현', desc: 'Provider로 감싸고 상태 관리 로직을 담습니다.' },
                        { step: 3, title: '하위 컴포넌트 구현', desc: 'useContext로 상태를 받아 각자의 역할을 수행합니다.' },
                        { step: 4, title: '정적 프로퍼티로 연결', desc: 'Root.SubComponent 형태로 export합니다.' },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                {item.step}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pt-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">실제 사용 예시</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                        <h4 className="font-bold text-slate-700 text-sm mb-2">Radix UI</h4>
                        <p className="text-slate-400 text-xs">Dialog.Root, Dialog.Trigger, Dialog.Content</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                        <h4 className="font-bold text-slate-700 text-sm mb-2">Headless UI</h4>
                        <p className="text-slate-400 text-xs">Menu.Button, Menu.Items, Menu.Item</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function GuideContent({ id }: { id: number }) {
    switch (id) {
        case 1: return <SRPGuideContent />;
        case 2: return <ContainerGuideContent />;
        case 3: return <CompoundGuideContent />;
        default: return null;
    }
}

