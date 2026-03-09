import HomeHeader from "../components/Home/HomeHeader";
import HomeMain from "../components/Home/HomeMain";


export default function HomePage() {
    return (
        <div className="h-full w-full flex flex-col">
            <HomeHeader />
            <HomeMain />
        </div>
    );
}