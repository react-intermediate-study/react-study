

export default function HomePage() {
    return (
        <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-gray-100">
            <button
              className="w-20 p-2 rounded-md bg-blue-500 text-white"
              onClick={() => window.location.href = "/login"}>로그아웃</button>
        </div>
    );
}