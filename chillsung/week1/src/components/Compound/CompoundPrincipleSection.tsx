import { HowToCompound } from "../../constants/Compound/HowToCompound";
import HowToCard from "../shared/HowToCard";

const CompoundPrincipleSection = () => {
    return (
        <div className="flex flex-col justify-center items-start gap-3 w-full">
            <h1 className="text-2xl font-bold pb-3">구현 원칙</h1>
            <div className="flex flex-col w-full justify-center items-center gap-2">
                {HowToCompound.map((item) => (
                    <HowToCard key={item} text={item} />
                ))}
            </div>
        </div>
    );
};

export default CompoundPrincipleSection;

