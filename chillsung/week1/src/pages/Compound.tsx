import ConceptHeader from "../components/shared/ConceptHeader";
import { CompoundHeaderText } from "../constants/Compound/CompoundHeaderText";
import CompoundMain from "../components/Compound/CompoundMain";


export default function CompoundPage() {
    return (
        <div className="flex flex-col w-full h-full">
            <ConceptHeader
                title={CompoundHeaderText.title}
                description={CompoundHeaderText.description}
            />
            <CompoundMain />
        </div>
    );
}