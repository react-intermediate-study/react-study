interface CodeBlock {
    label: string;
    code: string;
}

interface CodeCompareContentProps {
    before: CodeBlock;
    after: CodeBlock;
}

const CodeBlock = ({ label, code, isApplied }: CodeBlock & { isApplied: boolean }) => (
    <div className={`flex flex-col rounded-2xl border overflow-hidden ${isApplied ? 'border-emerald-100' : 'border-rose-100'}`}>
        <div className={`px-5 py-3 flex items-center gap-2 ${isApplied ? 'bg-emerald-50/50' : 'bg-rose-50/50'}`}>
            <span className={`font-bold text-xs ${isApplied ? 'text-emerald-600' : 'text-rose-500'}`}>
                {isApplied ? '✓' : '✕'} {label}
            </span>
        </div>
        <div className="bg-slate-50 p-5 overflow-x-auto flex-1">
            <pre className="text-xs text-slate-600 leading-relaxed font-mono whitespace-pre">{code}</pre>
        </div>
    </div>
);

export default function CodeCompareContent({ before, after }: CodeCompareContentProps) {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="grid grid-cols-2 gap-4">
                <CodeBlock {...before} isApplied={false} />
                <CodeBlock {...after} isApplied={true} />
            </div>
        </div>
    );
}