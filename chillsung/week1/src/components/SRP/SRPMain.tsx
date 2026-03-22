import SRPIntroSection from "./SRPIntroSection";
import SRPExampleSection from "./SRPExampleSection";
import SRPPrincipleSection from "./SRPPrincipleSection";

const SRPMain = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-10 w-full justify-center items-center px-6 py-6 max-w-6xl mx-auto">
                <SRPIntroSection />
                <SRPExampleSection />
                <SRPPrincipleSection />
            </div>
        </div>
    );
};

export default SRPMain;
