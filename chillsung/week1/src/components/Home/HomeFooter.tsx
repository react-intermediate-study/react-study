import { FooterTextList } from "../../constants/home/FooterText";


const HomeFooter = () => {
    return (
        <div className="flex flex-col w-full justify-center py-12 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">왜 이 패턴들이 중요한가요?</h1>
            <div className="flex flex-col md:flex-row w-full justify-center items-center py-12 gap-4">
                {FooterTextList.map((text) => (
                    <div key={text.title} className="flex flex-col w-full justify-center bg-white border border-gray-200 px-6 py-5 gap-1 rounded-lg">
                        <h3 className="text-lg font-bold">{text.title}</h3>
                        <p className="text-gray-500">{text.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeFooter;