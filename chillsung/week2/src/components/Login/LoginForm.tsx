

export default function LoginForm() {
    const emailErrorMessage = "이메일이 틀렸습니다.";
    const passwordErrorMessage = "비밀번호가 틀렸습니다.";

    return (
        <form className="flex flex-col gap-4">
            <div className="flex flex-col h-30 gap-1">
                <div className="w-60 relative">
                    <input type="text" placeholder="Email" className="w-full p-2 rounded-md border border-gray-300" />
                    <p className="p-1 text-red-500 text-xs">{emailErrorMessage}</p>
                </div>
                <div className="w-60 relative">
                    <input type="password" placeholder="Password" className="w-full p-2 rounded-md border border-gray-300" />
                    <p className="p-1 text-red-500 text-xs">{passwordErrorMessage}</p>
                </div>
            </div>
                <button type="submit" className="w-full p-2 mt-2 rounded-md bg-blue-500 text-white">Login</button>
        </form>
    );
}