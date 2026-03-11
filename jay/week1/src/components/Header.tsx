interface HeaderProps {
    title: string;
    description: string;
    showBackButton?: boolean;
    badgeLabel?: string;
}

export default function Header({ title, description, showBackButton, badgeLabel }: HeaderProps) {
    return (
        <header className="flex bg-white w-full h-55 items-center px-6 shadow-sm">
            <div className="flex flex-col justify-center w-full max-w-4xl mx-auto p-4">
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
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                {/* whitespace-pre-line 클래스: \n 줄바꿈 인식*/}
                {description && <p className="pl-0.25 font-medium text-gray-500 whitespace-pre-line">{description}</p>}
            </div>
        </header>
    );
}



