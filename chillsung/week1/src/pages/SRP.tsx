import ConceptHeader from "../components/shared/ConceptHeader";
import { SRPHeaderText } from "../constants/SRP/SRPHeaderText";

export default function SRPPage() {
    return (
        <div className="flex flex-col w-full h-full">
            <ConceptHeader
                title={SRPHeaderText.title}
                description={SRPHeaderText.description}
            />
        </div>
    );
}