import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface PatternCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    tags: string[];
    color: string;
    link: string;
}

const PatternCard = ({ title, description, icon: Icon, color, tags, link }: PatternCardProps) => {
    return (
        <div className="flex flex-col w-full h-full gap-4 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${color}`}>
                <Icon className='w-5 h-5' />
            </div>
            <div className="flex flex-col w-full gap-1 px-2">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="flex flex-col w-full gap-3 mt-auto">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-sm text-gray-500 px-2 py-1 rounded-md bg-gray-100">{tag}</span>
                    ))}
                </div>
                <Link to={link} className="w-full text-center rounded-md bg-gray-500 text-white py-2">자세히 보기</Link>
            </div>
        </div>
    );
}

export default PatternCard;