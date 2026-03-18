export default function FeatureList() {
    return (
        <section className="w-full relative pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-6 px-2">왜 이 패턴들이 중요한가요?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-2">
                {/* 1. 유지보수성 */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3 text-lg">유지보수성</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium break-keep">
                        역할이 명확히 분리된 컴포넌트는 버그 수정과 기능 추가가 쉬워집니다.
                    </p>
                </div>

                {/* 2. 재사용성 */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3 text-lg">재사용성</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium break-keep">
                        잘 설계된 패턴은 다른 프로젝트에서도 쉽게 재사용할 수 있습니다.
                    </p>
                </div>

                {/* 3. 테스트 용이성 */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3 text-lg">테스트 용이성</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium break-keep">
                        로직과 UI가 분리되면 단위 테스트 작성이 훨씬 간단해집니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
