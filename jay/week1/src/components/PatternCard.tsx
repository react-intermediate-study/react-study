import React from 'react';

export interface PatternCardProps {
    title: string;
    description: string;
    tags: string[];
    showDemoButton: boolean;
    onDemoClick?: () => void;
    icon: React.ReactNode;
}

export default function PatternCard({
    title,
    description,
    tags,
    showDemoButton,
    onDemoClick,
    icon,
}: PatternCardProps) {
    return (
        <div className="flex flex-col h-full w-full max-w-100 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex-shrink-0">
            <div className="flex flex-col gap-4 h-full">
                {icon}

                <div className="flex flex-col">
                    <h3 className="text-xl font-bold leading-snug text-slate-900 mb-2">
                        {title}
                    </h3>

                    <p className="text-semibold leading-6 text-s text-slate-500">
                        {description}
                    </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {showDemoButton && (
                    <button
                        type="button"
                        onClick={onDemoClick}
                        className="h-12 w-full rounded-xl bg-slate-100 text-base font-semibold text-slate-800"
                    >
                        데모 보기
                    </button>
                )}
            </div>
        </div>
    );
}