import CompoundCode1 from "../../assets/Compound_example_code1.png";
import CompoundCode2 from "../../assets/Compound_example_code2.png";
import CompoundCode3 from "../../assets/Compound_example_code3.png";
import CompoundCode4 from "../../assets/Compound_example_code4.png";
import { ToastMessage } from "../shared/message";



const CompoundExampleSection = () => {
    return (
        <>
            {/* 구현 예시 */}
            <div className="flex w-full justify-start items-start">
                <h1 className="text-2xl font-bold">구현 예시</h1>
            </div>
            <div className="flex flex-col h-fit justify-start items-center gap-6 w-full bg-gray-600 p-12 rounded-md">
                {/* 저장 완료 */}
                <ToastMessage variant="default">
                    <ToastMessage.Header>
                        <ToastMessage.Title>저장 완료</ToastMessage.Title>
                    </ToastMessage.Header>
                    <ToastMessage.Description>
                        변경사항이 성공적으로 저장되었습니다.
                    </ToastMessage.Description>
                    <ToastMessage.Footer>
                        <button
                            className="text-xs text-black bg-white hover:bg-gray-300 transition-all duration-300 px-2 py-1 rounded-md"
                            onClick={() => {
                                alert("되돌리기 버튼을 누르셨군요!");
                            }}
                        >
                        되돌리기
                        </button>
                    </ToastMessage.Footer>
                </ToastMessage>

                {/* 오류가 발생했습니다. */}
                <ToastMessage variant="error">
                    <ToastMessage.Header>
                        <ToastMessage.Title>오류가 발생했습니다.</ToastMessage.Title>
                    </ToastMessage.Header>
                    <ToastMessage.Description>
                        나중에 다시 시도해주세요
                    </ToastMessage.Description>
                </ToastMessage>

                {/* 결제 완료*/}
                <ToastMessage variant="success">
                    <ToastMessage.Header>
                        <ToastMessage.Title>결제 완료</ToastMessage.Title>
                    </ToastMessage.Header>
                </ToastMessage>
            </div>

            {/* 구현 방법 */}
            <div className="flex w-full justify-start items-start">
                <h1 className="text-2xl font-bold">구현 방법</h1>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:justify-between justify-center items-center gap-6 w-full px-6 py-6 rounded-md">
                <div className="flex flex-col justify-center items-center gap-1">
                    <img src={CompoundCode1} alt="CompoundCode1" className="h-100 object-contain" />
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-md font-bold text-gray-500">타입 정의 및 variant 속성 지정</h1>
                        <p className="text-md text-gray-500 ">각 컴포넌트들의 타입 정의와 (필요에 따라) variant 속성을 지정해주었습니다.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <img src={CompoundCode2} alt="CompoundCode2" className="h-100 object-contain" />
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-md font-bold text-gray-500">부모(루트) 컴포넌트 및 자식(서브) 컴포넌트 구현</h1>
                        <p className="text-md text-gray-500 text-center">최상단 컨테이너를 담당하는 부모 컴포넌트와<br />하위 컴포넌트들을 구현해주었습니다.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <img src={CompoundCode3} alt="CompoundCode3" className="h-fit w-120 object-contain" />
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-md font-bold text-gray-500">Compound 패턴으로 합치기</h1>
                        <p className="text-md text-gray-500 text-center">컴포넌트에 서브 컴포넌트를 속성으로 붙여서<br />하나의 “네임스페이스”처럼 사용하게 만들었습니다.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <img src={CompoundCode4} alt="CompoundCode4" className="h-100 object-contain" />
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-md font-bold text-gray-500">실제 사용</h1>
                        <p className="text-md text-gray-500 text-center">위 선언 덕분에 이미지 처럼 자유롭게 컴포넌트를 사용할 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompoundExampleSection;