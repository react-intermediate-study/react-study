import { HowToSRPText } from "../../constants/SRP/HowToSRPText";
import HowToCard from "../shared/HowToCard";

const SRPPrincipleSection = () => {
    return (
        <div className="flex flex-col justify-center items-start gap-3 w-full">
            <h1 className="text-2xl font-bold pb-3">구현 원칙</h1>
            <div className="flex flex-col w-full justify-center items-center gap-2">
                {HowToSRPText.map((item) => (
                    <HowToCard key={item} text={item} />
                ))}
            </div>
        </div>
    );
};

export default SRPPrincipleSection;

