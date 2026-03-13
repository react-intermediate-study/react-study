

interface HowToCardProps {
    text: string;
}

const HowToCard = ({ text }: HowToCardProps) => {
    return (
        <div className="flex justify-center items-center max-w-2xl w-full p-4 border border-gray-300 rounded-lg">
            <p className="text-md text-gray-600">{text}</p>
        </div>
    );
};

export default HowToCard;