import { CompoundInformationText } from "../../constants/Compound/CompoundInformationText";
import InformationCard from "../shared/InformationCard";

const CompoundIntroSection = () => {
    return (
        <InformationCard
            title={CompoundInformationText.title}
            description={CompoundInformationText.description}
        />
    );
};

export default CompoundIntroSection;

