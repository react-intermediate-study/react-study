

interface HowToSRPCardProps {
    text: string;
}

const HowToSRPCard = ({ text }: HowToSRPCardProps) => {
    return (
        <div className="flex justify-center items-center max-w-2xl w-full p-4 border border-gray-300 rounded-lg">
            <p className="text-md text-gray-600">{text}</p>
        </div>
    )
}

export default HowToSRPCard;