import { InfoIcon } from "lucide-react";


interface InformationCardProps {
    title: string;
    description: string;
}

const InformationCard = ({ title, description }: InformationCardProps) => {
    return (
        <div className="flex w-full gap-3 p-5 border border-gray-400 rounded-lg">
                <div className="flex items-center justify-center size-5 pt-2">
                    <InfoIcon className="size-5 text-sky-600" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-md text-gray-500">{description}</p>
            </div>
        </div>
    );
}

export default InformationCard;

