import SRPExampleCode from "../../assets/SRP_example_code.png";

const SRPExampleSection = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 w-full">
            <div className="gap-3 w-full h-120">
                <img
                    src={SRPExampleCode}
                    alt="SRP Example Code"
                    className="w-full h-full object-contain"
                />
            </div>
            <p className="text-md text-gray-500">InformationCard.tsx</p>
        </div>
    );
};

export default SRPExampleSection;

