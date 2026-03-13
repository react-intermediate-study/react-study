import ConceptHeader from "../components/shared/ConceptHeader";
import { ContainerHeaderText } from "../constants/Container/ContainerHeaderText";
import ContainerMain from "../components/Container/ContainerMain";


export default function ContainerPage() {
    return (
        <div className="flex flex-col w-full h-full">
            <ConceptHeader
                title={ContainerHeaderText.title}
                description={ContainerHeaderText.description}
            />
            <ContainerMain />
        </div>
    );
}