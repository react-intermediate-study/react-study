import TodoContainer from "./TodoContainer";
import ContainerCode1 from "../../assets/Container_example_code1.png";
import ContainerCode2 from "../../assets/Container_example_code2.png";
import { ContainerExampleText } from "../../constants/Container/HowToContainer";


const ContainerExampleSection = () => {
    return (
        <>
            {/* 구현 예시 */}
            <div className="flex w-full justify-start items-start">
                <h1 className="text-2xl font-bold">구현 예시</h1>
            </div>
            <div className="flex flex-col h-140 justify-start items-center gap-3 w-full bg-gray-600 px-12 py-6 rounded-md">
                <TodoContainer />
            </div>

            {/* 구현 방법 */}
            <div className="flex w-full justify-start items-start">
                <h1 className="text-2xl font-bold">구현 방법</h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-3 w-full px-6 py-6 rounded-md">
                <div className="flex flex-col justify-center items-center gap-1">
                    <img src={ContainerCode1} alt="Todo List" className="h-140 object-contain" />
                    <h1 className="text-md font-bold text-gray-500">TodoContainer.tsx</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <img src={ContainerCode2} alt="Todo List" className="h-140 object-contain" />
                    <h1 className="text-md font-bold text-gray-500">TodoSection.tsx</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full p-6 rounded-md bg-gray-200">
                <p className="text-md text-black">{ContainerExampleText}</p>
            </div>
        </>
    );
};

export default ContainerExampleSection;