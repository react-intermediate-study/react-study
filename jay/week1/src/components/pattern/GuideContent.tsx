function SRPGuideContent() {
    return (
        <div>SRP 가이드 콘텐츠 내용입니다.</div>
    );
}

function ContainerGuideContent() {
    return (
        <div>Container 가이드 콘텐츠 내용입니다.</div>
    );
}

function CompoundGuideContent() {
    return (
        <div>Compound Component 가이드 콘텐츠 내용입니다.</div>
    );
}

export default function GuideContent({ id }: { id: number }) {
    if (id === 1) return <SRPGuideContent />;
    if (id === 2) return <ContainerGuideContent />;
    if (id === 3) return <CompoundGuideContent />;
    return null;
}

