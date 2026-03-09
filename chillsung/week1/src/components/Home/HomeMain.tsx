import HomeFooter from "./HomeFooter";
import PatternContainer from "./PatternContainer";


const HomeMain = () => {
    return (
        <main className="flex flex-col w-full">
            <div className="flex flex-col w-full justify-center items-center px-6 py-12">
                <div className="flex flex-col w-full justify-center mb-6 mx-auto max-w-6xl">
                    <h2 className="text-md text-gray-600">패턴 소개</h2>
                </div>
                <PatternContainer />
                <HomeFooter />
            </div>
        </main>
    );
}

export default HomeMain;