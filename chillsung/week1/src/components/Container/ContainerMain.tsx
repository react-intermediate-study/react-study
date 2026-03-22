import ContainerExampleSection from "./ContainerExampleSection";
import ContainerIntroSection from "./ContainerIntroSection";
import ContainerPrincipleSection from "./ContainerPrincipleSection";


const ContainerMain = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-5 w-full justify-center items-center px-6 py-6 max-w-6xl mx-auto">
                <ContainerIntroSection />
                <ContainerExampleSection />
                <ContainerPrincipleSection />
            </div>
        </div>
    );
};

export default ContainerMain;
