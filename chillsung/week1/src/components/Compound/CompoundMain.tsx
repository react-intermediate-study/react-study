import CompoundIntroSection from "./CompoundIntroSection";
import CompoundExampleSection from "./CompoundExampleSection";
import CompoundPrincipleSection from "./CompoundPrincipleSection";


const CompoundMain = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-10 w-full justify-center items-center px-6 py-6 max-w-6xl mx-auto">
                <CompoundIntroSection />
                <CompoundExampleSection />
                <CompoundPrincipleSection />
            </div>
        </div>
    );
};

export default CompoundMain;
