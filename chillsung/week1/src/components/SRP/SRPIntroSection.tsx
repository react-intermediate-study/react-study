import { ContainerInformationText } from "../../constants/Container/ContainerInformationText";
import InformationCard from "../shared/InformationCard";

const SRPIntroSection = () => {
    return (
        <InformationCard
            title={ContainerInformationText.title}
            description={ContainerInformationText.description}
        />
    );
};

export default SRPIntroSection;

