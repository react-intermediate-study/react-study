import { useLoginForm } from "../../hooks/useLoginForm";
import {
  mockLogin,
  type MockLoginCredentials,
} from "../../utils/auth/mockLogin";

export default function LoginForm() {
    const { state, changeEmail, changePassword, submit } = useLoginForm(
        async (credentials: MockLoginCredentials) => {
            try {
                await mockLogin(credentials);
                alert("로그인 성공");
                window.location.href = "/";
            } catch (error : any) {
                alert(error.message);
                throw error
            }
        },
    );

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col h-30 gap-1">
        <div className="w-70">
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            className={`w-full p-2 rounded-md border border-gray-300
                ${
                    state.errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                } outline-none`}
            value={state.email}
            onChange={(e) => changeEmail(e.target.value)}
          />
          <p className="p-1 text-red-500 text-xs">{state.errors.email}</p>
        </div>
        <div className="w-70">
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className={`w-full p-2 rounded-md border border-gray-300
                ${
                    state.errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                } outline-none`}
            value={state.password}
            onChange={(e) => changePassword(e.target.value)}
          />
          <p className="p-1 text-red-500 text-xs">{state.errors.password}</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-1">
        <button
            type="submit"
            className="w-full p-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            onClick={submit}
            disabled={state.isSubmitting || !state.isValid}
        >
            {state.isSubmitting ? "로그인 중..." : "로그인"}
        </button>
        {state.errors.general && (
            <p className=" text-red-500 text-sm" role="alert">
              {state.errors.general}
            </p>)}
      </div>
    </form>
  );
}
