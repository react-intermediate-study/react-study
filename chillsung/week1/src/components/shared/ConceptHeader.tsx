import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ConceptHeaderProps {
    title: string;
    description: string;
}

const ConceptHeader = ({ title, description }: ConceptHeaderProps) => {
    return (
        <header className="bg-sky-200 border-b border-gray-400">
            <div className="flex flex-col w-full h-50">
                <div className="flex flex-col h-full justify-between gap-4 p-6 mx-auto max-w-4xl">
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeftIcon className="w-5 h-5" />
                        <p className="text-md font-medium text-gray-800">홈으로 돌아가기</p>
                    </Link>
                    <div className="flex flex-col gap-1 mb-4">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="text-lg text-gray-700">{description}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default ConceptHeader;