import { PatternList } from "../../constants/home/PatternList";
import PatternCard from "./PatternCard";

const PatternContainer = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6 max-w-6xl mx-auto">
            {PatternList.map((Pattern) => (
                <PatternCard key={Pattern.title} title={Pattern.title} description={Pattern.description} icon={Pattern.icon} color={Pattern.color} tags={Pattern.tags} link={Pattern.link} />
            ))}
        </div>
    );
}

export default PatternContainer;