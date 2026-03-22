import LoginForm from "./LoginForm";

export default function LoginSection() {
    return (
        <div className="flex flex-col items-center min-w-xl h-120 bg-white gap-4 rounded-md p-6">
            <div className="w-70 flex justify-start">
                <h1 className="text-3xl font-bold mt-20">로그인</h1>
            </div>
            <LoginForm />
        </div>
    );
}