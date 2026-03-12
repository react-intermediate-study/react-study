interface HeaderProps {
    title: string;
    description: string;
    showBackButton?: boolean;
    badgeLabel?: string;
}

export default function Header({ title, description, showBackButton, badgeLabel }: HeaderProps) {
    return (
        <header className="flex bg-white w-full py-7 items-center px-6 shadow-xs border-b border-gray-100">
            <div className="flex flex-col justify-center w-full max-w-6xl mx-auto p-4">
                {showBackButton && <button>← 돌아가기</button>}
                {badgeLabel && (
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-[#0072F5] text-white rounded-xl font-bold text-sm">
                            {'</>'}
                        </div>
                        <span className="text-sm font-bold text-gray-500 tracking-wider">
                            {badgeLabel}
                        </span>
                    </div>
                )}
                <h1 className="text-3xl font-extrabold mb-4 text-slate-900 tracking-tight">{title}</h1>
                {/* whitespace-pre-line 클래스: \n 줄바꿈 인식*/}
                {description && <p className="font-medium text-slate-500 whitespace-pre-line leading-relaxed text-base">{description}</p>}
            </div>
        </header>
    );
}



