import { SRPInformationText } from "../../constants/SRP/SRPInformationText";
import InformationCard from "../shared/InformationCard";

const ContainerIntroSection = () => {
    return (
        <InformationCard
            title={SRPInformationText.title}
            description={SRPInformationText.description}
        />
    );
};

export default ContainerIntroSection;

