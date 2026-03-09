

const HomeHeader = () => {
    return (
        <header className="flex flex-col w-full bg-sky-200 border-b border-gray-400">
            <div className='flex flex-col gap-2 mx-auto px-6 py-12 max-w-6xl'>
                <div className='flex gap-2'>
                    <img src="../../assets/react.svg" alt="logo" className="w-10 h-10" />
                    <p className="text-lg font-medium text-gray-800">PLAYGROUND</p>
                </div>
                <h1 className="text-2xl font-bold ">React 컴포넌트 패턴 플레이그라운드</h1>
                <div>
                    <p className="text-gray-700">실무에서 자주 사용되는 세 가지 핵심 패턴을 직접 체험하고 학습해보세요.</p>
                    <p className="text-gray-700">각 패턴의 장점과 적용 사례를 인터랙티브하게 확인할 수 있습니다.</p>
                </div>
            </div>
        </header>
    );
}

export default HomeHeader;