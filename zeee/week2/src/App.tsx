import { useLoginForm } from "./hooks/useLoginForm";

function App() {
  const {
    state,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    closeModal,
  } = useLoginForm();

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <form
          className="rounded-2xl bg-white p-8 shadow-lg"
          noValidate
          onSubmit={handleSubmit}
        >
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
            로그인 화면
          </h1>
          <div className="mb-5">
            <label
              className="block mb-2 mr-4 text-sm font-medium text-gray-700 "
              htmlFor="email"
            >
              이메일 입력
            </label>
            <input
              className={`w-full rounded-lg border px-4 py-3 text-sm outline-none ${
                state.emailError
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
              id="email"
              type="email"
              placeholder="이메일을 입력해주세요."
              value={state.email}
              onChange={handleEmailChange}
            />
            {state.emailError && (
              <p className="mt-2 text-sm text-red-500">{state.emailError}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 mr-4 text-sm font-medium text-gray-700 "
              htmlFor="password"
            >
              비밀번호 입력
            </label>
            <input
              className={`w-full rounded-lg border px-4 py-3 text-sm outline-none ${
                state.passwordError
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
              id="password"
              type="password"
              value={state.password}
              placeholder="비밀번호를 입력해주세요. "
              onChange={handlePasswordChange}
            />
            {state.passwordError && (
              <p className="mt-2 text-sm text-red-500">{state.passwordError}</p>
            )}
          </div>

          <button
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            type="submit"
          >
            제출하기
          </button>
          {(state.loginFail || state.loginSuccess) && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
              <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                    state.loginFail
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  <span className="text-xl font-bold">
                    {state.loginFail ? "!" : "✓"}
                  </span>
                </div>
                <h2 className="text-center text-lg font-semibold text-gray-900">
                  {state.loginFail ? "로그인 실패" : "로그인 완료"}
                </h2>
                <p className="mt-2 mb-3 text-center text-sm text-gray-800">
                  {state.loginFail || state.loginSuccess}
                </p>

                <button
                  onClick={closeModal}
                  className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  확인
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}

export default App;
